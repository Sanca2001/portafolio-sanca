"use client";

import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence, useInView, Variants, Transition } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, Expand, Minimize, Share2, Search, XCircle } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnailUrl: string;
  description: string;
  client: string;
  director: string;
  year: string;
  location: string;
  camera: string;
  lenses: string;
  format: string;
  aspectRatio: string;
}

interface Category {
  id: number;
  name: string;
}

interface AnimationVariants extends Variants {
  hidden: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
  };
  visible: {
    opacity: number;
    y?: number;
    scale?: number;
    width?: number | string;
    transition: Transition;
  };
}

const categories: Category[] = [
  { id: 1, name: 'Documentary' },
  { id: 2, name: 'Wedding' },
  { id: 3, name: 'Travel' },
  { id: 4, name: 'Film' },
];

const projects: Project[] = [
  {
    id: 1,
    title: " Sistema de Inventarios ",
    category: "Inventarios",
    thumbnailUrl: "/images/projects/proyecto_1.jfif",
    description: " Sistema de inventarios para la empresa Mobile Phones Servicios Generales, en donde Diseñe y desarrolle un sistema de inventarios para el control, registro de productos y movimientos de stock ",
    client: "Mobile Phones Servicios Generales",
    director: "Alex Rodriguez",
    year: "2024",
    location: "Lima, Perú",
    camera: "HTML5, CSS3, JavaScript, MySQL WorkBeanch, Xampp, Laravel - PHP, Blade, Bootstrap",
    lenses: "Zeiss Supreme Primes",
    format: "6K RAW",
    aspectRatio: "2.39:1"
  },
  {
    id: 2,
    title: "Aplicación de Inventarios",
    category: "Inventarios",
    thumbnailUrl: "/images/projects/proyecto_2.jfif",
    description: " Como parte de un proyecto personal implemente una aplicación móvil low code utilizando AppShet para la gestión de inventarios de equipos de TI ",
    client: " Quimpac S.A ",
    director: "Sarah Chen",
    year: "2025",
    location: "Huacho, Perú",
    camera: "AppShet - Low Code",
    lenses: "AppShet",
    format: "4K XAVC",
    aspectRatio: "16:9"
  },




  


];

const useScrollAnimation = () => {
  const containerAnimation: AnimationVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemAnimation: AnimationVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut' as const,
      },
    },
  };

  return { containerAnimation, itemAnimation };
};

const VideoGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [category, setCategory] = useState<string>('all');
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});
  const [currentProjectIndex, setCurrentProjectIndex] = useState<number>(0);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [isSearchActive, setIsSearchActive] = useState<boolean>(false);

  const ref = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { containerAnimation, itemAnimation } = useScrollAnimation();

  const categoryOptions = ['all', ...categories.map(cat => cat.name.toLowerCase())];

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesCategory = category === 'all' || project.category === category;
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [category, searchTerm]);

  const openProject = useCallback((project: Project) => {
    const projectIndex = filteredProjects.findIndex(p => p.id === project.id);
    setCurrentProjectIndex(projectIndex);
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  }, [filteredProjects]);

  const closeProject = useCallback(() => {
    setSelectedProject(null);
    setIsFullscreen(false);
    document.body.style.overflow = 'auto';
  }, []);

  const navigateProject = useCallback((direction: 'next' | 'prev') => {
    const newIndex = direction === 'next'
      ? (currentProjectIndex + 1) % filteredProjects.length
      : (currentProjectIndex - 1 + filteredProjects.length) % filteredProjects.length;

    setCurrentProjectIndex(newIndex);
    setSelectedProject(filteredProjects[newIndex]);
  }, [currentProjectIndex, filteredProjects]);


  const toggleFullscreen = useCallback(() => {
    setIsFullscreen(prev => !prev);
  }, []);

  const handleShare = useCallback(async () => {
    if (navigator.share && selectedProject) {
      try {
        await navigator.share({
          title: selectedProject.title,
          text: selectedProject.description,
          url: window.location.href
        });
      } catch {
        navigator.clipboard.writeText(window.location.href);
      }
    }
  }, [selectedProject]);


  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedProject) {
        if (e.key === '/' && !isSearchActive) {
          e.preventDefault();
          setIsSearchActive(true);
          setTimeout(() => searchInputRef.current?.focus(), 100);
        }
        return;
      }
      switch (e.key) {
        case 'Escape':
          closeProject();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigateProject('prev');
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateProject('next');
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 's':
        case 'S':
          e.preventDefault();
          handleShare();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedProject, navigateProject, closeProject, handleShare, toggleFullscreen, isSearchActive]);

  const handleImageError = (id: number) => {
    setImageError(prev => ({ ...prev, [id]: true }));
  };

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    } else {
      setSearchTerm('');
    }
  };

  const searchVariants: AnimationVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: {
      width: "100%",
      opacity: 1,
      transition: {
        stiffness: 300,
        damping: 25
      }
    }
  };

  const buttonHoverAnimation = {
    scale: 1.05,
    transition: {
      stiffness: 400,
      damping: 10
    }
  };

  const cardHoverAnimation = {
    scale: 1.03,
    y: -8,
    transition: {
      stiffness: 300,
      damping: 20
    }
  };

  return (
    <section id="gallery" className="py-12 sm:py-16 md:py-20 min-h-screen relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="text-center mb-12 sm:mb-16"
        >
          <motion.h2
            variants={itemAnimation}
            className="text-3xl sm:text-3xl md:text-3xl font-extrabold mb-4 text-black tracking-tight dark:text-white "
          >
            Proyectos Desarrollados
          </motion.h2>
          <motion.div
            variants={itemAnimation}
            className="w-24 h-1 bg-white mx-auto mb-6"
          />
          <motion.p
            variants={itemAnimation}
            className="text-black max-w-3xl mx-auto text-lg md:text-xl leading-relaxed dark:text-white"
          >
            Sección donde presento proyectos desarrollados para empresas, clientes y también proyectos personales que reflejan mis habilidades.
            {/* <span className="block text-sm text-gray-400 mt-2">Press &quot;/&quot; to search or use arrow keys to navigate</span> */}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-8 flex justify-start">
            <motion.div className="relative w-full max-w-md">
              <div className="relative flex items-center">
                <motion.button
                  onClick={toggleSearch}
                  className={`flex items-center gap-2 px-4 py-2 bg-black border border-gray-600 rounded text-gray-300 hover:bg-gray-800 transition-all duration-300 ${isSearchActive ? 'w-full' : 'w-auto'
                    }`}
                  whileHover={buttonHoverAnimation}
                  whileTap={{ scale: 0.95 }}
                >
                  <Search size={20} />
                  {!isSearchActive && <span>Buscar Proyectos</span>}
                </motion.button>
                <AnimatePresence>
                  {isSearchActive && (
                    <motion.div
                      variants={searchVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="absolute inset-0 flex items-center"
                    >
                      <input
                        ref={searchInputRef}
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        onBlur={() => !searchTerm && setIsSearchActive(false)}
                        placeholder="Search projects..."
                        className="w-full px-4 py-2 pl-10 bg-black border border-gray-600 rounded text-white placeholder-gray-400 focus:outline-none focus:border-white"
                      />
                      <Search size={20} className="absolute left-3 text-gray-400" />
                      {searchTerm && (
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => {
                            setSearchTerm('');
                            searchInputRef.current?.focus();
                          }}
                          className="absolute right-3 text-gray-400 hover:text-white"
                        >
                          <XCircle size={20} />
                        </motion.button>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          </div>

          {/* BOTONES FILTROS */}
          {/* <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {categoryOptions.map((cat) => (
              <motion.button
                key={cat}
                variants={itemAnimation}
                className={`px-6 py-3 rounded uppercase tracking-widest text-sm font-semibold transition-all duration-300 ${
                  category === cat
                    ? 'bg-white text-black'
                    : 'border border-gray-600 text-gray-200 hover:border-white hover:text-white'
                } focus:outline-none focus:border-white`}
                onClick={() => setCategory(cat)}
                whileHover={buttonHoverAnimation}
                whileTap={{ scale: 0.95 }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </motion.button>
            ))}
          </div> */}

        </motion.div>

        <motion.div
          layout
          variants={containerAnimation}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xxl:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                variants={itemAnimation}
                className="relative group cursor-pointer rounded overflow-hidden h-72 sm:h-80 bg-gray-900 border border-gray-800"
                onClick={() => openProject(project)}
                whileHover={cardHoverAnimation}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.4 }}
              >
                {!imageError[project.id] ? (
                  <img
                    src={project.thumbnailUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={() => handleImageError(project.id)}
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-900 flex items-center justify-center">
                    <span className="text-gray-400 text-sm font-medium">Image unavailable</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <motion.h3
                    className="text-lg sm:text-xl font-bold text-white mb-1"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p
                    className="text-gray-300 text-sm uppercase tracking-wider mb-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.category}
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-3"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="px-4 py-2 rounded bg-white flex items-center justify-center">
                      <span className="text-black text-sm font-bold uppercase tracking-wider">Ver Detalles</span>
                    </div>
                  </motion.div>
                </div>
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 rounded text-xs text-gray-300 uppercase tracking-wider font-semibold">
                  {project.category}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <p className="text-gray-400 text-lg">No hay proyectos encontrados de esa categoria.</p>
            <button
              onClick={() => { setCategory('all'); setSearchTerm(''); }}
              className="mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors"
            >
              Limpiar Filtros
            </button>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className={`fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-6 ${isFullscreen ? 'p-0' : ''}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeProject}
          >
            <motion.div
              ref={modalRef}
              className={`relative bg-black w-full overflow-y-auto rounded shadow border border-gray-800 ${isFullscreen ? 'max-w-none max-h-none h-full rounded-none' : 'max-w-6xl max-h-[90vh]'
                }`}
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              transition={{ damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4 bg-gradient-to-b from-black/80 to-transparent">
                <div className="flex items-center space-x-4">
                  <span className="text-white text-sm">
                    {currentProjectIndex + 1} / {filteredProjects.length}
                  </span>
                  <span className="text-gray-400 text-sm">Use ← → to navigate</span>
                </div>
                <div className="flex items-center space-x-2">
              
                  <button
                    onClick={toggleFullscreen}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Fullscreen (F)"
                  >
                    {isFullscreen ? <Minimize size={16} /> : <Expand size={16} />}
                  </button>
                  
                  <button
                    onClick={closeProject}
                    className="w-10 h-10 rounded bg-gray-800/80 flex items-center justify-center text-white hover:bg-gray-500 transition-colors duration-300"
                    title="Close (Esc)"
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {filteredProjects.length > 1 && (
                <>
                  <button
                    onClick={() => navigateProject('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Previous (←)"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => navigateProject('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 z-20 w-12 h-12 rounded bg-black/60 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors duration-300"
                    title="Next (→)"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}

              <div className={`relative bg-black ${isFullscreen ? 'h-full' : 'aspect-video'}`}>
                <img
                  src={selectedProject.thumbnailUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {!isFullscreen && (
                <motion.div
                  className="p-6 sm:p-8 md:p-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-white">
                    {selectedProject.title}
                  </h2>
                  <p className="text-gray-300 text-sm uppercase tracking-widest mb-4">
                    {selectedProject.category}
                  </p>
                  <p className="text-gray-200 mb-8 text-base sm:text-lg leading-relaxed">
                    {selectedProject.description}
                  </p>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-lg"> Detalles del Proyecto </h3>
                      <ul className="text-gray-200 space-y-3">
                        <li><span className="font-semibold">Cliente:</span> {selectedProject.client}</li>
                        {/* <li><span className="font-semibold">Director:</span> {selectedProject.director}</li> */}
                        <li><span className="font-semibold">Año:</span> {selectedProject.year}</li>
                        <li><span className="font-semibold">Ubicación:</span> {selectedProject.location}</li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-4 text-lg">Stack Tecnológico</h3>
                      <ul className="text-gray-200 space-y-3">
                        <li><span className="font-semibold"> Tecnologías :</span> {selectedProject.camera}</li>
                        {/* <li><span className="font-semibold">Lenses:</span> {selectedProject.lenses}</li>
                        <li><span className="font-semibold">Format:</span> {selectedProject.format}</li>
                        <li><span className="font-semibold">Aspect Ratio:</span> {selectedProject.aspectRatio}</li> */}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default VideoGallery;
