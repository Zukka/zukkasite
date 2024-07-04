"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const Privacy = () => {
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
          Privacy Policy
        </h3>
        <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>Effective date: </strong>01/07/2024
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          This privacy statement describes how Bellotti Alessandro collects and
          uses the personal information you provide. It also describes the
          choices available to you regarding our use of your personal
          information and how you can access and update this information.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          1. Introduction
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We value your privacy and are committed to protecting your personal
          information. This Privacy Policy explains how we collect, use, and
          protect information about you when you use our Android application.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          2. Information We Collect
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          a. Calendar and Contacts Access Our app requires access to your
          calendar and contacts to provide its core functionalities.
          Specifically: We access your calendar to save appointments. We access
          your contacts to retrieve contact information.
        </p>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          b. Usage Data We use analytics services to collect anonymous usage
          data, including: Information about the device you are using (e.g.,
          device type, operating system). Error logs and crash reports to help
          us improve the app.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          <p>3. How We Use Your Information</p>
        </h6>
        <ul className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl list-disc">
          <li>
            <strong>Calendar and Contacts:</strong> The information accessed
            from your calendar and contacts is used solely within the app for
            its intended purposes and is not shared with any external parties.
          </li>
          <li>
            <strong>Analytics:</strong> The anonymous data collected through
            analytics is used to understand app performance, diagnose issues,
            and improve user experience.
          </li>
        </ul>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          4. Data Sharing and Disclosure
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We do not share, sell, or disclose any personal information or data
          accessed from your calendar or contacts to third parties. The
          anonymous analytics data is only used internally to improve our
          services.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          5. Data Security
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We implement appropriate technical and organizational measures to
          protect the data we collect against unauthorized access, alteration,
          disclosure, or destruction.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          <p>6. Your Choices</p>
        </h6>
        <ul className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl list-disc">
          <li>
            <strong>Permissions:</strong> You can manage the permissions granted
            to the app through your device settings.
          </li>
          <li>
            <strong>Analytics:</strong> If you do not wish to share anonymous
            usage data, you can disable analytics through the app&apos;s settings.
          </li>
        </ul>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          7. Changes to This Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with an updated effective date. We encourage
          you to review this policy periodically.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          8. Contact Us
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at zukka75@gmail.com or use the form
          in home page. By using our app, you agree to the collection and use of
          information in accordance with this Privacy Policy.
        </p>
      </div>
    </main>
  );
};

export default Privacy;
