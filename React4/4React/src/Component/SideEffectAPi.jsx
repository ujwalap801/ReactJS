import React, { useEffect, useState } from 'react'

const SideEffectAPi = () => {

    let [users,setUsers] = useState([]);
    useEffect(()=>
    {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res=>res.json())
            .then(usersList=>setUsers(usersList)
        )
    },[])
  return (


    <div>
      <h1>SIde Effects</h1>
    </div>
  )
}

export default SideEffectAPi
