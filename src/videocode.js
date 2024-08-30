import React from 'react'
import video2 from './video2.mp4'

const App = () => {
  return (
    <div>
        <center>
         <video width="320" height="250" controls>
          <source src={video2} type="video/mp4" />
         </video>
        </center>
    </div>
  )
}

export default App