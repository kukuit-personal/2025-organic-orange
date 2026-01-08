import { NextResponse } from 'next/server'

export const runtime = 'nodejs'

export async function GET(req: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY
    if (!apiKey) {
      return NextResponse.json({ error: 'Missing GEMINI_API_KEY' }, { status: 500 })
    }

    const { searchParams } = new URL(req.url)
    const uri = searchParams.get('uri')
    if (!uri) return NextResponse.json({ error: 'uri is required' }, { status: 400 })

    const r = await fetch(uri, {
      headers: { 'x-goog-api-key': apiKey },
      redirect: 'follow',
    })

    if (!r.ok) {
      const txt = await r.text().catch(() => '')
      return NextResponse.json(
        { error: 'Download failed', status: r.status, details: txt },
        { status: r.status }
      )
    }

    const contentType = r.headers.get('content-type') || 'video/mp4'
    const arrayBuffer = await r.arrayBuffer()

    return new NextResponse(arrayBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'no-store',
        // để user bấm download cũng ok
        'Content-Disposition': 'inline; filename="veo.mp4"',
      },
    })
  } catch (e: any) {
    return NextResponse.json({ error: e?.message ?? 'Unknown error' }, { status: 500 })
  }
}
