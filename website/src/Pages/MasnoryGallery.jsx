import React from 'react'
import roomimg1 from "../assets/roomimg (1).jpg";
import roomimg6 from "../assets/roomimg (6).jpg";
import roomimg7 from "../assets/roomimg.jfif";
import roomimg8 from "../assets/roomimg1.jpg";
import roomimg10 from "../assets/roomimg3.avif";
import roomimg11 from "../assets/roomimg4.webp";
import roomimg12 from "../assets/roomimg (7).jpg";
import roomimg13 from "../assets/roomimg6.webp";
import roomimg14 from "../assets/roomimg7.jpg";
import roomimg15 from "../assets/roomimg8.webp";
import roomimg16 from "../assets/roomimg9.jpg";
import roomimg17 from "../assets/roomimg10.jpg";

const MasnoryGallery = () => {
    return (
        <div className='mx-10 md:pt-10'>
             <div className='h-1 w-20 bg-cyan-400 rounded-xl mx-auto my-5'></div>
            <h1 className='text-4xl font-bold text-white pb-10 font-[Unbounded] text-center'>Our Gallery</h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mx-4">
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg1} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg7} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg10} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg15} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg12} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg8} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg13} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg16} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg11} alt="" />
                    </div>
                </div>
                <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg17} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg14} alt="" />
                    </div>
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src={roomimg6} alt="" />
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MasnoryGallery