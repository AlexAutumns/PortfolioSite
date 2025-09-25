import React from "react";
import AboutIntro from "~/components/about/AboutIntro";
import AboutFacts from "~/components/about/AboutFacts";

import profileAssets from "../../assets/images/me.png";
import profilePublic from "../../public/me.png";

const About = () => {
    return (
        <div className="max-w-4xl mx-auto px-6 py-16 space-y-16 flex flex-col items-center gap-8">
            <div className="w-50 h-50 rounded-full overflow-hidden shadow-lg flex-shrink-0">
                <img
                    src={profilePublic}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>
            {/* Intro Section */}
            <AboutIntro />

            {/* Fun Facts Section */}
            <AboutFacts />
        </div>
    );
};

export default About;
