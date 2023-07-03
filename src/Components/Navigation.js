import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useTransition, animated } from "react-spring";

// menu className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
// mask "bg-black-t-50 fixed top-0 left-0 w-full h-full z-50"

function Navigation(){
    const [showMenu, setShowMenu] = useState(false);
    const menuTransitions =   useTransition(showMenu, {
        from: {opacity: 0, left: '-100px'},
        enter:{opacity: 1, left: '0px'},
        leave: {opacity: 0, left: '-100px'},
    });

    const toggleMenu = () =>{
        setShowMenu(!showMenu);
    }

    return(
        <nav>
            <span className="text-xl">
                <FontAwesomeIcon 
                icon={faBars} 
                onClick={toggleMenu}
                />
            </span>
            {
                menuTransitions((style, item) =>
                       item ?  (<animated.div
                        style={style}
                        className="fixed bg-white top-0 left-0 w-4/5 h-full z-50 shadow"
                        >
                        THis is the menu
                    </animated.div>) : null
            )}
        </nav>
    )
}

export default Navigation;