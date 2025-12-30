import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Brand */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#5b72f2] to-[#4654e6] flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.5H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold">ChatSlab</span>
                    </Link>

                    {/* Links */}
                    <div className="flex items-center gap-6 text-sm">
                        <a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-4">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} ChatSlab. All rights reserved.
                    </p>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                        <span className="w-2 h-2 rounded-full bg-green-500"></span>
                        All systems operational
                    </div>
                </div>
            </div>
        </footer>
    );
}
