import React from 'react'

const CustomButton = (props) => {
  return (
 <button 
 onClick={props.onClick}>
    {props.label}
 </button>
  );
}

export default CustomButton
