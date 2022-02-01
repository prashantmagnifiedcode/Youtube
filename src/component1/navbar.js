import React from 'react'
import { NavLink } from 'react-router-dom';


const Navbar=()=>{

    return(
        <>

        <div className="navcontainer">
            <div className="navinner1container">
            </div>
            <div className="navinner2container">
                <ul>
                   
                    
                    <li>
                        <NavLink  className='navlink' to='/Signin'>Share</NavLink>
                    
                    </li>
                    
                    <li>
                        <NavLink className='navlink' to='/Signin'>Detail</NavLink>
                    
                    </li>
                    
                    <li>
                        <NavLink className='navlink' to='/Signin'>Login</NavLink>
                    
                    </li>
                </ul>
            </div>
        </div>
        
        
        </>
    )

}
export default Navbar;