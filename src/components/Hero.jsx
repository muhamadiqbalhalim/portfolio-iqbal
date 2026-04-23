import { useState, useEffect } from 'react';

export default function Hero() {
  const roles = ["Software Engineer", "Full Stack Developer", "Programmer"];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentRole = roles[index % roles.length];
      setText(isDeleting ? currentRole.substring(0, text.length - 1) : currentRole.substring(0, text.length + 1));
      
      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setIndex(index + 1);
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [text, isDeleting, index]);

    return (
        <div className="font-medium">
        I specialize in <span className="text-cyan-400 font-bold">{text}</span>
        <span className="animate-pulse text-cyan-400">|</span>
        </div>
    );
    }