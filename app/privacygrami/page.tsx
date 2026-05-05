"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyGrami = () => {
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
          Privacy Policy for &quot;Gramì&quot;
        </h3>
        <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>Effective date: </strong>05/05/2025
        </h2>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Thank you for using &quot;Gramì&quot;. Your privacy is important to
          us. This Privacy Policy explains how we collect, use, disclose, and
          safeguard your information when you use our mobile application,
          available on iOS and Android.
        </p>

        {/* Section 1 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Data Stored on Your Device
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Gramì stores your saved products and recipes exclusively on your
          device using a local database. This data never leaves your device and
          is not transmitted to any server controlled by us. We have no access
          to it whatsoever.
        </p>

        {/* Section 2 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Personal Information We Do Not Collect
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We do not collect any personal information such as your name, email
          address, phone number, or location data. No account is required to use
          Gramì.
        </p>

        {/* Section 3 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Third-Party Services
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Gramì integrates the following third-party services, which may collect
          certain non-personal or device-level data automatically. We encourage
          you to review their respective privacy policies.
        </p>

        {/* Firebase Crashlytics */}
        <h6 className="text-white mb-2 text-lg sm:text-xl lg:text-2xl lg:leading-normal font-bold">
          Firebase Crashlytics (Google LLC)
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We use Firebase Crashlytics to automatically collect crash reports and
          diagnostic information when the app encounters an error. This helps us
          identify and fix stability issues. The data collected includes device
          model, operating system version, app version, and stack traces. No
          personally identifiable information is included in crash reports.
          <br />
          <br />
          Privacy policy:{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            https://firebase.google.com/support/privacy
          </a>
        </p>

        {/* Firebase Analytics */}
        <h6 className="text-white mb-2 text-lg sm:text-xl lg:text-2xl lg:leading-normal font-bold">
          Firebase Analytics (Google LLC)
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We use Firebase Analytics to understand how users interact with the
          app in aggregate — such as which features are used most frequently and
          general usage patterns. Data collected may include device type,
          operating system, app version, and anonymised usage events. This data
          is used solely to improve the app experience and is not used to
          identify individual users.
          <br />
          <br />
          Privacy policy:{" "}
          <a
            href="https://firebase.google.com/support/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            https://firebase.google.com/support/privacy
          </a>
        </p>

        {/* AdMob */}
        <h6 className="text-white mb-2 text-lg sm:text-xl lg:text-2xl lg:leading-normal font-bold">
          Google AdMob (Google LLC)
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Gramì displays banner advertisements provided by Google AdMob. AdMob
          may collect and use data to serve personalised or non-personalised
          ads, depending on your device settings and applicable privacy
          regulations (including GDPR and ATT on iOS). Data collected by AdMob
          may include your device&apos;s advertising identifier, IP address,
          and interaction data with ads. You can opt out of personalised
          advertising through your device settings (iOS: Settings → Privacy →
          Tracking; Android: Settings → Google → Ads).
          <br />
          <br />
          Privacy policy:{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            https://policies.google.com/privacy
          </a>
        </p>

        {/* Section 4 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Children&apos;s Privacy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Gramì is not directed at children under the age of 13. We do not
          knowingly collect personal information from children. If you are a
          parent or guardian and believe your child has provided personal
          information through the app, please contact us and we will take
          appropriate action.
        </p>

        {/* Section 5 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Third-Party Links
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The app may contain links to third-party websites or services. We have
          no control over their content or privacy practices and encourage you
          to review their privacy policies before providing any information.
        </p>

        {/* Section 6 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Changes to This Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this page periodically.
        </p>

        {/* Section 7 */}
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Contact Us
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          If you have any questions or concerns about this Privacy Policy,
          please contact us at zukka75@gmail.com or use the contact form on the
          home page. By using Gramì, you agree to the terms described in this
          Privacy Policy.
        </p>
      </div>
    </main>
  );
};

export default PrivacyGrami;