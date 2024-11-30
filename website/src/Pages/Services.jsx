import { useState, useEffect } from "react";
import { gsap } from "gsap";
import '../index.css';
import { services } from '../Components/Data';
import { imageSources } from "../Components/Data";

const MenuComponent = () => {

  const [hoveredImage, setHoveredImage] = useState("");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleMouseEnter = (src) => {
    setHoveredImage(src);

    gsap.to(".preview-img img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
      duration: 0.8,
      ease: "power3.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(".preview-img img", {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
      duration: 0.8,
      ease: "power3.in",
    });

    setHoveredImage("");
  };

  return (
    <div className="w-full h-full relative md:pt-40 pt-10 px-10">
      <div className="h-1 w-20 bg-cyan-400 rounded-xl mx-auto my-5"></div>
      <h1 className="text-4xl font-bold text-white pb-20 font-[Unbounded] text-center">
        Our Services
      </h1>

      {/* Preview Image */}
      {hoveredImage && (
        <div
          className="absolute w-[225px] h-[275px] rounded-lg z-10 pointer-events-none preview"
          style={{
            transform: `translate(${mousePosition.x + 0}px, ${mousePosition.y + 0}px)`,
          }}
        >
          <div className="preview-img absolute w-full h-full">
         {/* Duplicate image with an offset */} 
         <img
              src={hoveredImage}
              alt="Preview Duplicate"
              className="absolute rounded-lg top-6 left-4 w-full h-full shadow-xl opacity-40"
            />   
            {/* Primary image */}
            <img
              src={hoveredImage}
              alt="Preview"
              className="absolute rounded-lg top-0 left-0 w-full h-full shadow-2xl"
            />
           
           
          </div>
        </div>
      )}

      {/* Menu Items */}
      <div
        className="space-y-10"
        onMouseLeave={handleMouseLeave}
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="flex md:flex-row flex-col group justify-between gap-10 w-full cursor-pointer"
          >
            <div className="bg-cyan-500 rounded-lg w-20 h-2 m-auto md:hidden"></div>
            <div className="info group-hover:text-gray-700  transition duration-300 text-sm font-medium uppercase md:text-left text-center pr-4">
              <p>{item.info}</p>
            </div>
            <div className="name group-hover:text-gray-700 group-hover:scale-110 transition duration-300 text-xl font-extrabold text-center xl:max-w-4xl max-w-full capitalize">
              <p onMouseEnter={() => handleMouseEnter(imageSources[index]?.imgSrc)}>{item.name}</p>
            </div>
            <div className="tag group-hover:text-gray-700 text-[#CDB9FF] transition duration-300 text-sm font-medium uppercase md:text-right text-center pl-4">
              <p>{item.tag}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuComponent;
