import React from "react";
import Header from "./header";
import Button from "./bouton/button";


// page d'acceuil

const Home = () => {
    return (
        <>
            <Header />
            <div>
                <h1 className="title-big">Home page</h1>
                <p className="p-big">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore voluptates sequi error fugiat vero ab doloremque qui. Quia in sit nam? Culpa ratione nesciunt quae! Veritatis rem velit fugiat omnis ipsam provident, placeat sapiente. Nulla ad, accusamus unde tempore reiciendis explicabo molestiae commodi vel.</p>
                <Button />
            </div>
        </>
    )
};

export default Home;
