import React from "react";
import { Link} from "react-router-dom";

let navlinks = [
    { name: 'acceuil', link: '/Home'},
    { name: 'a propos', link: '/About'},
    { name: 'services', link: '/Service'},
    { name: 'contact', link: '/Contact'},
    { name: 'dashboard', link: '/admin/dashboard'},
    { name: 'todolist', link: '/todolist'},
]


export const Header = () => {
    return (
        <>
            <header className="header fixed w-full z-[99] text-white">
                <h2 className="logo title-big font-black">kamga</h2>

                <nav className="text-white">
                    <ul className="flex items-center gap-8 ">
                        {navlinks.map(function (navlinks, index) {
                            return <Link to={navlinks.link}>
                                <li className="p-big hover:text-primary capitalize relative hover:-translate-y-2 transition-low"
                                    key={index}> {navlinks.name}</li>
                            </Link>
                        })}
                        <Link to="/auth/Login" className="loginBtn p-big px-4 py-2 primary-blue hover:primary-red">Connexion</Link>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;