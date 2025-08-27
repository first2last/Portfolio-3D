import React, { Suspense } from 'react'
import { Canvas } from "@react-three/fiber";
import { PerspectiveCamera } from "@react-three/drei";
import Computer from "../components/Computer.jsx";
import CanvasLoader from "../components/CanvasLoader.jsx";
import { useMediaQuery } from "react-responsive";
import Target from "../components/Target.jsx";
import { calculateSizes } from "../constants/index.js";
import ReactLogo from "../components/ReactLogo.jsx";
import Cube from "../components/Cube.jsx";
import Rings from "../components/Rings.jsx";
import HeroCamera from "../components/HeroCamera.jsx";
import Button from "../components/Button.jsx";


const Hero = () => {
    const isSmallMobile = useMediaQuery({ maxWidth: 480 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTabletPortrait = useMediaQuery({
        minWidth: 769,
        maxWidth: 834,
        orientation: 'portrait'
    });
    const isTabletLandscape = useMediaQuery({
        minWidth: 835,
        maxWidth: 1024,
        orientation: 'landscape'
    });
    const isSmallLaptop = useMediaQuery({
        minWidth: 1025,
        maxWidth: 1366
    });
    const isLargeLaptop = useMediaQuery({
        minWidth: 1367,
        maxWidth: 1920
    });
    const isDesktop = useMediaQuery({ minWidth: 1921 });

    const sizes = calculateSizes(isMobile, isDesktop, isTabletPortrait, isTabletLandscape);

    // Function to get appropriate scale based on device
    const getResponsiveScale = () => {
        if (isSmallMobile) return 3.4;       // Smaller scale for small phones
        if (isMobile) return 3.8;            // Medium scale for mobile
        if (isTabletPortrait) return 7.2;    // Good size for tablet portrait
        if (isTabletLandscape) return 7.2;   // Slightly larger for tablet landscape
        if (isSmallLaptop) return 11.2;      // Good for small laptop screens
        if (isLargeLaptop) return 11.0;      // Optimal for standard desktops
        if (isDesktop) return 12.00;         // Larger scale for big screens
        return 6.0;                          // Default fallback
    };

    const getResponsivePosition = () => {
        if (isSmallMobile) return [-7.3, -5.2, 4.5];     // Much higher for small phones
        if (isMobile) return [-5.9, -6.3, 4.5];          // Higher for mobile devices
        if (isTabletPortrait) return [-11, -14.2, 4.5];  // Higher for tablet portrait
        if (isTabletLandscape) return [-12.9, -16.2, 4.5]; // Higher for tablet landscape
        if (isSmallLaptop) return [-20.8, -22.8, 4.5];   // Small laptop
        if (isLargeLaptop) return [-19.5, -23.00, 4.6];  // Standard desktop
        if (isDesktop) return [-23.9, -28.2, 4.7];       // Large desktop
        return [0.5, -7.0, 0.0];                          // Default fallback
    };

    // Function to get responsive top margin for text content
    const getResponsiveTextMargin = () => {
        if (isSmallMobile) return 'mt-12 sm:mt-16';       // Extra margin for small phones
        if (isMobile) return 'mt-16 sm:mt-20';            // More margin for mobile
        if (isTabletPortrait) return 'mt-20 sm:mt-24';    // Higher margin for tablet portrait
        if (isTabletLandscape) return 'mt-18 sm:mt-22';   // More space for tablet landscape
        if (isSmallLaptop) return 'mt-24 sm:mt-28';       // Increased margin for small laptop
        if (isLargeLaptop) return 'mt-28 sm:mt-32';       // More space for standard desktop
        if (isDesktop) return 'mt-32 sm:mt-36';           // Maximum margin for large screens
        return 'mt-24 sm:mt-40';                          // Higher default fallback
    };

    return (
        <section className="min-h-screen w-full flex flex-col relative" id="home">
            <div className={`w-full mx-auto flex flex-col ${getResponsiveTextMargin()} c-space gap-5`}>
            <p className="sm:text-6xl text-4xl font-extrabold text-center font-generalsans bg-gradient-to-r from-[#4A90E2] via-[#9B59B6] to-[#E91E63] bg-clip-text text-transparent tracking-wide drop-shadow-lg animate-fadeInUp">
                Hi, I'm Vishesh
            </p>

            <p className="sm:text-2xl text-xl text-center font-medium tracking-wide bg-gradient-to-r from-[#FF6B35] via-[#F7931E] to-[#E91E63] bg-clip-text text-transparent animate-fadeInUp delay-200">
                Building Websites & My Dream
            </p>
        </div>



            <div className="w-full h-full absolute inset-0">
                <Canvas className="w-full h-full">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />

                        <HeroCamera isMobile={isMobile}>
                        <Computer
                            position={getResponsivePosition()}
                            rotation={[0.00, -1.62, -0.24]}
                            scale={getResponsiveScale()}
                        />
                        </HeroCamera>

                        <group>
                            <Target position={sizes.targetPosition} />
                            <ReactLogo position={sizes.reactLogoPosition} />
                            <Cube position={sizes.cubePosition}/>
                            <Rings position={sizes.ringPosition} />
                        </group>

                        <ambientLight intensity={3} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>
            </div>

            <div className="absolute bottom-7 left-0 right-0 w-full z-10 c-space">
                <a href="#about" className="w-fit">
                <Button
                    name="Let's work together"
                    isBeam
                    containerClass="w-fit px-6 py-3 sm:w-auto"
                />
            </a>


            </div>
        </section>
    )
}

export default Hero