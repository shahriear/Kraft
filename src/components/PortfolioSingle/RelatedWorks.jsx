import React from 'react';

export default function RelatedWorks({ projects, onProjectClick }) {
  return (
    <section className="mt-12">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-neutral-900 mb-10">
        Related Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(project => (
          <div
            key={project.id}
            onClick={() => onProjectClick(project.title)}
            className="group cursor-pointer flex flex-col items-center"
          >
            {/* Project Thumbnail Card */}
            <div
              className={`w-full aspect-[4/3] rounded-lg bg-gradient-to-tr ${project.gradient} p-6 flex flex-col items-center justify-center text-white shadow-sm group-hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-1 overflow-hidden relative`}
            >
              <div className="border border-white/30 rounded px-4 py-2 text-center backdrop-blur-sm bg-white/10">
                <span className="text-xs font-semibold tracking-wider uppercase block">
                  {project.badge}
                </span>
              </div>
            </div>

            {/* Title & Category */}
            <div className="text-center mt-4">
              <h3 className="font-semibold text-neutral-900 text-lg group-hover:text-blue-600 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs text-neutral-500 font-medium mt-0.5">
                {project.category}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
