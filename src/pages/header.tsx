import React from "react";
import { Link} from "react-router-dom";


export const Header = () => {
    return (
        <>
            <header className="header fixed w-full z-[99] text-white">
                <h2 className="logo title-big font-black">kamga</h2>

                <nav className="text-white">
                    <ul className="flex items-center gap-8">
                        <Link to="/Home" className="p-big hover:text-primary">Acceuil</Link>
                        <Link to="/About" className="p-big hover:text-primary">A Propos</Link>
                        <Link to="/Service" className="p-big hover:text-primary">Services</Link>
                        <Link to="/Contact" className="p-big hover:text-primary">Contact</Link>
                        {/* <Link to="*" className="p-big">To do list</Link> */}
                        <Link to="/AdminDashboard" className="p-big hover:text-primary">Dashboard</Link>
                        <Link to="*" className="p-big hover:text-primary">To do list</Link>
                        <Link to="/Login" className="loginBtn p-big px-4 py-2 primary-blue hover:primary-red">Connexion</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;