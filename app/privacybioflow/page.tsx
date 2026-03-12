"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyBioFlow = () => {
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
          Privacy Policy for &quot;BioFlow&quot;
        </h3>
        <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>Effective date: </strong>01/03/2026
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Thank you for using &quot;BioFlow&quot; mobile application! Your
          privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our mobile application.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Information We Do Not Collect
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We do not collect any personal information or data from our users.
          &quot;BioFlow&quot; operates on a strictly no-data-collection policy.
          We do not gather information such as names, email addresses, phone
          numbers, location data, or any other identifiable data. All biorhythm
          data and profiles are stored exclusively on your device.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Use of Your Personal Information
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Since we do not collect any personal information, we do not use or
          share your personal information with anyone. Birth dates and profile
          names entered in the app are used solely for biorhythm calculations
          and are never transmitted outside your device.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Non-Personal Information
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may collect non-personal information automatically when you use our
          app (e.g. crash reports, app performance data via Apple&apos;s
          built-in analytics). This information is used solely to improve the
          functionality and user experience of the app and does not identify you
          personally.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          In-App Purchases
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          &quot;BioFlow&quot; offers optional premium features via in-app
          purchases managed entirely by Apple. We do not process or store any
          payment information. Please refer to Apple&apos;s Privacy Policy for
          details on how purchase data is handled.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Third-Party Links
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Our app may contain links to third-party websites or services. We have
          no control over the content and privacy policies of these third-party
          sites or services. We encourage you to read the privacy policies of
          any third-party sites you visit.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Children&apos;s Privacy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          &quot;BioFlow&quot; does not knowingly collect personal identifiable
          information from children under 13. If you are a parent or guardian
          and you are aware that your child has provided us with personal
          information, please contact us so that we will be able to take
          necessary actions.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Changes to This Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may update our Privacy Policy from time to time. You are advised to
          review this page periodically for any changes. We will notify you of
          any changes by posting the new Privacy Policy on this page.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Contact Us
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="mailto:zukka75@gmail.com" className="underline hover:text-white">
            zukka75@gmail.com
          </a>
          . By using our app, you agree to the collection and use of information
          in accordance with this Privacy Policy.
        </p>
      </div>
    </main>
  );
};

export default PrivacyBioFlow;
