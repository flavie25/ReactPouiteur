import React from 'react'  
import {Link} from 'react-router-dom'

       
const Button = (props) => {
    return (
        <button className = {props.class} onClick={props.onClick}>{props.button}</button>  
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button