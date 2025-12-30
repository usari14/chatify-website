export default function CTA() {
    return (
        <section id="cta" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="relative rounded-3xl overflow-hidden">
                    {/* Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#5b72f2] via-[#4654e6] to-[#1f93ff]"></div>
                    <div className="absolute inset-0 opacity-30" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>

                    {/* Content */}
                    <div className="relative px-8 py-16 md:py-24 text-center">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                            Ready to Transform Your<br />Customer Support?
                        </h2>
                        <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-10">
                            Join thousands of Shopify merchants who are delighting their customers
                            with instant, professional live chat support.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
                            <a href="#" className="btn-shopify text-lg px-8 py-4">
                                <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.338 4.346C17.3023 4.11163 17.1005 3.9386 16.8618 3.92603L14.3558 3.80603C14.3558 3.80603 12.6948 2.14503 12.5268 1.97803C12.3578 1.81003 12.0278 1.85303 11.9218 1.88303C11.9038 1.88803 11.5928 1.98303 11.0718 2.14203C10.4328 0.938032 9.40581 0.0550325 8.05281 0.0550325C8.01081 0.0550325 7.96681 0.0580325 7.92281 0.0600325C7.51981-0.444967 7.01881-0.644967 6.58581-0.644967C3.14081-0.644967 1.50181 3.65503 0.937807 5.54003C-0.417193 9.98003 -0.0741934 11.645 0.180807 12.52C0.828807 14.84 4.27581 20.14 8.11281 20.14C8.14581 20.14 8.17981 20.139 8.21181 20.136C8.51381 20.668 8.90581 21.055 9.41281 21.055C10.7428 21.055 11.4598 19.628 11.9808 18.358L15.0238 11.24C15.0238 11.24 17.3528 4.79003 17.338 4.346Z" fill="white" />
                                </svg>
                                Install Free on Shopify
                            </a>
                            <a href="#how-it-works" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold text-lg rounded-xl border border-white/20 hover:bg-white/20 transition-all">
                                Learn More
                            </a>
                        </div>

                        {/* Stats */}
                        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white">2,500+</div>
                                <div className="text-white/70 text-sm">Active Stores</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white">1M+</div>
                                <div className="text-white/70 text-sm">Conversations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-white">4.9/5</div>
                                <div className="text-white/70 text-sm">App Store Rating</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
