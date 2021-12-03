import React, { useContext} from 'react'
import AppContext from '../../contexts/AppContext'
import AddPouit from 'components/AddPouit'
import ShowPouits from 'components/ShowPouits'

const Pouit = () => {
    const { pouits } = useContext(AppContext)
   
    return(
        <div>
            <AddPouit/>
            <ShowPouits pouits={pouits}/>    
        </div>

    )
}

export default Pouit