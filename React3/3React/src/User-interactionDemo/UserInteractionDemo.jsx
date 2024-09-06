import React from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
const UserInteractionDemo = () => {

    //event handling function
    function handleClick(){
         console.log("Click event occured");
    }

    function handleAnotherEvent(x)
    {
        console.log("Another event occured and x is", x);
    }
    return (
      <div className='text-center'>
        <h2 className='display-3'>User Interaction demo component</h2>
        <button className='btn btn-success' onClick={handleClick}>Click</button>
       <button className='btn btn-danger' onClick={()=>handleAnotherEvent(120)}>Danger</button>
      </div>
    );
  };
  
  export default UserInteractionDemo;