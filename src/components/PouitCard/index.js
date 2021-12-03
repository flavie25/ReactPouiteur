import React, { useContext } from 'react'
import Button from '../Button'
import like from './../../Assets/like.png'
import comment from './../../Assets/chat.png'
import retweet from './../../Assets/retweet.png'
import share from './../../Assets/share.png'
import bin from './../../Assets/bin.png'
import likefull from './../../Assets/likefull.png'
import styles from './pouitCard.module.css'
import AppContext from './../../contexts/AppContext'

const PouitCard  = (props) => {
    const {likePouit, deletePouit} = useContext(AppContext)
    
    return (
        <div id={"pouit-" + props.id} className={styles.pouitContainer}>
            <div className={styles.pouitTop}>
                <p>{props.pseudo}</p>
                {props.date}
            </div>
            <div className={styles.pouitMiddle}>
                <p>{props.content}</p>
                <div className={props.myPouit ? styles.edit : styles.none}>
                    <Button style={styles.button} onClick={() => deletePouit(props.id)}><img className={styles.pictoLike} src={bin} alt="logo modifier"/></Button>
                </div>
            </div>
            <div className={styles.pouitEnd}>
                <Button style={styles.button} onClick={() => likePouit(props.id)}>{props.like ? <img className={styles.pictoLike} src={likefull} alt="logo coeur plein"/> :  <img className={styles.pictoLike} src={like} alt="logo coeur vide" /> } </Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={comment} alt="logo commentaire"/></Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={retweet} alt="logo repouiter" /></Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={share} alt="logo partager"/></Button>
            </div>
        </div>
    )
}

export default PouitCard
