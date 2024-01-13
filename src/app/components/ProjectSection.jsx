"use client";
import React, {useState} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
  {
    id:1,
    title: "classify",
    description: "A mobile application to classify flowers",
    image: "images/classify.jpeg",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/akaul823/phase5project",
    previewUrl: "https://www.youtube.com/watch?v=v2DMubJlMyU"
  },
  {
    id:2,
    title: "karBazaar",
    description: "An online marketplace for buying and selling cars",
    image: "images/cardemo.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/akaul823/phase4_project",
    previewUrl: "https://www.youtube.com/watch?v=uqAtEq20G6A"
  },
  {
    id:3,
    title: "organizedTime",
    description: "A command line interface used to manage projects and employees",
    image: "images/p3home.PNG",
    tag: ["All", "Console"],
    gitUrl: "https://github.com/akaul823/phase3-python-sql-project",
    previewUrl: "https://www.youtube.com/watch?v=gR3cApqgG80"
  },
  {
    id:4,
    title: "Scrap",
    description: "An accessible digital dojo for fighters looking for sparring partners",
    image: "images/scrapp.png",
    tag: ["All","Mobile"],
    gitUrl: "/",
    previewUrl: "/",
    
  }
]
const ProjectSection = () => {
  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  return (
    <div className='h-screen'>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
      <h3 className="text-center text-2xl font-bold text-white mt-6 mb-2 md:mb-12">My Projects</h3>
      <div>
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Console"
          isSelected={tag === "Console"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Hardware"
          isSelected={tag === "Hardware"}
        />
      </div>


    </div>
    <div className='grid md:grid-cols3 gap-8 md:gap-12'>
      {filteredProjects.map((project)=> (
      <ProjectCard 
      key={project.id} 
      title={project.title} 
      description={project.description} 
      imgUrl={project.image}
      tags={project.tag}
      gitUrl={project.gitUrl}
      previewUrl={project.previewUrl} 
      />
      ))}
      </div>
      </div>
  )
}

export default ProjectSection