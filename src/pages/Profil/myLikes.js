import { useEffect, useState, useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import style from './profil.module.css'
import ShowPouits from 'components/ShowPouits'

const MyLikes = () => {
    const {pouits, pouitsContest} = useContext(AppContext)
    const [likedPouits, setLikedPouit] = useState([])
    const [likedPouitsContest, setLikedPouitContest] = useState([])

    useEffect(() => {
        setLikedPouit([...pouits].filter(pouit => pouit.like));
    }, [pouits]);

    useEffect(() => {
        setLikedPouitContest([...pouitsContest].filter(pouitContest => pouitContest.like));
    }, [pouitsContest]);

    return (
        <>
            {likedPouits.length <= 0 &&  likedPouitsContest.length <= 0  ? <div className={style.message}>Vous n'avez rien liké</div> : <div></div>}
            <ShowPouits pouits={likedPouits}/>
            <ShowPouits pouits={likedPouitsContest}/>
        </>
    )
}

export default MyLikes