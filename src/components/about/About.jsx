import React from 'react'
import WindowVirtualize from '../windowVirtualize/WindowVirtualize'
import './about.scss'

const About = ({developer}) => {
  return (
    <div>
      <div id='About'>
      <h1>I am a Simple React Blog made by {developer} </h1>
      </div>
      <div id='optimized'>
      <p>We bring to you Amazing react articles like this. Check Out Blog page</p>
      <div id='list-content'>
        <WindowVirtualize />
      </div>
    </div>
    </div>
  )
}

export default About