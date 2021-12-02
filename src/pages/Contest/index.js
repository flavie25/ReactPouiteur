import React, { useContext } from "react";
import AppContext from '../../contexts/AppContext';
import PouitCard from 'components/PouitCard'

const Contest = () =>{

    const {pouitsContest} = useContext(AppContext)

    return (
        <div>
            {pouitsContest.map((pouit) => (
            <PouitCard {...pouit} />
        ))}
        </div>
    )
}

export default Contest