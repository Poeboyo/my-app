import React from "react";

function Header(){

    return( 
        <div id="header">
            <div id="tabs">
                <ul id="tab-selections">
                    <li id="about" className="selection"></li>
                    <li id="projects" className="selection"></li>
                    <li id="contact" className="selection"></li>
                </ul>    
            </div> 
        </div>
    );

};

export default Header;