import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;

    try {
      const response = await fetch(
        "https://formspree.io/f/mdabbdke",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name.value,
            email: form.email.value,
            message: form.message.value,
          }),
        }
      );

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-24 md:py-32 px-6 md:px-20 bg-[#080808]"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-16 md:mb-20">

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-px bg-blue-400/50" />

            <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-500">
              Contact
            </p>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold leading-[0.95] text-white">
            Let's Work
            <br />

            <span className="text-blue-400">
              Together.
            </span>
          </h2>

        </div>

        {/* GRID */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch">

          {/* LEFT CARD */}
          <div className="lg:col-span-4">

            <div
              className="
                h-full
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.05]
                to-white/[0.02]
                backdrop-blur-xl
                p-8
                flex
                flex-col
              "
            >

              <div>

                <div className="flex items-center gap-3 mb-8">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />

                  <p className="text-[10px] uppercase tracking-[0.35em] text-green-400">
                    Available For Opportunities
                  </p>
                </div>

                <p className="text-zinc-400 leading-relaxed">
                  Currently open to Software Engineering,
                  Full Stack Development, Network Engineering,
                  AI-focused projects and technology collaborations.
                </p>

                <p className="mt-6 text-zinc-500 leading-relaxed">
                  Whether you're looking for a developer,
                  engineer, collaborator, or someone to build
                  intelligent solutions, let's connect.
                </p>

              </div>

              {/* CONTACT INFO */}
              <div className="mt-10 space-y-6">

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Email
                  </p>

                  <p className="text-white break-all">
                    muhamadiqbaljob@gmail.com
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Phone
                  </p>

                  <p className="text-white">
                    +60 18-290 3540
                  </p>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-zinc-600 mb-2">
                    Location
                  </p>

                  <p className="text-white">
                    Kuala Lumpur, Malaysia
                  </p>
                </div>

              </div>

              {/* BUTTONS */}
              <div className="mt-auto pt-10 flex flex-col gap-4">

                <a
                  href="https://wa.me/60182903540"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    bg-green-500
                    text-center
                    text-sm
                    font-medium
                    text-white
                    hover:bg-green-400
                    transition-all
                  "
                >
                  WhatsApp Me →
                </a>

                <a
                  href="https://linkedin.com/in/muhamadiqbalhalim"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    border
                    border-white/10
                    text-center
                    text-sm
                    text-zinc-300
                    hover:border-blue-400/30
                    hover:text-white
                    transition-all
                  "
                >
                  LinkedIn Profile
                </a>

                <a
                  href="https://github.com/muhamadiqbalhalim"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    w-full
                    py-4
                    rounded-xl
                    border
                    border-white/10
                    text-center
                    text-sm
                    text-zinc-300
                    hover:border-blue-400/30
                    hover:text-white
                    transition-all
                  "
                >
                  GitHub Profile
                </a>

              </div>

            </div>

          </div>

          {/* FORM */}
          <div className="lg:col-span-8">

            <form
              onSubmit={handleSubmit}
              className="
                h-full
                rounded-3xl
                border
                border-white/10
                bg-gradient-to-b
                from-white/[0.04]
                to-white/[0.02]
                backdrop-blur-xl
                p-8
                md:p-10
              "
            >

              <div className="mb-10">

                <p className="text-[10px] uppercase tracking-[0.35em] text-blue-300 mb-3">
                  Send Inquiry
                </p>

                <h3 className="text-2xl font-semibold text-white">
                  Tell Me About Your Project
                </h3>

              </div>

              <div className="space-y-8">

                <input
                  name="name"
                  required
                  placeholder="NAME"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/10
                    py-4
                    text-white
                    placeholder:text-zinc-600
                    focus:border-blue-400
                    outline-none
                    transition
                  "
                />

                <input
                  name="email"
                  type="email"
                  required
                  placeholder="EMAIL"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/10
                    py-4
                    text-white
                    placeholder:text-zinc-600
                    focus:border-blue-400
                    outline-none
                    transition
                  "
                />

                <textarea
                  name="message"
                  rows="8"
                  required
                  placeholder="MESSAGE"
                  className="
                    w-full
                    bg-transparent
                    border-b
                    border-white/10
                    py-4
                    text-white
                    placeholder:text-zinc-600
                    focus:border-blue-400
                    outline-none
                    resize-none
                    transition
                  "
                />

              </div>

              <div className="mt-8">

                {status === "success" && (
                  <p className="text-green-400 mb-5">
                    Message sent successfully ✔
                  </p>
                )}

                {status === "error" && (
                  <p className="text-red-400 mb-5">
                    Failed to send message ❌
                  </p>
                )}

                <motion.button
                  whileHover={{
                    scale: 1.03,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  type="submit"
                  disabled={status === "sending"}
                  className="
                    px-8
                    py-4
                    rounded-full
                    bg-blue-500
                    text-white
                    text-xs
                    uppercase
                    tracking-[0.25em]
                    font-medium
                    hover:bg-blue-400
                    transition-all
                  "
                >
                  {status === "sending"
                    ? "Sending..."
                    : "Send Message"}
                </motion.button>

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}