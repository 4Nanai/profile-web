import Link from "next/link";
import InstagramIcon from "@/public/icons/Instagram";

export default function Footer() {
    return(
        <footer className="bg-black text-white text-center py-8">
            <div className="space-y-2">
                <div className="flex items-center justify-center">
                                <span className="font-istok font-medium text-xl">
                                    JIAYI TANG
                                </span>
                    <Link href="/" className="ml-2">
                        <InstagramIcon size={20} className="text-white"/>
                    </Link>
                </div>
                <p className="text-gray-300">xxxxxxxxxx@gmail.com</p>
            </div>
        </footer>
    )
}
