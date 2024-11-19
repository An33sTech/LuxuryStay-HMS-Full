import { useState } from "react";
import { gallery } from "../Components/Data";

const Gallery = () => {

    const [activeTab, setActiveTab] = useState("Hotel Room");

    return (
        <div className=" md:mx-10 mx-5">
            <h1 className="text-white font-bold md:text-5xl text-3xl text-center py-10 font-[Unbounded]">
               Equisite Gallery
            </h1>

            {/* Tabs */}
            <div className="flex items-center justify-center py-8 flex-wrap space-x-4">
                {Object.keys(gallery).map((category) => (
                    <button
                        key={category}
                        className={`px-4 py-2 rounded-lg text-center me-3 mb-3 ${activeTab === category
                            ? "btn"
                            : "bg-gray-700 text-gray-200"
                            }`}
                        onClick={() => setActiveTab(category)}
                    >
                        {category}
                    </button>
                ))}
            </div>

            {/* Gallery */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {gallery[activeTab].map((imgSrc, index) => (
                    <div key={index} className="h-[150px] overflow-hidden rounded-lg">
                        <img
                            className="h-full w-full object-cover"
                            src={imgSrc}
                            alt={`${activeTab} ${index + 1}`}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;
