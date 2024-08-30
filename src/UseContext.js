import React from 'react'
import Compent2 from '/Compent2';

export const UserContext=React.createContext();
const App = () => {
  return (
    <div>
        <center>
            <UserContext.Provider value={"Arpenaboyina Rakesh"}>
            <Compent2/>
            </UserContext.Provider>
           
        </center>
    </div>
  )
}

export default App