import Link from "next/link";
import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="z-10 footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <Image src="../../favicon.ico" alt="logo" className="h-10 w-10" />

        <div className="flex flex-col md:flex-row md:gap-6 gap-2 flex-1 md:justify-center">
          <Link className="text-slate-500 hover:text-white transition-colors" href="/privacy">
            Privacy
          </Link>

          <div className="flex flex-col">
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacyimfree">
              Privacy I&apos;m Free App
            </Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacysmartcounter">
              Privacy Smart Counter App
            </Link>
          </div>
          <div className="flex flex-col">
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacytouchblock">
              Privacy Touch Block App
            </Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacyrecall">
              Privacy Recall App
            </Link>
          </div>
          <div className="flex flex-col">
            <Link className="text-slate-500 hover:text-white transition-colors" href="/privacybioflow">
              Privacy BioFlow App
            </Link>
            <Link className="text-slate-500 hover:text-white transition-colors" href="/termsbioflow">
              Terms BioFlow App
            </Link>
          </div>
        </div>

        <p className="text-slate-500">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
