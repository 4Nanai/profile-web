'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import Header from './components/Header';

export default function HomePage() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="min-h-screen">
            <Header />

            {/* Hero Section with Background */}
            <section className="relative min-h-screen overflow-hidden">
                {/* Background Image with Parallax */}
                <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        transform: `translateY(${scrollY * 0.5}px)`,
                        backgroundImage: 'url(/images/homepage_bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat'
                    }}
                />

                {/* Content Overlay */}
                <div className="relative z-10 min-h-screen flex items-center">
                    <div className="max-w-7xl mx-auto px-6 py-12 w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                            {/* Left: Collage Image */}
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-md h-64">
                                    <Image
                                        src="/images/collage.png"
                                        alt="Research and project collage"
                                        fill
                                        className="object-contain"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Right: Introduction Text */}
                            <div className="space-y-6">
                                <h1 className="text-5xl font-bold text-blue-600">Hello,</h1>
                                <h2 className="text-xl font-semibold text-gray-800 leading-relaxed">
                                    A student researcher at the intersection of mathematics, artificial intelligence, and public policy.
                                </h2>
                                <p className="text-gray-600 leading-relaxed">
                                    dedicated to combating misinformation, advancing healthcare equity, and transforming inquiry into real-world impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* White Background Sections */}
            <div className="relative z-20 bg-white">
                <main className="max-w-7xl mx-auto px-6 py-12">
                    {/* Personal Section */}
                    <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24 py-12">
                        {/* Left: Portrait */}
                        <div className="flex justify-center lg:justify-start">
                            <div className="relative w-72 h-96 border-4 border-blue-600">
                                <Image
                                    src="/images/profile.png"
                                    alt="Jiayi Tang portrait"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right: Quote */}
                        <div className="flex items-center">
                            <blockquote className="text-base leading-relaxed text-gray-700">
                                &ldquo; I enjoy practicing{' '}
                                <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                    calligraphy
                                </a>
                                , finding tranquility in the flow of ink across paper. I also love{' '}
                                <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                    street dance
                                </a>
                                , which brings a kind of joy that comes from liberating myself to the rhythm of music. Additionally, I delight in{' '}
                                <a href="#" className="text-blue-600 underline hover:text-blue-800">
                                    painting
                                </a>
                                , using colors to capture fleeting moments of life. These passions allow my world to hold both a serene stillness and a vibrant intensity. &rdquo;
                            </blockquote>
                        </div>
                    </section>

                    {/* BreathWell Section */}
                    <section className="max-w-4xl mx-auto space-y-6 py-12">
                        <h3 className="text-blue-600 font-semibold text-2xl leading-relaxed">
                            BreathWell:<br />
                            Youth for Occupational Lung Health
                        </h3>

                        <div className="space-y-4 text-gray-700 leading-relaxed">
                            <p>
                                BreathWell is a youth-led nonprofit organization dedicated to improving occupational lung health in China. Founded during my high school years, the initiative began with small patient visits in Nanjing and has since grown into a network of more than 200 volunteers spanning students, doctors, community advocates, and media partners. Our mission is simple yet urgent: to turn public attention into sustainable safeguards for workers suffering from pneumoconiosis and other dust-related diseases.
                            </p>

                            <p>
                                Over the past three years, we have organized dozens of home visits, coordinated medical equipment donations, and supported families with legal and financial guidance. We raised over ¥10,000 through community fundraisers and mobilized hundreds of people through a 600km relay run for World Lung Health Day. Beyond direct aid, we have produced three short documentaries to amplify workers&apos; voices, bringing their struggles into public conversation. BreathWell exists to ensure that awareness does not vanish with a fading headline but is translated into resources, standards, and policy. For us, volunteers are the oxygen that keeps the movement alive.
                            </p>
                        </div>
                    </section>
                </main>

                {/* Footer */}
                <footer className="bg-black text-white text-center py-8">
                    <div className="space-y-2">
                        <p className="font-medium">JIAYI TANG ©</p>
                        <p className="text-gray-300">xxxxxxxxxx@gmail.com</p>
                    </div>
                </footer>
            </div>
        </div>
    );
}
