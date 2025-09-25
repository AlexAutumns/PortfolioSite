import type { Route } from "./+types/home";

// Import components
import Hero from "../components/home/Hero";
import Skills from "../components/home/Skills";
import FeaturedProjects from "../components/projects/FeaturedProjects";
import Archive from "../components/projects/Archives";

import React from "react";
import { useLocation, useNavigate } from "react-router";

const home = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleNavClick = (href: string) => {
        if (href === "#") {
            window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
            navigate(href);
        }
    };

    return (
        <main className="w-screen min-h-screen flex flex-col items-center justify-start space-y-15">
            <Hero />
            <Skills />
            <div className="flex flex-col items-center justify-center">
                <FeaturedProjects />
                <div className="mt-12 flex justify-center w-full">
                    <a
                        href="/projects"
                        className=" text-2xl font-bold px-8 py-4 bg-orange-100 hover:bg-orange-500 text-black hover:text-gray-100 
                        rounded-tr-3xl rounded-tl-lg rounded-bl-3xl rounded-br-lg  
                        hover:rounded-4xl hover:rounded-tr-md
                        transition-all duration-300"
                    >
                        See More Projects
                    </a>
                </div>
            </div>
        </main>
    );
};

export default home;
