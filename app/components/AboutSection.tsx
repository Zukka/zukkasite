"use client";

import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabBotton from "./TabBotton";
import { tabsData } from "../data/TabData";

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white mt-10">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <Image
            src="/images/about_image.jpg"
            width={500}
            height={500}
            alt="computer image"
          />
          <a
            className="text-xs"
            href="https://it.freepik.com/foto-gratuito/vista-del-dispositivo-del-computer-3d-con-dispositivi-periferici_60907781.html"
          >
            Freepik image
          </a>
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4 mt-2">About Me</h2>
          <p className="text-base md:text-lg">
            I am a <b>Software Developer</b> with a passion for creating
            interactive and responsive application.
            <br />I have experience working with{" "}
            <b>Kotlin, Swift, React, Javascript, HTML, CSS, Git</b> and{" "}
            <b>GitLab.</b>
            <br />
            I am a quick learner and I am always looking to expand my knowledge
            and skill set.
            <br />I am a team player and I am excited to work with others to
            create <b>amazing applications</b>.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabBotton
              selectedTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabBotton>
            <TabBotton
              selectedTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabBotton>
            <TabBotton
              selectedTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabBotton>
          </div>
          <div className="mt-8">
            {tabsData.find((tabData) => tabData.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
