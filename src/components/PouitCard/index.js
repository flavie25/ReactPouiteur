import React from 'react'
import Button from '../Button'

const PouitCard  = (props) => {
    return (
        <div className = "pouitContainer">
            <div className = "pouitTop">
                <p>{props.pseudo}</p>
                <p>{props.date}</p>
            </div>
            <div className = "pouitMiddle">
                <p>{props.pouit}</p>
            </div>
            <div className = "pouitEnd">
                <Button class="button" onClick="" button="Like"/>
                <Button class="button" onClick="" button="Commentaire"/>
                <Button class="button" onClick="" button="Repouit"/>
                <Button class="button" onClick="" button="Partager"/>
            </div>
        </div>
    )
}

export default PouitCard
