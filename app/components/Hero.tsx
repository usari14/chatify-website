export default function Hero() {
    return (
        <section className="gradient-mesh pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center max-w-4xl mx-auto">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 badge mb-6">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Zero Configuration Required
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight tracking-tight mb-6">
                        Live Chat for Shopify,
                        <span className="block bg-gradient-to-r from-[#5b72f2] to-[#1f93ff] bg-clip-text text-transparent">
                            Ready in Seconds
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                        ChatSlab automatically sets up Chatwoot for your store—account, users, and inboxes included.
                        Just install and add the widget. No technical skills needed.
                    </p>

                    {/* CTAs */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                        <a href="#cta" className="btn-shopify">
                            <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.338 4.346C17.3023 4.11163 17.1005 3.9386 16.8618 3.92603L14.3558 3.80603C14.3558 3.80603 12.6948 2.14503 12.5268 1.97803C12.3578 1.81003 12.0278 1.85303 11.9218 1.88303C11.9038 1.88803 11.5928 1.98303 11.0718 2.14203C10.4328 0.938032 9.40581 0.0550325 8.05281 0.0550325C8.01081 0.0550325 7.96681 0.0580325 7.92281 0.0600325C7.51981-0.444967 7.01881-0.644967 6.58581-0.644967C3.14081-0.644967 1.50181 3.65503 0.937807 5.54003C-0.417193 9.98003 -0.0741934 11.645 0.180807 12.52C0.828807 14.84 4.27581 20.14 8.11281 20.14C8.14581 20.14 8.17981 20.139 8.21181 20.136C8.51381 20.668 8.90581 21.055 9.41281 21.055C10.7428 21.055 11.4598 19.628 11.9808 18.358L15.0238 11.24C15.0238 11.24 17.3528 4.79003 17.338 4.346Z" fill="white" />
                            </svg>
                            Install Free on Shopify
                        </a>
                        <a href="#how-it-works" className="btn-secondary">
                            See How It Works
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* Trust Indicators */}
                    <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Free to Install</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>No Credit Card Required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Setup in Under 60 Seconds</span>
                        </div>
                    </div>
                </div>

                {/* Hero Visual */}
                <div className="mt-16 md:mt-20 relative">
                    <div className="absolute inset-0 bg-gradient-to-t from-[#f0f4ff] to-transparent z-10 pointer-events-none" style={{ height: '30%', bottom: 0, top: 'auto' }}></div>
                    <div className="screenshot-container mx-auto max-w-5xl animate-float">
                        <div className="bg-gray-800 px-4 py-3 flex items-center gap-2">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 text-center">
                                <span className="text-gray-400 text-sm">yourstore.myshopify.com</span>
                            </div>
                        </div>
                        <div className="bg-gradient-to-br from-gray-50 to-gray-100 aspect-[16/9] flex items-center justify-center relative">
                            {/* Mockup Store */}
                            <div className="absolute inset-0 p-8 flex">
                                <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
                                    <div className="h-4 w-32 bg-gray-200 rounded mb-4"></div>
                                    <div className="grid grid-cols-3 gap-4">
                                        {[1, 2, 3, 4, 5, 6].map((i) => (
                                            <div key={i} className="aspect-square bg-gray-100 rounded-lg"></div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            {/* Chat Widget */}
                            <div className="absolute bottom-6 right-6 z-20">
                                <div className="bg-white rounded-2xl shadow-2xl w-72 overflow-hidden border border-gray-200">
                                    <div className="bg-gradient-to-r from-[#1f93ff] to-[#5b72f2] p-4 text-white">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="white" strokeWidth="2" />
                                                </svg>
                                            </div>
                                            <div>
                                                <div className="font-semibold">Chat with us</div>
                                                <div className="text-sm text-white/80">We typically reply in minutes</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-gray-50">
                                        <div className="bg-white rounded-lg p-3 shadow-sm">
                                            <p className="text-sm text-gray-600">Hi! 👋 How can we help you today?</p>
                                        </div>
                                    </div>
                                    <div className="p-3 border-t border-gray-100">
                                        <div className="flex items-center gap-2">
                                            <input type="text" placeholder="Type a message..." className="flex-1 px-3 py-2 bg-gray-50 rounded-lg text-sm border-0 outline-none" readOnly />
                                            <button className="w-8 h-8 rounded-lg bg-[#5b72f2] flex items-center justify-center">
                                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M22 2L11 13M22 2L15 22L11 13M22 2L2 9L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
