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
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #151d2b 0%, #1E293B 60%, #2b3544 100%)',
          padding: '60px 80px',
          position: 'relative',
        }}
      >
        {/* Top-left accent dot */}
        <div
          style={{
            position: 'absolute',
            top: '44px',
            left: '64px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#D4A843',
          }}
        />
        {/* Bottom-right accent dot */}
        <div
          style={{
            position: 'absolute',
            bottom: '44px',
            right: '64px',
            width: '7px',
            height: '7px',
            borderRadius: '50%',
            background: '#D4A843',
          }}
        />

        {/* Logo or text fallback */}
        {logoSrc ? (
          <img
            src={logoSrc}
            width={430}
            height={145}
            style={{ objectFit: 'contain', marginBottom: '40px' }}
          />
        ) : (
          <div
            style={{
              fontSize: '52px',
              fontWeight: 700,
              color: '#ffffff',
              marginBottom: '40px',
              letterSpacing: '-0.02em',
            }}
          >
            Simply Synced LLC
          </div>
        )}

        {/* Gold divider */}
        <div
          style={{
            width: '90px',
            height: '3px',
            background: 'linear-gradient(90deg, #C49A3C 0%, #D4A843 50%, #edc978 100%)',
            borderRadius: '999px',
            marginBottom: '30px',
          }}
        />

        {/* Service tagline */}
        <div
          style={{
            fontSize: '27px',
            color: '#b9c3d3',
            textAlign: 'center',
            letterSpacing: '0.07em',
            textTransform: 'uppercase',
            marginBottom: '14px',
          }}
        >
          IT Consulting &amp; Managed Services
        </div>

        {/* Location */}
        <div
          style={{
            fontSize: '19px',
            color: '#647590',
            textAlign: 'center',
            letterSpacing: '0.02em',
          }}
        >
          Serving Lower Bucks County, Pennsylvania
        </div>
      </div>
    ),
    { ...size },
  )
}
