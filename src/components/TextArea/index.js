import React from "react"


const Textarea  = (props) => {
    return (
        <div >
            <label>{props.textLabel}</label>
            <textarea value={props.text} onChange={props.change}></textarea>
        </div>
    )
}

export default Textarea