import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProjectCard({ title, desc, link, images, tech }) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((curr) => (curr === images.length - 1 ? 0 : curr + 1));
  const prev = () => setCurrent((curr) => (curr === 0 ? images.length - 1 : curr - 1));

  return (
    <div className="group relative p-6 rounded-3xl border border-white/5 bg-white/[0.03] backdrop-blur-md hover:border-indigo-500/50 transition-all duration-300">
      
      {/* Image Slider Section */}
      <div className="relative h-48 bg-gray-800 rounded-2xl mb-6 overflow-hidden">
        <img src={images[current]} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        
        {/* Navigation Arrows */}
        <button onClick={prev} className="absolute left-2 top-1/2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition"><ChevronLeft size={20}/></button>
        <button onClick={next} className="absolute right-2 top-1/2 p-1 bg-black/50 rounded-full text-white opacity-0 group-hover:opacity-100 transition"><ChevronRight size={20}/></button>
      </div>

      <h3 className="text-2xl font-semibold text-white">{title}</h3>
      <p className="text-gray-400 mt-2 mb-4 leading-relaxed">{desc}</p>

      {/* Tech Stack Pills */}
      <div className="flex flex-wrap gap-2 mb-6">
        {tech.map((t) => (
          <span key={t} className="px-3 py-1 text-[11px] font-medium bg-white/5 border border-white/10 rounded-lg text-indigo-300">
            {t}
          </span>
        ))}
      </div>

      <a href={link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-indigo-400 font-bold hover:underline">
        View Project →
      </a>
    </div>
  );
}