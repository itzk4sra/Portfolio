import React from 'react'

interface GlitchTextProps {
  text: string
  className?: string
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <div className={`relative ${className}`}>
      <span className="glitch-text" data-text={text}>
        {text}
      </span>
      <style jsx>{`
        .glitch-text {
          position: relative;
          display: inline-block;
          color: white;
        }
        .glitch-text::before,
        .glitch-text::after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        .glitch-text::before {
          left: 2px;
          text-shadow: -2px 0 #ff00c1;
          clip: rect(44px, 450px, 56px, 0);
          animation: glitch-anim-1 5s infinite linear alternate-reverse;
        }
        .glitch-text::after {
          left: -2px;
          text-shadow: -2px 0 #00fff9, 2px 2px #ff00c1;
          animation: glitch-anim-2 1s infinite linear alternate-reverse;
        }
        @keyframes glitch-anim-1 {
          0% {
            clip: rect(30px, 9999px, 10px, 0);
          }
          100% {
            clip: rect(42px, 9999px, 70px, 0);
          }
        }
        @keyframes glitch-anim-2 {
          0% {
            clip: rect(65px, 9999px, 119px, 0);
          }
          100% {
            clip: rect(79px, 9999px, 44px, 0);
          }
        }
      `}</style>
    </div>
  )
}

export default GlitchText

