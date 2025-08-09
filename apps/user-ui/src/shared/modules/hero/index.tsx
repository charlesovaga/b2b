// "use client"
// import {MoveRight} from "lucide-react"
// import Image from "next/image";
// import { useRouter } from "next/navigation";
// import React from "react";

// const Hero = () => {
//     const router = useRouter()
    

//     return(
//         <div className="bg-[#115061] flex flex-col justify-center w-full">
//             <div className="md:w-[80%] m-auto md:flex h-full items-center">
//                 <div className="md:w-1/2">
//                 <p className="font-roboto font-normal text-white pb-2 text-xl">
//                     Starting from $8000
//                 </p>
//                 <h1 className="text-white text-6xl font-extrabold font-Roboto">
//                     The best B2B <br />
//                     Collection 2025
//                 </h1>
//                 <p className="font-Oregano text-3xl pt-4 text-white">
//                     Exclusive offer <span className="text-yellow-400">10%</span> off
//                     this week
//                 </p>
//                 <br />
//                 <button
//                     onClick={() => router.push("/products")}
//                     className="w-[140px] gap-2 font-semibold h-[40px] flex items-center justify-center bg-white rounded-md text-sm"
//                 >
//                     Shop Now <MoveRight />
//                 </button>

//                 </div>
//                 <div className="md:w-1/2 flex justify-center">
//                 <Image
//                 src={
//                     "https://ik.imageKit.io/fz0xzwtey/products/slider-img-1.png"
//                 }
//                 alt=""
//                 width={450}
//                 height={450}
//                 />
//                 </div>
//             </div>
//         </div>
//     ) 
// }
// export default Hero

// Responsiveness..
"use client";

import { MoveRight } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const Hero = () => {
  const router = useRouter();

  return (
    <div className="bg-[#115061] w-full py-10 px-4 sm:px-6 md:px-8">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">
        {/* Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <p className="font-roboto font-normal text-white text-base sm:text-lg md:text-xl pb-2">
            Starting from $8000
          </p>
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold font-Roboto leading-tight">
            The best B2B <br />
            Collection 2025
          </h1>
          <p className="font-Oregano text-xl sm:text-2xl md:text-3xl pt-4 text-white">
            Exclusive offer{" "}
            <span className="text-yellow-400 font-semibold">10%</span> off this week
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <button
              onClick={() => router.push("/products")}
              className="px-5 py-3 flex items-center gap-2 bg-white text-[#115061] font-semibold text-sm sm:text-base rounded-md hover:bg-yellow-100 transition"
            >
              Shop Now <MoveRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="https://ik.imageKit.io/fz0xzwtey/products/slider-img-1.png"
            alt="Hero"
            width={450}
            height={450}
            className="object-contain w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
