"use client";

import useEmblaCarousel from "embla-carousel-react";
import MobileMockup from "@/components/MobileMockup";

const slides = [
    {
    src: "/images/onboarding-2.png",
    alt: "Wireframe of Returns Flow on Mobile - Screen 1",
    title: "Wireframe of Returns Flow on Mobile - Screen 1",
  },
    {
    src: "/images/onboarding-1.png",
    alt: "Wireframe of Returns Flow on Mobile - Screen 2",
    title: "Wireframe of Returns Flow on Mobile - Screen 2",
  },

  {
    src: "/images/onboarding-6.png",
    alt: "Mock-up of Returns Portal on Mobile - Screen 1",
    title: "Mock-up of Returns Portal on Mobile - Screen 1",
  },
   {
    src: "/images/onboarding-5.png",
    alt: "Mock-up of Product to be Returned on Mobile - Screen 1",
    title: "Mock-up of Product to be Returned on Mobile - Screen 1",
  },
    {
    src: "/images/onboarding-4.png",
    alt: "Mock-up of Product to be Returned on Mobile - Screen 1",
    title: "Mock-up of Product to be Returned on Mobile - Screen 1",
  },
   {
    src: "/images/onboarding-7.png",
    alt: "Mock-up of Return Confirmation on Mobile - Screen 1",
    title: "Mock-up of Return Confirmation on Mobile - Screen 1",
  },
];

export default function MobileCarousel() {

const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: "center", slidesToScroll: 1, });

  const scrollPrev = () => emblaApi?.scrollPrev()
  const scrollNext = () => emblaApi?.scrollNext()


  return (
    // <section className="py-24">
    <section className="relative">
        {/* Previous Button */}
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
            w-12
            h-12
            flex
            items-center
            justify-center
            text-2xl
            transition
            "
        >
            ←
        </button>

        {/* Next Button */}
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

        <div className="overflow-hidden " ref={emblaRef}>
            <div className="flex gap-8">
                
                {slides.map((slide) => (
                <div
                    key={slide.src}
                    className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%]" 
                >
                    <MobileMockup
                    src={slide.src}
                    alt={slide.alt}
                    />
                </div>
                ))}
            </div>
        </div>
    </section>
    
  );
}