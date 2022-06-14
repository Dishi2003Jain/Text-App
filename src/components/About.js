import React from 'react'

function About(props) {
  return (
    <div>
        <h3 style = {{color: props.mode ==='dark'?'white':'black'}}>This is about page</h3>
    </div>
  )
}

export default About