import React from 'react'
import user from './../../Assets/user.png'
import styles from './profil.module.css'
import profil from './index'


const ProfilEditing = () =>{
    const [pseudo, setPseudo] = React.useState('Pseudo')
    const [newpseudo, setNewPseudo] = React.useState('Pseudo')
    const [description, setDesc] = React.useState('Description')
    const [newdescription, setNewDesc] = React.useState('Description')
    
    const lorsDuChangementPseudo = (event) => {
        const newPseudo = event.target.value
        setPseudo(newPseudo)
    }

    const lorsDuChangementDesc = (event) => {
        const newdescription = event.target.value
        setDesc(newdescription)
    }

    const pseudoModify = () => {
        setNewPseudo(pseudo)  
    }

    const descModify = () => {
        setNewDesc(description)    
    }

    const profilModify = () =>{
        
    }

    return (
        <div>
            <div className={styles.profilInfo}>
                <div className={styles.imgProfil}>
                    <img className={styles.imgUser} src={user} alt="photo de profil"/>
                </div>
                <h1>{newpseudo}</h1>
                <p>{newdescription}</p>
                <Button onClick={profilModify} text="Modifier le profil"/>    
            </div> 
            <div className={styles.form}>
                <div className={styles.formWrap}>
                    <LblTxt textLabel="Pseudo" valeur={pseudo} surchange={lorsDuChangementPseudo}/>
                    <Button onClick={pseudoModify} text="Modifier le pseudo"/>
                </div>
                <div className={styles.formWrap}>
                    <Textarea textLabel="Description" change={lorsDuChangementDesc}></Textarea>
                    <Button onClick={descModify} text="Modifier la description"/>
                </div>
            </div>
        </div>      
    )
}

export default ProfilEditing