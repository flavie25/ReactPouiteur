import React, { useContext } from 'react'
import user from './../../Assets/user.png'
import styles from './profil.module.css'
import clsx from 'clsx'
import Button from 'components/Button'
import Textarea from 'components/TextArea'
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"
import MyPouits from './myPouits'
import MyLikes from './myLikes'

const LblTxt  = (props) => {
    return (
        <div className={styles.formItem}>
            <label>{props.textLabel}</label>
            <input value={props.valeur} onChange={props.surchange} placeholder={props.placeholder}></input>
        </div>
    )
}

const Profil = () =>{
    const {pseudo, setPseudo, newpseudo, setNewPseudo, description, setDesc, newdescription, setNewDesc} = useContext(AppContext)
    const [deployProfil, setDeployProfil] = React.useState(false)
    const [deployMyPouit, setDeployMyPouit] = React.useState(true)
    
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
        setDeployProfil(!deployProfil)
    }

    const openMyPouits = () =>{
        setDeployMyPouit(true)
    }

    const openMyLikes = () =>{
        setDeployMyPouit(false)
    }


    return (
        <div>
            <div className={styles.profilInfo}>
                <div className={styles.imgProfil}>
                    <img className={styles.imgUser} src={user} alt="photo de profil"/>
                </div>
                <h1>{newpseudo}</h1>
                <p>{newdescription}</p>
                <Button style={styles.button} onClick={profilModify} button="Modifier le profil"/>    
            </div> 
            <div className={clsx(styles.NotDeploy, {[styles.deploy]: deployProfil})}>
                <div className={styles.formWrap}>
                    <LblTxt textLabel="Pseudo"  surchange={lorsDuChangementPseudo} placeholder="Entrez votre pseudo..."/>
                    <Button style={styles.button} onClick={pseudoModify} button="Modifier le pseudo"/>
                </div>
                <div className={styles.formWrap}>
                    <Textarea textLabel="Description" change={lorsDuChangementDesc} placeholder="Ecrivez votre description..."></Textarea>
                    <Button  style={styles.button} onClick={descModify} button="Modifier la description"/>
                </div>
            </div>
            <div className={styles.onglets}>
                <div className={styles.ongletsButton}>
                    <Button style={styles.buttonLink} onClick={openMyPouits} button="Mes Pouits"/>
                    <Button style={styles.buttonLink} onClick={openMyLikes} button="Mes Likes"/>
                </div>
                <div className={styles.ongletContainer}>
                    <div className={clsx(styles.NotDeploy, {[styles.deploy]: deployMyPouit})}>
                        <MyPouits />
                    </div> 
                </div>

                <div className={styles.ongletContainer}>
                    <div className={clsx(styles.NotDeploy, {[styles.deploy]: !deployMyPouit})}>
                        <MyLikes />
                    </div> 
                </div>
                
            </div>
        </div>      
    )
}

export default Profil