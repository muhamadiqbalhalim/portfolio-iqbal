import { Link } from 'react-router-dom';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="relative min-h-screen flex items-center justify-center p-6 overflow-hidden bg-[#0a0a0a]">
      {/* Background Animated Orbs - Updated to Indigo/Purple theme */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-900/30 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-900/30 rounded-full blur-[120px] animate-pulse delay-1000"></div>
      </div>

      {/* Main Glass Card */}
      <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center p-10 md:p-16 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] max-w-6xl w-full">
        
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium uppercase tracking-widest mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            Available for opportunities
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-white">
            Muhamad <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Iqbal</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-white/80 font-light mb-8">
            <Hero />
          </div>

          <p className="text-gray-400 mb-10 leading-relaxed max-w-lg">
            Crafting high-performance digital experiences with modern web technologies. 
            Focused on clean architecture, performance, and user-centric design.
          </p>

          <div className="flex gap-4">
            <Link to="/projects" className="px-8 py-4 bg-white text-black font-semibold rounded-2xl hover:bg-indigo-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-indigo-500/20">
              Explore Projects
            </Link>
            <Link to="/contact" className="px-8 py-4 border border-white/10 text-white font-semibold rounded-2xl hover:bg-white/10 transition-all duration-300">
              Let's Talk
            </Link>
          </div>
        </div>

        {/* Profile Image - Refined to match theme */}
        <div className="flex justify-center items-center">
            <div className="relative group">
                {/* The Blur/Glass Glow Effect behind the image */}
                <div className="absolute -inset-4 bg-indigo-500/20 rounded-[2.5rem] blur-2xl group-hover:bg-purple-500/30 transition-all duration-700"></div>
                
                {/* The Hexagon Container */}
                <div 
                className="relative w-64 h-72 md:w-80 md:h-96 bg-white/5 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-sm"
                style={{ clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }}
                >
                <img 
                    src="/Profile.png" 
                    alt="Profile" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"/>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
}