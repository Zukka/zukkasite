"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyGrami = () => {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <div className="container mx-auto mt-24 px-12 py-4">
        <div className="flex items-center space-x-2">
          <Link
            href="/"
            className="flex w-10 items-center text-slate-200 hover:border-white hover:text-white"
          >
            <ArrowLeftCircleIcon className="h-10 w-10" />
          </Link>
          <p className="text-base leading-normal text-[#ADB7BE] sm:text-lg lg:text-xl">
            Back to home page
          </p>
        </div>

        <h3 className="mb-4 text-2xl font-extrabold text-white sm:text-4xl lg:text-5xl lg:leading-normal">
          Privacy Policy for &quot;Gramì&quot;
        </h3>
        <h2 className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          <strong>Effective date: </strong>07/05/2026
        </h2>

        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Thank you for using &quot;Gramì&quot;. This Privacy Policy explains how
          information is handled when you use our mobile application on iOS and
          Android.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Overview
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Gramì does not require an account. We do not ask you to create a
          profile, and we do not collect personal information such as your
          name, email address, phone number, or precise location in order to use
          the core features of the app.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Data Stored on Your Device
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Gramì stores saved products and recipes locally on your device using a
          local database. This information is not transmitted to any server
          controlled by us, and we do not have direct access to this locally
          stored content.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Data Retention and Deletion
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Saved products and recipes remain stored locally on your device until
          you delete them within the app or uninstall the app from your device.
          You can delete saved items at any time using the delete options
          available in the app.
        </p>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Because Gramì does not use user accounts, there is no account deletion
          process. If you want all locally stored app data removed, you can
          delete saved items individually in the app or uninstall the app from
          your device. If you need assistance, you can contact us at the email
          address listed below.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Information Collected by Third-Party Services
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Gramì uses third-party services that may automatically collect certain
          technical or device-level information for analytics, app stability,
          and advertising. We encourage you to review their privacy policies.
        </p>

        <h6 className="mb-2 text-lg font-bold text-white sm:text-xl lg:text-2xl lg:leading-normal">
          Firebase Crashlytics (Google LLC)
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          We use Firebase Crashlytics to collect crash reports and diagnostic
          information when the app encounters an error. This helps us identify
          and fix stability issues. The information collected may include device
          model, operating system version, app version, and technical crash
          data such as stack traces.
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

        <h6 className="mb-2 text-lg font-bold text-white sm:text-xl lg:text-2xl lg:leading-normal">
          Firebase Analytics (Google LLC)
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          We use Firebase Analytics to understand how the app is used in
          aggregate, for example which features are used most often and general
          usage patterns. The information collected may include device type,
          operating system, app version, and usage events.
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

        <h6 className="mb-2 text-lg font-bold text-white sm:text-xl lg:text-2xl lg:leading-normal">
          Google AdMob (Google LLC)
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Gramì displays banner advertisements provided by Google AdMob. AdMob
          may collect and use data to serve personalized or non-personalized ads,
          depending on your device settings and applicable law. This may include
          identifiers, IP address, and ad interaction data.
          <br />
          <br />
          You can manage advertising preferences through your device settings.
          On iOS, this may include privacy and tracking settings. On Android,
          this may include Google ad settings on your device.
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

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          How Third-Party Data Is Deleted
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Some technical and advertising-related data may be processed by our
          third-party service providers as described above. Retention and
          deletion of that data are governed by the privacy policies and data
          retention practices of those providers. Please refer to their privacy
          documentation for more information about how they retain and delete
          data.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Children&apos;s Privacy
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          Gramì is not directed to children under the age of 13. We do not
          knowingly collect personal information from children. If you believe a
          child has provided personal information through the app, please
          contact us and we will review the request.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Third-Party Links
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          The app may contain links to third-party websites or services. We are
          not responsible for the content, policies, or practices of third-party
          websites or services.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Changes to This Privacy Policy
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          We may update this Privacy Policy from time to time. When we do, we
          will update the effective date shown on this page. We encourage you to
          review this page periodically.
        </p>

        <h6 className="mb-4 text-xl font-extrabold text-white sm:text-2xl lg:text-3xl lg:leading-normal">
          Contact Us
        </h6>
        <p className="mb-6 text-base text-[#ADB7BE] sm:text-lg lg:text-xl">
          If you have any questions about this Privacy Policy or need help with
          deletion of locally stored app data, please contact us at{" "}
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

export default PrivacyGrami;