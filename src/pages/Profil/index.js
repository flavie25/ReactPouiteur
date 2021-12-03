import React, { useContext, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import clsx from 'clsx'
import styles from './profil.module.css'
import Button from 'components/Button'
import LblTxt from 'components/InputLabel'
import Textarea from 'components/TextArea'
import MyPouits from './myPouits'
import MyLikes from './myLikes'
import user from './../../Assets/user.png'


const Profil = () =>{
    const {pseudo, setPseudo, newpseudo, setNewPseudo, description, setDesc, newdescription, setNewDesc} = useContext(AppContext)
    const [deployProfil, setDeployProfil] = useState(false)
    const [deployMyPouit, setDeployMyPouit] = useState(true)
    
    const onChangePseudo = (event) => {
        const newPseudo = event.target.value
        setPseudo(newPseudo)
    }

    const onChangeDesc = (event) => {
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
                    <img className={styles.imgUser} src={user} alt="logo de profil"/>
                </div>
                <h1>{newpseudo}</h1>
                <p>{newdescription}</p>
                <Button style={styles.button} onClick={profilModify} button="Modifier le profil"/>    
            </div> 
            <div className={clsx(styles.NotDeploy, {[styles.deploy]: deployProfil})}>
                <div className={styles.formWrap}>
                    <LblTxt textLabel="Pseudo"  surchange={onChangePseudo} placeholder="Entrez votre pseudo..."/>
                    <Button style={styles.button} onClick={pseudoModify} button="Modifier le pseudo"/>
                </div>
                <div className={styles.formWrap}>
                    <Textarea textLabel="Description" change={onChangeDesc} placeholder="Ecrivez votre description..."></Textarea>
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