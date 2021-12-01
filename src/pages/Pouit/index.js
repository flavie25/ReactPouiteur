import React, { useContext, useState } from "react"
import PouitCard from "components/PouitCard"
import Button from 'components/Button'
import './pouit.css'
import Textarea from "components/TextArea"
import AppContext from "../../contexts/AppContext"



// FIN DES COMPOSANTS ---------------------------------------------------------------------------------------------------------

const Pouit = () => {
    const { pouits, addPouit } = useContext(AppContext)
    const [pouitContent, setPouitContent] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newPouit = {
            id: Math.floor(Math.random() * 100),
            content: formData.get('textContent'),
            pseudo: 'GrenouilleBoarp',
            date: '18/01 à 18h18',
            like: false
        }
        addPouit(newPouit)
    }
    const onTextContentChange = (e) => {
        setPouitContent(e.target.value)
    }

    const TabPouit = () => {
        const tab = pouits.map((pouit) => (
            <PouitCard {...pouit} />
        ))
        return tab
    }

    return(
        <div>
            <form onSubmit={handleSubmit} id="myForm" name="myForm">
                <Textarea name="textContent" textLabel="Nouveau Pouit" change={onTextContentChange} text={pouitContent} placeholder="Ecrivez votre Pouit..." />
                <input className="inputsend" type="submit" value="Envoyer" />
            </form>


            <TabPouit/>

            <PouitCard pseudo="ManuREACT" date="30/02 à 19h45" content="Où va Messi quand il est blessé ? ...A LA PHARMESSI MDRRRR" />
            <PouitCard pseudo="GrenouilleBoarp" date="18/01 à 18h18" content="Qu'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan." />
            <PouitCard pseudo="GrenouilleBoarp" date="18/01 à 18h18" content="Qu'est-ce qui fait NIOC NIOC ? Un canard qui essaye de parler en verlan." />
            <PouitCard pseudo="Flaviie25" date="27/11 à 10h06" content="Qu'est-ce qui est bleu, blanc, rouge ? Un Schrtoumph qui saigne du nez." />
        </div>

    )
}



export default Pouit