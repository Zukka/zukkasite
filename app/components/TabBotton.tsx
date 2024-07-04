import React from "react";
import { motion } from "framer-motion";

interface TabBottonProps {
  active: boolean;
  selectedTab: () => void;
  children?: React.ReactNode;
}

const TabBotton: React.FC<TabBottonProps> = ({
  active,
  selectedTab,
  children,
}) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";
  return (
    <button onClick={selectedTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: active ? "calc(100% - 0.74rem)" : 0 }}
        transition={{ duration: 0.5 }}
        className="h-1 bg-secondary-500 mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabBotton;
