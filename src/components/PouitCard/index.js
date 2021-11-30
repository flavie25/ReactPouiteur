import React from 'react'
import Button from '../Button'
import home from './../../Assets/home.png'
import styles from './pouitCard.module.css'


const PouitCard  = (props) => {
    const [liked, setLiked] = React.useState(false)

    // const addPouitLike = () =>{

    // }

    const like = () =>{
        if(liked){
            // addPouitLike()
            setLiked(!liked)
            console.log(liked)
        }
        else{
            setLiked(!liked)
        }   
    }

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
                <Button class="button" onClick={like} button="Like"><img className={styles.pictoLike} src={home}/></Button>
                <Button class="button" onClick="" button="Commentaire"/>
                <Button class="button" onClick="" button="Repouit"/>
                <Button class="button" onClick="" button="Partager"/>
            </div>
        </div>
    )
}

export default PouitCard
