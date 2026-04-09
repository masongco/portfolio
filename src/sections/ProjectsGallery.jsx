import { useState } from "react";
import { galleryProjects } from "../constants";
import TitleHeader from "../components/TitleHeader";

const ProjectsGallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = galleryProjects[activeIndex];

  return (
    <section id="gallery" className="section-padding xl:px-0 mb-20 md:mb-40">
      <div className="w-full h-full md:px-20 px-5">
        <TitleHeader title="Project Gallery" sub="🖼️ My Work" />

        <div className="mt-16 flex flex-col xl:flex-row gap-6">
          {/* Left: Tab list */}
          <div className="flex xl:flex-col flex-row xl:w-72 w-full gap-3 xl:overflow-visible overflow-x-auto pb-2 xl:pb-0 shrink-0">
            {galleryProjects.map((project, index) => (
              <button
                key={project.title}
                onClick={() => setActiveIndex(index)}
                className={`flex flex-col items-start text-left px-5 py-4 rounded-xl border transition-all duration-300 xl:min-w-0 min-w-48 shrink-0 cursor-pointer ${
                  activeIndex === index
                    ? "bg-black-200 border-blue-50 shadow-lg shadow-blue-50/10"
                    : "bg-black-100 border-black-200 hover:border-blue-50/40"
                }`}
              >
                <span
                  className={`font-semibold text-base transition-colors duration-300 ${
                    activeIndex === index ? "text-white" : "text-white-50"
                  }`}
                >
                  {project.title}
                </span>
                <span className="text-blue-50 text-xs mt-1 text-nowrap">
                  {project.subtitle}
                </span>
              </button>
            ))}
          </div>

          {/* Right: Screenshot + details */}
          <div className="flex-1 bg-black-100 border border-black-200 rounded-2xl overflow-hidden">
            <div className="relative w-full aspect-video bg-black-200 overflow-hidden">
              <img
                key={activeIndex}
                src={active.imgPath}
                alt={active.title}
                className="w-full h-full object-cover object-top animate-fade-in"
              />
            </div>

            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-3 mb-3">
                <h2 className="text-2xl font-semibold">{active.title}</h2>
                <span className="text-blue-50 text-sm bg-black-200 px-3 py-1 rounded-full">
                  {active.subtitle}
                </span>
              </div>
              <p className="text-white-50 text-base leading-relaxed mb-5">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {active.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-black-200 text-blue-50 border border-black-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
