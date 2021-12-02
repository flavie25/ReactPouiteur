import React, { useContext } from 'react'
import Button from '../Button'
import home from './../../Assets/home.png'
import like from './../../Assets/like.png'
import comment from './../../Assets/chat.png'
import retweet from './../../Assets/retweet.png'
import share from './../../Assets/share.png'
import edit from './../../Assets/edit.png'
import likefull from './../../Assets/likefull.png'
import styles from './pouitCard.module.css'
import AppContext from './../../contexts/AppContext'

const PouitCard  = (props) => {
    const {likePouit} = useContext(AppContext)

    console.log(props.like)

    return (
        <div id={"pouit-" + props.id} className={styles.pouitContainer}>
            <div className={styles.pouitTop}>
                <p>{props.pseudo}</p>
                {props.date}
            </div>
            <div className={styles.pouitMiddle}>
                <p>{props.content}</p>
                <div className={styles.edit}>
                    <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={edit}/></Button>
                </div>
            </div>
            <div className={styles.pouitEnd}>
                <Button style={styles.button} onClick={() => likePouit(props.id)}>{props.like ? <img className={styles.pictoLike} src={likefull} /> :  <img className={styles.pictoLike} src={like} /> } </Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={comment}/></Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={retweet}/></Button>
                <Button style={styles.button} onClick={() => ''}><img className={styles.pictoLike} src={share}/></Button>
            </div>
        </div>
    )
}

export default PouitCard
