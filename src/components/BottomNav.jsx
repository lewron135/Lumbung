const NAV_CONFIG = [
  { label: 'Home',    bg: '#0d1c13', iconColor: '#F5C540' },
  { label: 'Circle',  bg: '#c9a22e', iconColor: '#111111' },
  { label: 'Score',   bg: '#b84838', iconColor: '#111111' },
  { label: 'Capital', bg: '#d9d4cc', iconColor: '#111111' },
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

export default function BottomNav({ activeTab, navigateTo }) {
  const cfg = NAV_CONFIG[activeTab]

  return (
    <nav
      style={{
        backgroundColor: cfg.bg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: '10px',
        paddingBottom: 'max(14px, env(safe-area-inset-bottom))',
        transition: 'background-color 280ms cubic-bezier(0.4, 0, 0.2, 1)',
        flexShrink: 0,
      }}
    >
      {NAV_CONFIG.map((item, i) => {
        const Icon = ICONS[i]
        const isActive = activeTab === i
        return (
          <button
            key={i}
            onClick={() => navigateTo(i)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '3px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: '4px 20px',
              opacity: isActive ? 1 : 0.3,
              transform: isActive ? 'scale(1.15)' : 'scale(1)',
              transition: 'opacity 220ms ease, transform 220ms ease',
            }}
          >
            <Icon color={cfg.iconColor} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '10px',
                fontWeight: isActive ? 600 : 400,
                color: cfg.iconColor,
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
              }}
            >
              {item.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
