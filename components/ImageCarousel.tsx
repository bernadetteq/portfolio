"use client";

import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";


const images = [
    {
    src: "/images/product-discovery-8.png",
    alt: "Our lighthouse framework to guide us in our product discovery journey",
    title: "Our lighthouse framework to guide us in our product discovery journey",
    
  },
    {
    src: "/images/product-discovery-7.png",
    alt: "Clustered information gathered from interviews to identify patterns and insights",
    title: "Clustered information gathered from interviews to identify patterns and insights",
  },

  {
    src: "/images/product-discovery-6.png",
    alt: "Collected information from 47 colleagues worldwide to understand the problem space",
    title: "Collected information from 47 colleagues worldwide to understand the problem space",
  },
   {
    src: "/images/product-discovery-5.png",
    alt: "A sample of our interview template used for user interviews",
    title: "A sample of our interview template used for user interviews",
  },
    {
    src: "/images/product-discovery-4.png",
    alt: "Opportunity Solution Tree derived from interviews",
    title: "Opportunity Solution Tree derived from interviews",
  },
   {
    src: "/images/product-discovery-3.png",
    alt: "Opportunity Solution Tree derived from interviews",
    title: "Opportunity Solution Tree derived from interviews",
    
    
  },
  {
    src: "/images/product-discovery-2.jpg",
    alt: "Voting Process to select the most favoured solution",
    title: "Voting Process to select the most favoured solution",
    
  },
  {
    src: "/images/product-discovery-1.jpg",
    alt: "Creative elaboration of our most favoured solution",
    title: "Creative elaboration of our most favoured solution",
  },
];

export default function ImageCarousel() {
//   const [emblaRef] = useEmblaCarousel({
const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
  });

    // const [selectedImage, setSelectedImage] = useState(null);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
    const scrollNext = () => emblaApi && emblaApi.scrollNext(); 

  return (
    <>     {/* CAROUSEL */}
    <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>

            <div className="flex gap-4">

            {images.map((slide, index) => (
                // <div
                // key={index}
                // className="
                //     flex-[0_0_100%]
                //     sm:flex-[0_0_50%]
                //     lg:flex-[0_0_33%]
                //     min-w-0
                // "
                // >

                // <button
                //     onClick={() => setSelectedImage(image)}
                //     className="w-full"
                // >

                //     <img
                //     src={image}
                //     alt="Carousel image"
                //     className="
                //         w-full
                //         h-[300px]
                //         object-cover
                //         rounded-3xl
                //         shadow-xl
                //         hover:scale-[1.02]
                //         transition-all
                //         duration-300
                //     "
                //     />

                // </button>

                // </div>
                <div
                key={index}
                className="
                    flex-[0_0_100%]
                    sm:flex-[0_0_50%]
                    lg:flex-[0_0_33%]
                    min-w-0
                "
                >

                <button
                    onClick={() => setSelectedImage(slide.src)}
                    className="w-full"
                >

                    <div className="relative overflow-hidden rounded-3xl">

                    <img
                        src={slide.src}
                        alt={slide.title}
                        className="
                        w-full
                        h-[300px]
                        object-cover
                        hover:scale-105
                        transition-all
                        duration-500
                        "
                    />

                    {/* TITLE OVERLAY */}
                    <div
                        className="
                        absolute
                        inset-x-0
                        bottom-0
                        p-6
                        bg-gradient-to-t
                        from-black/80
                        to-transparent
                        "
                    >
                        <p
                        className="
                            text-white
                            text-xl
                            font-semibold
                            tracking-tight
                            text-shadow-md
                        "
                        >
                        {slide.title}
                        </p>
                    </div>

                    </div>

                </button>

                </div>
            ))}

            </div>

        </div>
        
        <div className="flex items-center justify-center gap-4 mt-6">

        {/* <button
            onClick={scrollPrev}
            className="
            w-14
            h-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
        "
        > */}
        <button
            onClick={scrollPrev}
            className=" embla__prev
            absolute
            left-2
            top-1/2
            -translate-y-1/2
            z-10
            bg-[#dc8a8a]
            hover:bg-[#b74b4b]
            shadow-lg
            rounded-full
            w-14
            h-14
            flex
            items-center
            justify-center
            text-2xl
            transition
            "
        >
            ←
        </button>

        {/* <button
            onClick={scrollNext}
            className="
            w-14
            h-14
            rounded-full
            bg-white/10
            backdrop-blur-xl
            border
            border-white/20
            text-white
            flex
            items-center
            justify-center
            shadow-xl
            hover:scale-105
            transition-all
            duration-300
            "
        > */}
        <button
            onClick={scrollNext}
            className=" embla__next
            absolute
            right-2
            top-1/2
            -translate-y-1/2
            z-10
            bg-[#dc8a8a]
            hover:bg-[#b74b4b]
            shadow-lg
            rounded-full
            w-12
            h-12
            flex
            items-center
            justify-center
            text-2xl
            transition
            "
        >
            →
        </button>

        </div>
    </div>
     {/* LIGHTBOX */}
      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-50
            bg-black/90
            backdrop-blur-md
            flex
            items-center
            justify-center
            p-4
          "
          onClick={() => setSelectedImage(null)}
        >

          <img
            src={selectedImage}
            alt="Zoomed image"
            className="
              max-w-full
              max-h-full
              object-contain
              rounded-2xl
            "
          />

        </div>
      )}
    </>
  );
}