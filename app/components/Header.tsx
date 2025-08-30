'use client';

import Link from 'next/link';
import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
    const [scrollY, setScrollY] = useState(0);
    const pathname = usePathname();
    const navRef = useRef<HTMLElement>(null);
    const [indicatorStyle, setIndicatorStyle] = useState({
        width: 0,
        left: 0,
        opacity: 0
    });
    const [isAnimating, setIsAnimating] = useState(false);

    const navItems = ['Home', 'Research', 'Media', 'About'];

    useEffect(() => {
        const handleScroll = () => setScrollY(window.scrollY);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const updateIndicator = () => {
            if (!navRef.current) return;

            const activeItem = navItems.find(item => {
                if (item === 'Home') {
                    return pathname === '/';
                }
                return pathname === `/${item.toLowerCase()}`;
            });

            if (!activeItem) {
                setIndicatorStyle(prev => ({ ...prev, opacity: 0 }));
                return;
            }

            const activeIndex = navItems.indexOf(activeItem);
            const linkElements = navRef.current.querySelectorAll('a');
            const activeElement = linkElements[activeIndex] as HTMLElement;

            if (activeElement) {
                setIsAnimating(true);
                const navRect = navRef.current.getBoundingClientRect();
                const activeRect = activeElement.getBoundingClientRect();

                setIndicatorStyle({
                    width: activeRect.width,
                    left: activeRect.left - navRect.left,
                    opacity: 1,
                });

                // 动画完成后重置状态
                setTimeout(() => setIsAnimating(false), 300);
            }
        };

        const timer = setTimeout(updateIndicator, 0);
        window.addEventListener('resize', updateIndicator);

        return () => {
            clearTimeout(timer);
            window.removeEventListener('resize', updateIndicator);
        };
    }, [pathname]);

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
                    className="text-xl font-bold transition-colors text-black"
                >
                    JIAYI TANG
                </Link>

                {/* Navigation */}
                <nav ref={navRef} className="hidden md:flex space-x-8 relative">
                    {navItems.map((item) => {
                        const isActive = item === 'Home'
                            ? pathname === '/'
                            : pathname === `/${item.toLowerCase()}`;

                        return (
                            <Link
                                key={item}
                                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                className={`relative transition-all duration-200 hover:opacity-75 text-[18px] font-source-han font-semibold ${
                                    isActive ? 'text-blue-600' : 'text-gray-600/75 hover:text-black'
                                }`}
                            >
                                {item}
                            </Link>
                        );
                    })}

                    {/* 滑动的蓝色指示条 */}
                    <div
                        className={`absolute bottom-0 h-0.5 bg-blue-600 rounded-full transition-all duration-300 ease-in-out ${
                            isAnimating ? 'scale-y-125' : 'scale-y-100'
                        }`}
                        style={{
                            width: `${indicatorStyle.width}px`,
                            transform: `translateX(${indicatorStyle.left}px)`,
                            opacity: indicatorStyle.opacity,
                        }}
                    />
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
