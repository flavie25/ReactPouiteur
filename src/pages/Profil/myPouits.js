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
       
       
        if(tab.length === 0){
            console.log("pouit")
            return <p>Pas de pouits</p>
            
        }
        else{
            return tab
        }
        
    }

    return (
        <TabMyPouit/>
    )
}

export default MyPouits