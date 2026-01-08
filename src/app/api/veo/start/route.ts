import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta'

export async function POST(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 })
    }

    const body = await req.json()
    const {
      prompt,
      model = 'veo-3.1-generate-preview',
      aspectRatio = '16:9',
      resolution = '720p',
      durationSeconds = 8,
      negativePrompt,
      personGeneration,
    } = body ?? {}

    if (!prompt || typeof prompt !== 'string') {
      return NextResponse.json({ error: 'prompt is required' }, { status: 400 })
    }

    // ✅ Parse + validate durationSeconds to number
    const durationNum =
      typeof durationSeconds === 'number'
        ? durationSeconds
        : Number.parseInt(String(durationSeconds), 10)

    if (!Number.isFinite(durationNum) || durationNum <= 0) {
      return NextResponse.json(
        { error: 'durationSeconds must be a positive number' },
        { status: 400 }
      )
    }

    const payload: any = {
      instances: [{ prompt }],
      parameters: {
        aspectRatio,
        resolution,
        durationSeconds: durationNum, // ✅ number
      },
    }

    if (negativePrompt) payload.parameters.negativePrompt = negativePrompt
    if (personGeneration) payload.parameters.personGeneration = personGeneration

    const r = await fetch(`${BASE_URL}/models/${model}:predictLongRunning`, {
      method: 'POST',
      headers: {
        'x-goog-api-key': apiKey,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })

    const data = await r.json()

    if (!r.ok) {
      return NextResponse.json({ error: 'Start failed', details: data }, { status: r.status })
    }

    // data.name = operation name (dùng để poll)
    return NextResponse.json({ name: data.name, raw: data })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 })
  }
}
