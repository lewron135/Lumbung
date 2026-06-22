import { useState } from 'react'
import Home from './screens/Home'
import Circle from './screens/Circle'
import Score from './screens/Score'
import Capital from './screens/Capital'
import SideNav from './components/SideNav'

const SCREENS = [Home, Circle, Score, Capital]

export default function App() {
  const [activeTab, setActiveTab] = useState(0)
  const [prevTab, setPrevTab] = useState(null)
  const [walletConnected, setWalletConnected] = useState(false)

  const navigateTo = (tab) => {
    if (tab === activeTab) return
    setPrevTab(activeTab)
    setActiveTab(tab)
  }

  const direction =
    prevTab === null       ? 'none'
    : activeTab > prevTab  ? 'right'
    : 'left'

  const animClass =
    direction === 'right' ? 'screen-enter-right'
    : direction === 'left' ? 'screen-enter-left'
    : ''

  const Screen = SCREENS[activeTab]

  return (
    <div className="app-shell">
      <div className="screen-column">
        <div className="screen-wrapper">
          <div key={activeTab} className={`screen ${animClass}`}>
            <Screen
              navigateTo={navigateTo}
              walletConnected={walletConnected}
              setWalletConnected={setWalletConnected}
            />
          </div>
        </div>
        <SideNav activeTab={activeTab} navigateTo={navigateTo} orientation="bottom" />
      </div>
    </div>
  )
}
