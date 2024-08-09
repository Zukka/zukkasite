import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className=" z-10 footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <img src="../../favicon.ico" alt="logo" className="h-10 w-10 mb-28" />
        <Link className="text-slate-500 pt-2" href="/privacy">
          Privacy
        </Link>
        <Link className="text-slate-500 pt-2" href="/privacyimfree">
          Privacy I&apos;m Free App
        </Link>
        <p className="text-slate-500 pt-2">All right reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
