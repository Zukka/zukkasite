"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const TermsBioFlow = () => {
    return (
        <main className="flex min-h-screen flex-col bg-[#121212]">
            <div className="container mt-24 mx-auto px-12 py-4">
                <div className="flex items-center space-x-2">
                    <Link
                        href="/"
                        className="w-10 flex items-center text-slate-200 hover:text-white hover:border-white"
                    >
                        <ArrowLeftCircleIcon className="h-10 w-10" />
                    </Link>
                    <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl leading-normal">
                        Back to home page
                    </p>
                </div>
                <h3 className="text-white mb-4 text-2xl sm:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
                    Terms of Use for &quot;BioFlow&quot;
                </h3>
                <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    <strong>Effective date: </strong>01/03/2026
                </h2>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    Please read these Terms of Use carefully before using the
                    &quot;BioFlow&quot; mobile application. By downloading or using the
                    app, you agree to be bound by these terms.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    1. Acceptance of Terms
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    By accessing or using &quot;BioFlow&quot;, you confirm that you are at
                    least 13 years of age and agree to these Terms of Use. If you do not
                    agree, please do not use the app.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    2. Description of the App
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    &quot;BioFlow&quot; is a biorhythm tracking app that calculates
                    physical, emotional, and intellectual cycles based on a user&apos;s
                    date of birth. The app is intended for personal wellness and
                    entertainment purposes only. Biorhythm calculations are not a
                    substitute for medical, psychological, or professional advice.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    3. In-App Purchases
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
                    &quot;BioFlow&quot; offers the following optional premium options,
                    processed by Apple via In-App Purchase:
                </p>
                <ul className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl list-disc list-inside space-y-2">
                    <li>
                        <strong className="text-white">Lifetime Access</strong> — One-time
                        purchase of €29.99. Unlocks all premium features permanently with no
                        recurring charges.
                    </li>
                    <li>
                        <strong className="text-white">Monthly Subscription</strong> —
                        €2.99/month. Renews automatically every month until cancelled.
                    </li>
                    <li>
                        <strong className="text-white">Annual Subscription</strong> —
                        €17.99/year. Includes a <strong className="text-white">7-day free trial</strong>.
                        After the trial, renews automatically every year until cancelled.
                    </li>
                </ul>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    All prices are in Euros and may vary by region due to local taxes or
                    Apple&apos;s pricing tiers. Purchases are charged to your Apple ID
                    account at confirmation of purchase. All purchases are final and
                    non-refundable unless required by applicable law.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    4. Intellectual Property
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    All content, design, graphics, and code within &quot;BioFlow&quot; are
                    the intellectual property of Alessandro Bellotti and are protected by
                    applicable copyright and intellectual property laws. You may not
                    reproduce, distribute, or create derivative works without explicit
                    written permission.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    5. Disclaimer of Warranties
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    &quot;BioFlow&quot; is provided &quot;as is&quot; without warranties
                    of any kind, either express or implied. We do not guarantee that the
                    app will be error-free, uninterrupted, or free of viruses or other
                    harmful components. Use of the app is at your own risk.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    6. Limitation of Liability
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    To the fullest extent permitted by law, Alessandro Bellotti shall not
                    be liable for any indirect, incidental, special, or consequential
                    damages arising from your use of &quot;BioFlow&quot;, including but
                    not limited to loss of data or personal injury resulting from reliance
                    on app content.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    7. Changes to These Terms
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    We reserve the right to update these Terms of Use at any time. Changes
                    will be posted at{" "}
                    <a
                        href="https://zukka.dev/termsbioflow"
                        className="underline hover:text-white"
                    >
                        zukka.dev/termsbioflow
                    </a>
                    . Continued use of the app after changes constitutes acceptance of the
                    new terms.
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    8. Governing Law
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    These Terms of Use are governed by and construed in accordance with
                    the laws of Italy, without regard to its conflict of law provisions.
                </p>

                {/* ---- SEZIONE NUOVA RICHIESTA DA APPLE ---- */}
                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    9. Subscription Terms
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl">
                    The following terms apply specifically to auto-renewable subscriptions
                    offered within &quot;BioFlow&quot;:
                </p>
                <ul className="text-[#ADB7BE] text-base sm:text-lg mb-4 lg:text-xl list-disc list-inside space-y-3">
                    <li>
                        <strong className="text-white">Free Trial:</strong> The Annual
                        Subscription includes a 7-day free trial for new subscribers.
                        You will not be charged during the trial period. If you do not
                        cancel before the trial ends, your subscription will automatically
                        renew at €17.99/year.
                    </li>
                    <li>
                        <strong className="text-white">Automatic Renewal:</strong>{" "}
                        Subscriptions automatically renew at the end of each billing period
                        (monthly or annually) unless cancelled at least 24 hours before the
                        renewal date.
                    </li>
                    <li>
                        <strong className="text-white">Billing:</strong> Payment is charged
                        to your Apple ID account within 24 hours before the end of the
                        current period.
                    </li>
                    <li>
                        <strong className="text-white">Cancellation:</strong> You can manage
                        and cancel your subscription at any time via your Apple ID settings
                        at{" "}
                        <a
                            href="https://apps.apple.com/account/subscriptions"
                            className="underline hover:text-white"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            apps.apple.com/account/subscriptions
                        </a>
                        . Cancellation takes effect at the end of the current billing period;
                        you will retain access until that date.
                    </li>
                    <li>
                        <strong className="text-white">Price Changes:</strong> We reserve
                        the right to change subscription prices. You will be notified in
                        advance of any price change and will have the opportunity to cancel
                        before the new price takes effect.
                    </li>
                </ul>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    For more information on how we handle your data, please review our{" "}
                    <a
                        href="https://zukka.dev/privacybioflow/"
                        className="underline hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Privacy Policy
                    </a>
                    .
                </p>

                <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
                    Contact Us
                </h6>
                <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
                    For any questions regarding these Terms of Use, please contact us at{" "}
                    <a
                        href="mailto:zukka75@gmail.com"
                        className="underline hover:text-white"
                    >
                        zukka75@gmail.com
                    </a>
                    .
                </p>
            </div>
        </main>
    );
};

export default TermsBioFlow;
