import React from 'react'  
import {Link} from 'react-router-dom'
import styles from './button.module.css'

       
const Button = ({onClick, button, children}) => {
    return (
        <button className={styles.button} onClick={onClick}>{button}{children}</button>  
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button