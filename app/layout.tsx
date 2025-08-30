import type { Metadata } from 'next';
import './globals.css';
import Header from './components/Header';

export const metadata: Metadata = {
    title: 'Jiayi Tang - Student Researcher',
    description: 'A student researcher at the intersection of mathematics, artificial intelligence, and public policy.',
    keywords: ['mathematics', 'artificial intelligence', 'public policy', 'research'],
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body className="antialiased">
        <Header />
        {children}
        </body>
        </html>
    );
}
