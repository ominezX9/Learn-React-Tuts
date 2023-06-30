import React from "react";
import Navigation from "./Navigattion";

function Header(){
    return(
        <header className="border-b p-5 flex justify-between items-center">    
            <span className="font-bold">TutSpot.io</span>
            <Navigation/>
        </header>
    )
}

export default Header;