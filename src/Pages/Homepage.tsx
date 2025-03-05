import { motion } from "framer-motion"
import { ArrowRight02Icon, ArrowUp01Icon, BrowserIcon, Building02Icon, Calendar04Icon, Cancel01Icon, Github01Icon, InformationDiamondIcon, Link03Icon, Linkedin01Icon, LinkSquare01Icon, Mortarboard02Icon, PaintBrush04Icon, Search01Icon, ViewIcon } from 'hugeicons-react'
import React, { useEffect, useRef, useState } from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Build, Cirebon, Clickup, DockerBlue, Electshop1, Electshop2, Footer, Git1, Git2, Git3, Inovasi, Jakarta, Jannah, JWD, KonstruksiLogo, Laravel, Laravel1, Luvlywed, Majalengka, Node, OMDB, Pacticles2, PakYos, Reacts, Redux, ssh, Team, TS, Unipay, Unipay2, Weather, Winner } from '../Assets'
import FilteredGitHubCalendar from "../Components/GithubCalendar"
import InfiniteSlider from "../Components/InfiniteSlider"
import ModalSearch from "../Components/Modal"
import ModalCertification from '../Components/ModalCertification'
import FadeTransition from "../Components/PageTransition"
import '../index.css'

const Homepage: React.FC = () => {

  const [selectimage, setSelectImage] = useState<string>('');
  const [isModal, setIsModal] = useState<boolean>(false);
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [selectType, setSelectType] = useState<string>('apps');
  const [selectTypeGit, setSelectTypeGit] = useState<string>('git3');
  const [selectAccordion, setSelectAccordion] = useState<number>(1);
  const [activeModalSearch, setActiveModalSearch] = useState<boolean>(false);
  const [activeSearch, setActiveSearch] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBackToTop, setIsBackToTop] = useState(false);

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = 5; // Mulai dari detik ke-5
      video.play(); // Pastikan video tetap berjalan
    }
  }, []);

  // Menambahkan event listener untuk ESC key
  useEffect(() => {
    const handleEscPress = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setActiveModalSearch(false); // Menutup modal ketika ESC ditekan
        setActiveSearch(false); // Menutup modal ketika ESC ditekan
      }
      if (event.ctrlKey && event.key.toLowerCase() === 'k') {
        event.preventDefault(); // Mencegah aksi default browser
        setActiveModalSearch(true)
      }
    };

    // Menambahkan listener saat komponen dipasang
    document.addEventListener('keydown', handleEscPress);

    // Membersihkan listener saat komponen dilepas
    return () => {
      document.removeEventListener('keydown', handleEscPress);
    };
  }, []);

  useEffect(() => {
    const handleScrollBack = () => {
      if (window.scrollY > 5200) {
        setIsBackToTop(true);
      } else {
        setIsBackToTop(false);
      }
    };

    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
        setActiveSearch(true)
      } else {
        setIsScrolled(false);
        setActiveSearch(false)
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleScrollBack);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScrollBack);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const dataProducts = [
    {
      title: "ElectShop",
      desc: "ElectShop is an ecommerce website integrated with the Xednit payment gateway, built using React and Express.",
      image1: Electshop1,
      image2: Electshop2,
      url: "https://elect-shop.vercel.app",
      category: "apps",
      fe: "reactjs",
      be: "express",
      paymentGateway: "midtrans",
      stateManagement: "redux",
      db: "mongodb",
      style: "tailwind",
    },
    {
      title: "Unipay",
      desc: "This project trains API integration skills by displaying the weather conditions of a specific area.",
      image1: Unipay,
      image2: Unipay2,
      url: "https://unipay-app.vercel.app/",
      category: "apps",
      fe: "nextjs",
      be: "express",
      paymentGateway: "xendit",
      stateManagement: "redux",
      db: "mongodb",
      style: "tailwind",
    },
    {
      title: "Al-quran Jannah",
      desc: "This project trains API integration skills by displaying text and audio of each chapter in the holy book of the Quran.",
      image1: Jannah,
      image2: "",
      url: "https://alquran-jannah-v1.vercel.app/",
      category: "API",
      fe: "nextjs",
      be: "no used",
      paymentGateway: "none",
      stateManagement: "none",
      db: "API",
      style: "tailwind",
    },
    {
      title: "WeatherApp",
      desc: "This project trains API integration skills by displaying the weather conditions of a specific area.",
      image1: Weather,
      image2: "",
      url: "https://weather-huda.vercel.app/",
      category: "API",
      fe: "react",
      be: "no used",
      paymentGateway: "none",
      stateManagement: "none",
      db: "API",
      style: "tailwind",
    },
    {
      title: "OMDB API",
      desc: "This is a popular movie listing website sourced from the OMDB API endpoint.",
      image1: OMDB,
      image2: "",
      url: "https://omdb-api-vite.vercel.app/",
      category: "API",
      fe: "react",
      be: "no used",
      paymentGateway: "none",
      stateManagement: "none",
      db: "API",
      style: "tailwind",
    },
    {
      title: "Luvlywed",
      desc: "A website portal providing various services for organizing elegant wedding events.",
      image1: Luvlywed,
      image2: "",
      url: "https://luvlywed.vercel.app/",
      category: "slicing",
      fe: "reactjs",
      be: "no used",
      package: "threejs",
      paymentGateway: "none",
      stateManagement: "none",
      db: "none",
      style: "tailwind",
    },
  ]

  return (
    <>
      <FadeTransition />

      <video
        ref={videoRef}
        className="fixed z-[-1] rotate-90 md:rotate-0 top-0 left-0 scale-[4] md:scale-[1] w-full h-screen lg:h-auto select-none"
        disablePictureInPicture
        disableRemotePlayback
        autoPlay
        loop
        muted
        playsInline
        src="https://l4wlsi8vxy8hre4v.public.blob.vercel-storage.com/video/glass-animation-5-f0gPcjmKFIV3ot5MGOdNy2r4QHBoXt.mp4">
      </video>

      {
        activeModalSearch ? (
          <ModalSearch onClose={() => { setActiveModalSearch(false); setActiveSearch(false) }} />
        ) :
          <></>
      }

      <div className='relative md:w-[94vw] mx-auto min-h-screen overflow-x-hidden bg-black bg-opacity-[75%] md:bg-opacity-[90%]'>

        {/* Modal certification */}
        {
          isModal ? (
            <ModalCertification onClose={() => setIsModal(false)} image={selectimage} />
          ) :
            null
        }

        {/* Nabar */}
        <nav className={`fixed duration-300 top-0 left-0 w-full z-[999999999] flex items-center justify-between gap-10 h-max ${isScrolled ? 'bg-white/10 backdrop-blur-xl py-3 md:py-1 px-4 md:px-[44px]' : 'bg-transparent py-4 px-4 md:px-[90px]'}`}>
          <div className="flex items-center w-max text-white gap-10">
            <p className="md:hidden flex">8.21.4.1</p>

            {/* Default view */}
            <div className='md:flex hidden w-max text-slate-300 py-5 h-max'>
              <ul className={`w-[80%] flex items-center justify-between ${isScrolled ? 'text-[14px]' : ''}`}>
                <a href="#languages">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Languages</li>
                </a>
                <a href="#technologies">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Technologies</li>
                </a>
                <a href="#linkedin">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Linkedin</li>
                </a>
                <a href="#experience">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Experiences</li>
                </a>
                <a href="#github">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Github</li>
                </a>
                <a href="#certifications">
                  <li className='mr-10 animate-fadeIn hover:text-white border-b hover:border-slate-400 border-transparent'>Certifications</li>
                </a>
              </ul>
            </div>
          </div>

          {/* Sidebar - Mobile view */}
          <div className={`fixed w-[100vw] h-screen overflow-y-auto bg-white block md:hidden z-[999999] shadow-md p-6 top-0 ${sidebar ? 'right-0 duration-200' : 'right-[-100%] duration-200 ease-in'}`}>

            <div onClick={() => setSidebar(false)} className='absolute w-[40px] h-[40px] bg-red-500 text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hover:brightness-[90%] shadow-md top-5 right-6'>
              <FaTimes />
            </div>

            <ul className='w-[80%] mt-4 flex flex-col'>
              <a href="#home" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Home</li>
              </a>
              <a href="#technologies" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Technologies</li>
              </a>
              <a href="#linkedin" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Linkedin</li>
              </a>
              <a href="#experience" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Experiences</li>
              </a>
              <a href="#github" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Github</li>
              </a>
              <a href="#certifications" className='w-full mb-4 border-b border-b-slate-200'>
                <li className='py-4' onClick={() => setSidebar(false)}>Certifications</li>
              </a>
            </ul>
          </div>

          <div className="text-white flex-1 justify-end gap-6 flex overflow-hidden items-center">
            <div className={`animate-fadeIn overflow-hidden active:scale-[0.99] flex items-center outline-0 justify-between gap-1 duration-300 ease-in-out rounded-full ${activeSearch ? 'px-4 w-[320px]' : 'px-4 w-[115.5px]'} py-2 text-left text-sm/6 bg-white/5 text-white/50`}>
              <div onClick={() => setActiveModalSearch(true)} className={`flex-1 duration-200 delay-100 items-center gap-2 ${activeSearch ? 'flex opacity-1' : 'hidden opacity-0'}`}>
                <p className='w-max mr-20'>
                  Quick search
                </p>
              </div>
              <div className="w-max gap-2 font-sans flex items-center text-[13px] text-gray-500 dark:text-gray-400 [.os-macos_&amp;]:block">
                {
                  activeSearch ? (
                    <></>
                  ) :
                    <div className='flex items-center w-max gap-2'>
                      <p onClick={() => setActiveSearch(true)}>
                        Ctrl + k
                      </p>
                      <p>/</p>
                    </div>
                }
                {
                  activeSearch ? (
                    <Cancel01Icon onClick={() => setActiveSearch(!activeSearch)} className="w-5 h-5 md:right-0 relative right-2" />
                  ) :
                    <Search01Icon onClick={() => setActiveSearch(!activeSearch)} className="w-4 h-4" />
                }
              </div>
            </div>
            <div className="w-max h-max">
              <a href="https://github.com/khoirulhudaadev" className="ml-auto" target="_blank" rel="noopener noreferrer" aria-label="My GitHub">
                <Github01Icon size={30} className="animate-fadeIn delay-[1000ms]" />
              </a>
            </div>
          </div>

        </nav>
        {/* Akhir navbar */}


        <div id='home' className='select-none relative z-[4449] md:px-10 px-4 mb-6 md:pb-10 mt-12 md:mt-[90px] w-[100%] h-max pt-16 border-slate-100'>
          <div className="absolute left-[25%] top-0 w-[20%] h-[40px] py-[30%] transform -translate-y-[90%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_20%,_#5049c2_23%,_rgba(87,78,255,0)_0%)] blur-[250px]"></div>

          <img src={Pacticles2} alt='particles' className='absolute right-[10%] top-[30%] w-[60%]' />

          {/* Btn menu right */}
          <div onClick={() => scrollToTop()} className={`fixed active:scale-[0.97] hover:brightness-[92%] duration-200 bottom-6 left-[0.5vw] z-[333333333] bg-white p-1 w-[2vw] h-8 flex items-center justify-center ${isBackToTop ? 'opacity-1' : 'opacity-0'}`}>
            <ArrowUp01Icon />
          </div>

          {/* Side zigzag ==================================== */}
          <div className="fixed w-[3vw] h-screen z-[33333333] col-start-1 top-0 left-0 row-span-full row-start-1 hidden border-x border-x-[rgba(107,114,128,0.3)] bg-[image:repeating-linear-gradient(315deg,rgba(107,114,128,0.3)_0,rgba(107,114,128,0.3)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed md:block dark:bg-[image:repeating-linear-gradient(315deg,rgba(209,213,219,0.3)_0,rgba(209,213,219,0.3)_1px,transparent_0,transparent_50%)]">
          </div>
          <div className="fixed w-[3vw] h-screen z-[33333333] col-start-1 top-0 right-0 row-span-full row-start-1 hidden border-x border-x-[rgba(107,114,128,0.3)] bg-[image:repeating-linear-gradient(315deg,rgba(107,114,128,0.3)_0,rgba(107,114,128,0.3)_1px,transparent_0,transparent_50%)] bg-[size:10px_10px] bg-fixed md:block dark:bg-[image:repeating-linear-gradient(315deg,rgba(209,213,219,0.3)_0,rgba(209,213,219,0.3)_1px,transparent_0,transparent_50%)]">
          </div>


          <div className='relative mb-6 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <p className='text-center md:px-3 py-2 w-max text-white flex items-center animate-fadeIn delay-[1000ms]'>Fullstack Developer - <span className="text-gray-500 ml-1">MERN&Laravel</span></p>
          </div>

          <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <h1 className='relative text-white z-40 text-3xl md:text-4xl md:tracking-normal tracking-tighter max-md:font-medium md:px-4 xl:text-8xl animate-fadeIn delay-[1000ms]'>Fullstack Developer, <br /> Building <span className="text-gray-500">MERN & Laravel</span></h1>
          </div>

          <div className='relative mt-6 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <p className='w-full md:w-max text-slate-300 md:px-3 text-base md:text-lg leading-loose md:tracking-normal tracking-tighter md:text-balance md:font-medium animate-fadeIn delay-[1000ms]'>Welcome to my homebase—where ideas, creativity, and experience come together in a digital portfolio</p>
          </div>

          <div className='relative z-[99999] my-7 py-2 flex-col md:flex-row md:flex items-center before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <button className='relative active:scale-[0.99] bg-white flex hover:brightness-[90%] z-[99999] outline-0 md:ml-4 md:mr-6 rounded-full px-4 py-3 w-max lg h-max text-center text-[14px] font-normal text-black animate-fadeIn delay-[1000ms]'>Download Resume</button>
            <div onClick={() => setActiveModalSearch(true)} className="active:scale-[0.99] outline-0 grid md:mt-0 mt-4 w-full md:w-[480px] grid-cols-[auto_1fr_auto] items-center gap-1 rounded-full px-4 py-3 text-left text-sm/6 sm:w-80 bg-white/5 text-white/50 animate-fadeIn delay-[1000ms]">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" className="-ml-0.5 size-4 fill-gray-600 dark:fill-gray-500">
                <path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd">
                </path>
              </svg>
              Quick search
              <kbd className="font-sans text-[14px] text-gray-500 dark:text-gray-400 [.os-macos_&amp;]:block">
                <span className="opacity-60 mr-1">⌘</span>
                K
              </kbd>
              <kbd className="hidden font-sans text-xs/4 text-gray-500 not-[.os-macos_&amp;]:block dark:text-gray-400">
                <span className="opacity-60">Ctrl
                </span>
                &nbsp;K
              </kbd>
            </div>
          </div>

        </div>

        <div id='languages' className='select-none px-4 md:px-14 relative md:flex flex-col z-[444] pb-[30px] md:pb-[80px] pt-6 md:pt-4 w-full h-max border-slate-100'>

          <div className="absolute z-[33] left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[75%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[240px]"></div>
          <div className="absolute z-[33] left-[25%] w-[30%] h-[40px] py-[30%] transform -translate-y-[51%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[240px]"></div>

          <small className='relative text-[#00B4F5] mb-4 text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>React - Laravel - Express.</small>
          <div className='w-full mt-4 mb-10 md:flex justify-between items-center '>
            <motion.h2
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'
            >
              Skill in languages
            </motion.h2>
            <div className='hidden md:flex w-max'>
              <div className="relative flex items-center gap-6 p-6 text-transparent after:absolute after:right-0 after:w-px after:h-[300vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[100vh]">
                <p>konstruksi web</p>
                <Link03Icon className='w-6 h-6' />
              </div>
            </div>
          </div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-[96%] md:w-[66%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'
          >
            As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.
          </motion.p>

          <div className="w-full md:hidden">
            <InfiniteSlider />
          </div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative w-full rounded-[24px] bg-white/20 backdrop-blur-2xl p-4 hidden md:flex items-center md:flex-no-wrap flex-wrap justify-between z-[999] mt-12'>
            <div className='relative z-[999] w-full h-full rounded-[20px] bg-white p-10 border border-black flex items-center justify-between  '>
              <img loading='lazy' src={Reacts} alt='iconLanguage' className='w-[34px] md:w-[80px] md:mb-0 mb-5 md:mr-14 z-[99999999999] grayscale-[100%]' />
              <img loading='lazy' src={Node} alt='iconLanguage' className='w-[34px] md:w-[80px] md:mb-0 mb-5 md:mr-14 z-[99999999999] grayscale-[100%]' />
              <img loading='lazy' src={Redux} alt='iconLanguage' className='w-[34px] md:w-[80px] md:mb-0 mb-5 md:mr-14 z-[99999999999] grayscale-[100%]' />
              <img loading='lazy' src={TS} alt='iconLanguage' className='w-[34px] md:w-[80px] md:flex hidden md:mb-0 mb-5 md:mr-14 z-[99999999999] grayscale-[100%]' />
              <img loading='lazy' src={Laravel} alt='iconLanguage' className='w-[34px] md:w-[80px] md:mb-0 mb-5 md:mr-14 z-[99999999999] grayscale-[100%]' />
            </div>
          </motion.div>
        </div>

        <div id='technologies' className='select-none px-4 md:px-14 relative md:flex flex-col z-[4444] pb-[30px] md:pb-[50px] pt-6 md:pt-4 w-full h-max border-slate-100'>

          <div className="absolute z-[33] left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[25%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[200px]"></div>
          {/* <div className="absolute z-[33] left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[51%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[70px]"></div> */}
          <img src={Pacticles2} alt='particles' className='absolute z-[33] left-[25%] top-[-10%] w-[60%]' />

          <small className='relative text-[#00B4F5] mb-4 text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Frontend + Backend.</small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 flex-col md:flex-row md:flex justify-between items-center '>
            <h2 className='relative text-[28px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Our Technologies</h2>
            <div className='flex w-max'>
              <div className="relative flex items-center gap-6 md:p-6 md:mt-0 mt-4 text-white">
                <p>Go to website</p>
                <BrowserIcon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-[97%] md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            As a Fullstack Devedloper, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.
          </motion.p>
          <div className="relative md:mb-4 mt-10 gap-4">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw] w-full rounded-[24px] md:py-0 mx:px-4 grid grid-cols-1 items-center justify-between mt-12'>
              <div className='md:rounded-[18px] w-full grid grid-cols-1 md:grid-cols-3 h-max overflow-hidden'>
                <div className={`md:px-6 md:py-10 md:mb-0 mb-12`}>
                  <div className='relative flex gap-2 h-[50px] items-center before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
                    <img src={ssh} alt="logo-ssh" className="relative z-[44] w-[10%]" />
                    <div className='flex-1'>
                      <h3 className={`text-white font-bold text-[22px] md:text-[24px]`}>Secure shell</h3>
                    </div>
                  </div>
                  <div className='w-full mt-6'>
                    <p className="text-base text-slate-300 tracking-tighter leading-loose">SSH (Secure Shell) is a secure protocol for remote server access, file transfer, and authentication with encryption, ensuring privacy.</p>
                  </div>
                  <div className='border border-white md:border-black mt-4 md:mt-10 mb-12 md:mb-3 md:bg-white text-white md:text-black md:rounded-full md:w-[50px] h-[50px] hidden md:flex items-center justify-center cursor-pointer active:scale-[0.99] hover:brightness-95 duration-100 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw] relative'>
                    <ArrowRight02Icon />
                  </div>
                </div>
                <div className="md:px-6 md:py-10 md:mb-0 mb-12 relative">
                  {/* Left border */}
                  <div className="md:before:absolute md:before:top-0 md:before:left-0 before:h-full md:before:w-px md:before:bg-slate-900/80 dark:before:bg-white/10"></div>

                  {/* Right border */}
                  <div className="md:after:absolute md:after:top-0 md:after:right-0 after:h-full md:after:w-px md:after:bg-slate-900/80 dark:after:bg-white/10"></div>

                  <div className="relative flex gap-6 h-[50px] items-center before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">
                    <img src={DockerBlue} alt="logo-docker" className="relative bottom-[2px] w-[36%] md:w-[45%]" />
                  </div>
                  <div className="w-full mt-6">
                    <p className="text-base text-slate-300 tracking-tighter leading-loose">
                      Open-source platform that packages apps and dependencies into lightweight containers for consistent, portable, and efficient deployment.
                    </p>
                  </div>
                  <div className="border border-white md:border-black mt-4 md:mt-10 mb-12 md:mb-3 md:bg-white text-white md:text-black md:rounded-full md:w-[50px] h-[50px] hidden md:flex items-center justify-center cursor-pointer active:scale-[0.99] hover:brightness-95 duration-100 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw] relative">
                    <ArrowRight02Icon />
                  </div>
                </div>
                <div className={`md:px-6 md:py-10 md:mb-0 mb-8`}>
                  <div className='relative flex gap-6 h-[50px] items-center before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
                    <img src={Clickup} alt="logo-clickup" className="w-[32%] md:w-[38%]" />
                  </div>
                  <div className='w-full mt-6'>
                    <p className="text-base text-slate-300 tracking-tighter leading-loose">ClickUp is a cloud-based project management tool that integrates tasks, docs, and automation to streamline team workflows.</p>
                  </div>
                  <div className='border border-white md:border-black mt-4 md:mt-10 mb-12 md:mb-3 md:bg-white text-white md:text-black md:rounded-full md:w-[50px] h-[50px] hidden md:flex items-center justify-center cursor-pointer active:scale-[0.99] hover:brightness-95 duration-100 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw] relative'>
                    <ArrowRight02Icon />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div id='laravel' className='select-none relative md:flex flex-col z-[444] pt-6 md:pt-4 w-full h-max border-slate-100'>

            <motion.small
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Web development and landing page.</motion.small>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='w-full mt-4 mb-10 md:flex justify-between items-center '>
              <h2 className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Laravel web apps</h2>
              <div className='flex w-max'>
                <Link to={'/'} target="__blank">
                  <div className="relative flex items-center gap-6 md:mt-0 mt-4 md:p-6 text-white after:absolute after:right-0 after:w-px after:h-[30vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[120px]">
                    <p>Go to website</p>
                    <Linkedin01Icon className='w-8 h-8' />
                  </div>
                </Link>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative text-base text-slate-300 w-[98%] md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</motion.p>

            <div className="absolute left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[45%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
            <div className="absolute left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[63%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
            <img src={Pacticles2} alt='particles' className='absolute left-[28%] top-[-28%] w-[60%]' />

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative w-full bg-white/20 backdrop-blur-sm md:rounded-[28px] border border-slate-300 md:p-4 z-40 items-center justify-between mt-12 md:mt-24'>
              <div className='w-full h-full bg-[#ffffff] px-5 py-7 md:px-10 md:py-10 md:rounded-[24px]'>
                <img src={Laravel1} alt="warehouse-management" />
              </div>
            </motion.div>
          </div>

          <div className='mt-16 md:mt-20'>
            <motion.small
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Web development and landing page.
            </motion.small>
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='w-full mt-4 mb-10 flex-col md:flex-row md:flex justify-between items-center '>
              <h2 className='relative w-full text-[29px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
                React & Next apps
              </h2>
              <div className='hidden md:flex w-max'>
                <div className="relative w-max text-transparent flex items-center gap-6 md:mt-0 mt-4 md:p-6 after:absolute after:right-0 after:w-px after:h-[200vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[100vh]">
                  <p>3 types </p>
                  <Link03Icon className='w-6 h-6' />
                </div>
              </div>
            </motion.div>
            <p className='relative text-base text-slate-300 w-[98%] md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</p>

            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className='relative z-[99999999] w-full grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-14 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
              <div onClick={() => { setSelectType('apps'), setSelectAccordion(1) }} className={`flex gap-6 ${selectType === 'apps' ? 'bg-[#ff69df11]' : ''} items-center cursor-pointer px-4 py-4 md:px-6 md:py-6`}>
                <BrowserIcon size={46} className={`${selectType === 'apps' ? 'text-[#f85c98]' : 'text-white'}`} />
                <div className='flex-1'>
                  <h3 className={`${selectType === 'apps' ? 'text-[#f85c98]' : 'text-white'} font-medium`}>Web apps ({dataProducts?.filter((d: any) => d.category === 'apps')?.length})</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Building web apps that simplify tasks and boost productivity.</p>
                </div>
              </div>
              <div onClick={() => { setSelectType('API'), setSelectAccordion(1) }} className={`flex gap-6 ${selectType === 'API' ? 'bg-[#9e69ff11]' : ''} items-center cursor-pointer px-4 py-4 md:px-6 md:py-6 md:border-x-[0.5px] border-gray-700`}>
                <Link03Icon size={45} className={`${selectType === 'API' ? 'text-[#5E5CF8]' : 'text-white'}`} />
                <div className='flex-1'>
                  <h3 className={`${selectType === 'API' ? 'text-[#5E5CF8]' : 'text-white'} font-medium`}>Integrate API ({dataProducts?.filter((d: any) => d.category === 'API')?.length})</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Integrating APIs to ensure fast and seamless functionality.</p>
                </div>
              </div>
              <div onClick={() => { setSelectType('slicing'), setSelectAccordion(1) }} className={`flex gap-6 ${selectType === 'slicing' ? 'bg-[#69dcff11]' : ''} items-center cursor-pointer px-4 py-4 md:px-6 md:py-6`}>
                <PaintBrush04Icon size={46} className={`${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-white'}`} />
                <div className='flex-1'>
                  <h3 className={`${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-white'} font-medium`}>Slicing ({dataProducts?.filter((d: any) => d.category === 'slicing')?.length})</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Transforming designs into clean, and efficient interfaces.</p>
                </div>
              </div>
            </motion.div>

            {
              dataProducts
                ?.filter((data: any) => data?.category === selectType)
                ?.map((data: any, index: number) => (
                  <div key={index} className='w-full z-40 py-8 relative left-[0px] md:mt-[0px] h-max before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
                    <div className='relative w-full z-[99999] py-6 h-max mb-6'>
                      <h2 className='relative text-[24px] font-medium text-white mb-2 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>{index + 1}. {data?.title}</h2>
                      <p className='relative text-slate-300 w-full md:w-[85%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>{data?.desc}</p>

                      <Link to={data?.url} target="__blank">
                        <p className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-[#00B4F5] relative flex items-center text-base before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>{data?.title} in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </p>
                      </Link>

                      <div className='w-full text-white mt-6 md:pr-12 grid-cols-1 grid md:grid-cols-3 gap-8'>
                        <div className='relative py-3 flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.paymentGateway}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className=" h-full pl-3 w-[40%] text-right">Payment</p>
                        </div>
                        <div className='relative py-3 flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.fe}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className="h-full pl-3 w-[40%] text-right">Frontend</p>
                        </div>
                        <div className='relative py-3 hidden md:flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.stateManagement}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className="h-full pl-3 w-[40%] text-right">Stateeee</p>
                        </div>
                        <div className='relative py-3 flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.be}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className="h-full pl-3 w-[40%] text-right">Backend</p>
                        </div>
                        <div className='relative py-3 hidden md:flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.db}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className="h-full pl-3 w-[40%] text-right">Database</p>
                        </div>
                        <div className='relative py-3 hidden md:flex border-y border-white/20 items-center flex-1 justify-between'>
                          <p className="text-white h-full rounded-[4px] w-1/2">{data?.style}</p>
                          <ArrowRight02Icon className="w-[18px] mx-2" />
                          <p className="h-full pl-3 w-[40%] text-right">Styleeee</p>
                        </div>
                      </div>

                    </div>
                    <div
                      className='relative w-full md:min-h-[400px] md:rounded-[24px] z-[8888888888888] flex justify-center items-center md:p-4 border border-white bg-white/20 backdrop-blur-2xl'
                    >

                      <div className="absolute z-[-1] right-0 w-[100%] md:py-[30%] transform md:-translate-y-[70%] -rotate-45 
                              bg-[radial-gradient(circle_at_left_bottom,#e6b7fe_10%,#5049c2_10%,rgba(87,78,255,0)_60%)] 
                              blur-[40px]">
                      </div>

                      <motion.div
                        key={selectAccordion} // Animasi berjal an setiap kali konten berubah
                        className='relative flex shadow-[0_35px_30px_rgba(0,0,30,0.4)] justify-center items-center md:rounded-[24px] overflow-hidden bg-white/20 backdrop-blur-2xl md:p-2 w-full h-full'
                        initial={{ opacity: 0, y: 40 }} // Muncul dari bawah
                        animate={{ opacity: 1, y: 0 }} // Naik ke posisi normal
                        exit={{ opacity: 0, y: -20 }} // Keluar ke atas (opsional)
                        transition={{ duration: 0.5, ease: "easeOut" }} // Durasi & easing smooth
                      >
                        <img
                          src={`${selectAccordion === 1 ? data?.image1 : data?.image2}`}
                          alt="image-project"
                          className='h-full w-auto object-cover md:rounded-[20px]'
                        />
                      </motion.div>

                    </div>
                  </div>
                ))
            }

          </div>
        </div>

        <div id='linkedin' className='select-none px-4 md:px-14 relative md:flex flex-col z-[444] pb-[30px] md:pb-[80px] md:pt-4 w-full h-max border-slate-100'>
          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Web development and landing page.</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 md:flex justify-between items-center '>
            <h2 className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Recommend - in</h2>
            <div className='flex w-max'>
              <div className="relative flex items-center gap-6 md:mt-0 mt-4 md:p-6 text-white after:absolute after:right-0 after:w-px after:h-[30vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[120px]">
                <p>Go to linkedin</p>
                <Linkedin01Icon className='w-8 h-8' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-[98%] md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</motion.p>

          <div className="absolute left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[45%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
          <div className="absolute left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[63%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
          <img src={Pacticles2} alt='particles' className='absolute left-[28%] top-[-28%] w-[60%]' />

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative w-full bg-white/20 backdrop-blur-sm md:rounded-[28px] border border-slate-300 md:p-4 z-40 items-center justify-between mt-12 md:mt-24'>
            <div className='w-full h-full bg-[#ffffff] px-5 py-7 md:px-10 md:py-10 md:rounded-[24px]'>
              <div className='w-full'>
                <Link to={'https://www.linkedin.com/in/yoshua-gombo/'}>
                  <div className='w-full md:flex items-center justify-between mb-4'>
                    <div className='md:flex items-center text-black'>
                      <div className='w-[40px] h-[40px] border border-slate-600 md:rounded-[20px] md:mb-0 mb-4 overflow-hidden mr-3'>
                        <img src={PakYos} alt="foto" />
                      </div>
                      <h3 className='md:ml-4 text-base'>Pak. Yoshua Gombo - <br className='flex md:hidden' /> <span className='text-[12px] md:text-[14px]'>Co-Founder at Konstruksi.AI | Robotics & AI</span></h3>
                    </div>
                  </div>
                </Link>

                <p className='text-[15px] w-full md:w-[94%] md:text-justify leading-loose tracking-tighter mt-6 mb-10 text-slate-600'>
                  To whom it may concern:
                  <br />
                  <br />
                  Huda worked with us at Konstruksi.AI developing the core main product as a Frontend developer. Although he was an intern, Huda contributed greatly to the team. Huda has an excellent skill related to Frontend development and always completed his tasks in timely manner. He can perform both individually and within a team as well. I recommend him as a Frontend developer and I believe he will be a great asset to any company.
                </p>

                <div className='w-max flex gap-2 items-center text-[#00B4F5]'>
                  <p>Go to Linkedin</p>
                  <ArrowRight02Icon />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div id='experience' className='select-none px-4 md:px-14 h-max experience relative md:flex flex-col z-[335] pb-[30px] md:pb-[80px] pt-6 md:pt-4 w-full border-slate-100'>
          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Experience in industry</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 flex-col md:flex-row md:flex justify-between items-center '>
            <h2 className='relative flex items-center w-max text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'><span className='md:flex hidden mr-1'>Experience - </span> Internship <span className="md:hidden flex">- FE</span></h2>
            <div className='flex w-max'>
              <div className="relative flex items-center gap-6 md:mt-0 mt-4 md:p-6 text-white after:absolute after:right-0 after:w-px after:h-[200vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[100vh]">
                <p>konstruksi web</p>
                <Link03Icon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-full md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</motion.p>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative py-2 w-full h-max md:h-[600px] md:flex mt-14 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <div className='w-full md:w-[55%] h-max'>
              <a href="https://konstruksi.ai/" target="__blank">
                <div className='relative flex gap-4 mb-6 items-center cursor-pointer before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
                  <img src={KonstruksiLogo} alt="logo-konstruksi.ai" className="w-9" />
                  <div className='flex-1'>
                    <h2 className='text-white text-[28px] relative font-medium'>Konstruksi.AI</h2>
                  </div>
                </div>
              </a>
              <div className="w-full h-full mx-auto text-slate-300">
                <section className='mt-12'>
                  <div className="relative mb-8 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">
                    <p className="relative text-base mb-6 font-semibold text-white before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">Web Application Development</p>
                    <p className='text-sm text-justify w-[98%] md:w-[80%] mb-2 leading-loose tracking-tighter'>Build and develop a web application using <strong>React</strong>, <strong>Vite</strong>, and <strong>Tailwind CSS</strong> to create responsive and efficient user interfaces and Integrate and display architectural project data.</p>
                  </div>

                  <div className="relative mb-8 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">
                    <p className="relative text-base mb-6 font-semibold text-white before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">Web Features Testing and Debugging</p>
                    <p className='text-sm text-justify w-[98%] md:w-[80%] mb-2 leading-loose tracking-tighter'>Identify and analyze technical issues, and collaborate with the development team to find effective solutions.</p>
                  </div>

                  <div className="relative mb-8 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">
                    <p className="relative text-base mb-6 font-semibold text-white before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]">Team Collaboration</p>
                    <p className='text-sm text-justify w-[98%] md:w-[80%] mb-2 leading-loose tracking-tighter'>Collaborate with backend developers, UI/UX designers, and project managers to ensure the web application development aligns with project specifications and business goals.</p>
                  </div>
                </section>
              </div>
            </div>

            <div className="absolute right-[25%] w-[60%] h-[40px] py-[30%] transform -translate-y-[10%] -rotate-45 bg-[radial-gradient(circle_at_right_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[250px]"></div>
            <img src={Pacticles2} alt='particles' className='absolute left-[30%] top-[-18%] w-[50%]' />

            <div className='relative w-full md:w-[45%] md:rounded-[24px] flex bg-white/20 backdrop-blur-2xl md:p-4 border border-slate-300 items-center h-full overflow-hidden justify-center cursor-pointer border-x z-[8888]'>
              <div className='w-full h-full overflow-hidden md:rounded-[20px]'>
                <img src={Build} alt="wisma-bumiputera" className='w-full h-auto grayscale-[100%] md:rounded-[20px]' />
              </div>
            </div>
          </motion.div>
        </div>

        <div id='education' className='select-none px-4 md:px-14 relative md:flex flex-col z-[33333] pb-[30px] md:pb-[80px] pt-6 md:pt-4 w-full h-max border-slate-100'>

          <img src={Pacticles2} alt='particles' className='absolute left-[10%] top-[-20%] w-[60%] rotate-[-30deg] opacity-[70%]' />

          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Computer science</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 md:flex justify-between items-center '>
            <h2 className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
              <a href='https://github.com/khorulhudaa' className='flex items-center gap-4'>
                Last education <LinkSquare01Icon className='text-[#00B4F5]' />
              </a>
            </h2>
            <div className='flex w-max'>
              <div className="relative text-white flex items-center gap-6 md:mt-0 mt-4 md:p-6 after:absolute after:right-0 after:w-px after:h-[100vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[50vh]">
                <p>Go to campus</p>
                <Building02Icon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-full md:w-[68%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>I pursued a four-year bachelor's degree in Informatics Engineering at a private university in Cirebon, STMIK IKMI Cirebon, located in Majasem.</motion.p>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative z-[99999999] w-full py-4 grid grid-cols-1 md:grid-cols-2 md:mt-14 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <div className={`flex-1 flex gap-6 items-center cursor-pointer py-6 md:py-10`}>
              <Mortarboard02Icon size={50} className={`text-white md:flex hidden`} />
              <div className='flex-1'>
                <h3 className={`text-white font-medium`}>B.Sc. in Computer Science</h3>
                <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Programming, and problem-solving skills.</p>
              </div>
            </div>
            <div className="relative md:block hidden flex-1 h-full md:rounded-[24px] md:bg-white/20 backdrop-blur-2xl md:p-4 ">
              <div className='w-full h-full md:bg-white md:rounded-[20px]'>
                <div className={`flex gap-6 items-center cursor-pointer md:px-8 py-6 md:py-10 `}>
                  <Calendar04Icon size={50} className={`text-black md:flex hidden`} />
                  <div className='flex-1'>
                    <h3 className={`text-white md:text-black font-medium`}>Graduation year</h3>
                    <p className='text-[14px] mt-2 text-slate-300 md:text-slate-600 leading-loose tracking-tighter'>I received a graduation certificate in May.</p>
                  </div>
                </div>
                <div className={`relative flex gap-6 items-center cursor-pointer md:px-8 py-6 md:py-10 before:absolute before:top-0 before:h-px before:w-full before:bg-slate-900/20 dark:before:bg-slate-900/30 before:-left-[0px]`}>
                  <InformationDiamondIcon size={50} className={` md:flex hidden ${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-black'}`} />
                  <div className='flex-1'>
                    <h3 className={`${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-white md:text-black'} font-medium`}>GPA / IPK</h3>
                    <p className='text-[14px] mt-2 text-slate-300 md:text-slate-600 leading-loose tracking-tighter'>I achieved a GPA of 3.30 at the end of my studies.</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

        <div id='teamwork' className='select-none px-4 md:px-14 relative md:flex flex-col z-[3333] pb-[30px] md:pb-[80px] md:pt-4 w-full h-max border-slate-100'>

          <div className="absolute z-40 left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[45%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
          <div className="absolute md:flex hidden z-40 left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[65%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
          <img src={Pacticles2} alt='particles' className='absolute z-40 left-[28%] top-[-18%] w-[60%]' />

          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Top-left corner (me)</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 md:flex justify-between items-center '>
            <h2 className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
              <a href='https://github.com/khorulhudaa' className='flex items-center gap-4'>
                Worked in a team <LinkSquare01Icon className='text-[#00B4F5]' />
              </a>
            </h2>
            <div className='flex w-max'>
              <div className="relative text-white flex items-center gap-6 md:mt-0 mt-4 md:p-6 after:absolute after:right-0 after:w-px after:h-[100vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[50vh]">
                <p>konstruksi.AI Devs</p>
                <Building02Icon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-full md:w-[68%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>I pursued a four-year bachelor's degree in Informatics Engineering at a private university in Cirebon, STMIK IKMI Cirebon, located in Majasem.</motion.p>

          <div className="relative z-[999999999] flex items-center justify-center mt-12">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative opacity-100 w-[100%] mx-auto md:rounded-[24px] md:h-[600px] 2xl:h-[900px] bg-white/20 backdrop-blur-2xl md:p-4 z-40 items-center justify-between md:mt-12"
            >
              <div className='w-full h-max md:h-full md:rounded-[20px] bg-white'>
                <div className='w-full relative flex h-full md:rounded-[16px] overflow-hidden border border-gray-700'>
                  <div className='relative w-full h-full overflow-hidden mt-0'>
                    <img src={Team} alt="team-konstruksi" className="h-auto md:h-auto object-cover w-full relative md:bottom-[65%] grayscale-[100%]" />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

        <div id='github' className='select-none px-4 md:px-14 relative md:flex flex-col z-[3333] pb-[30px] md:pb-[80px] pt-6 md:pt-4 w-full h-max border-slate-100'>
          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>All repositories github</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 md:flex justify-between items-center '>
            <h2 className='relative text-[30px] md:text-[40px] text-white font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
              <a href='https://github.com/khorulhudaa' className='flex items-center gap-4'>
                Github account <LinkSquare01Icon className='text-[#00B4F5]' />
              </a>
            </h2>
            <div className='flex w-max'>
              <div className="relative text-white flex items-center gap-6 md:mt-0 mt-4 md:p-6 after:absolute after:right-0 after:w-px after:h-[100vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[50vh]">
                <p>Go to account</p>
                <Github01Icon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-full md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</motion.p>

          <div className="md:w-[86vw] h-max mt-12 mx-auto bg-white/20 backdrop-blur-2xl md:p-4 md:rounded-[20px]">
            <motion.div
              initial={{ opacity: 0, filter: 'blur(10px)' }}
              whileInView={{ opacity: 1, filter: 'blur(0px)' }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              viewport={{ once: true, amount: 0.2 }}
              id='calendar'
              className="select-none relative md:flex flex-col z-[3333] w-full h-max border-slate-100"
            >
              <FilteredGitHubCalendar username="khoirulhudaa" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative w-full grid grid-cols-1 md:grid-cols-3 mt-8 mmd:t-14 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <a href='https://github.com/khoirulhudaa?achievement=pull-shark&tab=achievements' target='__blank'>
              <div onClick={() => setSelectTypeGit('git1')} className={`flex gap-6 ${selectTypeGit === 'git1' ? 'bg-[#ff69df11]' : ''} items-center cursor-pointer px-4 py-6 md:px-6`}>
                <img src={Git1} alt="git" className="w-12" />
                <div className='flex-1'>
                  <h3 className={`${selectTypeGit === 'git1' ? 'text-[#f85c98]' : 'text-white'} font-medium`}>Pull Shark - 2x</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>@khoirulhudaa opened pull requests that have been merged.</p>
                </div>
              </div>
            </a>
            <a href='https://github.com/khoirulhudaa?tab=achievements&achievement=quickdraw' target='__blank'>
              <div onClick={() => setSelectTypeGit('git2')} className={`flex gap-6 ${selectTypeGit === 'git2' ? 'bg-[#9e69ff11]' : ''} items-center cursor-pointer px-4 py-6 md:px-6 md:border-x-[0.5px] border-gray-700`}>
                <img src={Git2} alt="git" className="w-12" />
                <div className='flex-1'>
                  <h3 className={`${selectTypeGit === 'git2' ? 'text-[#5E5CF8]' : 'text-white'} font-medium`}>Quickdraw</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Closing issues or pull requests within 5 minutes after they are opened.</p>
                </div>
              </div>
            </a>
            <a href='https://github.com/khoirulhudaa?tab=achievements&achievement=starstruck' target='__blank'>
              <div onClick={() => setSelectTypeGit('git3')} className={`flex gap-6 ${selectTypeGit === 'git3' ? 'bg-[#69dcff11]' : ''} items-center cursor-pointer px-4 py-6 md:px-6`}>
                <img src={Git3} alt="git" className="w-12" />
                <div className='flex-1'>
                  <h3 className={`${selectType === 'git3' ? 'text-[#5cc7f8]' : 'text-white'} font-medium`}>Starstruck</h3>
                  <p className='text-[14px] mt-2 text-slate-300 leading-loose tracking-tighter'>Starstruck: Having a repository with high popularity, starts.</p>
                </div>
              </div>
            </a>
          </motion.div>
        </div>

        <div id='certifications' className='select-none relative px-4 md:px-14 md:flex flex-col z-[233] pb-[30px] md:pb-[70px] pt-6 md:pt-4 w-full h-max border-slate-100'>
          <motion.small
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>My various achievements</motion.small>
          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='w-full mt-4 mb-10 flex-col md:flex-row md:flex justify-between items-center '>
            <h2 className='relative text-[30px] md:flex hidden md:text-[40px] text-white mt-4 md:mb-0 mb-10 font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Web competition awards</h2>
            <h2 className='relative text-[30px] md:hidden flex md:text-[40px] text-white mt-4 mb-10 font-medium md:text-balance md:tracking-normal tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>Web competition</h2>
            <div className='hidden md:flex w-max'>
              <div className="relative text-transparent flex items-center gap-6 md:mt-0 mt-4 md:p-6 after:absolute after:right-0 after:w-px after:h-[100vh] after:bg-slate-900/80 dark:after:bg-white/10 after:-top-[50vh]">
                <p>konstruksi web</p>
                <Link03Icon className='w-6 h-6' />
              </div>
            </div>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className='relative text-base text-slate-300 w-full md:w-[70%] leading-loose tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</motion.p>

          <div className="absolute left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[50%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
          <div className="absolute left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[72%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
          <img src={Pacticles2} alt='particles' className='absolute left-[28%] top-[-22%] w-[60%]' />

          <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full bg-white/20 backdrop-blur-2xl md:p-4 mt-12 md:rounded-[20px]">

            <div className='relative w-full bg-white md:rounded-tl-[16px] md:rounded-tr-[16px] md:grid grid-cols-2'>
              <div className={`relative flex gap-6 items-center cursor-pointer px-4 md:px-6 py-16`}>
                <img src={Winner} alt="git" className="w-12" />
                <div className='flex-1'>
                  <div className='w-max flex items-center gap-2' onClick={() => {
                    setIsModal(true)
                    setSelectImage(Jakarta)
                  }}>
                    <h3 className={`$text-black font-medium`}>2nd - national</h3>
                    <ViewIcon className='z-[9999] text-slate-600 active:scale-[0.98] cursor-pointer' />
                  </div>
                  <p className='text-[14px] mt-2 text-slate-500 leading-loose tracking-tighter'>National-level Web Development Competition,</p>
                </div>
              </div>
              <div className={`relative flex gap-6 items-center cursor-pointer px-4 md:px-6 py-16 border-l border-slate-300`}>
                <img src={Winner} alt="git" className="w-12" />
                <div className='flex-1'>
                  <div className='w-max flex items-center gap-2' onClick={() => {
                    setIsModal(true)
                    setSelectImage(Majalengka)
                  }}>
                    <h3 className={`text-black font-medium`}>2nd - public</h3>
                    <ViewIcon className='z-[9999] text-slate-600 active:scale-[0.98] cursor-pointer' />
                  </div>
                  <p className='text-[14px] mt-2 text-slate-500 leading-loose tracking-tighter'>National-level Web Design Competition for Students.</p>
                </div>
              </div>
            </div>

            <div className='relative w-full bg-white grid grid-cols-1'>
              <div className={`flex gap-6 ${selectTypeGit === 'git3' ? 'bg-[#69dcff11]' : ''} items-center cursor-pointer px-4 md:px-6 py-16 border-t border-slate-300 w-full`}>
                <img src={Winner} alt="git" className="w-12" />
                <div className='flex-1'>
                  <div className='w-max flex items-center gap-2' onClick={() => {
                    setIsModal(true)
                    setSelectImage(Inovasi)
                  }}>
                    <h3 className={`${selectTypeGit === 'git1' ? 'text-[#f85c98]' : 'text-black'} font-medium`}>1st - district</h3>
                    <ViewIcon className='z-[9999] text-slate-600 active:scale-[0.98] cursor-pointer' />
                  </div>
                  <p className='text-[14px] mt-2 text-slate-500 leading-loose tracking-tighter'>Innovation competition in the technology category at the district level organized by the Bappelitbangda Office in 2024.</p>
                </div>
              </div>
            </div>

            <div className='relative w-full bg-white md:rounded-bl-[16px] md:rounded-br-[16px] grid md:grid-cols-2 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
              <div className={`relative flex gap-6 items-center cursor-pointer px-4 md:px-6 py-16 border-t border-slate-300 w-full`}>
                <img src={Winner} alt="git" className="w-12" />
                <div className='flex-1'>
                  <div className='w-max flex items-center gap-2' onClick={() => {
                    setIsModal(true)
                    setSelectImage(Cirebon)
                  }}>
                    <h3 className={`${selectTypeGit === 'git1' ? 'text-[#f85c98]' : 'text-black'} font-medium`}>1st - intramural</h3>
                    <ViewIcon className='z-[9999] text-slate-600 active:scale-[0.98] cursor-pointer' />
                  </div>
                  <p className='text-[14px] mt-2 text-slate-500 leading-loose tracking-tighter'>Inter-College Landing Page Web Competition exclusively.</p>
                </div>
              </div>
              <div className={`relative flex gap-6 items-center cursor-pointer px-4 md:px-6 py-16 border-t border-x border-slate-300`}>
                <img src={Winner} alt="git" className="w-12" />
                <div className='flex-1'>
                  <div className='w-max flex items-center gap-2' onClick={() => {
                    setIsModal(true)
                    setSelectImage(JWD)
                  }}>
                    <h3 className={`text-black font-medium`}>BNSP - JWD</h3>
                    <ViewIcon className='z-[9999] text-slate-600 active:scale-[0.98] cursor-pointer' />
                  </div>
                  <p className='text-[14px] mt-2 text-slate-500 leading-loose tracking-tighter'>It's a certifications training program for Junior Web Developers.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <footer className='bg-white/10 backdrop-blur-md relative w-full overflow-hidden px-2 md:px-6 mt-10 md:pb-0 pb-5 z-[8888] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
          <img src={Footer} alt='particles' className='absolute z-[-2] right-[0%] bottom-[-34%] w-full opacity-[60%]' />
          <div className="relative w-full md:ml-8 grid md:grid-cols-4 z-[999]">
            <div className="relative w-full md:flex hidden flex-col h-max md:min-h-[340px] md:py-10 md:px-6">
              <ul className="list-none h-full ml-4 flex flex-col justify-between text-white text-[14px] font-normal before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/10 before:-top-[0px]">
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Github account 1</li>
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6'>Homepage</li>
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Linkedin</li>
              </ul>
            </div>
            <div className="relative w-full md:flex hidden flex-col h-max md:min-h-[340px] md:py-10 md:px-6">
              <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
              </div>
              <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6'>Skill & languages</li>
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6'>Coresponden</li>
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6'>Experience</li>
              </ul>
            </div>
            <div className="relative w-full h-max md:min-h-[340px] md:py-10 md:px-6">
              <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
              </div>
              <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Github Account 2</li>
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6 md:flex hidden'>Certifications</li>
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Whatsapp</li>
              </ul>
            </div>
            <div className="relative w-full h-max md:min-h-[340px] md:py-10 md:px-6">
              <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
              </div>
              <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">STMIK IKMI Cirebon</li>
                <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6'>SMKN 1 Cirebon</li>
                <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Search feature</li>
              </ul>
            </div>
          </div>
        </footer>

      </div >
    </>
  )
}

export default Homepage