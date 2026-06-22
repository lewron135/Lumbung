import { useState } from 'react'

const AMOUNTS = [
  { label: 'Rp 500K',   value: 500000 },
  { label: 'Rp 1 Juta', value: 1000000 },
  { label: 'Rp 2.5 Juta', value: 2500000 },
]

const STEPS = [
  {
    num: '01',
    title: 'Select your amount',
    desc: 'Choose how much working capital you need from your approved limit.',
  },
  {
    num: '02',
    title: 'Revenue-share deduction',
    desc: 'Repayments are automatically deducted from daily sales via QRIS — no manual transfers.',
  },
  {
    num: '03',
    title: 'Full repayment, score grows',
    desc: 'Once repaid in full, your credit score increases, unlocking higher limits over time.',
  },
]

export default function Capital() {
  const [selected, setSelected] = useState(1)
  const [applied, setApplied] = useState(false)

  return (
    <div style={{ backgroundColor: '#F6F1E9', minHeight: '100%', padding: '52px 24px 28px', overflowX: 'hidden' }}>

      {/* Header */}
      <h1 style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: '60px',
        color: '#1A3527',
        lineHeight: 0.82,
        letterSpacing: '-2px',
        marginBottom: '32px',
      }}>
        MODAL<br />KERJA
      </h1>

      {/* Approved limit card */}
      <div style={{
        backgroundColor: '#1A3527',
        borderRadius: '16px',
        padding: '24px',
        marginBottom: '28px',
      }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '2.5px',
          color: 'rgba(245,197,64,0.55)',
          textTransform: 'uppercase',
          marginBottom: '8px',
        }}>YOUR APPROVED LIMIT</p>
        <p style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 800,
          fontSize: '40px',
          color: '#F5C540',
          letterSpacing: '-1.5px',
          lineHeight: 1,
          marginBottom: '18px',
        }}>Rp 2.500.000</p>
        <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
          {[
            { label: 'Rate',   value: '1.5%/mo' },
            { label: 'Repay',  value: 'Revenue share' },
            { label: 'Score',  value: '847 ✓' },
          ].map((stat) => (
            <div key={stat.label}>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                fontWeight: 500,
                color: 'rgba(255,255,255,0.35)',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '2px',
              }}>{stat.label}</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                color: '#ffffff',
              }}>{stat.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ marginBottom: '28px' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.35)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '18px',
        }}>HOW IT WORKS</p>
        {STEPS.map((step) => (
          <div key={step.num} style={{ display: 'flex', gap: '16px', marginBottom: '18px' }}>
            <span style={{
              fontFamily: "'Syne', sans-serif",
              fontWeight: 800,
              fontSize: '13px',
              color: 'rgba(26,53,39,0.35)',
              flexShrink: 0,
              width: '22px',
              paddingTop: '1px',
            }}>{step.num}</span>
            <div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '14px',
                fontWeight: 600,
                color: '#111111',
                marginBottom: '3px',
              }}>{step.title}</p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '13px',
                fontWeight: 400,
                color: 'rgba(0,0,0,0.45)',
                lineHeight: 1.55,
              }}>{step.desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Amount selector */}
      <div style={{ marginBottom: '24px' }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          color: 'rgba(0,0,0,0.35)',
          letterSpacing: '2px',
          textTransform: 'uppercase',
          marginBottom: '12px',
        }}>SELECT AMOUNT</p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {AMOUNTS.map((amt, i) => {
            const isSelected = selected === i
            return (
              <button
                key={i}
                onClick={() => setSelected(i)}
                style={{
                  padding: '14px 6px',
                  borderRadius: '100px',
                  border: `2px solid ${isSelected ? '#1A3527' : 'rgba(0,0,0,0.18)'}`,
                  backgroundColor: isSelected ? '#1A3527' : 'transparent',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: isSelected ? '#F5C540' : 'rgba(0,0,0,0.4)',
                  cursor: 'pointer',
                  transition: 'background-color 160ms ease, border-color 160ms ease, color 160ms ease',
                  letterSpacing: '0.01em',
                }}
              >
                {amt.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Apply / Submitted */}
      {!applied ? (
        <button
          onClick={() => setApplied(true)}
          style={{
            width: '100%',
            padding: '19px',
            borderRadius: '100px',
            border: 'none',
            backgroundColor: '#1A3527',
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '16px',
            color: '#F5C540',
            cursor: 'pointer',
            letterSpacing: '0.06em',
          }}
        >
          APPLY NOW
        </button>
      ) : (
        <div style={{
          backgroundColor: '#1A3527',
          borderRadius: '16px',
          padding: '24px',
          textAlign: 'center',
        }}>
          <p style={{
            fontFamily: "'Syne', sans-serif",
            fontWeight: 800,
            fontSize: '17px',
            color: '#F5C540',
            letterSpacing: '-0.3px',
            marginBottom: '10px',
          }}>✓ APPLICATION SUBMITTED</p>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '13px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.55)',
            lineHeight: 1.6,
          }}>
            Your application for{' '}
            <strong style={{ color: '#ffffff', fontWeight: 600 }}>
              {AMOUNTS[selected].label}
            </strong>{' '}
            has been received. We'll review and disburse within 24 hours.
          </p>
        </div>
      )}

      <div style={{ height: '28px' }} />
    </div>
  )
}
