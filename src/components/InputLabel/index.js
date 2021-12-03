import React from 'react'
import styles from './inputLabel.module.css'

const LblTxt  = (props) => {
    return (
        <div className={styles.labelContainer}>
            <label>{props.textLabel}</label>
            <input value={props.valeur} onChange={props.surchange} placeholder={props.placeholder}></input>
        </div>
    )
}

export default LblTxt
