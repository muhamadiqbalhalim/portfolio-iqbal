import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <div className="relative min-h-screen w-full">
      {/* Latar Belakang (Gambar/Video) */}
      <div className="fixed inset-0 -z-10">
        {/* Pilihan A: Gambar */}
        <img 
          src="/background.jpg" 
          alt="bg" 
          className="h-full w-full object-cover" 
        />
        
        {/* Pilihan B: Kalau nak video, buang img di atas dan guna kod bawah ni: */}
        {/* <video autoPlay loop muted className="h-full w-full object-cover">
          <source src="/background.mp4" type="video/mp4" />
        </video> */}

        {/* Overlay supaya teks nampak jelas */}
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      <Navbar />
      <main className="relative z-0 pt-20">
        {children}
      </main>
    </div>
  );
}