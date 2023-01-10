import { createRoot } from 'react-dom/client'
import { Suspense } from 'react'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="#" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        Jun Feng
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>9/3/2022</div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={null}>
      <App />
    </Suspense>
    <Overlay />
    {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
  </>
)
