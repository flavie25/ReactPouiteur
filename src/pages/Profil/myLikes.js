import { useEffect, useState } from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"

const MyLikes = () => {
    const { pouits } = useContext(AppContext)
    const [likedPouits, setLikedPouit] = useState([]);

    useEffect(() => {
        setLikedPouit([...pouits].filter(pouit => pouit.like));
    }, [pouits]);

    return (
        <>
            {likedPouits.length <= 0 && <div>No like!</div>}
            {likedPouits.map((likePouit, key) => {
                return  <PouitCard {...likePouit} />
            })}
        </>
    )
}

export default MyLikes