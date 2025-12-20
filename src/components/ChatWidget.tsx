'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MessageCircle, X, SendHorizonal } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion' // ✅ thêm

type ChatMessage = {
  role: 'user' | 'assistant'
  content: string
}

const ASK_TAG = '[ASK_CONTACT_INFO]'

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)

  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: 'assistant',
      content:
        'Hello 👋 I am Ainka Bot. Are you looking for consultation about a website, landing page, or business automation?',
    },
  ])
  const [input, setInput] = useState('')
  const [isSending, setIsSending] = useState(false)

  const [showLeadForm, setShowLeadForm] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [note, setNote] = useState('')

  const messagesEndRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (hasInteracted) return
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)
    return () => clearTimeout(timer)
  }, [hasInteracted])

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, showLeadForm])

  const toggleOpen = () => {
    setIsOpen((prev) => !prev)
    setHasInteracted(true)
  }

  const handleSend = async () => {
    if (!input.trim() || isSending) return

    const userMsg: ChatMessage = { role: 'user', content: input.trim() }
    const newMessages = [...messages, userMsg]

    setMessages(newMessages)
    setInput('')
    setIsSending(true)

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: newMessages }),
      })

      const data = await res.json()

      if (data.error) {
        setMessages((prev) => [...prev, { role: 'assistant', content: data.error as string }])
      } else {
        const rawReply = String(data.reply ?? '')
        const shouldAskContact = rawReply.includes(ASK_TAG)
        const cleanedReply = rawReply.replace(ASK_TAG, '').trim()

        setMessages((prev) => [...prev, { role: 'assistant', content: cleanedReply }])

        if (shouldAskContact) {
          setShowLeadForm(true)
        }
      }
    } catch (error) {
      console.error(error)
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Connection error, please try sending again 🙏',
        },
      ])
    } finally {
      setIsSending(false)
    }
  }

  const handleSubmitInput = (e: React.FormEvent) => {
    e.preventDefault()
    handleSend()
  }

  const handleSubmitLead = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Lead info:', { name, phone, note })

    alert('Thank you! The Ainka team will contact you as soon as possible ❤️')

    setName('')
    setPhone('')
    setNote('')
  }

  return (
    <>
      {/* Nút chat tròn */}
      <button
        onClick={toggleOpen}
        className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-xl transition hover:scale-105 hover:bg-blue-500 focus:outline-none"
        aria-label="Open support chat"
      >
        <MessageCircle className="h-7 w-7" />
      </button>

      {/* Chat window + animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="ainka-chat"
            initial={{ opacity: 0, y: 40, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 260, damping: 22 }}
            className="fixed bottom-20 right-4 z-50 flex w-80 max-w-[90vw] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between bg-gradient-to-r from-blue-600 to-cyan-500 px-3 py-2 text-white">
              <div className="flex items-center gap-2">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-white/10">
                  <Image
                    src="/images/ainka-bot.png"
                    alt="Ainka Bot"
                    width={40}
                    height={40}
                    className="h-10 w-10 object-cover"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold">Ainka Bot</span>
                  <span className="text-[11px] text-blue-100">Online - ready to assist</span>
                </div>
              </div>
              <button
                onClick={toggleOpen}
                className="rounded-full p-1 hover:bg-white/10"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Chat content + form + input */}
            <div className="flex max-h-96 flex-col bg-slate-50">
              <div className="ainka-chat-scroll flex-1 space-y-2 overflow-y-auto px-3 py-3 text-sm">
                {messages.map((msg, idx) => {
                  const isUser = msg.role === 'user'
                  return (
                    <div key={idx} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                      {!isUser && (
                        <div className="mr-2 mt-1 h-7 w-7 overflow-hidden rounded-full bg-blue-500/10">
                          <Image
                            src="/images/ainka-bot.png"
                            alt="Ainka Bot"
                            width={28}
                            height={28}
                            className="h-7 w-7 object-cover"
                          />
                        </div>
                      )}
                      <div
                        className={`max-w-[75%] rounded-2xl px-3 py-2 shadow-sm ${
                          isUser
                            ? 'rounded-br-sm bg-blue-600 text-white'
                            : 'rounded-tl-sm bg-white text-slate-900'
                        }`}
                      >
                        <p className="whitespace-pre-line">{msg.content}</p>
                      </div>
                    </div>
                  )
                })}

                {isSending && (
                  <div className="flex items-center gap-2 text-xs text-slate-400">
                    <span className="h-2 w-2 animate-ping rounded-full bg-blue-500" />
                    Ainka Bot is typing...
                  </div>
                )}

                {showLeadForm && (
                  <form
                    onSubmit={handleSubmitLead}
                    className="mt-1 space-y-2 rounded-xl border border-slate-200 bg-white/95 px-3 py-3 text-xs shadow-sm"
                  >
                    <p className="text-[11px] text-slate-600">
                      To help the Ainka team support you better, could you please share your{' '}
                      <b>name</b> and <b>phone number</b>? 📞
                      <br />
                      If it is not convenient now, you can still continue chatting below.
                    </p>

                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">Your name</label>
                      <input
                        className="h-8 w-full rounded-lg border border-slate-300 bg-white px-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-inner outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                        placeholder="E.g. John"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">Phone number</label>
                      <input
                        className="h-8 w-full rounded-lg border border-slate-300 bg-white px-2 text-sm text-slate-900 placeholder:text-slate-400 shadow-inner outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                        placeholder="E.g. 09xx xxx xxx"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                      />
                    </div>

                    <div className="flex flex-col gap-1">
                      <label className="font-medium text-slate-700">
                        What would you like to consult about? (optional)
                      </label>
                      <textarea
                        className="min-h-[50px] w-full rounded-lg border border-slate-300 bg-white px-2 py-1 text-sm text-slate-900 placeholder:text-slate-400 shadow-inner outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                        placeholder="E.g. I want to build a website + landing page for ads"
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>

                    <button
                      type="submit"
                      className="mt-1 inline-flex w-full items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-blue-500 active:scale-[0.98]"
                    >
                      Send information to Ainka
                    </button>

                    <p className="text-[10px] text-slate-400">
                      By submitting, you agree that Ainka may contact you via the phone number you
                      provide.
                    </p>
                  </form>
                )}

                <div ref={messagesEndRef} />
              </div>

              <form
                onSubmit={handleSubmitInput}
                className="flex items-center gap-2 border-t border-slate-200 bg-white px-2 py-2"
              >
                <input
                  className="h-9 flex-1 rounded-full border border-slate-300 bg-white px-3 text-sm text-slate-900 placeholder:text-slate-400 shadow-inner outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-300"
                  placeholder="Type your question..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                />
                <button
                  type="submit"
                  disabled={isSending || !input.trim()}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:bg-slate-300"
                  aria-label="Send message"
                >
                  <SendHorizonal className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
