import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const projects = [
    {
      title: "Car Catalogue System",
      desc: "A full-stack web application built to manage vehicle inventory efficiently with real-time browsing.",
      images: ["/car1.jpg", "/car2.jpg"],
      tech: ["Vue 3", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Personal Training Booking System",
      desc: "A web application that streamlines personal training session management and provides real-time insights.",
      images: ["Profile.png", "/gym2.jpg"],
      tech: ["Vue.js", "TypeScript", "Node.js", "Express.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      link: "#"
    },
    {
      title: "Restaurant Company Profile",
      desc: "A restaurant company profile website with an admin panel for managing menus, pricing, and promotions.",
      images: ["/food1.jpg", "/food2.jpg"],
      tech: ["Next.js 15", "React 18", "TypeScript", "PostgreSQL", "Tailwind CSS", "Radix UI"],
      link: "#"
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-white tracking-tight">
        Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Projects</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <ProjectCard key={i} {...p} />
        ))}
      </div>
    </section>
  );
}