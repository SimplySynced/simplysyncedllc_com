import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const runtime = 'nodejs'
export const alt = 'Simply Synced LLC | IT Consulting & Managed Services in Lower Bucks, PA'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  let logoSrc: string | null = null
  try {
    const logoData = readFileSync(
      join(process.cwd(), 'public/images/simply_synced_logo_whitetext.png'),
    )
    logoSrc = `data:image/png;base64,${logoData.toString('base64')}`
  } catch {
    // Logo unavailable — render text-only fallback
  }

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(160deg, #0d1520 0%, #1a2744 50%, #0d1520 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient gold glow — top left */}
        <div
          style={{
            position: 'absolute',
            top: '-100px',
            left: '-100px',
            width: '520px',
            height: '520px',
            background: 'radial-gradient(circle, rgba(212,168,67,0.20) 0%, transparent 65%)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />
        {/* Ambient blue glow — bottom right */}
        <div
          style={{
            position: 'absolute',
            bottom: '-80px',
            right: '-80px',
            width: '420px',
            height: '420px',
            background: 'radial-gradient(circle, rgba(80,130,220,0.12) 0%, transparent 65%)',
            borderRadius: '50%',
            display: 'flex',
          }}
        />

        {/* Upper area — logo centered */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px 40px 10px',
          }}
        >
          {logoSrc ? (
            <img
              src={logoSrc}
              width={980}
              height={330}
              style={{ objectFit: 'contain' }}
            />
          ) : (
            <div
              style={{
                fontSize: '80px',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                display: 'flex',
              }}
            >
              Simply Synced LLC
            </div>
          )}
        </div>

        {/* Gold accent line */}
        <div
          style={{
            height: '4px',
            background: 'linear-gradient(90deg, transparent 0%, #C49A3C 15%, #D4A843 50%, #C49A3C 85%, transparent 100%)',
            display: 'flex',
          }}
        />

        {/* Bottom strip */}
        <div
          style={{
            background: 'rgba(0,0,0,0.60)',
            padding: '26px 60px',
            display: 'flex',
            flexDirection: 'column',
            gap: '10px',
          }}
        >
          <div
            style={{
              fontSize: '64px',
              fontWeight: 800,
              color: '#ffffff',
              letterSpacing: '-0.02em',
              display: 'flex',
            }}
          >
            Simply Synced LLC
          </div>
          <div
            style={{
              fontSize: '28px',
              color: '#D4A843',
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              display: 'flex',
            }}
          >
            IT Consulting  •  Managed Services  •  Lower Bucks, PA
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
