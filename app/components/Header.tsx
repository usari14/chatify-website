"use client";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 glass">
            <div className="max-w-7xl mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M8 10.5H16" stroke="white" strokeWidth="2" strokeLinecap="round" />
                                <path d="M8 14H13" stroke="white" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </div>
                        <span className="text-xl font-bold text-gray-900">ChatSlab</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Features</Link>
                        <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">How It Works</Link>
                        <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">FAQ</Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden md:flex items-center gap-4">
                        <a href="#cta" className="btn-primary">
                            Install on Shopify
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3 12H21M3 6H21M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4">
                        <Link href="#features" className="text-gray-600 hover:text-gray-900 font-medium py-2">Features</Link>
                        <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900 font-medium py-2">How It Works</Link>
                        <Link href="#faq" className="text-gray-600 hover:text-gray-900 font-medium py-2">FAQ</Link>
                        <a href="#cta" className="btn-primary text-center">Install on Shopify</a>
                    </nav>
                )}
            </div>
        </header>
    );
}
