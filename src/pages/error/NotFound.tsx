import React, { useState } from "react";
import { Link } from "react-router";


const Notfound = () => {
    const [compte, setCompte] = useState(0);

    return (
        <div className="grid min-h-screen place-items-center">
            <div className="flex items-center flex-col">
                <h1 className="text-9xl text-blue-600 mb-6 font-black">4<span className="text-blue-500 font-bold">0</span>4</h1>
                <h4 className="text-3xl text-center mb-8">Ooops page d'erreur <br />
                    mais pas grave profite-en pour compter ou <Link to="/Home" className="text-blue-600">retourner a l'cceuil</Link></h4>
                <p className="mb-6 text-3xl text-blue-600">Compte : <span className="text-blue-500 font-bold">{compte}</span></p>

                <div className="mt-4 flex gap-4 items-center">
                    <button onClick={() => setCompte(compte + 1)} className="bg-blue-500 hover:bg-blue-600 text-white text-center p-big px-8 py-2">+</button>
                    <button onClick={() => setCompte(compte - 1)} className="bg-red-500 hover:bg-red-600 text-white  text-center p-big px-8 py-2">-</button>
                    <button onClick={() => setCompte(compte - compte)} className="bg-blue-500 hover:bg-blue-600 text-white text-center p-big px-8 py-2">0</button>
                </div>
            </div>
        </div>
    );
};

export default Notfound;
