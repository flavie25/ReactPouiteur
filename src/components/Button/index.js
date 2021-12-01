import React from 'react'  
import {Link} from 'react-router-dom'
import styles from './button.module.css'

       
const Button = ({onClick, content, children}) => {
    return (
        <button className={styles.button} onClick={onClick}>{content}{children}</button>  
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button