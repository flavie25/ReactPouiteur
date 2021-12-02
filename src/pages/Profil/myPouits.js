import react from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"



const MyPouits = () =>{
    const { pouits, addPouit} = useContext(AppContext)
    
    const TabPouitLike = () => {
        const tab = pouits.map((pouit) => (
            <PouitCard {...pouit} />
        ))
        return tab
    }

    return (
        <TabPouitLike/>
    )
}

export default MyPouits