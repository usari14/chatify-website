export default function Integration() {
    return (
        <section className="py-20 md:py-32 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Content */}
                    <div>
                        <div className="badge inline-flex mb-4">Seamless Integration</div>
                        <h2 className="section-title mb-6">
                            Shopify + Chatwoot,<br />
                            <span className="bg-gradient-to-r from-[#96bf48] to-[#1f93ff] bg-clip-text text-transparent">
                                Better Together
                            </span>
                        </h2>
                        <p className="section-subtitle mb-8">
                            ChatSlab bridges the gap between Shopify and Chatwoot, giving you enterprise-level
                            customer support tools without the enterprise-level complexity.
                        </p>

                        <div className="space-y-5">
                            {[
                                { title: "Customer Context", desc: "See customer details and order history right in your inbox" },
                                { title: "Team Collaboration", desc: "Add team members and assign conversations" },
                                { title: "Multi-channel Ready", desc: "Expand to email, WhatsApp, and more when you're ready" }
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20 6L9 17L4 12" stroke="#059669" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                                        <p className="text-gray-500">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Visual */}
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#96bf48]/10 to-[#1f93ff]/10 rounded-3xl transform rotate-3"></div>
                        <div className="relative bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            {/* Integration Visual */}
                            <div className="flex items-center justify-center gap-8 mb-8">
                                {/* Shopify Logo */}
                                <div className="w-20 h-20 rounded-2xl bg-[#96bf48]/10 flex items-center justify-center">
                                    <svg width="40" height="46" viewBox="0 0 109 124" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M95.8 23.7C95.7 23.1 95.2 22.8 94.7 22.7L82.1 21.3C82.1 21.3 73.4 12.6 72.4 11.6C71.4 10.6 69.6 10.9 68.9 11.1C68.8 11.1 66.6 11.8 63 12.9C61.7 8.8 59.3 5.2 54.7 5.2C54.5 5.2 54.2 5.2 54 5.2C52.1 2.7 49.8 1.6 47.8 1.6C33.2 1.6 26.2 19.8 24 29.6C18.1 31.4 13.9 32.7 13.3 32.9C10 33.9 9.9 34 9.5 37.1C9.2 39.5 0 108.7 0 108.7L71.3 122L109 113.4C109 113.4 95.9 24.3 95.8 23.7ZM59.9 14C57 14.9 53.7 15.9 50.3 17C50.3 14.7 50.1 11.6 49.3 9C54 9.9 56.8 14.3 57.9 14C58.6 14 59.2 14 59.9 14ZM46.9 18C40.2 20.1 33 22.3 25.8 24.5C27.7 17.4 31.5 10.4 37.1 7.6C39.2 6.6 42 5.3 45.2 7.7C46.4 10.6 46.9 14.6 46.9 18ZM47.8 5.8C48.6 5.8 49.3 6 50 6.3C43.4 9.5 36.4 17.9 34.3 31.2C28.5 33 22.8 34.8 17.5 36.4C20.4 23.3 31.3 5.8 47.8 5.8Z" fill="#96bf48" />
                                    </svg>
                                </div>

                                {/* Connection Arrow */}
                                <div className="flex flex-col items-center gap-2">
                                    <div className="w-12 h-1 bg-gradient-to-r from-[#96bf48] to-[#1f93ff] rounded-full"></div>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    <div className="w-12 h-1 bg-gradient-to-r from-[#1f93ff] to-[#96bf48] rounded-full"></div>
                                </div>

                                {/* Chatwoot Logo */}
                                <div className="w-20 h-20 rounded-2xl bg-[#1f93ff]/10 flex items-center justify-center">
                                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="#1f93ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M8 10.5H16" stroke="#1f93ff" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8 14H13" stroke="#1f93ff" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>

                            {/* Data Flow */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <div className="text-center text-sm font-medium text-gray-500 mb-4">What ChatSlab Creates For You</div>
                                <div className="grid grid-cols-3 gap-4">
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-800">Account</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-800">Users</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mx-auto mb-2">
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 12H16L14 15H10L8 12H2" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                <path d="M5.45 5.11L2 12V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H20C20.5304 20 21.0391 19.7893 21.4142 19.4142C21.7893 19.0391 22 18.5304 22 18V12L18.55 5.11C18.3844 4.77679 18.1292 4.49637 17.813 4.30028C17.4967 4.10419 17.1321 4.0002 16.76 4H7.24C6.86792 4.0002 6.50326 4.10419 6.18704 4.30028C5.87083 4.49637 5.61558 4.77679 5.45 5.11Z" stroke="#5b72f2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <div className="text-sm font-semibold text-gray-800">Inbox</div>
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
