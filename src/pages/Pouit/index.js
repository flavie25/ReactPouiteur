import React, { useState } from "react"
import PouitCard from "components/PouitCard"
import Button from 'components/Button'
import './pouit.css'
import Textarea from "../../components/TextArea"


// FIN DES COMPOSANTS ---------------------------------------------------------------------------------------------------------

const Pouit = () => {
    const [pouits, setPouits] = useState([])
    const [pouitContent, setPouitContent] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newPouit = {
            content: formData.get('textContent')
        }

        // reset
        setPouits([newPouit, ...pouits])
    }
    const onTextContentChange = (e) => {
        setPouitContent(e.target.value)
    }

    console.log( pouits);

    return(
        <div>
            <form onSubmit={handleSubmit} id="myForm" name="myForm">
                <Textarea onChange={onTextContentChange} value={pouitContent} />
                <input className="inputsend" type="submit" value="Envoyer" />
            </form>

            {pouits.map((pouit) => (
                <PouitCard pseudo="GrenouilleBoarp" date="18/01 à 18h18" pouit={pouit.content} />
            ))}

            <PouitCard pseudo="ManuREACT" date="30/02 à 19h45" pouit="Où va Messi quand il est blessé ? ...A LA PHARMESSI MDRRRR" />
            <PouitCard pseudo="GrenouilleBoarp" date="18/01 à 18h18" pouit="Qu'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan." />
            <PouitCard pseudo="Flaviie25" date="27/11 à 10h06" pouit="Qu'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez." />
        </div>

    )
}



export default Pouit