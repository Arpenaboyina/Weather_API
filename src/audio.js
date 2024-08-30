import React from 'react'
import music1 from './music1.mp3'

const App = () => {
  return (
    <div>
    <center>
    <h1>song</h1>
        <audio controls>
            <source src={music1} type='audio/ogg'/>

        </audio>
    </center>

    </div>
  )
}

export default App