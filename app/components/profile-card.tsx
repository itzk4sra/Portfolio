import React from 'react';
import { Github, Instagram, MessageCircle } from 'lucide-react';
import ClientSideStars from './client-side-stars';


export default function ProfileCard() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gray-800 px-4" style={{ backgroundImage: 'url(https://i.ibb.co/rFtHtQf/Background.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <ClientSideStars />
      <div className="relative z-10">
        <div className="absolute -top-20 -right-20 h-[400px] w-[400px] rounded-full bg-white/30 opacity-30 blur-[100px] animate-pulse" />
        
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
              <span className="text-xl md:text-2xl font-light tracking-wider text-white/100 glow-white">
                Kasra
              </span>
            </div>


              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com/itzk4sra" 
                  className="flex items-center text-white/80 hover:text-white/90 transition-colors glow-white"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://instagram.com/it._.k4" 
                  className="flex items-center text-white/80 hover:text-white/90 transition-colors glow-white"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <div className="flex flex-col items-center">
                  <a 
                    href="https://t.me/w4rdark" 
                    className="flex items-center text-white/80 hover:text-white/90 transition-colors glow-white"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </div>
                <a 
                  href="https://discord.com/users/357233919285919746" 
                  className="flex items-center text-white transition-colors glow-white"
                >
                  <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512">
                    <path fill="white" d="M524.5 69.8a1.5 1.5 0 0 0 -.8-.7A485.1 485.1 0 0 0 404.1 32a1.8 1.8 0 0 0 -1.9 .9 337.5 337.5 0 0 0 -14.9 30.6 447.8 447.8 0 0 0 -134.4 0 309.5 309.5 0 0 0 -15.1-30.6 1.9 1.9 0 0 0 -1.9-.9A483.7 483.7 0 0 0 116.1 69.1a1.7 1.7 0 0 0 -.8 .7C39.1 183.7 18.2 294.7 28.4 404.4a2 2 0 0 0 .8 1.4A487.7 487.7 0 0 0 176 479.9a1.9 1.9 0 0 0 2.1-.7A348.2 348.2 0 0 0 208.1 430.4a1.9 1.9 0 0 0 -1-2.6 321.2 321.2 0 0 1 -45.9-21.9 1.9 1.9 0 0 1 -.2-3.1c3.1-2.3 6.2-4.7 9.1-7.1a1.8 1.8 0 0 1 1.9-.3c96.2 43.9 200.4 43.9 295.5 0a1.8 1.8 0 0 1 1.9 .2c2.9 2.4 6 4.9 9.1 7.2a1.9 1.9 0 0 1 -.2 3.1 301.4 301.4 0 0 1 -45.9 21.8 1.9 1.9 0 0 0 -1 2.6 391.1 391.1 0 0 0 30 48.8 1.9 1.9 0 0 0 2.1 .7A486 486 0 0 0 610.7 405.7a1.9 1.9 0 0 0 .8-1.4C623.7 277.6 590.9 167.5 524.5 69.8zM222.5 337.6c-29 0-52.8-26.6-52.8-59.2S193.1 219.1 222.5 219.1c29.7 0 53.3 26.8 52.8 59.2C275.3 311 251.9 337.6 222.5 337.6zm195.4 0c-29 0-52.8-26.6-52.8-59.2S388.4 219.1 417.9 219.1c29.7 0 53.3 26.8 52.8 59.2C470.7 311 447.5 337.6 417.9 337.6z"/>
                  </svg>
                </a>
              </div>

              <div className="w-full space-y-2">
                <div className="space-y-1">
                  <div className="flex justify-between text-white/80">
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
              <p className="text-white/80 text-balance">
              With over 9 years of coding experience, I began my journey with Python and have since expanded into backend development with a focus on Ruby, Rust, and PHP. Passionate about network security, I ensure systems are secure and scalable. When I’m not diving into code, you’ll find me drawing or gaming.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-lg md:text-xl text-white/90">Skills</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
                {[
                  "Python", "PHP", "C++", "C#", "JavaScript", "Ruby", "Rust", "Node.js", "Go", "Lua", "Bash", "Perl", "Network Security", "MTCNA", "CCNA", "Cisco"
                ].map(skill => (
                  <span key={skill} className="hover:text-white transition-colors text-white/60 hover:glow-white">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 backdrop-blur-md bg-white/10 p-8 rounded-3xl border border-white/20 shadow-lg w-full max-w-5xl">
          <h2 className="text-lg md:text-light text-white/90">Contact Information</h2>
          <p className="text-gray-400">Feel free to reach out via email at H3xC0de01@proton.me</p>
        </div>
      </div>
    </div>
  );
}
