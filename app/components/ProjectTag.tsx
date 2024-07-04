import React from 'react'

interface ProjectTagProps {
    tagName: string;
    isSelected: boolean;
    onClick: (name: string) => void;
}

const ProjectTag: React.FC<ProjectTagProps> = ({tagName, isSelected, onClick}) => {
    const buttonStyles = isSelected ?
    "text-white border-orange-500" :
    "text-[#ADB7BE] border-slate-600 hover:border-white"
  return (
    <button className={`rounded-full border-4 px-6 py-2 text-xl cursor-pointer ${buttonStyles}`}
    onClick={() => onClick(tagName)}>
    {tagName}
  </button>
  )
}

export default ProjectTag