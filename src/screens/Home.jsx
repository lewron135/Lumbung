import { useState, useEffect } from 'react'

const R = 80
const CIRC = 2 * Math.PI * R
const PROGRESS = 3 / 6
const TARGET_OFFSET = CIRC * (1 - PROGRESS)

const s = {
  eyebrow: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    color: '#F5C540',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  title: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '50px',
    color: '#F5C540',
    lineHeight: 0.85,
    letterSpacing: '-2px',
  },
  greeting: {
    fontFamily: "'Syne', sans-serif",
    fontSize: '22px',
    fontWeight: 800,
    color: '#ffffff',
    marginTop: '28px',
    letterSpacing: '-0.5px',
  },
  balanceLabel: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: '11px',
    fontWeight: 500,
    color: 'rgba(255,255,255,0.45)',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '4px',
  },
  balance: {
    fontFamily: "'Syne', sans-serif",
    fontWeight: 800,
    fontSize: '44px',
    color: '#ffffff',
    letterSpacing: '-1px',
    lineHeight: 1,
  },
}

export default function Home({ navigateTo, walletConnected, setWalletConnected }) {
  const [ringReady, setRingReady] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [phase, setPhase] = useState('connecting') // 'connecting' | 'success'

  // Ring entrance
  useEffect(() => {
    const t = setTimeout(() => setRingReady(true), 80)
    return () => clearTimeout(t)
  }, [])

  // connecting → success after 1500ms
  useEffect(() => {
    if (!showModal || phase !== 'connecting') return
    const t = setTimeout(() => setPhase('success'), 1500)
    return () => clearTimeout(t)
  }, [showModal, phase])

  // success → auto-close after 1000ms
  useEffect(() => {
    if (phase !== 'success') return
    const t = setTimeout(() => {
      setShowModal(false)
      setPhase('connecting') // reset for future opens
      setWalletConnected(true)
    }, 1000)
    return () => clearTimeout(t)
  }, [phase, setWalletConnected])

  const openModal = () => {
    if (walletConnected) return
    setPhase('connecting')
    setShowModal(true)
  }

  return (
    <div style={{
      backgroundColor: '#1A3527',
      minHeight: '100%',
      padding: '52px 24px 28px',
      overflowX: 'hidden',
      position: 'relative',
    }}>

      {/* Row 1: eyebrow label + Connect Wallet button */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <p style={s.eyebrow}>LUMBUNG.FINANCE</p>

        <button
          onClick={openModal}
          style={{
            flexShrink: 0,
            padding: '7px 14px',
            borderRadius: '100px',
            border: '1.5px solid #F5C540',
            backgroundColor: walletConnected ? '#F5C540' : 'transparent',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '12px',
            fontWeight: 600,
            color: walletConnected ? '#1A3527' : '#F5C540',
            cursor: walletConnected ? 'default' : 'pointer',
            whiteSpace: 'nowrap',
            letterSpacing: '0.02em',
          }}
        >
          {walletConnected ? 'Connected ✓' : 'Connect Wallet'}
        </button>
      </div>

      {/* Row 2: LUMBUNG heading — full width, no flex sharing */}
      <h1 style={{ ...s.title, display: 'block', marginTop: '8px' }}>LUMBUNG</h1>

      {/* Row 3: Greeting */}
      <p style={s.greeting}>Halo, Bu Siti 👋</p>

      {/* SVG progress ring */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '32px' }}>
        <svg width="200" height="200" viewBox="0 0 200 200" aria-label="Cycle 3 of 6 progress ring">
          <circle cx="100" cy="100" r={R} fill="none" stroke="#2d5c42" strokeWidth="12" />
          <circle
            cx="100" cy="100" r={R}
            fill="none"
            stroke="#F5C540"
            strokeWidth="12"
            strokeDasharray={CIRC}
            strokeDashoffset={ringReady ? TARGET_OFFSET : CIRC}
            strokeLinecap="round"
            transform="rotate(-90 100 100)"
            style={{ transition: 'stroke-dashoffset 1.1s cubic-bezier(0.4, 0, 0.2, 1)' }}
          />
          <text x="100" y="90" textAnchor="middle" fill="#F5C540"
            fontSize="36" fontFamily="Syne" fontWeight="800" letterSpacing="-1">
            3/6
          </text>
          <text x="100" y="112" textAnchor="middle" fill="rgba(255,255,255,0.5)"
            fontSize="11" fontFamily="DM Sans" fontWeight="500" letterSpacing="2">
            CYCLE
          </text>
        </svg>
        <p style={{
          marginTop: '10px',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '12px',
          fontWeight: 500,
          color: 'rgba(255,255,255,0.55)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
        }}>
          Pasar Minggu A
        </p>
      </div>

      {/* Balance */}
      <div style={{ marginTop: '28px' }}>
        <p style={s.balanceLabel}>Kontribusi Saya</p>
        <p style={s.balance}>Rp 450.000</p>
      </div>

      {/* Score teaser card */}
      <button
        onClick={() => navigateTo(2)}
        style={{
          marginTop: '20px',
          width: '100%',
          backgroundColor: '#F5C540',
          border: 'none',
          borderRadius: '14px',
          padding: '16px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          textAlign: 'left',
        }}
      >
        <div>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '10px',
            fontWeight: 600,
            color: 'rgba(17,17,17,0.5)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginBottom: '3px',
          }}>
            Credit Score
          </p>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '26px',
            color: '#111111',
            lineHeight: 1,
            letterSpacing: '-0.5px',
          }}>
            847 · Excellent
          </p>
        </div>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '22px',
          color: '#111111',
          marginLeft: '12px',
        }}>→</span>
      </button>

      {/* CTA pills */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '20px' }}>
        <button
          onClick={() => navigateTo(1)}
          style={{
            width: '100%',
            padding: '17px',
            borderRadius: '100px',
            border: 'none',
            backgroundColor: '#F5C540',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#111111',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          View My Circle
        </button>
        <button
          onClick={() => navigateTo(3)}
          style={{
            width: '100%',
            padding: '15px',
            borderRadius: '100px',
            border: '2px solid #F5C540',
            backgroundColor: 'transparent',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#F5C540',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Apply for Capital
        </button>
      </div>

      <div style={{ height: '28px' }} />

      {/* ── Wallet modal ── */}
      {showModal && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.65)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 50,
          }}
        >
          <div
            style={{
              backgroundColor: '#0e1c14',
              border: '1px solid rgba(245,197,64,0.2)',
              borderRadius: '20px',
              padding: '36px 32px',
              textAlign: 'center',
              width: '260px',
              animation: 'modalIn 200ms ease-out both',
            }}
          >
            {phase === 'connecting' ? (
              <>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '15px',
                  fontWeight: 500,
                  color: 'rgba(255,255,255,0.85)',
                  marginBottom: '6px',
                }}>
                  Connecting to Freighter
                </p>
                <span style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#F5C540',
                  animation: 'ellipsisFade 1s ease infinite',
                  display: 'inline-block',
                }}>
                  ...
                </span>
              </>
            ) : (
              <>
                <p style={{
                  fontFamily: "'Syne', sans-serif",
                  fontWeight: 800,
                  fontSize: '20px',
                  color: '#F5C540',
                  marginBottom: '10px',
                }}>
                  Connected ✓
                </p>
                <p style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: '13px',
                  fontWeight: 400,
                  color: 'rgba(245,197,64,0.55)',
                  letterSpacing: '0.05em',
                }}>
                  GBXZ...4F2K
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
