import React from "react";
import Header from "./header";
import Button from "./bouton/button";


// page d'acceuil

const Home = () => {
    return (
        <>
            <Header />
            <section className="min-h-screen flex justify-center items-center w-full text-center">
                <div className="w-full">
                    <h1 className="title-big text-3xl font-black mb-6">Digitalisez votre business avec <span className="text-blue-500">JUMY</span></h1>
                    <p className="p-big mb-8 w-full max-w-[80rem] m-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos inventore voluptates sequi error fugiat vero ab doloremque qui. Quia in sit nam? Culpa ratione nesciunt quae! Veritatis rem velit fugiat omnis ipsam provident, placeat sapiente. Nulla ad, accusamus unde tempore reiciendis explicabo molestiae commodi vel.</p>
                    <Button>
                        Let's go now
                    </Button>
                </div>
            </section>
        </>
    )
};

export default Home;