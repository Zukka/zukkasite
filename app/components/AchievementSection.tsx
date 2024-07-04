"use client";

import React from "react";
import dynamic from "next/dynamic";
import { Achievement, achievementsList } from "../data/AchievementsData";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="border-[#33353F] border rounded-md py-8 flex flex-row items-center justify-evenly">
        {achievementsList.map((achievement: Achievement, index: number) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4"
            >
              <h2 className="text-white text-lg font-bold flex flex-row">
                {achievement.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className="text-white text-lg  font-bold"
                  
                />
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] sm:text-base text-xs">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementSection;
