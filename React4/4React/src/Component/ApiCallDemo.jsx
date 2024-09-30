import React, { useState } from 'react'
import { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css';


const ApiCallDemo = () => {

  let [counter1,setCounter1] = useState(100);
  let[counter2, setCounter2] = useState(200);

  useEffect(()=>{
    console.log("Useffect");

  },[counter1])

  function changeCounter1()
  {
    setCounter1(counter1+1);
  }
  

  function changeCounter2()
  {
    setCounter2(counter2+1);
  }

  return (
    <div>
        <h1 className='text-info display-2'>Side Effects</h1>
        <p className='display-2'>{counter1}</p>
         <button className='btn btn-success' onClick={changeCounter1}>Click me</button>
    
        
         <p className='display-2'>{counter2}</p>
         <button className='btn btn-success' onClick={changeCounter2}>Click me</button>


    </div>
  )
}

export default ApiCallDemo;
