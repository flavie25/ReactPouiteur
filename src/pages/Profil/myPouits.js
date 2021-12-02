import react, { useEffect, useState } from "react";
import { useContext } from "react";
import PouitCard from 'components/PouitCard'
import AppContext from "../../contexts/AppContext"



const MyPouits = () =>{
    const {pouits} = useContext(AppContext)
    const [myPouits, setMyPouits] = useState([])

    useEffect(() => {
        setMyPouits([...pouits].filter(pouit => pouit.myPouit));
    }, [pouits]);
    
    // const TabMyPouit = () => {
    //     const tab = myPouits.map((pouit) => (
    //         <PouitCard {...pouit} />
    //     ))
       
       
    //     if(tab.length === 0){
    //         console.log("pouit")
    //         return <p>Pas de pouits</p>
            
    //     }
    //     else{
    //         return tab
    //     }
        
    // }

    return (
        // <TabMyPouit/>
        <>
        {myPouits.length <= 0 && <div>No like!</div>}
        {myPouits.map((myPouit, key) => {
            return  <PouitCard {...myPouit} />
        })}
        </>
    )
}

export default MyPouits