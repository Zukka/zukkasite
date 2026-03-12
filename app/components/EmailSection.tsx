"use client";

import React, { useState } from "react";
import GithubIcon from "../../public/github-icon.svg";
import LinkedinIcon from "../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { Flip, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "emailjs-com";

interface EmailSectionProps {
  serviceId: string;
  templateId: string;
  userId: string;
}

const EmailSection: React.FC<EmailSectionProps> = ({
  serviceId,
  templateId,
  userId,
}) => {
  const [from_name, setFromName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      from_name,
      message,
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      if (response.status === 200) {
        toast.success("Email sent successfully!", {
          autoClose: 3000,
          theme: "light",
          transition: Flip,
          position: "top-right",
        });
        console.log("'Email sent.");
        resetEmailData();
      } else {
        toast.error("Failed to send email.", {
          autoClose: 3000,
          theme: "dark",
          transition: Flip,
          position: "top-right",
        });
        console.error("Failed to send email.");
      }
    } catch (error) {
      toast.error("An error occurred.", {
        autoClose: 3000,
        theme: "dark",
        transition: Flip,
        position: "top-right",
      });
      console.error("An error occurred.");
    }
  };

  const resetEmailData = () => {
    setFromName("");
    setMessage("");
  };

  return (
    <>
      <ToastContainer />
      <section
        id="contact"
        className="grid md:grid-cols-2 my-12 py-24 gap-4 relative "
      >
        <div
          className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-orange-800 to-transparent 
        rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"
        ></div>
        <div>
          <h5 className="text-xl font-bold text-white my-2">
            Let&#39;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            {" "}
            My inbox is always open. Whether you have a question or just want to
            say hi, I&#39;ll try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2">
            <Link href={"https://github.com/Zukka"}>
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href={"https://www.linkedin.com/in/alessandrobellotti"}>
              <Image src={LinkedinIcon} alt="LinkedIn Icon" />
            </Link>
          </div>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block text-sm mb-2 font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                value={from_name}
                onChange={(e) => setFromName(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="your_email@mail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default EmailSection;
