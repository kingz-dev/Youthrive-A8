import React from 'react'
import WindowVirtualize from '../windowVirtualize/WindowVirtualize'
import './optimization.scss'

const Optimization = () => {
  return (
    <div id='optimized'>
      <h2>Optimized</h2>
      <div id='list-content'>
        <WindowVirtualize />
      </div>
    </div>
  )
}

export default Optimization