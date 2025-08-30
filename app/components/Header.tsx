'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-300 ${
                scrollY > 50 ? 'bg-white/90 backdrop-blur-sm' : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center">
                {/* Logo */}
                <Link
                    href="/"
                    className={`text-xl font-bold transition-colors text-black`}
                >
                    JIAYI TANG
                </Link>

                {/* Navigation */}
                <nav className="hidden md:flex space-x-8">
                    {['Home', 'Research', 'Media', 'About'].map((item) => (
                        <Link
                            key={item}
                            href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                            className={`transition-colors hover:opacity-75 text-gray-600 hover:text-black`}
                        >
                            {item}
                        </Link>
                    ))}
                </nav>

                {/* Mobile menu button */}
                <button
                    className={`md:hidden p-2 transition-colors ${
                        scrollY > 50 ? 'text-black' : 'text-white'
                    }`}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
