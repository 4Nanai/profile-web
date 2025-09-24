import Link from "next/link";
import InstagramIcon from "@/public/icons/Instagram";

export default function Footer() {
    return(
        <footer className="relative bg-black text-white text-center py-8">
            <div className="space-y-2">
                <div className="flex items-center justify-center">
                                <span className="font-istok font-medium text-xl">
                                    JIAYI TANG
                                </span>
                    <Link href="/" className="ml-2">
                        <InstagramIcon size={20} className="text-white"/>
                    </Link>
                </div>
                <p className="text-gray-300">tangjiayi0531@126.com</p>
                <div className="md:absolute md:bottom-4 md:left-4 md:mt-0 justify-center mt-6">
                    <p className="text-white/80 font-istok text-[15px]">&copy; 2025 Jiayi Tang | Ellen</p>
                </div>
            </div>
        </footer>
    )
}
