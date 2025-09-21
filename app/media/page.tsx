"use client";
import {useEffect, useRef} from "react";
import Image from "next/image";

export default function Media() {
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
        window.addEventListener('scroll', handleScroll, {passive: true});

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
        <div className="min-h-[80dvh]">
            <div className="min-h-[80dvh] relative flex justify-center items-center">
                {/* Background */}
                <div
                    ref={backgroundRef}
                    className="fixed inset-0 w-full h-[120vh] -z-10"
                    style={{
                        backgroundImage: 'url(/images/homepage_bg_deeper.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top center',
                        backgroundRepeat: 'no-repeat',
                        willChange: 'transform',
                    }}
                />
                <div className="flex justify-center items-center h-full w-full md:mt-0 mt-20">
                    <div className="flex flex-col items-center gap-5 md:block md:relative">
                        <div className="w-60 md:hidden rounded-xl overflow-hidden">
                            <Image src="/images/media_page_taiwan.png" alt="research_page_hero" width="900"
                                   height="800"/>
                        </div>
                        <p className="font-source-serif font-semibold text-2xl text-[#676767]">
                            Taiwan - 2019
                        </p>
                        <div
                            className="hidden md:block w-60 absolute top-1/2 -translate-y-1/2 -translate-x-75 rounded-xl overflow-hidden">
                            <Image src="/images/media_page_taiwan.png" alt="research_page_hero" width="900"
                                   height="800"/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-20 bg-white">
                <main className="px-6 py-12 max-w-7xl mx-auto">
                    <section
                        className="max-w-fit lg:mx-0 lg:px-20 space-y-6 py-12 mx-6 grid grid-cols-1">
                        <div className="relative">
                            <div className="leading-tight">
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    TED: Math Anxiety
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-xl w-[330px]">
                                    Psychological explanation Mathematical approach
                                </p>
                            </div>
                            <div className="w-full h-fit flex justify-center mt-10">
                                <div className="w-[825px] h-[464px]">
                                    <iframe className="w-full h-full"
                                            src="https://www.youtube.com/embed/5crAwEZvjpc?si=xbQHjeg3_o1imjZs"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="w-full h-fit flex justify-center mt-10">
                                <p className="text-[18px]">
                                    For a long time, Math Anxiety has been a major issue for students worldwide. In
                                    her
                                    speech,I presented my own solution for this issue. We now turn to another
                                    challenge
                                    that shapes our experiences: math anxiety. In Jiayi Tang&rsquo;s speech, we&rsquo;ll explore
                                    the
                                    complexities of mathematical apprehension, we&rsquo;ll uncover how fear and
                                    misunderstanding in different domains impact our ability to embrace and utilize
                                    crucial knowledge. Stay tuned as we decode the causes and solutions for math
                                    anxiety
                                    next. This talk was given at a TEDx event using the TED conference format but
                                    independently organized by a local community.
                                </p>
                            </div>
                        </div>
                        <div className="relative mt-10">
                            <div className="leading-tight">
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    Calligraphy and Painting Works
                                </p>
                            </div>
                            <div className="mt-4">
                                <p className="text-xl w-[330px]">
                                    Great Ink at ease and content
                                </p>
                            </div>
                            <div className="w-full h-fit flex justify-center mt-10">
                                <div className="w-[825px] h-[464px]">
                                    <iframe className="w-full h-full"
                                            src="https://www.youtube.com/embed/dcEdE4OpZJ4/watch?v"
                                            title="YouTube video player" frameBorder="0"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                            referrerPolicy="strict-origin-when-cross-origin"
                                            allowFullScreen>
                                    </iframe>
                                </div>
                            </div>
                            <div className="w-full h-fit flex justify-center mt-10">
                                <p className="text-[18px]">
                                    For a long time, Math Anxiety has been a major issue for students worldwide. In her
                                    speech,I presented my own solution for this issue. We now turn to another challenge
                                    that shapes our experiences: math anxiety. In Jiayi Tang&rsquo;s speech, we&rsquo;ll explore the
                                    complexities of mathematical apprehension, we&rsquo;ll uncover how fear and
                                    misunderstanding in different domains impact our ability to embrace and utilize
                                    crucial knowledge. Stay tuned as we decode the causes and solutions for math anxiety
                                    next. This talk was given at a TEDx event using the TED conference format but
                                    independently organized by a local community.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
        ;
}
