## Side Effects

# UseEffect occurs in 2 situations
1)when the component is render
2)whenever state is changed


# 1)useEffect executes only after initial rendering of a component
2)UseEffect will execute everytime when state changes, if no second arg

# Effect will execute when state of array is changed

# If second arg is a empty array, then effect function excutes only once



#Example

import React, { useState } from 'react'
import { useEffect } from 'react'
const EffectDemo = () => {

  let [count1,setCounter1] = useState(0);
  let [count2,setCounter2] = useState(0);


  useEffect(()=>
  {
  //  effect
    console.log("use effect excuted")

  },[count1]);


  // COUNTER1
  function handleCounter1Change()
  {
    setCounter1(count1+1);
  }

  // COUNTER2
 function handleCounter2Change()
  {
    setCounter2(count2+1);
  }

  return (
    <div className='container text-center'>
       <h1 className='text-white'>Side Effects Demo</h1>
       <hr></hr>
       <h2>Counter1 :{count1}</h2>
       <button className='btn btn-warning' onClick={handleCounter1Change}>  Change Counter1 state</button>
    
       <hr></hr>
       <h2>Counter2 :{count2}</h2>
       <button className='btn btn-warning' onClick={handleCounter2Change}>  Change Counter2 state</button>

    </div>
  )
}

export default EffectDemo;


# It will execute only when count1 state changes, useEffect changes
