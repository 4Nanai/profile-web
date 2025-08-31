import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';
import localFont from "next/font/local";
import { Source_Serif_4 } from 'next/font/google'

export const metadata: Metadata = {
    title: 'Jiayi Tang - Student Researcher',
    description: 'A student researcher at the intersection of mathematics, artificial intelligence, and public policy.',
    keywords: ['mathematics', 'artificial intelligence', 'public policy', 'research'],
};

const sourceSerif = localFont({
    src: [
        {
            path: '../public/fonts/SourceSerif4-VariableFont_opsz,wght.ttf',
            weight: '100 900',
            style: 'normal',
        }
    ],
    display: 'block',
    variable: '--font-source-serif',
})

const istok = localFont({
    src: [
        {
            path: '../public/fonts/IstokWeb-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../public/fonts/IstokWeb-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../public/fonts/IstokWeb-Italic.ttf',
            weight: '400',
            style: 'italic',
        },
        {
            path: '../public/fonts/IstokWeb-BoldItalic.ttf',
            weight: '700',
            style: 'italic',
        }
    ],
    display: 'block',
    variable: '--font-istok',
})

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className={`antialiased ${sourceSerif.variable} ${istok.variable}`}>
        <Header />
        {children}
        </body>
        </html>
    );
}
