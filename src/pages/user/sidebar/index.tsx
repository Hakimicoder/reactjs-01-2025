import { Link } from "react-router-dom";
import React from 'react'

const UserSidebar = () => {
    return (
        <div className="banner">
            <aside className="bg-blue-600">
                <div className="flex w-full justify-between items-center px-4 py-4">
                    <h2 className="text-emerald-500 font-black text-4xl">Jumael</h2>
                    <span className="text-emerald-500">
                        <Link to="/Contact" className="p-big">📝</Link>
                    </span>
                </div>
            </aside>

            <div className="container">
                <h2 className="">Welcome</h2>
            </div>
        </div>
    )
};

export default UserSidebar;