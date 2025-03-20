import React from "react";
import { Link } from "react-router";

const Notfound = () => {
    return (
        <div className="grid min-h-screen place-items-center">
            <div className="flex items-center flex-col">
                <h1 className="text-9xl text-blue-600">404</h1>
                <h4>Not Found</h4>

                <Link
                    to="/"
                    className="py-2 px-4 rounded-md border-none bg-blue-500 hover:bg-blue-600 duration-150 ease-in-out text-white font-semibold"
                >
                    Home
                </Link>
            </div>
        </div>
    );
};

export default Notfound;
