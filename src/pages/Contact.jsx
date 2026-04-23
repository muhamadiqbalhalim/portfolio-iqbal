export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto p-10 md:p-16 mt-16 mb-20 rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-3xl shadow-2xl">
      
      <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white tracking-tight text-center">
        Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Connect</span>
      </h2>
      
      {/* Contact Form (Placeholder for now) */}
      <form className="space-y-6 mb-12">
        <div className="grid md:grid-cols-2 gap-6">
          <input className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-indigo-500/50 outline-none text-white transition-all" placeholder="Your Name" />
          <input className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-indigo-500/50 outline-none text-white transition-all" placeholder="Your Email" />
        </div>
        <textarea className="w-full p-4 rounded-2xl bg-white/[0.03] border border-white/10 focus:border-indigo-500/50 outline-none text-white transition-all" rows="4" placeholder="Your Message"></textarea>
        
        <button type="button" className="w-full py-4 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-400 hover:to-purple-500 text-white font-bold rounded-2xl transition-all shadow-lg hover:shadow-indigo-500/20">
          Send Message
        </button>
      </form>

      {/* Social Links Section */}
      <div className="border-t border-white/10 pt-8 text-center">
        <p className="text-gray-400 mb-6 uppercase tracking-widest text-xs font-semibold">Or reach out via</p>
        <div className="flex flex-wrap justify-center gap-4">
          <SocialLink href="https://www.linkedin.com/in/muhamadiqbalhalim" label="LinkedIn" />
          <SocialLink href="https://wa.me/60182903540" label="WhatsApp" />
          <SocialLink href="https://instagram.com/iiqbal.co" label="Instagram" />
          <SocialLink href="https://facebook.com/iqbalhalim0483" label="Facebook" />
        </div>
      </div>
    </section>
  );
}

function SocialLink({ href, label }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noreferrer"
      className="px-6 py-3 rounded-full bg-white/[0.03] border border-white/10 text-gray-300 hover:text-white hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all text-sm font-medium"
    >
      {label}
    </a>
  );
}