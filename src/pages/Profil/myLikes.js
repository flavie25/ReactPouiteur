import react, { useEffect, useState } from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"

const MyLikes = () => {
    const { pouits, addPouit } = useContext(AppContext)
    const [likedPouits, setLikedPouit] = useState([]);

    useEffect(() => {
        setLikedPouit([...pouits].filter(pouit => pouit.like));
    }, [pouits]);

    // const TabPouitLike = () => {
    //     let nbPouitLike = 0
    //     const tab = pouits.map((pouit) => {
    //         if (pouit.like)
    //             nbPouitLike = nbPouitLike + 1
    //         return <PouitCard {...pouit} />


    //     }
    //     )

    //     if (nbPouitLike === 0) {
    //         return <p>Vous n'avez encore rien liké</p>
    //     }
    //     else {
    //         return tab
    //     }

    // }

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