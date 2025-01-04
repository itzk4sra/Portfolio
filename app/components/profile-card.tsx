import React from 'react';
import { Github, Instagram } from 'lucide-react';
import ClientSideStars from './client-side-stars';

export default function ProfileCard() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-800 px-4" style={{ backgroundImage: 'url(https://i.ibb.co/rFtHtQf/Background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ClientSideStars />
      <div className="relative z-10">
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-blue-500 opacity-20 blur-[100px]" />
        
        <div className="flex flex-col md:flex-row gap-6 max-w-5xl">
          <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 shadow-lg w-full md:w-1/3">
            <div className="flex flex-col items-center space-y-6">
              <div className="relative w-32 h-32 md:w-48 md:h-48">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-black-700/50 to-transparent" />
                <img 
                  src="https://i.ibb.co/qMRj90c/0a07f26414ab53cfcd16acb6fb95caf5.jpg" 
                  alt="Profile" 
                  className="relative rounded-full w-full h-full object-cover border-4 border-gray-500/30"
                />
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-xl md:text-2xl font-light tracking-wider text-white/90">ItzK4sra</span>
              </div>
              
              <div className="space-y-2 flex flex-col items-start">
                <a 
                  href="https://github.com/itzk4sra" 
                  className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  <span>GitHub</span>
                </a>
                <a 
                  href="https://instagram.com/itz._.k4" 
                  className="flex items-center gap-2 text-white/60 hover:text-white/90 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Instagram</span>
                </a>
              </div>

              <div className="w-full space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-white/60">
                    <span>Note</span>
                  </div>
                  <div className="text-sm text-white/40">"Work hard, but chill harder." 👑</div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 shadow-lg space-y-8 w-full md:w-2/3">
            <div className="space-y-2">
              <h2 className="text-lg md:text-xl text-white/90">About Me</h2>
              <p className="text-white/60">With over 9 years of coding experience, I began my journey with Python and have since expanded into backend development with a focus on Ruby, Rust, and PHP. Passionate about network security, I ensure systems are secure and scalable. When I'm not diving into code, you'll find me drawing or gaming.</p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl text-white/90">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {[
                  "Python", "Ruby", "Rust", "PHP", "C++", "C", "C#", "JavaScript", 
                  "Node.js", "Go", "Lua", "Bash", "Perl"
                ].map(skill => (
                  <span key={skill} className="hover:text-blue-500 transition-colors text-white/60">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}