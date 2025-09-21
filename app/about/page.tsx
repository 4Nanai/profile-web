import Image from "next/image";
import Link from "next/link";
import VideoPlayer from "@/app/components/VideoPlayer";

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-[#141414]">
            <div className="relative min-h-fit pb-[100px] overflow-hidden">
                {/* Background */}
                <div
                    className="inset-0 md:w-[69%] w-[85%] aspect-[2128/1358] md:mt-16 mt-30 overflow-x-hidden"
                    style={{
                        backgroundImage: 'url(/images/about_page_hero_scene.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                <div
                    className="absolute md:top-0 top-1/20 right-0 md:w-[69%] w-[85%] aspect-[1794/1279] md:mt-16 mt-30 overflow-x-hidden"
                    style={{
                        backgroundImage: 'url(/images/about_page_hero_vector.png)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'top left',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Foreground Content */}
                <div
                    className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center text-white px-4 lg:px-20 mt-20">
                    <div className="text-left space-y-4 max-w-4xl lg:ml-[50%]">
                        <Image
                            src="/images/about_page_im_ellen.png"
                            alt="im_ellen"
                            width={305}
                            height={200}
                            className="rounded-lg"
                            style={{ width: "auto", height: "auto" }}
                        />
                        <div
                            className="md:ml-16 md:mr-60 lg:ml-10 lg:mr-6 lg:bg-transparent mx-10 rounded-2xl bg-black/20 backdrop-blur-xs">
                            <p className="text-xl lg:text-2xl leading-9 font-source-serif">
                                I was born in 2008 and am currently studying in the Fine Arts class at Jinling High
                                School in
                                Nanjing.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="relative w-full -translate-y-[100px]">
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
                <div className="hidden lg:block absolute right-4 bottom-24 ">
                    <div className="flex flex-col justify-end items-center text-white">
                        <div className="text-left space-y-4 max-w-4xl ml-[10%]">
                            <div className="ml-[30%] mr-[10%] p-4 rounded-2xl bg-black/20 backdrop-blur-[2px]">
                                <p className="text-2xl leading-9 font-source-serif">
                                    I love to read and have a collection of over 300 books, including novels, art books,
                                    and magazines. I also enjoy watching movies and TV shows, especially those that are
                                    critically acclaimed or have won awards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Small Screen */}
            <div className="lg:hidden w-full px-4 py-6 text-white -translate-y-[100px]">
                <div className="p-4 rounded-2xl">
                    <p className="text-xl leading-9 font-source-serif">
                        I love to read and have a collection of over 300 books, including novels, art books,
                        and magazines. I also enjoy watching movies and TV shows, especially those that are
                        critically acclaimed or have won awards.
                    </p>
                </div>
            </div>

            {/* Dance video */}
            <section className="relative w-full overflow-hidden bg-white">
                {/* Header */}
                <div className="relative py-3 md:py-4 lg:py-[23px] max-w-full flex justify-between items-center">
                    <div
                        className="hidden sm:block sm:text-xl md:text-2xl lg:text-3xl pl-4 md:pl-8 font-istok font-bold text-black">
                        JIAYI TANG&rsquo;s Channel
                    </div>
                    <div className="block text-sm sm:hidden pl-4 font-istok font-bold text-black">
                        JIAYI&rsquo;s Channel
                    </div>
                    <div className="w-45 sm:w-50 md:w-60 lg:w-80 pr-4 md:pr-8">
                        <Image
                            src="/images/about_page_search.png"
                            alt="search_block"
                            width={300}
                            height={100}
                        />
                    </div>
                    <div className="absolute inset-0 flex items-center justify-end mt-[2px]">
                        <span
                            className="text-black text-[10px] md:text-[13px] lg:text-base font-istok font-medium px-2 py-1 bg-transparent mr-10 sm:mr-12 md:mr-16 lg:mr-24">
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
                <div
                    className="absolute left-[20%] bottom-[45.8%] sm:bottom-[50%] md:bottom-[51%] lg:bottom-[51%] xl:bottom-[52%] 2xl:bottom-[52.8%] w-[60%] h-[40%] sm:h-[36.3%] md:h-[36.3%] lg:h-[36.3%] xl:h-[36.6%] 2xl:h-[37.2%]">
                    <VideoPlayer url="https://ch1tose-blog-1314393331.cos.ap-hongkong.myqcloud.com/EllenWeb/%E5%AD%97%E5%B9%95%E7%89%88.mp4"/>
                </div>
                <div
                    className="absolute left-[2%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/8_MUORIpdc4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div
                    className="absolute left-[34.55%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/eEQmA7ImkWY"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
                <div
                    className="absolute right-[2.1%] bottom-[3.6%] md:bottom-[2.8%] lg:bottom-[1.8%] xl:bottom-[1.6%] w-[30.8%] md:w-[30.7%] h-[19.4%] xl:h-[19.6%]">
                    <iframe className="w-full h-full" src="https://www.youtube.com/embed/8_MUORIpdc4"
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen></iframe>
                </div>
            </section>
        </div>
    );
}
