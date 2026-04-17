"use client";
import React from "react"
import Hero from "@/components/Hero";
import CoderProfileCard from "@/components/CoderProfileCard";
import Skills from "@/components/Skills";
import Proyectos from "@/components/Protectos";
import Experiencia from "@/components/Experiencia";


// Main component
const Portfolio = () => {
  return (
    <div className="min-h-screen w-full relative flex flex-col items-center justify-center font-sans p-4 sm:p-6 lg:p-8">
      {/* Light mode Azure Depths */}
      <div
        className="absolute inset-0 z-0 dark:hidden"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #ffffff 40%, #3b82f6 100%)",
        }}
      />

      {/* Dark mode Azure Depths */}
      <div
        className="absolute inset-0 z-0 hidden dark:block"
        style={{
          background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)",
        }}
      />

      {/* Main Content Container */}
      <div className="container mx-auto max-w-7xl relative z-10 flex flex-col gap-24 py-12 min-h-screen justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 xl:gap-16 items-center">

          {/* Left Column: Hero Content */}
          <Hero />

          {/* Right Column: Code Editor */}
          <div className="order-1 lg:order-2 animate-fade-in-up">
            <CoderProfileCard />
          </div>

        </div>

        {/* Skills Section */}
        <Skills />

        {/* Proyectos Section */}
        <Proyectos />

        {/* Experiencia Section */}
        <Experiencia />



        
      </div>
    </div>
  );
};

export default Portfolio;