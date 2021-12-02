import React, { useContext, useState } from "react"
import PouitCard from "components/PouitCard"
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
            date: date(),
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
    const date = () => {
        const d = new Date()
        let day = d.getDate()
        let month1 = 1 + d.getMonth()
        let year = d.getFullYear()
        let hours = 1 + d.getUTCHours()
        let minutes = d.getUTCMinutes()
       return (
           <p>{day}/{month1}/{year} à {hours}:{minutes}</p>
       )
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