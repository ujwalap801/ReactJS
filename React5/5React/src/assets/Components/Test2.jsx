import React from 'react'
import { useState } from 'react'

const Test2 = (props) => { //{count:100, handleCount:F}
    console.log(props);
    let [username,setUsername] = useState('mastercoding');


    function handleUsernameChange()
    {
     setUsername('full-stack-mastery')
    }

  return (
    <div className='bg-secondary p-5 mt-5'>

      <div className="display-2">Child</div>

      <p className="display-4">Data received from parent :{props.count}</p>
      <button className="btn btn-light" onClick={props.handleCount}>Change  Parent State</button>
      
      <p className='lead fs-2'>Username :{username}</p>
      <button className="btn btn-warning" onClick={handleUsernameChange}>Change Username</button>
    
    </div>
  )
}

export default Test2
