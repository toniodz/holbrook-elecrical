import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { SectionHeader } from '../ui/SectionHeader';
import useEmblaCarousel from 'embla-carousel-react';

const projects = [
  {
    title: "Margate Flood Defense",
    description: "Installation of critical electrical systems for flood defense infrastructure.",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    sector: "Marine & Waterside"
  },
  {
    title: "London Array Wind Farm",
    description: "Electrical maintenance and support for offshore wind power generation.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    sector: "Renewable Energy"
  },
  {
    title: "Private Network Installation",
    description: "High-voltage private network design and implementation for industrial client.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
    sector: "Industrial"
  }
];

const filters = ["All", "Marine & Waterside", "Renewable Energy", "Industrial"];

export function FeaturedProjects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [emblaRef] = useEmblaCarousel({
    align: 'center',
    containScroll: false,
    loop: true,
    dragFree: true,
    skipSnaps: true
  });

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.sector === activeFilter);

  return (
    <section className="py-24 bg-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div className="mb-8 md:mb-0">
            <SectionHeader 
              title="Featured Projects"
              subtitle="Explore our latest electrical installations and solutions across various sectors."
              className="text-white [&_svg_path]:fill-white [&_p]:text-blue-200"
            />
          </div>
          <Link 
            to="/case-studies"
            className="flex items-center gap-2 text-white hover:text-blue-300 transition-colors"
          >
            View All Projects
            <ArrowRight size={20} className="w-5 h-5" />
          </Link>
        </div>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-4">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${activeFilter === filter 
                  ? 'bg-white text-blue-900' 
                  : 'bg-blue-800 text-white hover:bg-blue-700'}`}
            >
              {filter}
            </button>
          ))}
        </div>
        
        <div className="overflow-hidden -mx-[20%]" ref={emblaRef}>
          <div className="flex">
            {filteredProjects.map((project, index) => (
              <div 
                key={index} 
                className="flex-[0_0_60%] mx-[2%] relative group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-lg aspect-[16/9]">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/95 via-blue-900/70 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <span className="inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm mb-3">
                      {project.sector}
                    </span>
                    <h3 className="text-3xl font-bold text-white mb-4">{project.title}</h3>
                    <p className="text-blue-200 text-lg max-w-2xl">{project.description}</p>
                    <Link 
                      to={`/case-studies/${project.title.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center gap-2 text-white mt-6 hover:text-blue-300 transition-colors"
                    >
                      View Project
                      <ArrowRight size={20} className="w-5 h-5" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}