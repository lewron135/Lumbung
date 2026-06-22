import { useState, useEffect } from 'react'

const MEMBERS = [
  { name: 'Ratih S.',  month: "Apr '26", status: 'done',    initials: 'RS', avatarBg: '#1A3527', avatarFg: '#F5C540' },
  { name: 'Budi P.',   month: "May '26", status: 'done',    initials: 'BP', avatarBg: '#E8654A', avatarFg: '#ffffff' },
  { name: 'Siti N.',   month: "Jun '26", status: 'you',     initials: 'SN', avatarBg: '#111111', avatarFg: '#ffffff' },
  { name: 'Dewi K.',   month: "Jul '26", status: 'waiting', initials: 'DK', avatarBg: '#3d7a5e', avatarFg: '#ffffff' },
  { name: 'Hendra W.', month: "Aug '26", status: 'waiting', initials: 'HW', avatarBg: '#7B4F2E', avatarFg: '#ffffff' },
  { name: 'Rina M.',   month: "Sep '26", status: 'waiting', initials: 'RM', avatarBg: '#4A2D7B', avatarFg: '#ffffff' },
]

const BADGE = {
  done:    { bg: 'rgba(22,101,52,0.12)', color: '#166534', label: '✓ Done' },
  you:     { bg: '#111111',              color: '#F5C540', label: 'YOU' },
  waiting: { bg: 'rgba(0,0,0,0.08)',     color: 'rgba(0,0,0,0.35)', label: 'Waiting' },
}

function StatusBadge({ status }) {
  const b = BADGE[status]
  return (
    <span style={{
      backgroundColor: b.bg,
      color: b.color,
      padding: '4px 10px',
      borderRadius: '100px',
      fontSize: '11px',
      fontWeight: 600,
      fontFamily: "'DM Sans', sans-serif",
      letterSpacing: '0.04em',
      whiteSpace: 'nowrap',
      flexShrink: 0,
    }}>
      {b.label}
    </span>
  )
}

export default function Circle() {
  const [showDrawer, setShowDrawer] = useState(false)
  const [showToast, setShowToast] = useState(false)

  // Auto-dismiss toast after 2s
  useEffect(() => {
    if (!showToast) return
    const t = setTimeout(() => setShowToast(false), 2000)
    return () => clearTimeout(t)
  }, [showToast])

  const handleConfirm = () => {
    setShowDrawer(false)
    // Wait for drawer to finish sliding down (280ms), then show toast
    setTimeout(() => setShowToast(true), 320)
  }

  return (
    <div style={{
      backgroundColor: '#F5C540',
      minHeight: '100%',
      padding: '52px 24px 28px',
      overflowX: 'hidden',
      position: 'relative',
    }}>

      {/* Header */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '60px',
        color: '#111111',
        lineHeight: 0.82,
        letterSpacing: '-2px',
        marginBottom: '32px',
      }}>
        MY<br />CIRCLE
      </h1>

      {/* Stats strip */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.07)',
        borderRadius: '14px',
        padding: '18px 16px',
        marginBottom: '28px',
      }}>
        {[
          { label: 'Pool/month', value: 'Rp 900K' },
          { label: 'Members',    value: '6' },
          { label: 'Next payout', value: "Sep '26" },
        ].map((stat) => (
          <div key={stat.label} style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '17px',
              color: '#111111',
              lineHeight: 1,
              marginBottom: '3px',
            }}>{stat.value}</p>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '10px',
              fontWeight: 500,
              color: 'rgba(0,0,0,0.45)',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
            }}>{stat.label}</p>
          </div>
        ))}
      </div>

      {/* Member list */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', marginBottom: '28px' }}>
        {MEMBERS.map((m) => (
          <div
            key={m.name}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '11px 12px',
              backgroundColor: m.status === 'you' ? 'rgba(0,0,0,0.07)' : 'transparent',
              borderRadius: '12px',
            }}
          >
            <div style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              backgroundColor: m.avatarBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 600,
                color: m.avatarFg,
                letterSpacing: '0.02em',
              }}>{m.initials}</span>
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '15px',
                fontWeight: m.status === 'you' ? 600 : 400,
                color: '#111111',
                marginBottom: '1px',
              }}>{m.name}</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '12px',
                fontWeight: 400,
                color: 'rgba(0,0,0,0.45)',
              }}>{m.month}</p>
            </div>

            <StatusBadge status={m.status} />
          </div>
        ))}
      </div>

      {/* Action pills */}
      <div style={{ display: 'flex', gap: '10px' }}>
        <button
          onClick={() => setShowDrawer(true)}
          style={{
            flex: 1,
            padding: '16px',
            borderRadius: '100px',
            border: 'none',
            backgroundColor: '#111111',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#F5C540',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Contribute
        </button>
        <button style={{
          flex: 1,
          padding: '14px',
          borderRadius: '100px',
          border: '2px solid #111111',
          backgroundColor: 'transparent',
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '15px',
          fontWeight: 600,
          color: '#111111',
          cursor: 'pointer',
          letterSpacing: '0.02em',
        }}>
          History
        </button>
      </div>

      <div style={{ height: '28px' }} />

      {/* ── Success toast ── */}
      {showToast && (
        <div style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          backgroundColor: '#1A3527',
          color: '#F5C540',
          padding: '14px 20px',
          borderRadius: '100px',
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: '14px',
          textAlign: 'center',
          zIndex: 100,
          animation: 'toastIn 200ms ease-out both',
          pointerEvents: 'none',
        }}>
          Contribution recorded ✓
        </div>
      )}

      {/* ── Contribute drawer ── */}

      {/* Backdrop — always mounted, opacity toggled */}
      <div
        onClick={() => setShowDrawer(false)}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.35)',
          opacity: showDrawer ? 1 : 0,
          transition: 'opacity 280ms ease',
          pointerEvents: showDrawer ? 'auto' : 'none',
          zIndex: 40,
        }}
      />

      {/* Drawer panel — always mounted, translateY toggled */}
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#ffffff',
          borderRadius: '20px 20px 0 0',
          padding: '28px 24px 32px',
          transform: showDrawer ? 'translateY(0)' : 'translateY(100%)',
          transition: 'transform 280ms cubic-bezier(0.4, 0, 0.2, 1)',
          zIndex: 50,
        }}
      >
        {/* Top row: title + X */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '20px',
            color: '#111111',
            letterSpacing: '-0.5px',
          }}>
            Contribute this month
          </p>
          <button
            onClick={() => setShowDrawer(false)}
            style={{
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              border: '1.5px solid rgba(0,0,0,0.15)',
              backgroundColor: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '16px',
              color: 'rgba(0,0,0,0.5)',
              flexShrink: 0,
            }}
          >
            ×
          </button>
        </div>

        {/* Amount */}
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '40px',
          color: '#111111',
          letterSpacing: '-1.5px',
          lineHeight: 1,
          marginBottom: '28px',
        }}>
          Rp 150.000
        </p>

        {/* Confirm pill */}
        <button
          onClick={handleConfirm}
          style={{
            width: '100%',
            padding: '17px',
            borderRadius: '100px',
            border: 'none',
            backgroundColor: '#111111',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '15px',
            fontWeight: 600,
            color: '#F5C540',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Confirm Contribution
        </button>
      </div>
    </div>
  )
}
