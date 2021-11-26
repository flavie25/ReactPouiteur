import React from "react"
import './pouit.css'

const Bouton = (props) => {
    return (
        <button className = {props.class} onClick={props.function}>{props.button}</button>  
    )
}

const WritePouit  = (props) => {
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
                <Bouton class="button" function="" button="Like"/>
                <Bouton class="button" function="" button="Commentaire"/>
                <Bouton class="button" function="" button="Repouit"/>
                <Bouton class="button" function="" button="Partager"/>
            </div>
        </div>
    )
}

// FIN DES COMPOSANTS ---------------------------------------------------------------------------------------------------------

const Pouit = () =>{
    return(
        <div>
            <textarea></textarea>
            <Bouton class="button" function="" button="Envoyer"/>
            <WritePouit pseudo="GrenouilleBoarp" date="18/01 à 18h18" pouit="Qu'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan." />
            <WritePouit pseudo="Flaviie25" date="27/11 à 10h06" pouit="Qu'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez." />
        </div>

    )
}



export default Pouit