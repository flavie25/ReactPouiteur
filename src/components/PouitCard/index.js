import React, { useContext } from 'react'
import Button from '../Button'
import home from './../../Assets/home.png'
import styles from './pouitCard.module.css'
import AppContext from './../../contexts/AppContext'

const PouitCard  = (props) => {
    const {likePouit} = useContext(AppContext)

    console.log(props.like)

    return (
        <div id={"pouit-" + props.id} className = "pouitContainer">
            <div className = "pouitTop">
                <p>{props.pseudo}</p>
                <p>{props.date}</p>
            </div>
            <div className = "pouitMiddle">
                <p>{props.content}</p>
                {props.like && 'liked'}
            </div>
            <div className = "pouitEnd">
                <Button class="button" onClick={() => likePouit(props.id)} button="Like"><img className={styles.pictoLike} src={home}/></Button>
                <Button class="button"  button="Commentaire"/>
                <Button class="button"  button="Repouit"/>
                <Button class="button"  button="Partager"/>
            </div>
        </div>
    )
}

export default PouitCard
