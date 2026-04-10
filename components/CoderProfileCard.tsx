import React from "react";

// The data for the code snippet
export const coderData = {
  nombre: 'Enrique Sandoval Carmen',
  rol: 'Programador Informático',
  nivel: 'Junior',
  location: 'Perú',
  skills: [
    'HTML', 'CSS', 'JavaScript', 'Git', 'Github', 'Bootstrap', 'Tailwind CSS', 'Figma' , 'React', 'Next.js', 'Astro', 
    'Laravel PHP' , 'Vite', 'Power BI', 'Python', 'MySQL Workbeanch', 'SQL Server'
  ],
};

const CoderProfileCard = () => {
  return (
    // Main container with gradient, border, and shadow - theme-aware
    <div className="w-full mx-auto bg-gradient-to-r from-zinc-100 to-zinc-200 dark:from-[#000000] dark:to-[#0a0d37] border-zinc-300 dark:border-[#1b2c68a0] relative rounded-lg border shadow-lg">

      {/* Top gradient border element */}
      <div className="flex flex-row">
        <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[2px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Window Header */}
      <div className="px-4 lg:px-8 py-5 flex justify-between items-center bg-zinc-200 dark:bg-[#000000]">
        <div className="flex flex-row space-x-2">
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <div className="h-3 w-3 rounded-full bg-orange-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div className="text-xs text-zinc-600 dark:text-gray-400 font-mono">coder.js</div>
      </div>

      {/* Code Content Area */}
      <div className="overflow-hidden border-t-[2px] border-zinc-300 dark:border-indigo-900 px-4 lg:px-8 py-4 lg:py-8 relative">
        {/* Background blur effects */}
        <div className="absolute -top-24 -left-24 w-56 h-56 bg-blue-600 rounded-full opacity-10 filter blur-3xl"></div>
        <div className="absolute -bottom-24 -right-24 w-56 h-56 bg-pink-600 rounded-full opacity-10 filter blur-3xl"></div>

        <div className="relative flex">
          {/* Line Numbers */}
          <div className="hidden md:flex flex-col items-end pr-4 text-zinc-600 dark:text-gray-500 font-mono text-xs">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="leading-relaxed select-none opacity-70">{i + 1}</div>
            ))}
          </div>

          {/* Code Snippet with theme-aware colors */}
          <code className="font-mono text-xs md:text-sm lg:text-base w-full">
            <div>
              <span className="mr-2 text-pink-500 dark:text-pink-400">const</span>
              <span className="mr-2 text-violet-500 dark:text-violet-400">coder</span>
              <span className="mr-2 text-pink-500 dark:text-pink-400">=</span>
              <span className="text-zinc-600 dark:text-gray-400">{'{'}</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">nombre:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.nombre}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">rol:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.rol}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">nivel:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.nivel}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">localidad:</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
              <span className="text-green-600 dark:text-green-400">{coderData.location}</span>
              <span className="text-zinc-600 dark:text-gray-400">&#39;,</span>
            </div>
            <div className="pl-6">
              <span className="text-zinc-800 dark:text-white">skills:</span>
              <span className="text-zinc-600 dark:text-gray-400">{'['}</span>
              <div className="pl-6 flex flex-wrap">
                {coderData.skills.map((skill, index) => (
                  <span key={skill} className="mr-1">
                    <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                    <span className="text-cyan-600 dark:text-cyan-400">{skill}</span>
                    <span className="text-zinc-600 dark:text-gray-400">&#39;</span>
                    {index < coderData.skills.length - 1 && <span className="text-zinc-600 dark:text-gray-400">, </span>}
                  </span>
                ))}
              </div>
              <span className="text-zinc-600 dark:text-gray-400">{'],'}</span>
            </div>
            <div>
              <span className="text-zinc-600 dark:text-gray-400">{'};'}</span>
            </div>
          </code>
        </div>
      </div>

      {/* Window Footer */}
      <div className="px-4 lg:px-8 pb-4 mt-4 border-t border-zinc-300 dark:border-gray-800 pt-3 text-xs text-zinc-600 dark:text-gray-500 flex justify-between items-center">
        <span>UTF-8</span>
        <span>JavaScript</span>
        <span>Ln 12, Col 2</span>
      </div>
    </div>
  );
};

export default CoderProfileCard;
