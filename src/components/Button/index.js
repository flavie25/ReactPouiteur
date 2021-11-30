import React from 'react'  
import {Link} from 'react-router-dom'
import styles from './button.module.css'

       
const Button = (props) => {
    return (
        <button className={styles.button} onClick={props.onClick}>{props.button}</button>  
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button