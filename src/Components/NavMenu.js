import React from "react";
import { Link } from "react-router-dom";



function NavMenu(props){
    return(
        <div>
            <div className="font-bold py-5">TutSpot.io</div>
                        <ul>
                            <li>
                                <Link 
                                    to='/' 
                                    className="text-blue-500 p-3 border-t border-b block"
                                    onClick={props.closeMenu}
                                    >
                                    Home</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/about' 
                                    className="text-blue-500 p-3 border-b block"
                                    onClick={props.closeMenu}
                                    >
                                    About</Link>
                            </li>
                            <li>
                                <Link 
                                    to='/contact-us' 
                                    className="text-blue-500 p-3 border-t border-b block"
                                    onClick={props.closeMenu}
                                    >
                                    Contact Us</Link>
                            </li>
                        </ul>
        </div>
    )
}

export default NavMenu;