import { createRoot } from 'react-dom/client'
import { Suspense, useState } from 'react'
import './styles.css'
import { App } from './App'

function Overlay() {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', width: '100%', height: '100%' }}>
      <a href="#" style={{ position: 'absolute', top: 40, left: 90, fontSize: '13px' }}>
        Feng
      </a>
      <div style={{ position: 'absolute', top: 40, right: 40, fontSize: '13px' }}>10/21/2021</div>
    </div>
  )
}

function Loading() {
  const [isShow, loading] = useState(true)

  window.addEventListener('load', () => loading(false))
  
  return (
    <div id="loading" className={isShow ? 'loading isShow' : 'loading'}>
      <div className="loading_name">
        JUN FENG<span className="termination">A</span>
      </div>
      <span className="loading_bar"></span>
    </div>
  )
}

window.onload = () => {
  const main = document.querySelector('#loading')?.nextElementSibling
  main.classList.add('finish')
}

createRoot(document.getElementById('root')).render(
  <>
    <Loading/>
    <Suspense fallback={null}>
      <App/>
    </Suspense>
    <Overlay />
    {/* <Logo style={{ position: 'absolute', top: 40, left: 40, width: 30 }} /> */}
  </>
)
