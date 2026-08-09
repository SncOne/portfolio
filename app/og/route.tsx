import { ImageResponse } from 'next/og'

import { siteConfig } from '@/lib/site'

export const runtime = 'edge'

export function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get('title') ?? `${siteConfig.name} · ${siteConfig.role}`
  const subtitle =
    searchParams.get('subtitle') ??
    'Production Flutter apps with realtime systems, maps, and API-backed product flows.'

  return new ImageResponse(
    (
      <div
        style={{
          fontFamily: 'Geist Sans, Inter, sans-serif',
          background: '#0d1117',
          color: '#e6edf3',
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            maxWidth: '70%',
          }}
        >
          <span
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.5em',
              fontSize: 20,
              color: '#8b949e',
            }}
          >
            Türker Gürel
          </span>
          <h1
            style={{
              fontSize: 68,
              lineHeight: 1.05,
              fontWeight: 600,
              margin: 0,
            }}
          >
            {title}
          </h1>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 24,
            color: '#c9d1d9',
          }}
        >
          <span>{subtitle}</span>
          <span style={{ letterSpacing: '0.32em', textTransform: 'uppercase' }}>
            Mobile product engineering
          </span>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  )
}
