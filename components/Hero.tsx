import React from "react";
import DotIcon from "./DotIcon";

const Hero = () => {
  return (
    <div className="flex flex-col gap-4 sm:gap-6 items-start text-left order-2 lg:order-1 animate-fade-in-up">
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-xs sm:text-sm text-gray-200 dark:text-gray-300 backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300">
        <DotIcon />
        Bienvenido a mi portafolio personal
      </div>

      <div className="relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight text-gray-900 dark:text-white">
          Hola <br />
          Soy{' '}
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
            Enrique
          </span>
        </h1>
      </div>

      <div className="flex flex-wrap gap-2 sm:gap-3 my-2 sm:my-4">
        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default"> Innovador </span>
        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default"> Código limpio </span>
        <span className="px-3 sm:px-4 py-1 sm:py-2 bg-gray-900/80 dark:bg-white/10 border border-gray-700 dark:border-gray-600 rounded-full text-gray-200 dark:text-gray-300 text-sm sm:text-base backdrop-blur-sm hover:bg-gray-800 dark:hover:bg-white/20 transition-all duration-300 cursor-default"> Creativo </span>
      </div>

      <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg lg:text-xl max-w-lg leading-relaxed">
        Programador Informático, enfocado en soluciones eficientes
      </p>

      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 sm:mt-6 w-full sm:w-auto">
        <a target="_blank" href="https://www.linkedin.com/in/enrique-sanca/"   className="px-6 py-3 bg-blue-600 dark:bg-blue-500 text-white hover:bg-blue-700 dark:hover:bg-blue-600 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95">
          Saber más
        </a>
        <a target="_blank"  href="https://drive.google.com/file/d/1wP5rDOfn_pyY_ckvi9Yqh5MgJiVZkRY1/view?usp=sharing"  className="px-6 py-3 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white rounded-lg font-semibold transition-all duration-300 hover:scale-105 active:scale-95">
          Descargar currículum
        </a>
      </div>
    </div>
  );
};

export default Hero;
