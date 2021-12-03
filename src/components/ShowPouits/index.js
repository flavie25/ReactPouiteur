import React from 'react'
import PouitCard from 'components/PouitCard'

const ShowPouits = (props) => {
    const tab = props.pouits.map((pouit) => (
        <PouitCard {...pouit} />
    ))
    
    return tab
}

export default ShowPouits