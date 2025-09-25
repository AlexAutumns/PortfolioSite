import placeholderImage from "../../../assets/images/placeholder.jpg";
import placeholderImageV from "../../../assets/images/placeholderV.jpg";

// PROJECT IMAGE IMPORTS
import Portfolio1 from "../../../assets/images/projectImages/Portfolio1.png";

import DobuMartialArts1 from "../../../assets/images/projectImages/DobuMartialArts1.png";

import AutumnReddit2 from "../../../assets/images/projectImages/AutumnReddit2.png";

import KessokuPlaylist1 from "../../../assets/images/projectImages/KessokuPlaylist1.png";
import KessokuPlaylist2 from "../../../assets/images/projectImages/KessokuPlaylist2.png";

import ImageClassifier1 from "../../../assets/images/projectImages/ImageClassifierAI1.png";
import ImageClassifier2 from "../../../assets/images/projectImages/ImageClassifierAI2.png";

import OldPortfolio1 from "../../../assets/images/projectImages/OldPortfolio1.png";

import RandomQuoteGenerator2 from "../../../assets/images/projectImages/randomQuoteGenerator2.png";

import EnomyFinance1 from "../../../assets/images/projectImages/EnomyFinance1.png";
import EnomyFinance2 from "../../../assets/images/projectImages/EnomyFinance2.png";
import EnomyFinance3 from "../../../assets/images/projectImages/EnomyFinance3.png";

import MerryMeals0 from "../../../assets/images/projectImages/MerryMeals0.png";
import MerryMeals1 from "../../../assets/images/projectImages/MerryMeals1.png";
import MerryMeals2 from "../../../assets/images/projectImages/MerryMeals2.png";
import MerryMeals3 from "../../../assets/images/projectImages/MerryMeals3.png";

// CODE
export type Project = {
    title: string;
    year: string;
    role?: string;
    images?: string[]; // 1 or more images (optional for archive projects)
    description?: string[]; // paragraphs
    bulletPoints?: string[]; // optional bullet points
    url?: string; // optional URL for linking
};

export const featuredProjects: Project[] = [
    {
        title: "New Portfolio Website",
        year: "2025",
        role: "Sole Developer",
        images: [Portfolio1],
        description: [
            "This is a portfolio website built to showcase projects and skills.",
            "It uses React, Tailwind, and TypeScript for a modern web experience.",
        ],
        bulletPoints: [
            "Responsive design",
            "Dark mode support",
            "Animated sections",
        ],
        url: "https://github.com/AlexAutumns/PortfolioSite",
    },

    {
        title: "Kessoku Band Spotify Playlist Generator",
        year: "2023",
        role: "Sole Developer",
        images: [KessokuPlaylist2, KessokuPlaylist1],
        description: [
            "This is a web app that generates Spotify playlists with a Kessoku Band (Bocchi The Rock) Theme.",
            "It uses React for instant updates and a smooth user experience.",
        ],
        bulletPoints: ["Responsive design", "Animated sections"],
        url: "https://github.com/AlexAutumns/PortfolioSite",
    },

    {
        title: "Clothes Classification AI",
        year: "2025",
        role: "Sole Developer",
        images: [ImageClassifier1, ImageClassifier2],
        description: [
            "A machine learning system that classifies fashion product images into their respective categories using Convolutional Neural Networks (CNNs).",
            "It uses React, Tailwind, and TypeScript for a modern web experience.",
            "It uses a dual-model approach for maximum accuracy.",
        ],
        bulletPoints: [
            "Article Type Model — optimized for predicting the articleType.",
            "Master & Sub Category Model — optimized for predicting masterCategory and subCategory.",
            "Detailed prediction metrics",
        ],
        url: "https://github.com/AlexAutumns/image_classification_systemAI",
    },

    {
        title: "Team Banana - Merry Meals",
        year: "2025",
        role: "Lead Developer",
        images: [MerryMeals0, MerryMeals1, MerryMeals2, MerryMeals3],
        description: [
            "Is a web application that supports the planning, registration, and delivery of meals for community members.",
            "This project features a Spring Boot backend and a React frontend, with authentication, role-based access, and JWT security.",
        ],
        bulletPoints: [
            "Responsive design",
            "Animated sections",
            "Backend API with Spring Boot",
            "Role-based access control",
            "JWT authentication",
        ],
        url: "https://github.com/AlexAutumns/MerryMeals-TeamBanana",
    },
];

export const archiveProjects: Project[] = [
    {
        title: "New Portfolio Website",
        url: "https://github.com/AlexAutumns/PortfolioSite",
        year: "2025",
        images: [Portfolio1],
    },

    {
        title: "Dobu Martial Arts Website",
        url: "https://github.com/AlexAutumns/DoBuMartialArts",
        year: "2024",
        images: [DobuMartialArts1],
    },

    {
        title: "Autumn Reddit (WIP)",
        url: "https://github.com/AlexAutumns/AutumnsRedditAPI",
        year: "2023",
        images: [AutumnReddit2],
    },

    {
        title: "Kessoku Band Spotify Playlist Generator",
        url: "https://github.com/AlexAutumns/kessoku-band-playlist-app",
        year: "2023",
        images: [KessokuPlaylist2],
    },

    {
        title: "Clothes Classification AI",
        url: "https://github.com/AlexAutumns/image_classification_systemAI",
        year: "2025",
        images: [ImageClassifier2],
    },

    {
        title: "Old Portfolio Website",
        url: "https://github.com/AlexAutumns/PortfolioSiteOld",
        year: "2023",
        images: [OldPortfolio1],
    },

    {
        title: "Random Quote Generator",
        url: "https://github.com/AlexAutumns/random-quote-generator",
        year: "2023",
        images: [RandomQuoteGenerator2],
    },

    {
        title: "Enomy Finance (WIP)",
        url: "https://github.com/AlexAutumns/enomy-finance",
        year: "2024",
        images: [EnomyFinance3],
        role: "Developer",
    },

    {
        title: "Team Banana - Merry Meals",
        url: "https://github.com/AlexAutumns/MerryMeals-TeamBanana",
        year: "2025",
        images: [MerryMeals0],
    },
];
