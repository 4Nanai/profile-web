'use client';

import Link from 'next/link';
import {useEffect, useState, useRef} from 'react';
import {usePathname} from 'next/navigation';

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
    const [menuOpen, setMenuOpen] = useState(false);

    const navItems = ['Home', 'Research', 'Media', 'About'] as const;

    // Theme colors for each page
    const pageColors = {
        'Home': {
            primary: 'rgb(37, 99, 235)', // blue-600
            primaryHex: '#2563eb',
            light: 'rgb(219, 234, 254)', // blue-100
            hover: 'rgb(59, 130, 246)', // blue-500
            text: 'text-blue-600',
            bg: 'bg-blue-50',
            hoverBg: 'hover:bg-blue-500/25',
            // Navbar text colors
            navbarText: 'text-black', // navbar text color
            navbarTextInactive: 'text-gray-600/75',
            navbarTextHover: 'hover:text-gray-800',
            mobileButton: 'text-black hover:bg-black/5',
            navbarBg: 'bg-white'
        },
        'Research': {
            primary: 'rgb(34, 197, 94)', // green-500
            primaryHex: '#22c55e',
            light: 'rgb(220, 252, 231)', // green-100
            hover: 'rgb(34, 197, 94)', // green-500
            text: 'text-green-500',
            bg: 'bg-green-50',
            hoverBg: 'hover:bg-green-500/25',
            // Navbar text colors
            navbarText: 'text-gray-800',
            navbarTextInactive: 'text-gray-500',
            navbarTextHover: 'hover:text-gray-900',
            mobileButton: 'text-gray-800 hover:bg-gray-800/5',
            navbarBg: 'bg-white'
        },
        'Media': {
            primary: 'rgb(168, 85, 247)', // purple-500
            primaryHex: '#a855f7',
            light: 'rgb(243, 232, 255)', // purple-100
            hover: 'rgb(147, 51, 234)', // purple-600
            text: 'text-purple-500',
            bg: 'bg-purple-50',
            hoverBg: 'hover:bg-purple-500/25',
            // Navbar text colors
            navbarText: 'text-gray-900',
            navbarTextInactive: 'text-gray-400',
            navbarTextHover: 'hover:text-gray-700',
            mobileButton: 'text-gray-900 hover:bg-gray-900/5',
            navbarBg: 'bg-white'
        },
        'About': {
            primary: 'rgb(236, 72, 153)', // pink-500
            primaryHex: '#ec4899',
            light: 'rgb(252, 231, 243)', // pink-100
            hover: 'rgb(219, 39, 119)', // pink-600
            text: 'text-pink-500',
            bg: 'bg-pink-50',
            hoverBg: 'hover:bg-pink-500/25',
            // Navbar text colors
            navbarText: 'text-white',
            navbarTextInactive: 'text-white/75',
            navbarTextHover: 'hover:text-white/90',
            mobileButton: 'text-white hover:bg-white/10',
            navbarBg: 'bg-black/70'
        }
    };

    // get current page color scheme
    const getCurrentPageColor = () => {
        const activeItem = navItems.find(item => {
            if (item === 'Home') {
                return pathname === '/';
            }
            return pathname === `/${item.toLowerCase()}`;
        });
        return activeItem ? pageColors[activeItem] : pageColors['Home'];
    };

    const currentColor = getCurrentPageColor();

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
                setIndicatorStyle(prev => ({...prev, opacity: 0}));
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

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    // get item color based on active state
    const getItemColor = (item: typeof navItems[number]) => {
        const isActive = item === 'Home'
            ? pathname === '/'
            : pathname === `/${item.toLowerCase()}`;

        if (isActive) {
            return pageColors[item];
        }
        return null;
    };

    return (
        <>
            <style jsx>{`
                .theme-transition {
                    transition: all 0.3s ease-in-out;
                }
                .sliding-indicator {
                    background: ${currentColor.primary};
                    transition: all 0.3s ease-in-out, background-color 0.3s ease-in-out;
                }
            `}</style>

            <header
                className={`fixed top-0 left-0 right-0 z-50 px-6 lg:py-4 py-10 transition-all duration-300 ${
                    scrollY > 50 || menuOpen ? `${currentColor.navbarBg} backdrop-blur-sm` : 'bg-transparent'
                }`}
            >
                <div className="max-w-full flex justify-between items-center">
                    {/* Logo */}
                    <Link
                        href="/"
                        className={`text-2xl font-istok font-bold theme-transition ${currentColor.navbarText} lg:pt-0 pt-1`}
                    >
                        JIAYI TANG
                    </Link>

                    {/* Desktop Navigation */}
                    <nav ref={navRef} className="hidden lg:flex gap-8 relative">
                        {navItems.map((item) => {
                            const isActive = item === 'Home'
                                ? pathname === '/'
                                : pathname === `/${item.toLowerCase()}`;

                            const itemColor = getItemColor(item);

                            return (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className={`relative theme-transition hover:opacity-75 text-lg font-source-serif font-semibold ${
                                        isActive && itemColor
                                            ? itemColor.text
                                            : `${currentColor.navbarTextInactive} ${currentColor.navbarTextHover}`
                                    }`}
                                >
                                    {item}
                                </Link>
                            );
                        })}

                        {/* Sliding indicator bar with dynamic color */}
                        <div
                            className={`absolute bottom-0 h-0.5 sliding-indicator rounded-full ${
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
                        className={`lg:hidden p-2 transition-all duration-300 ${currentColor.mobileButton} rounded-lg`}
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 transition-all duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d={menuOpen
                                    ? "M6 18L18 6M6 6l12 12"
                                    : "M4 6h16M4 12h16M4 18h16"
                                }
                            />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Background Mask Layer */}
            <div
                className={`fixed top-0 left-0 right-0 bottom-0 z-30 md:hidden bg-gradient-to-b from-black/10 via-black/15 to-black/25 transition-opacity duration-300 ease-out backdrop-blur-sm ${
                    menuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                onClick={closeMenu}
            />

            {/* Mobile menu drawer */}
            <div
                className={`fixed top-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ease-in-out ${
                    menuOpen ? 'translate-y-0' : '-translate-y-full'
                }`}
            >
                <div className={`bg-white/90 backdrop-blur-sm pt-36 pb-6 px-6 ${menuOpen ? 'shadow-lg' : ''}`}>
                    <nav className="flex flex-col space-y-1">
                        {navItems.map((item, index) => {
                            const isActive = item === 'Home'
                                ? pathname === '/'
                                : pathname === `/${item.toLowerCase()}`;

                            const itemColor = getItemColor(item);

                            return (
                                <Link
                                    key={item}
                                    href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                                    className={`py-3 px-4 rounded-lg text-lg font-source-serif font-semibold transition-all duration-200 transform theme-transition ${
                                        menuOpen
                                            ? 'translate-x-0 opacity-100'
                                            : 'translate-x-4 opacity-0'
                                    } ${
                                        isActive && itemColor
                                            ? `${itemColor.text} ${itemColor.bg}`
                                            : `text-gray-700 hover:text-black ${currentColor.hoverBg}`
                                    }`}
                                    style={{
                                        transitionDelay: menuOpen ? `${index * 50}ms` : '0ms'
                                    }}
                                    onClick={closeMenu}
                                >
                                    {item}
                                </Link>
                            );
                        })}
                    </nav>
                </div>
            </div>
        </>
    );
}
