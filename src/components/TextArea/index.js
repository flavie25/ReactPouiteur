import React from "react"
import style from "./textarea.module.css"


const Textarea  = (props) => {
    return (
        <div>
            <label>{props.textLabel}</label>
            <textarea className={style.textarea} value={props.text} onChange={props.change}></textarea>
        </div>
    )
}

export default Textarea