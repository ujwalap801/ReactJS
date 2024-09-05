import React from 'react'
import CustomButton from './CustomButton'
const App = () => {
  const handleButtonClick=()=>
    {
       alert("Button Clicked");
    }
  return (
    <>
<CustomButton label="Click Me" onClick={handleButtonClick}/>
  
    </>
  )
}

export default App
