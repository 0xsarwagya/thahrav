import React from "react";

const PrivacyPolicy = () => {
    return (
        <div className="max-w-4xl mx-auto p-6 rounded-lg shadow-lg">
            <h1 className="text-3xl font-semibold mb-6">Privacy Policy</h1>
            <p className="text-lg text-muted-foreground mb-4">
                At <strong>Thahrav</strong>, we respect your privacy and are committed to
                protecting your personal data. This Privacy Policy explains how we collect,
                use, and safeguard your information when you interact with our website and
                services. By using our site, you agree to the terms outlined below.
            </p>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">1. Information We Collect</h2>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Personal Identifiers: Name, email address, phone number, shipping address, and payment information.</li>
                    <li>Device Information: IP address, browser type, and usage data.</li>
                    <li>Transaction Details: Order and payment information.</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">2. How We Use Your Information</h2>
                <ul className="list-disc pl-6 mt-2 text-muted-foreground">
                    <li>Processing Orders: To fulfill and deliver your orders.</li>
                    <li>Improving Our Services: To enhance user experience and offerings.</li>
                    <li>Marketing Communications: For sending promotional emails (if opted-in).</li>
                </ul>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">3. How We Protect Your Data</h2>
                <p className="text-muted-foreground">
                    We take your privacy seriously and implement various security measures to
                    safeguard your personal data, including encrypted transactions and secure
                    payment gateways like Paytm and PhonePe.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">4. Sharing Your Information</h2>
                <p className="text-muted-foreground">
                    We do not sell or rent your personal information. We only share data with
                    trusted partners to process orders and provide services.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">5. Your Rights</h2>
                <p className="text-muted-foreground">
                    You have the right to access, update, delete, or opt-out from marketing
                    communications. For these rights, please contact us at <strong>contact@thahrav.shop</strong>.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">6. Cookies</h2>
                <p className="text-muted-foreground">
                    We use cookies to enhance your experience. You can disable them through
                    your browser settings, but it may affect site functionality.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">7. Changes to This Privacy Policy</h2>
                <p className="text-muted-foreground">
                    We may update this Privacy Policy periodically. Any changes will be
                    posted here with a new effective date.
                </p>
            </section>

            <section className="mb-8">
                <h2 className="text-2xl font-medium ">8. Contact Us</h2>
                <p className="text-muted-foreground">
                    If you have any questions, please contact us at <strong>contact@thahrav.shop</strong>.
                </p>
            </section>
        </div>
    );
};

export default PrivacyPolicy;