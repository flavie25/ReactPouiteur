import React, { useContext, useState } from "react"
import PouitCard from "components/PouitCard"
import Button from 'components/Button'
import styles from './pouit.module.css'
import Textarea from "components/TextArea"
import AppContext from "../../contexts/AppContext"
import Datetime from 'react-datetime';

const Pouit = () => {
    const { pouits, addPouit, newpseudo } = useContext(AppContext)
    const [pouitContent, setPouitContent] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newPouit = {
            id: Math.floor(Math.random() * 100),
            content: formData.get('textContent'),
            pseudo: newpseudo,
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
                <input className={styles.inputsend} type="submit" value="Envoyer" />
            </form>
            <TabPouit/>
            
        </div>

    )
}



export default Pouit