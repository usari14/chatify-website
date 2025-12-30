import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms and Conditions | ChatSlab",
    description: "Read the terms and conditions for using ChatSlab - the Chatwoot integration for Shopify.",
};

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white">
            {/* Header */}
            <header className="fixed top-0 left-0 right-0 z-50 glass">
                <div className="max-w-7xl mx-auto px-6 py-4">
                    <div className="flex items-center justify-between">
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
                        <Link href="/" className="btn-secondary text-sm py-2 px-4">
                            ← Back to Home
                        </Link>
                    </div>
                </div>
            </header>

            {/* Content */}
            <main className="pt-32 pb-20">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="mb-12">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Terms and Conditions</h1>
                        <p className="text-gray-500">Last updated: December 30, 2024</p>
                    </div>

                    <div className="prose prose-lg max-w-none">
                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Agreement to Terms</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                By accessing or using ChatSlab (&quot;the Service&quot;), you agree to be bound by these Terms and Conditions
                                (&quot;Terms&quot;). If you disagree with any part of these terms, you do not have permission to access the Service.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms apply to all visitors, users, and others who access or use the Service, including
                                merchants who install ChatSlab on their Shopify stores.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Description of Service</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                ChatSlab is a Shopify application that integrates Chatwoot live chat functionality into your
                                Shopify store. The Service automatically:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Creates a Chatwoot account on your behalf</li>
                                <li>Sets up user credentials and inbox configuration</li>
                                <li>Provides a chat widget for your Shopify storefront</li>
                                <li>Enables real-time customer communication</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Account Registration</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                When you install ChatSlab, you authorize us to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li>Access your Shopify store information necessary for the Service</li>
                                <li>Create a Chatwoot account using your store&apos;s email address</li>
                                <li>Configure the chat widget on your behalf</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                You are responsible for maintaining the confidentiality of your account credentials and for all
                                activities that occur under your account.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Acceptable Use</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">You agree not to use the Service to:</p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Violate any applicable laws or regulations</li>
                                <li>Send spam, unsolicited messages, or harass others</li>
                                <li>Transmit malware, viruses, or harmful code</li>
                                <li>Impersonate any person or entity</li>
                                <li>Interfere with or disrupt the Service or its servers</li>
                                <li>Attempt to gain unauthorized access to the Service</li>
                                <li>Use the Service for any illegal or unauthorized purpose</li>
                                <li>Collect or store personal data about other users without consent</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Intellectual Property</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Service and its original content, features, and functionality are and will remain the
                                exclusive property of ChatSlab and its licensors. The Service is protected by copyright,
                                trademark, and other laws.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                You may not copy, modify, distribute, sell, or lease any part of our Service without our
                                prior written consent.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Third-Party Services</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                The Service integrates with third-party services, including but not limited to:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li><strong>Shopify:</strong> For store integration and app functionality</li>
                                <li><strong>Chatwoot:</strong> For live chat and customer support features</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                Your use of these third-party services is subject to their respective terms of service and
                                privacy policies. We are not responsible for the practices of these third parties.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Payment and Billing</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Some features of the Service may be offered on a subscription basis. By subscribing:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li>You agree to pay all fees associated with your subscription plan</li>
                                <li>Payments are processed through Shopify&apos;s billing system</li>
                                <li>Subscription fees are billed in advance on a recurring basis</li>
                                <li>All fees are non-refundable unless otherwise stated</li>
                            </ul>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to change our pricing at any time. Changes will be communicated in advance,
                                and you may cancel your subscription before the new pricing takes effect.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Service Availability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We strive to provide uninterrupted access to the Service, but we do not guarantee that the
                                Service will be available at all times. We may suspend or discontinue the Service at any time
                                without notice. We are not liable for any modification, suspension, or discontinuation of the Service.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Disclaimer of Warranties</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                THE SERVICE IS PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EITHER
                                EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Implied warranties of merchantability</li>
                                <li>Fitness for a particular purpose</li>
                                <li>Non-infringement</li>
                                <li>Accuracy or reliability of content</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Limitation of Liability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                TO THE MAXIMUM EXTENT PERMITTED BY LAW, CHATSLAB SHALL NOT BE LIABLE FOR ANY INDIRECT,
                                INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS
                                OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR RELATED TO YOUR USE OF THE SERVICE,
                                REGARDLESS OF WHETHER SUCH DAMAGES ARE BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Indemnification</h2>
                            <p className="text-gray-600 leading-relaxed">
                                You agree to indemnify, defend, and hold harmless ChatSlab and its officers, directors,
                                employees, and agents from any claims, damages, losses, liabilities, and expenses (including
                                legal fees) arising out of or related to your use of the Service, your violation of these
                                Terms, or your violation of any rights of another.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Termination</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                We may terminate or suspend your access to the Service immediately, without prior notice, for
                                any reason, including if you breach these Terms. Upon termination:
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2">
                                <li>Your right to use the Service will immediately cease</li>
                                <li>Your Chatwoot account will remain accessible directly through Chatwoot</li>
                                <li>We may delete any data associated with your account</li>
                            </ul>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Governing Law</h2>
                            <p className="text-gray-600 leading-relaxed">
                                These Terms shall be governed by and construed in accordance with the laws of the jurisdiction
                                in which ChatSlab operates, without regard to its conflict of law provisions. Any disputes
                                arising under these Terms shall be resolved in the courts of that jurisdiction.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">14. Changes to Terms</h2>
                            <p className="text-gray-600 leading-relaxed">
                                We reserve the right to modify or replace these Terms at any time. If a revision is material,
                                we will provide at least 30 days&apos; notice prior to any new terms taking effect. By continuing
                                to access or use the Service after revisions become effective, you agree to be bound by the
                                revised terms.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">15. Severability</h2>
                            <p className="text-gray-600 leading-relaxed">
                                If any provision of these Terms is held to be unenforceable or invalid, such provision will
                                be modified to the minimum extent necessary to make it enforceable, and the remaining provisions
                                will continue in full force and effect.
                            </p>
                        </section>

                        <section className="mb-10">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">16. Contact Us</h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                If you have any questions about these Terms, please contact us:
                            </p>
                            <div className="bg-gray-50 rounded-xl p-6">
                                <p className="text-gray-700 mb-2"><strong>Email:</strong> support@chatslab.app</p>
                                <p className="text-gray-700"><strong>Website:</strong> https://chatslab.app</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-gray-900 text-white">
                <div className="max-w-7xl mx-auto px-6 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <p className="text-gray-400 text-sm">
                            © {new Date().getFullYear()} ChatSlab. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 text-sm">
                            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                                Privacy Policy
                            </Link>
                            <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                                Back to Home
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
