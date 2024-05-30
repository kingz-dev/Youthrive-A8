import React from 'react'
import './about.scss'

const About = ({developer}) => {
  return (
    <div>
      <div id='About'>
      <h1>I am a Simple React Blog made by {developer} </h1>
      </div>
    </div>
  )
}

export default About