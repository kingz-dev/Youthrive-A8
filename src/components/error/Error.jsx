import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div align='center'>
      Oops! Looks like you mistyped the Url <Link to='/'>Home</Link>
    </div>
  )
}

export default Error