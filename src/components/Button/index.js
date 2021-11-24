import React from 'react'  
import {Link} from 'react-router-dom'


const Button = ({prename,children}) =>{
    return (
        <div>
            <Link to="styling-components"><button>{prename}</button></Link>
            <button>{children}</button>
        </div>
    )
}

Button.defaultProps = {
    prename: "po"
};


export default Button