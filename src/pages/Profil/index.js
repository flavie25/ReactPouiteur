import React from 'react'
import user from './../../Assets/user.png'
import styles from './profil.module.css'
import clsx from 'clsx'
import Button from 'components/Button'
import Textarea from 'components/TextArea'
import PouitCard from 'components/PouitCard'


const LblTxt  = (props) => {
    return (
        <div className={styles.formItem}>
            <label>{props.textLabel}</label>
            <input value={props.valeur} onChange={props.surchange}></input>
        </div>
    )
}

const Profil = () =>{
    const [pseudo, setPseudo] = React.useState('Pseudo')
    const [newpseudo, setNewPseudo] = React.useState('Pseudo')
    const [description, setDesc] = React.useState('Description')
    const [newdescription, setNewDesc] = React.useState('Description')
    const [deploy, setDeploy] = React.useState(false)
    
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
        setDeploy(!deploy)
    }

    return (
        <div>
            <div className={styles.profilInfo}>
                <div className={styles.imgProfil}>
                    <img className={styles.imgUser} src={user} alt="photo de profil"/>
                </div>
                <h1>{newpseudo}</h1>
                <p>{newdescription}</p>
                <Button onClick={profilModify} button="Modifier le profil"/>    
            </div> 
            <div className={clsx(styles.formNotDeploy, {[styles.form]: deploy})}>
                <div className={styles.formWrap}>
                    <LblTxt textLabel="Pseudo" valeur={pseudo} surchange={lorsDuChangementPseudo}/>
                    <Button onClick={pseudoModify} button="Modifier le pseudo"/>
                </div>
                <div className={styles.formWrap}>
                    <Textarea textLabel="Description" change={lorsDuChangementDesc}></Textarea>
                    <Button onClick={descModify} button="Modifier la description"/>
                </div>
            </div>
            <div className={styles.onglets}>
                <h2>Mes pouits</h2>
                <PouitCard pseudo="GrenouilleBoarp" date="18/01 à 18h18" pouit="deded"/>
                <h2>Mes Likes</h2>
            </div>
        </div>      
    )
}

export default Profil