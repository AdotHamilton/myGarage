import React from 'react'
import "./button.css";
const SimpleButton = (props) => {
  const content = props.children;
  const onClick = props.onClick;
  return (
    <button className='simpleButton' onClick={onClick}>
        <p>{content}</p>
    </button>
  )
}

export default SimpleButton