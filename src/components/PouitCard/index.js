import React, { useContext } from 'react'
import Button from '../Button'
import home from './../../Assets/home.png'
import like from './../../Assets/like.png'
import comment from './../../Assets/chat.png'
import retweet from './../../Assets/retweet.png'
import share from './../../Assets/share.png'
import styles from './pouitCard.module.css'
import AppContext from './../../contexts/AppContext'

const PouitCard  = (props) => {
    const {likePouit} = useContext(AppContext)

    console.log(props.like)

    return (
        <div id={"pouit-" + props.id} className = "pouitContainer">
            <div className = "pouitTop">
                <p>{props.pseudo}</p>
                <p>{props.date}</p>
            </div>
            <div className = "pouitMiddle">
                <p>{props.content}</p>
                {props.like && 'liked'}
            </div>
            <div className = "pouitEnd">
                <Button class="button" onClick={() => likePouit(props.id)}><img className={styles.pictoLike} src={like}/></Button>
                <Button class="button" onClick={() => ''}><img className={styles.pictoLike} src={comment}/></Button>
                <Button class="button" onClick={() => ''}><img className={styles.pictoLike} src={retweet}/></Button>
                <Button class="button" onClick={() => ''}><img className={styles.pictoLike} src={share}/></Button>
            </div>
        </div>
    )
}

export default PouitCard
