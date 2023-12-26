import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from "next/link";
import React from 'react';

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
  return (
    <div className="group rounded-xl overflow-hidden bg-[#181818] relative cursor-pointer">
        <div 
          className="h-52 md:h-72 bg-cover bg-center"
          style={{ backgroundImage: `url(${imgUrl})` }}
        />
        <div 
          className='overlay absolute inset-0 bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 items-center justify-center'
          style={{ zIndex: 10 }}
        >
            {/* Link for GitHub */}
            <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          <Link
            href={previewUrl}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>

            {/* Add similar structure for preview link if needed */}
        </div>
        <div className='text-white py-6 px-4' style={{ zIndex: 5 }}>
            <h5 className='text-xl font-semibold mb-2'>{title}</h5>
            <p className='text-[#ADB7BE]'>{description}</p>
        </div>
    </div>
  );
};

export default ProjectCard;



