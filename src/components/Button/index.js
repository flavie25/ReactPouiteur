import React from 'react'  


       
const Button = ({onClick, button, children, style}) => {
    return (
        <button className={style} onClick={onClick}>{button}{children}</button>  
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button