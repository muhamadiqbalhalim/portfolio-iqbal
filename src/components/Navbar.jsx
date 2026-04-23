import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full p-6 flex justify-between items-center z-50 backdrop-blur-lg border-b border-white/10">
      <Link to="/" className="text-2xl font-bold italic">Hi, Welcome</Link>
      <div className="flex gap-8 text-sm uppercase tracking-widest">
        {['home', 'about', 'skills', 'projects', 'contact'].map(nav => (
          <Link key={nav} to={nav === 'home' ? '/' : `/${nav}`} className="hover:text-yellow-400 transition">
            {nav}
          </Link>
        ))}
      </div>
    </nav>
  );
}