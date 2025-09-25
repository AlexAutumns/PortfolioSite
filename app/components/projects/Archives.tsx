import React, { useState } from "react";
import Masonry from "react-masonry-css";
import { FaRegCalendarAlt } from "react-icons/fa";

import { archiveProjects } from "./projectsData";

interface ArchiveProps {
    showTitle?: boolean; // optional prop, defaults to true
}

const ITEMS_PER_PAGE = 10;

const Archive: React.FC<ArchiveProps> = ({ showTitle = true }) => {
    const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

    const handleLoadMore = () => {
        setVisibleCount((prev) => prev + ITEMS_PER_PAGE);
    };

    // Sort by year descending, then by title alphabetically
    const sortedProjects = [...archiveProjects].sort((a, b) => {
        const yearA = Number(a.year ?? 0);
        const yearB = Number(b.year ?? 0);
        if (yearB !== yearA) return yearB - yearA;
        return a.title.localeCompare(b.title);
    });

    const visibleProjects = sortedProjects.slice(0, visibleCount);

    const breakpointColumnsObj = {
        default: 4,
        1280: 3,
        1024: 2,
        640: 1,
    };

    return (
        <section className="py-12 bg-gray-950 px-4 md:px-12 min-h-[80vh]">
            {showTitle && (
                <h2 className="text-4xl font-bold text-center text-gray-100 mb-12">
                    Project Archive
                </h2>
            )}

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="flex gap-6"
                columnClassName="flex flex-col gap-6"
            >
                {visibleProjects.map((project, index) => (
                    <a
                        key={index}
                        href={project.url ?? "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative bg-gray-800 rounded-xl overflow-hidden shadow-md cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-300 w-full group border-2 border-black hover:border-orange-300 hover:shadow-orange-500/50"
                    >
                        {project.images && project.images.length > 0 ? (
                            <>
                                <img
                                    src={project.images[0]}
                                    alt={project.title}
                                    className="w-full h-auto object-cover rounded-t-lg"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-black/80 h-16 group-hover:h-[100%] flex items-center justify-center p-4 transition-all duration-300">
                                    <span className="text-gray-100 text-lg md:text-lg group-hover:text-xl font-medium text-center break-words">
                                        {project.title}
                                    </span>
                                </div>
                            </>
                        ) : (
                            <div className="p-6 min-h-[140px] flex items-center justify-center relative">
                                <div className="absolute bottom-0 left-0 w-full bg-black/80 h-16 group-hover:h-[100%] flex items-center justify-center p-4 transition-all duration-300">
                                    <span className="text-gray-100 text-lg md:text-lg group-hover:text-xl font-medium text-center break-words">
                                        {project.title}
                                    </span>
                                </div>
                            </div>
                        )}

                        {/* Hover Date */}
                        {project.year && (
                            <div className="absolute top-2 right-2 bg-black/90 text-orange-300 text-sm px-2 py-1 rounded flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <FaRegCalendarAlt className="w-4 h-4" />
                                <span>{project.year}</span>
                            </div>
                        )}
                    </a>
                ))}
            </Masonry>

            {visibleCount < archiveProjects.length && (
                <div className="flex justify-center mt-8">
                    <button
                        onClick={handleLoadMore}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300"
                    >
                        Load More
                    </button>
                </div>
            )}
        </section>
    );
};

export default Archive;
