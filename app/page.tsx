'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Link from "next/link";
import InstagramIcon from "@/public/icons/Instagram";

export default function HomePage() {
    const backgroundRef = useRef<HTMLDivElement>(null);
    const requestRef = useRef(null);

    useEffect(() => {
        let ticking = false;

        const updateScrollEffects = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            // Background parallax effect
            if (backgroundRef.current) {
                const backgroundOffset = scrollTop * 0.2;
                backgroundRef.current.style.transform = `translateY(-${backgroundOffset}px)`;
            }

            ticking = false;
        };

        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(updateScrollEffects);
                ticking = true;
            }
        };

        // add event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // initial call to set positions
        updateScrollEffects();

        // remove event listener on cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            if (requestRef.current) {
                cancelAnimationFrame(requestRef.current);
            }
        };
    }, []);

    return (
        <div className="min-h-screen">
            <div className="relative lg:h-full overflow-hidden">
                {/* Background */}
                <div
                    ref={backgroundRef}
                    className="fixed inset-0 w-full h-[120vh] -z-10"
                    style={{
                        backgroundImage: 'url(/images/homepage_bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                    }}
                />

                {/* Content */}
                <div style={{ willChange: 'transform' }}>
                    <div className="relative z-10 lg:min-h-dvh flex items-center">
                        <div className="max-w-7xl mx-auto px-6 py-12 w-full">
                            <div className="grid grid-cols-1 lg:grid-cols-[3fr_5fr] lg:gap-12 items-center">
                                {/* Left: Collage Image */}
                                <div className="flex justify-center">
                                    <div className="relative w-full max-w-md h-[50dvh]">
                                        <Image
                                            src="/images/collage.png"
                                            alt="Research and project collage"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-contain"
                                            priority
                                        />
                                    </div>
                                </div>

                                {/* Right: Introduction Text */}
                                <div className="mx-5 lg:mx-0">
                                    <div className="font-source-serif">
                                        <h1 className="text-6xl pl-2 font-extrabold text-blue-600">Hello,</h1>
                                        <h2 className="text-3xl pl-2 lg:pr-30 text-black leading-11 max-w-fit mb-[11px] font-semibold">
                                            A student researcher at the intersection of mathematics, artificial
                                            intelligence, and public policy.
                                        </h2>
                                    </div>
                                    <p className="border-y-[1px] py-[18px] pl-2 font-istok font-normal border-black text-[18px] text-gray-700 leading-tight lg:max-w-[calc(100%-50px)]">
                                        dedicated to combating misinformation, advancing healthcare equity, and
                                        transforming
                                        inquiry into real-world impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* White Background Sections */}
                    <div className="relative z-20 bg-white">
                        <main className="max-w-7xl mx-auto px-6 py-12">
                            {/* Personal Section */}
                            <section className="grid grid-cols-1 lg:grid-cols-[2fr_5fr] gap-12 items-start mb-2 py-12 lg:px-12 px-6">
                                {/* Left: Portrait */}
                                <div className="flex justify-center">
                                    <div className="relative w-60 h-74 border-blue-600"
                                         style={{boxShadow: '16px 16px 0px 0px #2563eb'}}>
                                        <Image
                                            src="/images/profile.png"
                                            alt="Jiayi Tang portrait"
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-fill"
                                        />
                                    </div>
                                </div>

                                {/* Right: Quote */}
                                <div className="flex items-center my-auto" style={{transform: 'translateY(9px)'}}>
                                    <blockquote className="text-[18px] leading-relaxed text-gray-700 font-source-serif font-medium">
                                        &ldquo; I enjoy practicing{' '}
                                        <span className="text-blue-600 hover:text-blue-800">
                                            calligraphy
                                        </span>
                                        , finding tranquility in the flow of ink across paper. I also love{' '}
                                        <span className="text-blue-600 hover:text-blue-800">
                                            street dance
                                        </span>
                                        , which brings a kind of joy that comes from liberating myself to the rhythm of
                                        music.
                                        Additionally, I delight in{' '}
                                        <span className="text-blue-600 hover:text-blue-800">
                                            painting
                                        </span>
                                        , using colors to capture fleeting moments of life. These passions allow my
                                        world to
                                        hold both a serene stillness and a vibrant intensity. &rdquo;
                                    </blockquote>
                                </div>
                            </section>

                            {/* BreathWell Section */}
                            <section className="max-w-4xl lg:mx-auto space-y-6 py-12 mx-6">
                                <h3 className="text-blue-600 font-source-serif font-semibold text-3xl leading-relaxed">
                                    BreathWell:<br/>
                                    Youth for Occupational Lung Health
                                </h3>

                                <div className="space-y-4 text-gray-700 font-istok font-normal leading-relaxed">
                                    <p>
                                        BreathWell is a youth-led nonprofit organization dedicated to improving
                                        occupational
                                        lung health in China. Founded during my high school years, the initiative began
                                        with
                                        small patient visits in Nanjing and has since grown into a network of more than
                                        200
                                        volunteers spanning students, doctors, community advocates, and media partners.
                                        Our
                                        mission is simple yet urgent: to turn public attention into sustainable
                                        safeguards for
                                        workers suffering from pneumoconiosis and other dust-related diseases.
                                    </p>

                                    <p>
                                        Over the past three years, we have organized dozens of home visits, coordinated
                                        medical
                                        equipment donations, and supported families with legal and financial guidance.
                                        We raised
                                        over ¥10,000 through community fundraisers and mobilized hundreds of people
                                        through a
                                        600km relay run for World Lung Health Day. Beyond direct aid, we have produced
                                        three
                                        short documentaries to amplify workers&apos; voices, bringing their struggles
                                        into
                                        public conversation. BreathWell exists to ensure that awareness does not vanish
                                        with a
                                        fading headline but is translated into resources, standards, and policy. For us,
                                        volunteers are the oxygen that keeps the movement alive.
                                    </p>
                                </div>
                            </section>
                        </main>
                    </div>
                    <footer className="bg-black text-white text-center py-8 z-10">
                        <div className="space-y-2">
                            <div className="flex items-center justify-center">
                                <span className="font-istok font-medium text-xl">
                                    JIAYI TANG
                                </span>
                                <Link href="/" className="ml-2">
                                    <InstagramIcon size={20} className="text-white"/>
                                </Link>
                            </div>
                            <p className="text-gray-300">xxxxxxxxxx@gmail.com</p>
                        </div>
                    </footer>
                </div>
            </div>
        </div>
    );
}
