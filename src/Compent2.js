import React from 'react'
import {UserContext} from './UseContext.js'
const Compent2 = () => {
  return (
    <div>
        <UserContext.Consumer>
            {value =><div>{value}</div>}
        </UserContext.Consumer>
    </div>
  )
}

export default Compent2