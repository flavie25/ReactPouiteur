import { useEffect, useState, useContext } from 'react'
import AppContext from '../../contexts/AppContext'
import style from './profil.module.css'
import AddPouit from 'components/AddPouit'
import ShowPouits from 'components/ShowPouits'

const MyPouits = () =>{
    const {pouits} = useContext(AppContext)
    const [myPouits, setMyPouits] = useState([])
    

    useEffect(() => {
        setMyPouits([...pouits].filter(pouit => pouit.myPouit));
    }, [pouits]);
    

    return (
        <>
        <AddPouit/>
        {myPouits.length <= 0 && <div className={style.message}>Vous n'avez encore rien posté</div>}
        <ShowPouits pouits={myPouits}/>
        </>
    )
}

export default MyPouits