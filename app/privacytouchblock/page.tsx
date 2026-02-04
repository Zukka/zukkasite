"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyTouchBlock = () => {
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
          <strong>Last updated: </strong>27/01/2026
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          This Privacy Policy describes how Touch Lock (hereinafter the
          &quot;Application&quot;), developed by Alessandro Bellotti, collects,
          uses, and protects users&apos; personal data. By using the
          Application, the user accepts the practices described in this Privacy
          Policy.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          1. Data Controller
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The data controller is:
          <br />
          Alessandro Bellotti
          <br />
          Contact email: zukka75@gmail.com
          <br />
          Website: https://zukka.dev
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          2. Type of Application
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The Application allows users to:
          <br />
          • Enable/disable a touch screen lock service
          <br />
          • Display an overlay button to lock/unlock touch
          <br />
          • Use the app in a free mode with limitations or via Premium
          subscriptions
          <br />
          <br />
          The Application does not collect data manually entered by the user,
          nor personal content.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          3. Data Collected
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>3.1 Data NOT collected</strong>
          <br />
          <br />
          The Application does not collect or store:
          <br />
          • Personal identifying data (name, surname, address, email)
          <br />
          • Contacts, photos, videos, files
          <br />
          • Content typed or displayed on the screen
          <br />
          • Touch input data or interactions blocked by the service
          <br />
          <br />
          The touch lock service operates locally on the device and does not log
          or transmit any interaction.
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>3.2 Data collected automatically</strong>
          <br />
          <br />
          The Application uses third-party services that may collect anonymous
          or pseudonymized data, including:
          <br />
          <br />
          <strong>Firebase Analytics</strong>
          <br />
          Used to analyze:
          <br />
          • Number of sessions
          <br />
          • Session duration
          <br />
          • Usage events (e.g. enabling/disabling the service)
          <br />
          • General device information (model, Android version)
          <br />
          <br />
          <strong>Firebase Crashlytics</strong>
          <br />
          Used to:
          <br />
          • Detect crashes and malfunctions
          <br />
          • Improve the stability and reliability of the Application
          <br />
          <br />
          The data collected does not allow the direct identification of the
          user.
          <br />
          More information: https://firebase.google.com/support/privacy
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          4. Advertising
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          In the Free tier, the Application displays banner ads only on the main
          screen (MainActivity).
          <br />
          • No ads are shown as overlays
          <br />
          • Ad providers may use the device&apos;s advertising identifiers
          <br />
          • Ads may be personalized or non-personalized, depending on the device
          settings
          <br />
          <br />
          The user can remove ads by subscribing to a Premium plan.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          5. Subscriptions and in-app purchases
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The Application offers the following plans:
          <br />
          <br />
          <strong>Free Tier</strong>
          <br />
          • 3 sessions per week (reset on Monday)
          <br />
          • Banner advertising
          <br />
          • Maximum session duration: 120 minutes
          <br />
          <br />
          <strong>Premium Tier</strong>
          <br />
          • Monthly: €0.99/month
          <br />
          • Yearly: €4.99/year (with a 7-day free trial)
          <br />
          • Lifetime: €9.99 (one-time payment)
          <br />
          <br />
          Payments are processed directly by Google Play.
          <br />
          The Application does not collect or store any payment data.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          6. Application Permissions
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The Application may request the following permissions:
          <br />
          • Overlay / Draw over other apps: required to display the lock button
          <br />
          • Accessibility (if applicable): used solely to enable touch locking
          <br />
          <br />
          These permissions are not used to collect data.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          7. Data Retention
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          Data collected through third-party services is retained according to
          their respective retention policies:
          <br />
          • Firebase Analytics: aggregated and anonymized data
          <br />
          • Firebase Crashlytics: technical data related to crashes
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          8. User Rights (GDPR)
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The user has the right to:
          <br />
          • Obtain information about the processing of their data
          <br />
          • Request deletion of data where applicable
          <br />
          • Restrict or object to processing
          <br />
          <br />
          To exercise their rights, users can contact the data controller at the
          email address provided above.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          9. Security
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We adopt appropriate technical and organizational measures to protect
          the collected data and prevent unauthorized access.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          10. Changes to this Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          This Privacy Policy may be updated at any time.
          <br />
          Changes will be published on this page with an updated date.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          11. Contact
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          For any questions regarding this Privacy Policy:
          <br />
          📧 zukka75@gmail.com
        </p>
      </div>
    </main>
  );
};

export default PrivacyTouchBlock;
