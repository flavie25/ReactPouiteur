import React, { useContext } from 'react'
import user from './../../Assets/user.png'
import styles from './profil.module.css'
import clsx from 'clsx'
import Button from 'components/Button'
import Textarea from 'components/TextArea'
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"


const LblTxt  = (props) => {
    return (
        <div className={styles.formItem}>
            <label>{props.textLabel}</label>
            <input value={props.valeur} onChange={props.surchange} placeholder={props.placeholder}></input>
        </div>
    )
}

const Profil = () =>{
    const { pouits, addPouit} = useContext(AppContext)
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

    const TabPouitLike = () => {
        const tab = pouits.map((pouit) => 
        {if(pouit.like)
            return <PouitCard {...pouit} />
        })
        return tab
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
            <div className={clsx(styles.formNotDeploy, {[styles.form]: deploy})}>
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
                <Button style={styles.buttonLink} onClick={profilModify} button="Mes Pouits"/> 
                <h2>Mes pouits</h2>
                <TabPouitLike/>
                <h2>Mes Likes</h2>
            </div>
        </div>      
    )
}

export default Profil