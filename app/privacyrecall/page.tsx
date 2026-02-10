"use client";

import React from "react";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const PrivacyReCall = () => {
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
          <strong>Last updated: </strong>04/02/2026
        </h2>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          This Privacy Policy describes how ReCall (hereinafter the
          &quot;Application&quot; or &quot;App&quot;), developed by Alessandro
          Bellotti, collects, uses, and protects users&apos; personal data in
          compliance with the General Data Protection Regulation (GDPR - EU
          2016/679) and applicable Italian legislation. By using the
          Application, you accept the practices described in this Privacy
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
          2. Introduction
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          ReCall is a missed call reminder application for Android devices that
          helps you remember to call back missed calls by automatically creating
          reminders on your calendar.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          3. Data Collected and Processing Purposes
        </h6>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>3.1 Data Processed Locally on Your Device</strong>
          <br />
          <br />
          The App processes the following data exclusively locally on your
          Android device, without transmitting it to external servers:
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>a) Call Log Data</strong>
          <br />
          • Data collected: Caller phone number, date and time of call,
          duration, call type (missed)
          <br />
          • Purpose: Identify missed calls to automatically create reminders
          <br />
          • Legal basis: User consent (Art. 6, para. 1, letter a GDPR)
          <br />
          • Permissions required: READ_CALL_LOG, READ_PHONE_STATE,
          READ_PHONE_NUMBERS
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>b) Contact Data</strong>
          <br />
          • Data collected: Names and phone numbers of contacts saved in your
          phonebook
          <br />
          • Purpose: Display caller name in reminders instead of just the number
          <br />
          • Legal basis: User consent (Art. 6, para. 1, letter a GDPR)
          <br />
          • Permission required: READ_CONTACTS
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>c) Calendar Data</strong>
          <br />
          • Data collected: List of available calendars, events created by the
          App
          <br />
          • Purpose: Create reminders on the calendar selected by the user
          <br />
          • Legal basis: User consent (Art. 6, para. 1, letter a GDPR)
          <br />
          • Permissions required: READ_CALENDAR, WRITE_CALENDAR
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>d) SMS Messages</strong>
          <br />
          • Data collected: SMS message text customized by the user
          <br />
          • Purpose: Send automatic SMS when you cannot answer an incoming call
          <br />
          • Legal basis: User consent (Art. 6, para. 1, letter a GDPR)
          <br />
          • Permission required: SEND_SMS
          <br />
          <br />
          Note: The SMS is generated and sent only when a reminder is created.
          If you do not create the reminder, the SMS will not be sent, even if
          the function is active.
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>e) Configuration and Preference Data</strong>
          <br />
          • Data collected:
          <br />
          &nbsp;&nbsp;- Service status (active/inactive)
          <br />
          &nbsp;&nbsp;- Service operating hours and days
          <br />
          &nbsp;&nbsp;- Default reminder delay (30 min, 1h, 2h, custom)
          <br />
          &nbsp;&nbsp;- Selected default calendar
          <br />
          &nbsp;&nbsp;- Blacklist of phone numbers
          <br />
          &nbsp;&nbsp;- Customized SMS text
          <br />
          &nbsp;&nbsp;- SMS service activation status
          <br />
          • Purpose: Customize the App&apos;s operation according to your
          preferences
          <br />
          • Legal basis: Contract/service execution (Art. 6, para. 1, letter b
          GDPR)
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>f) Statistical Data</strong>
          <br />
          • Data collected:
          <br />
          &nbsp;&nbsp;- Total number of incoming calls
          <br />
          &nbsp;&nbsp;- Total number of reminders created
          <br />
          &nbsp;&nbsp;- Temporal aggregations (per day/week/month)
          <br />
          • Purpose: Provide you with usage statistics
          <br />
          • Legal basis: Contract/service execution (Art. 6, para. 1, letter b
          GDPR)
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>g) System Services</strong>
          <br />
          • Permissions required: FOREGROUND_SERVICE,
          FOREGROUND_SERVICE_DATA_SYNC
          <br />
          • Purpose: Keep the call monitoring service active in the background
          <br />
          • Permission required: POST_NOTIFICATIONS
          <br />
          • Purpose: Display notifications related to service operation
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          4. Data Processing Methods
        </h6>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>4.1 Data Storage</strong>
          <br />
          <br />
          <strong className="text-white">
            ALL DATA IS STORED EXCLUSIVELY LOCALLY ON YOUR ANDROID DEVICE.
          </strong>
          <br />
          <br />
          The App uses:
          <br />
          • Room Database: To store created reminders and statistics
          <br />
          • DataStore/SharedPreferences: To save user settings and preferences
          <br />
          <br />
          <strong className="text-white">
            NO DATA IS TRANSMITTED TO EXTERNAL SERVERS, CLOUD SERVICES, OR THIRD
            PARTIES.
          </strong>
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>4.2 Security</strong>
          <br />
          <br />
          Data is protected by Android&apos;s native security measures,
          including:
          <br />
          • Application sandbox
          <br />
          • Device encryption (if enabled by the user)
          <br />
          • System permission protection
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>4.3 Data Retention</strong>
          <br />
          <br />
          Data is stored on the device until:
          <br />
          • The user uninstalls the App (automatic deletion)
          <br />
          • The user manually deletes reminders from the list
          <br />
          • The user clears the App&apos;s data from Android settings
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          5. Data Sharing
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong className="text-white">
            THE APP DOES NOT SHARE, SELL, OR TRANSMIT YOUR PERSONAL DATA TO
            THIRD PARTIES.
          </strong>
          <br />
          <br />
          The only exception is SMS sending when you activate the SMS service:
          in this case, the message is sent through your mobile carrier to the
          number that called you.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          6. Your Rights (GDPR)
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          In accordance with Articles 15-22 of the GDPR, you have the right to:
          <br />
          <br />
          • <strong>Access:</strong> Access your personal data (already available
          in the App)
          <br />
          • <strong>Rectification:</strong> Modify your settings and preferences
          <br />
          • <strong>Erasure:</strong> Delete reminders or uninstall the App
          <br />
          • <strong>Restriction:</strong> Disable the service or specific
          features
          <br />
          • <strong>Data Portability:</strong> Export your data (feature
          available in statistics)
          <br />
          • <strong>Objection:</strong> Revoke permissions from Android settings
          <br />
          • <strong>Complaint:</strong> File a complaint with the Data Protection
          Authority
          <br />
          <br />
          To exercise your rights, contact us at: zukka75@gmail.com
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          7. Application Permissions
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The Application requests the following permissions:
          <br />
          <br />
          • <strong>READ_CALL_LOG, READ_PHONE_STATE, READ_PHONE_NUMBERS:</strong>{" "}
          To read call logs and identify missed calls
          <br />
          • <strong>READ_CONTACTS:</strong> To display caller names in reminders
          <br />
          • <strong>READ_CALENDAR, WRITE_CALENDAR:</strong> To create reminders
          on your calendar
          <br />
          • <strong>SEND_SMS:</strong> To send automatic SMS messages
          <br />
          • <strong>FOREGROUND_SERVICE, FOREGROUND_SERVICE_DATA_SYNC:</strong>{" "}
          To keep the monitoring service running in the background
          <br />
          • <strong>POST_NOTIFICATIONS:</strong> To display service notifications
          <br />
          <br />
          These permissions are used exclusively for the purposes described in
          this Privacy Policy.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          8. Free vs. Full Version
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The Application offers two versions:
          <br />
          <br />
          <strong>Free Version:</strong>
          <br />
          • Automatic reminder creation
          <br />
          • Default calendar selection
          <br />
          • 30-minute reminder delay
          <br />
          • Detailed statistics
          <br />
          • SMS service
          <br />
          <br />
          <strong>Full Version (In-App Purchase):</strong>
          <br />
          • All free features plus:
          <br />
          • Service activation for specific times/days
          <br />
          • Custom reminder delays (30 min, 1h, 2h, or 3-72 hours)
          <br />
          • Number blacklist
          <br />
          • Reminder list management
          <br />
          • Customizable SMS text
          <br />
          <br />
          The differences between versions concern only available features, not
          the type of data collected or processing methods. Both versions:
          <br />
          • Store data only locally
          <br />
          • Do not transmit data to external servers
          <br />
          • Respect the same privacy principles
          <br />
          <br />
          Payments are processed directly by Google Play. The Application does
          not collect or store any payment data.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          9. Consent
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          By using ReCall, you explicitly consent to the processing of your
          personal data as described in this Privacy Policy.
          <br />
          <br />
          You can revoke your consent at any time by:
          <br />
          • Disabling the service from the App
          <br />
          • Revoking permissions from Android settings
          <br />
          • Uninstalling the App
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          10. Minors
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          The App is not intended for minors under 14 years of age. We do not
          knowingly collect data from minors. If you are a parent/guardian and
          believe your child has provided personal data, contact us for
          deletion.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          11. Changes to this Privacy Policy
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          We reserve the right to modify this Privacy Policy at any time.
          Changes will be published within the App and, if significant, you will
          be asked to accept them again.
          <br />
          <br />
          Changes will be published on this page with an updated date.
        </p>

        <h6 className="text-white text-lg sm:text-xl mb-2 lg:text-2xl font-bold">
          12. Contact
        </h6>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          For any questions regarding this Privacy Policy or to exercise your
          rights:
          <br />
          <br />
          📧 zukka75@gmail.com
          <br />
          <br />
        </p>

        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          <strong>Effective Date:</strong> February 4, 2026
        </p>
      </div>
    </main>
  );
};

export default PrivacyReCall;