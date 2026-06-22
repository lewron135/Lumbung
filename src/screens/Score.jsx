import { useState, useEffect } from 'react'

const BREAKDOWN = [
  { label: 'Payment Consistency',    score: 98 },
  { label: 'Circle Completion',      score: 100 },
  { label: 'Contribution Regularity', score: 92 },
  { label: 'Network Trust',           score: 85 },
]

function BreakdownRow({ label, score }) {
  const [filled, setFilled] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setFilled(true), 150)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{ marginBottom: '18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '7px' }}>
        <span style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 500,
          color: '#111111',
        }}>{label}</span>
        <span style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '13px',
          color: '#111111',
        }}>{score}</span>
      </div>
      <div style={{
        height: '4px',
        backgroundColor: 'rgba(0,0,0,0.12)',
        borderRadius: '2px',
        overflow: 'hidden',
      }}>
        <div style={{
          height: '100%',
          width: '100%',
          backgroundColor: '#111111',
          borderRadius: '2px',
          transformOrigin: 'left center',
          transform: `scaleX(${filled ? score / 100 : 0})`,
          transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }} />
      </div>
    </div>
  )
}

export default function Score({ navigateTo }) {
  return (
    <div style={{ backgroundColor: '#E8654A', minHeight: '100%', padding: '52px 24px 28px', overflowX: 'hidden' }}>

      {/* Header */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '60px',
        color: '#111111',
        lineHeight: 0.82,
        letterSpacing: '-2px',
        marginBottom: '36px',
      }}>
        YOUR<br />SCORE
      </h1>

      {/* Big score */}
      <div style={{ textAlign: 'center', marginBottom: '28px' }}>
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '108px',
          color: '#111111',
          lineHeight: 0.85,
          letterSpacing: '-5px',
        }}>847</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '4px',
          color: '#111111',
          textTransform: 'uppercase',
          marginTop: '10px',
        }}>EXCELLENT</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 400,
          color: 'rgba(0,0,0,0.45)',
          marginTop: '4px',
        }}>Top 8% of members</p>
      </div>

      {/* 10-segment bar */}
      <div style={{ display: 'flex', gap: '5px', marginBottom: '36px' }}>
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} style={{
            flex: 1,
            height: '8px',
            borderRadius: '2px',
            backgroundColor: i < 8 ? '#111111' : 'rgba(0,0,0,0.14)',
          }} />
        ))}
      </div>

      {/* Breakdown */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.4)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '16px',
        }}>Score Breakdown</p>
        {BREAKDOWN.map((item) => (
          <BreakdownRow key={item.label} {...item} />
        ))}
      </div>

      {/* Unlock card */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => navigateTo(3)}
        onKeyDown={(e) => e.key === 'Enter' && navigateTo(3)}
        style={{
          backgroundColor: '#111111',
          borderRadius: '16px',
          padding: '22px',
          cursor: 'pointer',
        }}
      >
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '2.5px',
          color: '#E8654A',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>✓ UNLOCKED</p>
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '22px',
          color: '#ffffff',
          letterSpacing: '-0.5px',
          marginBottom: '10px',
        }}>Working Capital</p>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '13px',
          fontWeight: 400,
          color: 'rgba(255,255,255,0.55)',
          lineHeight: 1.55,
          marginBottom: '18px',
        }}>
          Score above 700 qualifies you for up to{' '}
          <strong style={{ color: '#ffffff', fontWeight: 600 }}>Rp 2.5M</strong>{' '}
          in working capital.
        </p>
        <button
          onClick={(e) => { e.stopPropagation(); navigateTo(3) }}
          style={{
            padding: '12px 22px',
            borderRadius: '100px',
            border: '1.5px solid #E8654A',
            backgroundColor: 'transparent',
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '14px',
            fontWeight: 600,
            color: '#E8654A',
            cursor: 'pointer',
            letterSpacing: '0.02em',
          }}
        >
          Apply Now →
        </button>
      </div>

      <div style={{ height: '28px' }} />
    </div>
  )
}
