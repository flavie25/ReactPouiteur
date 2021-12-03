import React from 'react'  
      
const Button = ({onClick, button, children, style}) => {
    return (
        <button className={style} onClick={onClick}>{button}{children}</button>  
    )
}

export default Button