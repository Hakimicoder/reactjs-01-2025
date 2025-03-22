import React from "react";
import { Link} from "react-router-dom";


export const Header = () => {
    return (
        <>
            <header className="header fixed w-full z-[99]">
                <h2 className="logo title-big font-bold">kamga</h2>

                <nav>
                    <ul>
                        <Link to="/Home" className="p-big">Acceuil</Link>
                        <Link to="/About" className="p-big">A Propos</Link>
                        <Link to="/Service" className="p-big">Services</Link>
                        <Link to="/Contact" className="p-big">Contact</Link>
                        <Link to="*" className="p-big">To do list</Link>
                        <Link to="/Login" className="loginBtn p-big">Connexion</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;