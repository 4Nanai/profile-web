"use client";
import {useEffect, useRef} from "react";
import Image from "next/image";

export default function Research() {
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
                        <div className="w-60 md:hidden">
                            <Image src="/images/research_page_hero.png" alt="research_page_hero" width="900" height="800" />
                        </div>
                        <p className="font-source-serif font-bold text-2xl text-[#676767]">
                            Israel - 2019
                        </p>
                        <div className="hidden md:block w-60 absolute top-1/2 -translate-y-1/2 -translate-x-75">
                            <Image src="/images/research_page_hero.png" alt="research_page_hero" width="900" height="800" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="z-20 bg-white">
                <main className="px-6 py-12 max-w-7xl mx-auto">
                    <section
                        className="max-w-fit lg:mx-0 lg:px-30 space-y-6 py-12 mx-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                        <div className="relative">
                            <div
                                className="hidden lg:block absolute top-0 left-0 font-source-serif font-bold text-8xl -translate-x-[120px] -translate-y-3 text-[#1557A2]">
                                01
                            </div>
                            <div className="leading-tight">
                                <div className="block lg:hidden font-source-serif font-bold text-8xl text-[#1557A2]">
                                    01
                                </div>
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    Governing Dust:
                                </p>
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    State Responsibility, Labor Struggles, and the Politics of Pneumoconiosis in China,
                                    Australia, and the United States
                                </p>
                            </div>
                            <div className="mt-4 border-black border-y py-4 px-2">
                                <p className="font-istok font-normal text-base">
                                    Keywords：Pneumoconiosis; Black Lung Disease; Occupational Health Policy; Comparative
                                    Analysis; China; Australia; United States; Labor and Society; Governance
                                </p>
                            </div>
                            <div className="flex justify-end items-center mt-8">
                                <a href="https://google.com"
                                   className="py-2 px-4 bg-[#1557A2] text-white font-istok transition-colors duration-300 hover:bg-[#0d3e6a]">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="lg:mt-24 space-y-4">
                                <p className="font-source-serif font-bold text-xl text-[#1557A2]">
                                    Abstract:
                                </p>
                                <p className="font-istok font-normal text-base">
                                    Pneumoconiosis remains one of the most persistent occupational diseases worldwide.
                                    This paper compares policy responses in China, Australia, and the United States,
                                    focusing on how states regulate dust exposure, provide worker protection, and frame
                                    responsibility. Australia highlights preventive innovation through real-time
                                    monitoring and material bans; China integrates legal enforcement with social welfare
                                    and poverty alleviation; the U.S. emphasizes compensation but struggles with
                                    enforcement and industry resistance. The comparison shows how different governance
                                    models reflect broader political and social structures, offering insight into the
                                    intersection of occupational health, regulation, and labor relations.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section
                        className="max-w-fit lg:mx-0 lg:px-30 space-y-6 py-12 mx-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                        <div className="relative">
                            <div
                                className="hidden lg:block absolute top-0 left-0 font-source-serif font-bold text-8xl -translate-x-[120px] -translate-y-3 text-[#1557A2]">
                                02
                            </div>
                            <div className="leading-tight">
                                <div className="block lg:hidden font-source-serif font-bold text-8xl text-[#1557A2]">
                                    02
                                </div>
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    Analysis of Pneumoconiosis Patients’ Perception and Satisfaction with the Aid from
                                    “Da Ai Qing Chen”: A Cross-Sectional Study
                                </p>
                            </div>
                            <div className="mt-4 border-black border-y py-4 px-2">
                                <p className="font-istok font-normal text-base">

                                    Keywords: Pneumoconiosis, Social Support, Positive Coping Strategies, Patient
                                    Satisfaction, NGO Assistance
                                </p>
                            </div>
                            <div className="flex justify-end items-center mt-8">
                                <a href="https://google.com"
                                   className="py-2 px-4 bg-[#1557A2] text-white font-istok transition-colors duration-300 hover:bg-[#0d3e6a]">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="lg:mt-24 space-y-4">
                                <p className="font-source-serif font-bold text-xl text-[#1557A2]">
                                    Abstract:
                                </p>
                                <p className="font-istok font-normal text-base">
                                    This study examines pneumoconiosis patients’ satisfaction with NGO Love Save
                                    Pneumoconiosis through social support and coping frameworks. Results indicate strong
                                    satisfaction, significantly linked to social support (r=0.508, p&lt;0.01) and
                                    positive coping (r=0.503, p&lt;0.01). Regression confirms both factors enhance
                                    satisfaction. Key challenges remain, including unstable financial aid, inadequate
                                    health support, and burdens from advanced illness. Recommendations highlight
                                    strengthening financial assistance, improving healthcare access, and promoting
                                    regional equity. This study underscores the vital role of NGO-driven support in
                                    pneumoconiosis care.
                                </p>
                            </div>
                        </div>
                    </section>
                    <section
                        className="max-w-fit lg:mx-0 lg:px-30 space-y-6 py-12 mx-6 grid grid-cols-1 lg:grid-cols-2 lg:gap-16">
                        <div className="relative">
                            <div
                                className="hidden lg:block absolute top-0 left-0 font-source-serif font-bold text-8xl -translate-x-[120px] -translate-y-3 text-[#1557A2]">
                                03
                            </div>
                            <div className="leading-tight">
                                <div className="block lg:hidden font-source-serif font-bold text-8xl text-[#1557A2]">
                                    03
                                </div>
                                <p className="font-source-serif font-bold text-3xl text-[#1557A2]">
                                    A Dual-Path Approach to Fake News Detection Based on
                                    Ensemble Learning and Fine-Tuned Large Language
                                </p>
                            </div>
                            <div className="mt-4 border-black border-y py-4 px-2">
                                <p className="font-istok font-normal text-base">
                                    Keywords：fake news detection, machine learning, large language model, ensembled
                                    learning, fine-tuned
                                </p>
                            </div>
                            <div className="flex justify-end items-center mt-8">
                                <a href="https://google.com"
                                   className="py-2 px-4 bg-[#1557A2] text-white font-istok transition-colors duration-300 hover:bg-[#0d3e6a]">
                                    Read More
                                </a>
                            </div>
                        </div>
                        <div>
                            <div className="lg:mt-24 space-y-4">
                                <p className="font-source-serif font-bold text-xl text-[#1557A2]">
                                    Abstract:
                                </p>
                                <p className="font-istok font-normal text-base">
                                    The rapid proliferation of misinformation in today’s digital ecosystem poses threats
                                    to public’s trust on institutions and informed decision-making. To mitigate these
                                    challenges, the development of efficient and
                                    automated fake news detection systems has become increasingly essential. This study
                                    presents a dual-path framework, FIND, an ensembled model, combines Random Forest
                                    classifiers, fine-tuned BERT models, and
                                    prompt-engineered LLMs to address mainstream detection tasks with high accuracy.
                                    Additionally, we fine-tune LLMs to adapt to long-tail news (ie news with uncommon
                                    topics) distributions, enhancing model generalizability and scalability.
                                    Experimental evaluations on benchmark datasets confirm the robustness and
                                    effectiveness of the proposed method in handling complex fake news, proving its
                                    applicability in real-world scenarios.
                                </p>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
}
