import React from "react";
import { FaGlobe, FaMicrochip, FaBookOpen, FaCoffee } from "react-icons/fa";

const AboutFacts = () => {
    const facts = [
        {
            icon: <FaGlobe className="w-6 h-6 text-orange-400" />,
            label: "Based in",
            value: "Philippines",
        },
        {
            icon: <FaMicrochip className="w-6 h-6 text-orange-400" />,
            label: "Interests",
            value: "Playing and Creating",
        },
        {
            icon: <FaBookOpen className="w-6 h-6 text-orange-400" />,
            label: "Hobbies",
            value: "Reading, Watching, Listening, Creating, Gaming",
        },
        {
            icon: <FaCoffee className="w-6 h-6 text-orange-400" />,
            label: "Vibe",
            value: "Indoor enthusiast ☕ + creativity addict",
        },
    ];

    return (
        <div className="grid sm:grid-cols-2 gap-6 text-gray-200">
            {facts.map((fact, i) => (
                <div
                    key={i}
                    className="flex items-start gap-3 bg-gray-800/60 rounded-2xl p-4 shadow-md hover:shadow-lg hover:bg-gray-800 transition"
                >
                    {fact.icon}
                    <div className="flex flex-col gap-4">
                        <p className="text-sm text-orange-400">{fact.label}</p>
                        <p className="font-medium">{fact.value}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default AboutFacts;
