"use client";
import { useState } from "react";

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const faqs = [
        {
            question: "Do I need any technical skills to set up ChatSlab?",
            answer: "Absolutely not! ChatSlab is designed for non-technical Shopify store owners. Just install the app and everything is configured automatically—your Chatwoot account, user credentials, and inbox are all created for you. To enable the chat widget, simply toggle it on in your Shopify theme settings."
        },
        {
            question: "What is Chatwoot and why should I use it?",
            answer: "Chatwoot is an open-source customer engagement platform trusted by thousands of businesses worldwide. It offers enterprise-grade features like real-time messaging, team collaboration, canned responses, and omnichannel support (website, email, WhatsApp, and more). ChatSlab makes Chatwoot accessible to Shopify merchants without any of the typical setup complexity."
        },
        {
            question: "How long does setup take?",
            answer: "Less than 60 seconds! Once you install ChatSlab from the Shopify App Store, your Chatwoot account is created automatically in the background. Then you just need to enable the chat widget from your theme settings, and you're ready to start chatting with customers."
        },
        {
            question: "Can I customize the chat widget to match my brand?",
            answer: "Yes! You can customize the widget colors, position, welcome message, and more to match your store's branding. The Growth and Scale plans offer even more customization options including custom CSS and white-labeling."
        },
        {
            question: "What happens if I uninstall the app?",
            answer: "Your Chatwoot account and conversation history remain intact even if you uninstall ChatSlab. You can continue accessing your Chatwoot dashboard directly, or reinstall ChatSlab anytime to reconnect. We never delete your data."
        },
        {
            question: "Do you offer support?",
            answer: "Yes! All plans include email support. Growth plans get priority support with faster response times, and Scale plans include dedicated support with a direct line to our team. We're here to help you succeed."
        },
        {
            question: "Can I add team members to manage conversations?",
            answer: "Absolutely! The Starter plan includes 1 agent seat, Growth includes 5 seats, and Scale offers unlimited agents. You can invite your team members directly from the Chatwoot dashboard and assign roles and permissions."
        }
    ];

    return (
        <section id="faq" className="py-20 md:py-32 gradient-mesh">
            <div className="max-w-3xl mx-auto px-6">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <div className="badge inline-flex mb-4">Got Questions?</div>
                    <h2 className="section-title mb-4">Frequently Asked Questions</h2>
                    <p className="section-subtitle mx-auto">
                        Everything you need to know about ChatSlab. Can&apos;t find the answer? Reach out to our team.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="card-static p-2">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`faq-item ${index === faqs.length - 1 ? 'border-b-0' : ''} px-6`}
                        >
                            <button
                                className="faq-question w-full text-left"
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                <span>{faq.question}</span>
                                <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                                >
                                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            {openIndex === index && (
                                <div className="faq-answer">{faq.answer}</div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="mt-12 text-center">
                    <p className="text-gray-500 mb-4">Still have questions?</p>
                    <a href="mailto:support@chatify.app" className="btn-secondary">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Contact Support
                    </a>
                </div>
            </div>
        </section>
    );
}
