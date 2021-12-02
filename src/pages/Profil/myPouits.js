import react from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"



const MyPouits = () =>{
    const { myPouits} = useContext(AppContext)
    
    const TabMyPouit = () => {
        const tab = myPouits.map((pouit) => (
            <PouitCard {...pouit} />
        ))
        return tab
    }

    return (
        <TabMyPouit/>
    )
}

export default MyPouits