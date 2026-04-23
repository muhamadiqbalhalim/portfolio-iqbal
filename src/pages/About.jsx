export default function About() {
  return (
    <section className="relative w-full max-w-4xl mx-auto p-10 md:p-16 mt-16 rounded-[2.5rem] border border-white/10 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      
      {/* Decorative Blur */}
      <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-3xl" />
      
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight">
        About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Me</span>
      </h2>
      
      <div className="space-y-6 text-gray-300">
        <p className="text-lg leading-relaxed">
          Results-driven Computer Science graduate with a strong foundation in software development, data integration, and analytics. 
          I bridge the gap between complex logic and user-centric design, ensuring every line of code serves a purpose.
        </p>
        
        <p className="text-lg leading-relaxed">
          My toolkit includes <span className="text-indigo-300 font-semibold">Python, Java, C++, and SQL</span>, which I leverage to build scalable, high-performance web and mobile solutions. I am deeply passionate about exploring the intersection of data and modern web architecture.
        </p>

        {/* Small "Highlight" section for professionalism */}
        <div className="pt-6 grid grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-indigo-300 font-bold mb-1">Passionate</h4>
            <p className="text-sm text-gray-400">Building efficient, scalable digital solutions.</p>
          </div>
          <div className="p-4 rounded-2xl bg-white/5 border border-white/10">
            <h4 className="text-purple-300 font-bold mb-1">Adaptable</h4>
            <p className="text-sm text-gray-400">Always experimenting with new technologies.</p>
          </div>
        </div>
      </div>
    </section>
  );
}