import React from 'react'

const ProjectsTag = ({name, onClick, isSelected}) => {
    const butonStyles = isSelected ?
    "text-white border-violet-700"
    : "text-[#ADB7BE] border-[#ADB7BE]"
    return (
    <>
      <button 
        className={`${butonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer `}
        onClick={ ()=> onClick(name)}
          
          >
            {name}</button>
    </>
  )
}

export default ProjectsTag
