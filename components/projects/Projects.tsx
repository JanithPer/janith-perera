'use client';

import { projects } from '@/constants/projects';
import ProjectBtn from './ProjectBtn';
import ImageCarousel from './ImageCarousel';
import ProjectDetails from './ProjectDetails';
import { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(projects[0]);
  const [projectImageIndices, setProjectImageIndices] = useState<Record<string, number>>({});

  const handleActiveProject = (id: string) => {
    setActiveProject(projects.find((project) => project.id === id)!);
  };

  const currentIndex = projectImageIndices[activeProject.id] || 0;

  const handleIndexChange = (index: number) => {
    setProjectImageIndices((prev) => ({
      ...prev,
      [activeProject.id]: index,
    }));
  };

  return (
    <div className="">
      <div className="relative">
        <div className="flex flex-col-reverse items-center md:flex-row md:items-start md:justify-evenly lg:justify-center lg:gap-8">
          <ImageCarousel
            images={activeProject.images}
            title={activeProject.title}
            currentIndex={currentIndex}
            setCurrentIndex={handleIndexChange}
          />

          {/* Buttons */}
          <div className="mx-auto flex w-fit gap-5 md:mx-0 md:mt-7 xl:gap-12">
            {projects.map((project) => (
              <ProjectBtn
                key={project.id}
                id={project.id}
                color={project.color}
                active={project.id === activeProject.id}
                switchActiveProject={handleActiveProject}
              />
            ))}
          </div>
        </div>

        {/* Grid pattern */}
        <div className="projects-grid-pattern absolute inset-0 -z-10 mt-36 border-t border-t-tundora opacity-50" />
      </div>
      {/* Project details card */}

      <ProjectDetails
        title={activeProject.title}
        subTitle={activeProject.subTitle}
        stack={activeProject.stack}
        description={activeProject.description}
        date={activeProject.date}
        github={activeProject.github}
        live={activeProject.live}
        color={activeProject.color}
        btnBg={activeProject.btnBg}
        btnBgHover={activeProject.btnBgHover}
        cardBg={activeProject.cardBg}
      />
    </div>
  );
};
export default Projects;




