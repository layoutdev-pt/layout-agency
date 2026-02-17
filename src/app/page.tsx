"use client";

import { useEffect, useState } from "react";

// Floating particle component
function Particle({
  left,
  top,
  size,
  delay,
  duration,
  opacity,
}: {
  left: string;
  top: string;
  size: number;
  delay: number;
  duration: number;
  opacity: number;
}) {
  return (
    <div
      className="absolute rounded-full bg-gradient-to-r from-sky-400 to-violet-400 animate-pulse particle"
      style={{
        left,
        top,
        width: `${size}px`,
        height: `${size}px`,
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        opacity,
      }}
    />
  );
}

// Gear/Settings icon SVG component
function GearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

// Saturn planet component
function SaturnPlanet() {
  return (
    <div className="absolute right-[5%] top-[15%] w-40 h-40 md:w-56 md:h-56 lg:w-72 lg:h-72 animate-float-planet opacity-60">
      {/* Planet body */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 rounded-full bg-gradient-to-br from-violet-300 via-purple-400 to-indigo-600 shadow-2xl shadow-purple-500/30">
          {/* Planet surface details */}
          <div className="absolute inset-0 rounded-full overflow-hidden">
            <div className="absolute top-[20%] left-0 right-0 h-[8%] bg-violet-200/30 blur-sm" />
            <div className="absolute top-[40%] left-0 right-0 h-[5%] bg-purple-200/20 blur-sm" />
            <div className="absolute top-[60%] left-0 right-0 h-[6%] bg-indigo-300/25 blur-sm" />
          </div>
        </div>
      </div>
      {/* Saturn rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-40 h-10 md:w-56 md:h-14 lg:w-72 lg:h-16 rounded-[100%] border-[3px] md:border-4 border-violet-300/50 animate-rotate-slow"
          style={{ transform: "rotateX(75deg) rotateZ(-15deg)" }}
        />
        <div
          className="absolute w-36 h-8 md:w-48 md:h-11 lg:w-64 lg:h-14 rounded-[100%] border-2 md:border-[3px] border-sky-300/40"
          style={{ transform: "rotateX(75deg) rotateZ(-15deg)" }}
        />
        <div
          className="absolute w-44 h-12 md:w-60 md:h-16 lg:w-80 lg:h-20 rounded-[100%] border-2 border-purple-400/30"
          style={{ transform: "rotateX(75deg) rotateZ(-15deg)" }}
        />
      </div>
    </div>
  );
}

// Rocket component
function Rocket() {
  return (
    <div className="absolute left-[8%] bottom-[20%] md:left-[12%] md:bottom-[25%] animate-float opacity-50">
      <svg
        width="60"
        height="80"
        viewBox="0 0 60 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="rotate-[-30deg]"
      >
        {/* Rocket body */}
        <path
          d="M30 5C30 5 15 25 15 45C15 55 20 65 30 70C40 65 45 55 45 45C45 25 30 5 30 5Z"
          fill="url(#rocketGradient)"
          stroke="white"
          strokeWidth="1"
          strokeOpacity="0.3"
        />
        {/* Window */}
        <circle cx="30" cy="35" r="8" fill="url(#windowGradient)" />
        <circle cx="30" cy="35" r="5" fill="#0ea5e9" opacity="0.8" />
        {/* Fins */}
        <path d="M15 50L5 65L15 60V50Z" fill="url(#finGradient)" />
        <path d="M45 50L55 65L45 60V50Z" fill="url(#finGradient)" />
        {/* Flame */}
        <ellipse cx="30" cy="75" rx="8" ry="5" fill="url(#flameGradient)" className="animate-pulse" />
        <ellipse cx="30" cy="78" rx="5" ry="3" fill="#fef08a" className="animate-pulse" />
        <defs>
          <linearGradient id="rocketGradient" x1="15" y1="5" x2="45" y2="70" gradientUnits="userSpaceOnUse">
            <stop stopColor="#e0e7ff" />
            <stop offset="1" stopColor="#818cf8" />
          </linearGradient>
          <linearGradient id="windowGradient" x1="22" y1="27" x2="38" y2="43" gradientUnits="userSpaceOnUse">
            <stop stopColor="#0284c7" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
          <linearGradient id="finGradient" x1="5" y1="50" x2="15" y2="65" gradientUnits="userSpaceOnUse">
            <stop stopColor="#a78bfa" />
            <stop offset="1" stopColor="#6366f1" />
          </linearGradient>
          <linearGradient id="flameGradient" x1="22" y1="70" x2="38" y2="80" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f97316" />
            <stop offset="0.5" stopColor="#fb923c" />
            <stop offset="1" stopColor="#fbbf24" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

export default function Home() {
  const [progress, setProgress] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timer = setTimeout(() => {
      setProgress(85);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  const particles = [
    { left: "25%", top: "30%", size: 6, delay: 1, duration: 4, opacity: 0.7 },
    { left: "55%", top: "25%", size: 4, delay: 0.5, duration: 4.5, opacity: 0.9 },
    { left: "85%", top: "20%", size: 6, delay: 2.5, duration: 4, opacity: 0.8 },
    { left: "30%", top: "65%", size: 8, delay: 0.3, duration: 4.2, opacity: 0.7 },
    { left: "60%", top: "70%", size: 4, delay: 2.2, duration: 4.1, opacity: 0.9 },
    { left: "90%", top: "45%", size: 6, delay: 1.2, duration: 4.4, opacity: 0.7 },
    { left: "35%", top: "75%", size: 8, delay: 0.6, duration: 4.3, opacity: 0.7 },
    { left: "65%", top: "90%", size: 4, delay: 2.6, duration: 4.6, opacity: 0.6 },
    { left: "5%", top: "35%", size: 6, delay: 1.7, duration: 4.7, opacity: 0.7 },
    { left: "12%", top: "70%", size: 8, delay: 0.4, duration: 4.8, opacity: 0.6 },
    { left: "78%", top: "85%", size: 5, delay: 1.8, duration: 4.2, opacity: 0.8 },
    { left: "15%", top: "15%", size: 4, delay: 0.9, duration: 4.9, opacity: 0.7 },
    { left: "92%", top: "75%", size: 6, delay: 2.1, duration: 4.3, opacity: 0.6 },
    { left: "48%", top: "10%", size: 5, delay: 1.4, duration: 4.1, opacity: 0.8 },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#0f0a1a] to-[#1a0a2a] flex items-center justify-center px-4 relative overflow-hidden">
      {/* Background Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-sky-600/20 to-violet-600/20 rounded-full blur-3xl animate-pulse" />
        <div
          className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-600/20 to-sky-600/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        />
        <div
          className="absolute top-1/2 right-10 w-72 h-72 bg-gradient-to-r from-violet-600/15 to-indigo-600/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        />
      </div>

      {/* Saturn Planet */}
      <SaturnPlanet />

      {/* Rocket */}
      <Rocket />

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((particle, index) => (
          <Particle key={index} {...particle} />
        ))}
      </div>

      {/* Stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${(i * 37) % 100}%`,
              top: `${(i * 23) % 100}%`,
              opacity: 0.3 + (i % 5) * 0.1,
              animationDelay: `${i * 0.2}s`,
              animationDuration: `${2 + (i % 3)}s`,
            }}
          />
        ))}
      </div>

      {/* Main Content Card */}
      <div
        className={`text-center max-w-5xl z-10 relative transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl shadow-violet-500/30 max-w-2xl mx-auto relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-violet-500/5 pointer-events-none" />

          {/* Logo Icon */}
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-br from-sky-500 via-violet-500 to-purple-600 rounded-3xl flex items-center justify-center shadow-2xl animate-bounce-slow">
                <GearIcon />
              </div>
              <div className="absolute -inset-2 bg-gradient-to-r from-sky-500 to-violet-500 rounded-3xl blur-xl opacity-60 animate-pulse -z-10" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-3xl md:text-4xl font-black mb-6 gradient-text">
            Em Construção
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-sky-100 mb-6 leading-relaxed font-medium">
            Estamos a construir algo{" "}
            <span className="font-black bg-gradient-to-r from-sky-400 to-violet-400 bg-clip-text text-transparent">
              extraordinário
            </span>{" "}
            para ti!
          </p>

          {/* Description */}
          <p className="text-violet-200/80 mb-8 leading-relaxed max-w-lg mx-auto">
            O nosso novo website está a ser cuidadosamente desenvolvido com as
            mais recentes tecnologias para trazer-lhe uma experiência{" "}
            <span className="font-semibold text-white">
              única e impactante
            </span>
            . Em breve poderá explorar todos os nossos projetos e iniciativas.
          </p>

          {/* Email Waitlist */}
          <div className="mb-8">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="O teu email..."
                  className="flex-1 px-5 py-3 rounded-xl bg-black/40 border border-violet-500/30 text-white placeholder-violet-300/50 focus:outline-none focus:border-sky-400/60 focus:ring-2 focus:ring-sky-400/20 transition-all"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-gradient-to-r from-sky-500 to-violet-500 hover:from-sky-400 hover:to-violet-400 text-white font-bold rounded-xl shadow-lg shadow-violet-500/30 hover:shadow-violet-500/50 transition-all transform hover:scale-105"
                >
                  Juntar-me
                </button>
              </form>
            ) : (
              <div className="bg-gradient-to-r from-sky-500/20 to-violet-500/20 border border-sky-400/30 rounded-xl p-4 max-w-md mx-auto">
                <p className="text-sky-200 font-medium">
                  Obrigado! Vamos notificar-te quando estivermos prontos.
                </p>
              </div>
            )}
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-violet-300 mb-3 font-medium">
              <span>Progresso do desenvolvimento</span>
              <span className="font-black text-white">{progress}%</span>
            </div>
            <div className="h-2 bg-black/40 rounded-full overflow-hidden border border-violet-500/20">
              <div
                className="h-full bg-gradient-to-r from-sky-500 via-violet-500 to-purple-500 rounded-full transition-all duration-1000 ease-out animate-shimmer"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Bouncing Dots */}
          <div className="flex justify-center mb-8 space-x-3">
            <div
              className="w-4 h-4 bg-gradient-to-r from-sky-400 to-violet-400 rounded-full animate-bounce shadow-lg shadow-sky-500/50"
              style={{ animationDelay: "0ms" }}
            />
            <div
              className="w-4 h-4 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-bounce shadow-lg shadow-violet-500/50"
              style={{ animationDelay: "150ms" }}
            />
            <div
              className="w-4 h-4 bg-gradient-to-r from-purple-400 to-sky-400 rounded-full animate-bounce shadow-lg shadow-purple-500/50"
              style={{ animationDelay: "300ms" }}
            />
          </div>

          {/* Footer Section */}
          <div className="bg-gradient-to-r from-black/30 to-black/20 rounded-2xl p-6 border border-violet-500/20 backdrop-blur-sm">
            <p className="text-violet-200 text-base mb-4 font-medium">
              Para informações:{" "}
              <a
                href="mailto:layoutagency.pt@gmail.com"
                className="text-white font-bold hover:text-sky-300 transition-colors"
              >
                layoutagency.pt@gmail.com
              </a>
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-violet-300">
              <span>© 2026</span>
              <span className="text-violet-400 hidden sm:inline">•</span>
              <span className="font-medium">Layout Agency</span>
              <span className="text-violet-400 hidden sm:inline">•</span>
              <span>Todos os direitos reservados</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
