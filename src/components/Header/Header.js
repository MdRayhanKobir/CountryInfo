import React from 'react';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
export const Header = () => {
    return(

        <div>
            <header className="header">
            <div>
            <h1>Where in the world!</h1>
            </div>
            <div>
                <i className="fas fa-moon"><FontAwesomeIcon icon={faMoon} /></i>Dark Mode
            </div>

            </header>
        </div>
    );
};
