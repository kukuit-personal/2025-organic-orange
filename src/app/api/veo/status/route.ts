import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

const BASE_URL = 'https://generativelanguage.googleapis.com/v1beta'

export async function GET(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 })
    }

    const { searchParams } = new URL(req.url)
    const name = searchParams.get('name')
    if (!name) return NextResponse.json({ error: 'name is required' }, { status: 400 })

    const r = await fetch(`${BASE_URL}/${name}`, {
      headers: { 'x-goog-api-key': apiKey },
    })

    const data = await r.json()
    if (!r.ok) {
      return NextResponse.json({ error: 'Status failed', details: data }, { status: r.status })
    }

    const done = Boolean(data?.done)

    // Theo docs: video uri nằm trong:
    // response.generateVideoResponse.generatedSamples[0].video.uri
    const videoUri =
      data?.response?.generateVideoResponse?.generatedSamples?.[0]?.video?.uri ?? null

    return NextResponse.json({
      done,
      name,
      videoUri,
      raw: data,
    })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 })
  }
}
