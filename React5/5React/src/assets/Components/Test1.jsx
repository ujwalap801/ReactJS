import React from 'react'
import Test2 from './Test2'
import { useState } from 'react';

const Test1 = () => {

    let [count,setCount] = useState(100);


    // Onclick Event
    function handleCount(){
        setCount(count+1);
    }

  return (
    <div className='bg-info p-5'>

      <h1 className='display-2'> Parent</h1>
       <p className='lead fs-2'>Counter:{count}</p>
       <button className="btn btn-warning" onClick={handleCount}>+</button>
      
      
      {/* Nest Test2 */}
      <Test2 count={count}  handleCount={handleCount}/>
    </div>
  )
}

export default Test1
