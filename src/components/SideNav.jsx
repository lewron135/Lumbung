const NAV_CONFIG = [
  { label: 'Home',    bg: '#0d1c13', iconColor: '#F5C540', barColor: '#F5C540' },
  { label: 'Circle',  bg: '#c9a22e', iconColor: '#111111', barColor: '#111111' },
  { label: 'Score',   bg: '#b84838', iconColor: '#111111', barColor: '#111111' },
  { label: 'Capital', bg: '#d9d4cc', iconColor: '#111111', barColor: '#1A3527' },
]

function IconHome({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </svg>
  )
}

function IconCircle({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z" />
    </svg>
  )
}

function IconScore({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M5 9.2h3V19H5V9.2zM10.6 5h2.8v14h-2.8V5zM16.2 13h2.8v6h-2.8v-6z" />
    </svg>
  )
}

function IconCapital({ color }) {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill={color}>
      <path d="M20 7h-4V5c0-1.1-.9-2-2-2h-4c-1.1 0-2 .9-2 2v2H4c-1.1 0-2 .9-2 2v11c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm-6-2v2h-4V5h4z" />
    </svg>
  )
}

const ICONS = [IconHome, IconCircle, IconScore, IconCapital]

export default function SideNav({ activeTab, navigateTo, orientation = 'left' }) {
  const cfg = NAV_CONFIG[activeTab]
  const isBottom = orientation === 'bottom'

  return (
    <nav
      style={{
        flexShrink: 0,
        backgroundColor: cfg.bg,
        display: 'flex',
        flexDirection: isBottom ? 'row' : 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: isBottom ? '0' : '4px',
        width: isBottom ? '100%' : '64px',
        height: isBottom ? '60px' : '100%',
        transition: 'background-color 280ms cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {NAV_CONFIG.map((item, i) => {
        const Icon = ICONS[i]
        const isActive = activeTab === i

        const slotStyle = isBottom
          ? { position: 'relative', width: '80px', height: '60px' }
          : { position: 'relative', width: '64px', height: '56px' }

        const barStyle = isBottom
          ? {
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '3px',
              borderRadius: '0 0 2px 2px',
              backgroundColor: cfg.barColor,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 220ms ease',
              pointerEvents: 'none',
            }
          : {
              position: 'absolute',
              left: 0, top: 0, bottom: 0,
              width: '3px',
              borderRadius: '0 2px 2px 0',
              backgroundColor: cfg.barColor,
              opacity: isActive ? 1 : 0,
              transition: 'opacity 220ms ease',
              pointerEvents: 'none',
            }

        return (
          <div key={i} style={slotStyle}>
            <div style={barStyle} />
            <button
              onClick={() => navigateTo(i)}
              aria-label={item.label}
              style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                opacity: isActive ? 1 : 0.3,
                transform: isActive ? 'scale(1.15)' : 'scale(1)',
                transition: 'opacity 220ms ease, transform 220ms ease',
              }}
            >
              <Icon color={cfg.iconColor} />
            </button>
          </div>
        )
      })}
    </nav>
  )
}
