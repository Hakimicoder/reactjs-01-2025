import React from 'react';
import { Link } from "react-router-dom";
import Card from '../../../cards';
import AdminBlock from '../block';

let logo = "School";
let name = "Jumael Kamga";
let email = "jumaelkamga1@gmail.com";
let logout = "Déconnexion";

const AdminContent = () => {
    return (
        <>
            <div className="content w-[85%] fixed -right-0">
                <div className="adminheader bg-white w-full py-4 px-8 flex items-center justify-between z-[1000]">
                    <h2 className="">
                        <span className="font-black title-sm text-dark">{name}</span>
                        <span className="text-blue-500 p-sm block"><Link to="mailto:{email}">{email}</Link></span>
                    </h2>

                    <div className="flex gap-4 items-center z-[1000]">
                        <img src="/assets/img/jumy.jpg" alt="jumael kamga" className="logo w-20 h-20 rounded-[5rem]" />
                        <Link to="/Home" className="p-big bg-red-500 hover:bg-red-600 py-4 px-6 text-white">{logout}</Link>
                    </div>
                </div>

                <div className="main py-8 px-8">
                    <div className="searchbar w-full h-20">
                        <input type="text" placeholder="Rechercher" className="w-full h-full px-8 py-4" />
                    </div>

                    <AdminBlock />
                </div>
        </div >
    </>
  )
};
export default AdminContent;