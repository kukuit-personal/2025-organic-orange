'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

type StartResp = { name: string }
type StatusResp = { done: boolean; videoUri?: string | null; raw?: any; error?: any }

export default function DemoVeo3ApiPage() {
  const [prompt, setPrompt] = useState(
    'The cat playing with a ball of yarn in a sunny living room, high quality, realistic'
  )

  const [model, setModel] = useState<'veo-3.1-generate-preview' | 'veo-3.1-fast-generate-preview'>(
    'veo-3.1-fast-generate-preview'
  )

  const [aspectRatio, setAspectRatio] = useState<'16:9' | '9:16'>('16:9')
  const [resolution, setResolution] = useState<'720p' | '1080p'>('720p')

  // ✅ durationSeconds as number
  const [durationSeconds, setDurationSeconds] = useState<number>(8)

  const [negativePrompt, setNegativePrompt] = useState('')

  const [opName, setOpName] = useState<string>('')
  const [status, setStatus] = useState<string>('')
  const [videoUri, setVideoUri] = useState<string>('')
  const [isRunning, setIsRunning] = useState(false)

  const pollTimerRef = useRef<number | null>(null)

  const videoSrc = useMemo(() => {
    if (!videoUri) return ''
    return `/api/veo/download?uri=${encodeURIComponent(videoUri)}`
  }, [videoUri])

  async function start() {
    setVideoUri('')
    setOpName('')
    setStatus('Starting...')
    setIsRunning(true)

    const r = await fetch('/api/veo/start', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        prompt,
        model,
        aspectRatio,
        resolution,
        durationSeconds, // ✅ number
        ...(negativePrompt ? { negativePrompt } : {}),
      }),
    })

    const data = (await r.json()) as any

    if (!r.ok) {
      setIsRunning(false)
      setStatus(`Start failed: ${JSON.stringify(data?.details ?? data)}`)
      return
    }

    const name = (data as StartResp).name
    setOpName(name)
    setStatus('Queued. Polling...')

    // poll mỗi 10s
    pollTimerRef.current = window.setInterval(async () => {
      try {
        const sr = await fetch(`/api/veo/status?name=${encodeURIComponent(name)}`, {
          cache: 'no-store',
        })

        const sdata = (await sr.json()) as StatusResp

        if (!sr.ok) {
          setStatus(`Status failed: ${JSON.stringify(sdata?.error ?? sdata)}`)
          return
        }

        if (!sdata.done) {
          setStatus('Generating... (still running)')
          return
        }

        // done
        if (sdata.videoUri) {
          setVideoUri(sdata.videoUri)
          setStatus('Done ✅')
        } else {
          setStatus(`Done but no videoUri: ${JSON.stringify(sdata.raw)}`)
        }

        setIsRunning(false)
        if (pollTimerRef.current) {
          window.clearInterval(pollTimerRef.current)
          pollTimerRef.current = null
        }
      } catch (e: any) {
        setStatus(`Polling error: ${e?.message ?? 'Unknown'}`)
      }
    }, 10_000)
  }

  function stopPolling() {
    if (pollTimerRef.current) {
      window.clearInterval(pollTimerRef.current)
      pollTimerRef.current = null
    }
    setIsRunning(false)
    setStatus('Stopped.')
  }

  useEffect(() => {
    return () => {
      if (pollTimerRef.current) window.clearInterval(pollTimerRef.current)
    }
  }, [])

  return (
    <div className="mx-auto max-w-3xl p-4">
      <h1 className="text-2xl font-semibold">demo-veo3-api</h1>
      <p className="mt-1 text-sm text-gray-600">
        Text → Veo 3.1 (Gemini API) → operation polling → stream download via server proxy
      </p>

      <div className="mt-4 grid gap-3 rounded-xl border p-4">
        <label className="text-sm font-medium">Prompt</label>
        <textarea
          className="min-h-[120px] w-full rounded-lg border p-3 text-sm"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Describe your video..."
        />

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          <div className="grid gap-1">
            <label className="text-sm font-medium">Model</label>
            <select
              className="rounded-lg border p-2 text-sm"
              value={model}
              onChange={(e) => setModel(e.target.value as any)}
            >
              <option value="veo-3.1-fast-generate-preview">veo-3.1-fast-generate-preview</option>
              <option value="veo-3.1-generate-preview">veo-3.1-generate-preview</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium">Aspect ratio</label>
            <select
              className="rounded-lg border p-2 text-sm"
              value={aspectRatio}
              onChange={(e) => setAspectRatio(e.target.value as any)}
            >
              <option value="16:9">16:9</option>
              <option value="9:16">9:16</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium">Resolution</label>
            <select
              className="rounded-lg border p-2 text-sm"
              value={resolution}
              onChange={(e) => setResolution(e.target.value as any)}
            >
              <option value="720p">720p</option>
              <option value="1080p">1080p</option>
            </select>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium">Duration</label>
            <select
              className="rounded-lg border p-2 text-sm"
              value={durationSeconds}
              onChange={(e) => setDurationSeconds(Number(e.target.value))}
            >
              <option value={4}>4s</option>
              <option value={6}>6s</option>
              <option value={8}>8s</option>
            </select>
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">Negative prompt (optional)</label>
          <input
            className="w-full rounded-lg border p-2 text-sm"
            value={negativePrompt}
            onChange={(e) => setNegativePrompt(e.target.value)}
            placeholder="e.g. cartoon, drawing, low quality"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={start}
            disabled={isRunning}
            className="rounded-lg bg-black px-4 py-2 text-sm text-white disabled:opacity-50"
          >
            Generate
          </button>
          <button
            onClick={stopPolling}
            disabled={!isRunning}
            className="rounded-lg border px-4 py-2 text-sm disabled:opacity-50"
          >
            Stop polling
          </button>
          <div className="text-sm text-gray-600">{status}</div>
        </div>

        {opName ? (
          <div className="rounded-lg bg-gray-50 p-3 text-xs text-gray-700">
            <div className="font-medium">Operation</div>
            <div className="break-all">{opName}</div>
          </div>
        ) : null}

        {videoSrc ? (
          <div className="grid gap-2">
            <video className="w-full rounded-xl border" controls src={videoSrc} />
            <a className="text-sm underline" href={videoSrc} target="_blank" rel="noreferrer">
              Download / Open video
            </a>
          </div>
        ) : null}
      </div>
    </div>
  )
}
