"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyImFree = () => {
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
          Privacy Policy for &quot;I&apos;m Free&quot;
        </h3>
        <h2 className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>Effective date: </strong>01/07/2024
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Thank you for using &quot;I&apos;m Free&quot; mobile application! Your
          privacy is important to us. This Privacy Policy explains how we
          collect, use, disclose, and safeguard your information when you use
          our mobile application.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Information We Do Not Collect
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We do not collect any personal information or data from our users.
          &quot;I&apos;m Free&quot; operates on a strictly no-data-collection
          policy. We do not gather information such as names, email addresses,
          phone numbers, location data, or any other identifiable data.
        </p>

        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Use of Your Personal Information
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Since we do not collect any personal information, we do not use or
          share your personal information with anyone.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          <p>Non-Personal Information</p>
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may collect non-personal information automatically when you use our
          app. This information is used solely to improve the functionality and
          user experience of the app and does not identify you personally.
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
          &quot;I&apos;m Free&quot; does not knowingly collect personal
          identifiable information from children under 13. In the case we
          discover that a child under 13 has provided us with personal
          information, we immediately delete this from our servers. If you are a
          parent or guardian and you are aware that your child has provided us
          with personal information, please contact us so that we will be able
          to do necessary actions.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Changes to This Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We may update our Privacy Policy from time to time. Thus, you are
          advised to review this page periodically for any changes. We will
          notify you of any changes by posting the new Privacy Policy on this
          page.
        </p>
        <h6 className="text-white mb-4 text-xl sm:text-2xl lg:text-3xl lg:leading-normal font-extrabold">
          Contact Us
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

export default PrivacyImFree;
