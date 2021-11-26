import React from 'react'
import user from './../../Assets/user.png'
import styles from './profil.module.css'
import clsx from 'clsx'

const LblTxt  = (props) => {
    return (
        <div className={styles.formItem}>
            <label>{props.textLabel}</label>
            <input value={props.valeur} onChange={props.surchange}></input>
        </div>
    )
}
const Textarea  = (props) => {
    return (
        <div className={styles.formItem}>
            <label>{props.textLabel}</label>
            <textarea value={props.text} onChange={props.change}></textarea>
        </div>
    )
}
const Button  = (props) => {
    return (
        <button className={styles.button} onClick={props.function}>{props.text}</button>
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
                <Button onClick={profilModify} text="Modifier le profil"/>    
            </div> 
            <div className={clsx(styles.formNotDeploy, {[styles.form]: deploy})}>
                <div className={styles.formWrap}>
                    <LblTxt textLabel="Pseudo" valeur={pseudo} surchange={lorsDuChangementPseudo}/>
                    <Button onClick={pseudoModify} text="Modifier le pseudo"/>
                </div>
                <div className={styles.formWrap}>
                    <Textarea textLabel="Description" change={lorsDuChangementDesc}></Textarea>
                    <Button onClick={descModify} text="Modifier la description"/>
                </div>
            </div>
            <h1>{newpseudo}</h1>
                <p>{newdescription}</p>
        </div>      
    )
}

export default Profil