import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#141414]">
            <div className="relative lg:h-full overflow-hidden">
                {/* Background */}
                <div
                    className="inset-0 w-full h-[calc(60dvh+10dvw)] lg:h-[calc(100dvh-63px)] lg:mt-16 mt-30 overflow-x-hidden"
                    style={{
                        backgroundImage: 'url(/images/about_page_hero_bg.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Foreground Content */}
                <div
                    className="absolute top-0 left-0 w-full h-dvh flex flex-col justify-center items-center text-white px-4 lg:px-20 mt-20">
                    <div className="text-left space-y-4 max-w-4xl lg:ml-[50%]">
                        <div className="mb-4">
                            <Image
                                src="/images/about_page_im_ellen.png"
                                alt="im_ellen"
                                width={305}
                                height={200}
                                className="rounded-lg"
                            />
                        </div>

                        <div
                            className="lg:pl-10 lg:pr-6 lg:bg-transparent mx-10 rounded-2xl bg-black/20 backdrop-blur-xs">
                            <p className="text-xl lg:text-2xl leading-9 font-source-serif">
                                I was born in 2008 and am currently studying in the Fine Arts classat jinling High
                                School in
                                Nanjing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative w-full overflow-hidden lg:-translate-y-15 -translate-y-10">
                {/* Background */}
                <div
                    className="w-full aspect-[25/27]"
                    style={{
                        backgroundImage: 'url(/images/about_page_handbook.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat',
                    }}
                />

                {/* Foreground Content */}
                <div className="hidden lg:block absolute right-4 bottom-24 w-full h-full">
                    <div className="flex flex-col justify-end items-center text-white h-full">
                        <div className="text-left space-y-4 max-w-4xl ml-[10%]">
                            <div className="ml-[40%] mr-6 p-4 rounded-2xl bg-black/20 backdrop-blur-[2px]">
                                <p className="text-2xl leading-9 font-source-serif">
                                    I love to read and have a collection of over 300 books, including novels, art books,
                                    and magazines. I also enjoy watching movies and TV shows, especially those that are
                                    critically acclaimed or have won awards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Small Screen */}
            <div className="lg:hidden w-full px-4 py-6 text-white">
                <div className="p-4 rounded-2xl">
                    <p className="text-xl leading-9 font-source-serif">
                        I love to read and have a collection of over 300 books, including novels, art books,
                        and magazines. I also enjoy watching movies and TV shows, especially those that are
                        critically acclaimed or have won awards.
                    </p>
                </div>
            </div>

            {/* Dance video */}
            <div className="relative w-full overflow-hidden bg-white">
                {/* Header */}
                <div className="relative py-3 md:py-4 lg:py-[23px] max-w-full flex justify-between items-center">
                    <div className="text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 font-istok font-bold text-black">
                        JIAYI TANG&rsquo;s Channel
                    </div>
                    <div className="w-50 md:w-60 lg:w-80 pr-4 md:pr-8">
                        <Image
                            src="/images/about_page_search.png"
                            alt="search_block"
                            width={300}
                            height={100}
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-end mt-[2px]">
                        <span
                            className="text-black text-[10px] md:text-[13px] lg:text-base font-istok font-medium px-2 py-1 bg-transparent mr-12 md:mr-16 lg:mr-24">
                            Black Pink - Kill This Love
                        </span>
                    </div>
                </div>
                {/* Background */}
                <div
                    className="w-full aspect-[3068/2440] mt-4 mb-6"
                    style={{
                        backgroundImage: 'url(/images/about_page_dance_bg.png)',
                        backgroundSize: 'contain',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div className="absolute left-[22%] bottom-[50%] md:bottom-[51%] lg:bottom-[51%] xl:bottom-[52%] 2xl:bottom-[52.8%] w-[56%] h-[34.8%] sm:h-[36.3%] md:h-[36.3%] lg:h-[36.3%] xl:h-[36.6%] 2xl:h-[37.2%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/8_MUORIpdc4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className="absolute left-[2%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/8_MUORIpdc4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className="absolute left-[34.55%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/eEQmA7ImkWY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div className="absolute right-[2.1%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/8_MUORIpdc4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}
