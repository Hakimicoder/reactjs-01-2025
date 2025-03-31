import React from 'react';
import { Link } from "react-router-dom";
import Card from '../../../cards';

const AdminContent = () => {
    return (
        <>
            <div className="content w-[85%] fixed -right-0">
                <div className="adminheader bg-white w-full py-4 px-8 flex items-center justify-between">
                    <h2 className="">
                        <span className="font-black title-sm text-dark">Admin</span>
                        <span className="text-blue-500 p-sm block"><Link to="mailto:jumaelkamga1@gmail.com">jumaelkamga1@gmail.com</Link></span>
                    </h2>

                    <div className="flex gap-4 items-center">
                        <img src="/assets/img/jumy.jpg" alt="jumael kamga" className="logo w-20 h-20 rounded-[5rem]" />
                        <Link to="/Home" className="p-big bg-red-500 hover:bg-red-600 py-4 px-6 text-white">Déconnexion</Link>
                    </div>
                </div>

                <div className="main py-8 px-8">
                    <div className="searchbar w-full h-20">
                        <input type="text" placeholder="Rechercher" className="w-full h-full px-8 py-4" />
                    </div>

                    <div className="items grid grid-cols-3 gap-8 py-14">
                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Attendance</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Liste de classe</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Timetable</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Examens</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Calendrier</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>

                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Nouveautés</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>
                        
                        <Card>
                            <div className="">
                                <h2 className="title-sm mb-4 text-blue-500 font-bold">Nouveautés</h2>
                                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, amet! Quisquam dignissimos explicabo saepe sint porro iste. Doloremque!</p>

                                <div className="mt-12 mb-6">
                                    <Link to="#" className="bg-blue-500 rounded-sm hover:bg-blue-600 text-white px-8 py-4 p-sm capitalize">read more</Link>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
        </div >
    </>
  )
};
export default AdminContent;