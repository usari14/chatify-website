export default function Pricing() {
    const plans = [
        {
            name: "Starter",
            price: "Free",
            period: "forever",
            description: "Perfect for small stores just getting started",
            features: [
                "1 Agent seat",
                "500 conversations/month",
                "Website chat widget",
                "Basic customization",
                "Email support"
            ],
            cta: "Get Started Free",
            popular: false,
            ctaStyle: "btn-secondary"
        },
        {
            name: "Growth",
            price: "$29",
            period: "/month",
            description: "For growing stores with more customer interactions",
            features: [
                "5 Agent seats",
                "Unlimited conversations",
                "Website + email channels",
                "Full widget customization",
                "Canned responses",
                "Priority support"
            ],
            cta: "Start Free Trial",
            popular: true,
            ctaStyle: "btn-primary"
        },
        {
            name: "Scale",
            price: "$79",
            period: "/month",
            description: "For high-volume stores with advanced needs",
            features: [
                "Unlimited agents",
                "Unlimited conversations",
                "All channels (WhatsApp, etc.)",
                "API access",
                "Advanced analytics",
                "Dedicated support",
                "Custom integrations"
            ],
            cta: "Contact Sales",
            popular: false,
            ctaStyle: "btn-secondary"
        }
    ];

    return (
        <section id="pricing" className="py-20 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge inline-flex mb-4">Simple Pricing</div>
                    <h2 className="section-title mb-4">Plans That Grow With You</h2>
                    <p className="section-subtitle mx-auto">
                        Start free, upgrade when you&apos;re ready. No hidden fees, no surprises.
                    </p>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {plans.map((plan, index) => (
                        <div
                            key={index}
                            className={`relative rounded-2xl p-8 ${plan.popular
                                    ? 'bg-gradient-to-b from-[#5b72f2] to-[#4654e6] text-white shadow-2xl scale-105'
                                    : 'bg-white border border-gray-200'
                                }`}
                        >
                            {plan.popular && (
                                <div className="pricing-popular">Most Popular</div>
                            )}

                            <div className="mb-6">
                                <h3 className={`text-xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.name}
                                </h3>
                                <p className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                                    {plan.description}
                                </p>
                            </div>

                            <div className="mb-6">
                                <span className={`text-4xl font-extrabold ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                                    {plan.price}
                                </span>
                                <span className={`text-sm ${plan.popular ? 'text-white/80' : 'text-gray-500'}`}>
                                    {plan.period}
                                </span>
                            </div>

                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, i) => (
                                    <li key={i} className="flex items-center gap-3">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className={plan.popular ? 'text-white' : 'text-green-500'}
                                        >
                                            <path
                                                d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                                                stroke="currentColor"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                        <span className={`text-sm ${plan.popular ? 'text-white' : 'text-gray-600'}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href="#"
                                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${plan.popular
                                        ? 'bg-white text-[#5b72f2] hover:bg-gray-100'
                                        : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                    }`}
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>

                {/* Trust Indicators */}
                <div className="mt-16 text-center">
                    <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 12L11 14L15 10" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>Secure payments via Shopify</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#6b7280" strokeWidth="2" />
                                <path d="M12 6V12L16 14" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                            <span>Cancel anytime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3 11L12 2L21 11V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V11Z" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M9 22V12H15V22" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span>14-day money-back guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
