import React, { useContext, useState } from "react"
import styles from './addPouit.module.css'
import Textarea from "components/TextArea"
import AppContext from "../../contexts/AppContext"

const AddPouit = () => {
    const {addPouit, newpseudo } = useContext(AppContext)
    const [pouitContent, setPouitContent] = useState('')
    
    const handleSubmit = (e) => {
        e.preventDefault()

        const formData = new FormData(e.target)
        const newPouit = {
            id: Math.floor(Math.random() * 100),
            content: formData.get('textContent'),
            pseudo: newpseudo,
            date: date(),
            like: false,
            myPouit: true
        }
        setPouitContent('')
        addPouit(newPouit)
    }
    const onTextContentChange = (e) => {
        setPouitContent(e.target.value)
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
            
        </div>

    )
}



export default AddPouit