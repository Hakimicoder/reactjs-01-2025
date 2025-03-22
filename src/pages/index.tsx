import React from "react";
import Header from "./header";
import Button from "./bouton/button";


// page d'acceuil

const Home = () => {
    return (
        <>
            <Header />
            <section className="banner home-page text-center">
                <h1 className="title-big text-3xl font-bold mb-6 uppercase">Digitalisez votre business avec <span className="active text-red-500">Jumael Kamga</span></h1>
                <p className="p-big mb-8 w-full max-w-[80rem] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore voluptates sequi error fugiat vero ab doloremque qui. Quia in sit nam? Culpa ratione nesciunt quae! Veritatis rem velit fugiat omnis ipsam provident, placeat sapiente. Nulla ad, accusamus unde tempore reiciendis explicabo molestiae commodi vel.</p>
                <Button />
            </section>
        </>
    )
};

export default Home;
