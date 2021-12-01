import React from "react"
import style from "./textarea.module.css"


const Textarea  = (props) => {
    return (
        <div className={style.textareaContainer}>
            <label>{props.textLabel}</label>
            <textarea name={props.name} className={style.textarea} value={props.text} onChange={props.change} placeholder={props.placeholder}></textarea>
        </div>
    )
}

export default Textarea