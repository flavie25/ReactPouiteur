import { useEffect, useState } from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"



const MyPouits = () =>{
    const {pouits} = useContext(AppContext)
    const [myPouits, setMyPouits] = useState([])

    useEffect(() => {
        setMyPouits([...pouits].filter(pouit => pouit.myPouit));
    }, [pouits]);
    

    return (
        <>
        {myPouits.length <= 0 && <div>No like!</div>}
        {myPouits.map((myPouit, key) => {
            return  <PouitCard {...myPouit} />
        })}
        </>
    )
}

export default MyPouits