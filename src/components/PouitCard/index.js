import React, { useContext } from 'react'
import Button from '../Button'
import home from './../../Assets/home.png'
import styles from './pouitCard.module.css'
import AppContext from './../../contexts/AppContext'


const PouitCard  = (props) => {
    const {pouitlike} = useContext(AppContext)
    const pouitliked = (pouitId) =>{
        console.log(pouitId)
        // if(pouits[pouitId].like == false){
        //   setPouits[pouitId].like = true
        //   console.log("liker")
        // }
        // else{
        //   setPouits[pouitId].like = false
        //   console.log("dislkier")
        // }
      }

    return (
        <div id={"pouit-" + props.id} className = "pouitContainer">
            <div className = "pouitTop">
                <p>{props.pseudo}</p>
                <p>{props.date}</p>
            </div>
            <div className = "pouitMiddle">
                <p>{props.content}</p>
            </div>
            <div className = "pouitEnd">
                <Button class="button" onClick={pouitliked(props.id)} button="Like"><img className={styles.pictoLike} src={home}/></Button>
                <Button class="button"  button="Commentaire"/>
                <Button class="button"  button="Repouit"/>
                <Button class="button"  button="Partager"/>
            </div>
        </div>
    )
}

export default PouitCard
