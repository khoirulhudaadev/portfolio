import { motion } from "framer-motion"
import { Add01Icon, ArrowRight02Icon, BrowserIcon, Github01Icon, Link03Icon, MapPinIcon, PaintBrush04Icon } from 'hugeicons-react'
import React, { useState } from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { AuthFlow, Bali, Cirebon, Earth, FlowTrush, Geospasial, Git1, Git2, Git3, Git4, JWD, Jakarta, Laravel, Majalengka, Node, Pacticles2, PakYos, Peserta, Reacts, Redux, TS, TW, Winner } from '../Assets'
import ModalCertification from '../Components/ModalCertification'
import '../index.css'

const Homepage: React.FC = () => {

  const [isModal, setIsModal] = useState<boolean>(false);
  const [selectimage, setSelectImage] = useState<string>('');
  const [sidebar, setSidebar] = useState<boolean>(false);
  const [text, setText] = useState<string>('');
  const [selectType, setSelectType] = useState<string>('dev');
  const [selectAccordion, setSelectAccordion] = useState<number>(1);

  return (
    <div className='relative  min-h-screen overflow-x-hidden bg-[#030712] lg:px-10'>
        
        {/* Modal */}
        {
          isModal ? (
            <ModalCertification close={() => setIsModal(false)} title={'I/O Festival 2024 - Web Development'} image={selectimage} text={text} />
          ):
            null
        }

        {/* Humberger */}
        <div onClick={() => setSidebar(true)} className='absolute z-[99999] top-6 right-7 lg:hidden shadow-md w-[38px] h-[38px]  cursor-pointer active:scale-[0.98] hover:brightness-[90%] duration-100 flex flex-col items-center justify-center border border-slate-300'>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
          <div className='w-[80%] h-[2px] bg-slate-200 my-1'></div>
        </div>

        {/* Nabar */}
        <nav className={`fixed bg-[#030712] left-0 top-0 z-[999999999] py-[10px] w-max lg:w-[100vw] flex justify-end h-max lg:before:absolute lg:before:left-[60px] lg:before:top-[25px] lg:before:bottom-[-5px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-white lg:before:font-bold lg:before:text-[24px] lg:before`}>
          
          <div className='w-full flex lg:hidden items-center px-6 justify-between'>
            {/* Title Web */}
            <h2 className='font-bold text-white relative top-1 text-[32px] lg:text-[24px]'>Portfolio</h2>
          </div>

          {/* Sidebar - Mobile only */}
          <div className={`fixed w-[100vw] h-screen overflow-y-auto bg-white block lg:hidden z-[999999] shadow-md p-6 top-0 ${sidebar ? 'right-0 duration-200' : 'right-[-100%] duration-200 ease-in'}`}>
            
            <div onClick={() => setSidebar(false)} className='absolute w-[40px] h-[40px] bg-red-500 text-white flex items-center justify-center cursor-pointer active:scale-[0.98] hover:brightness-[90%] shadow-md top-5 right-6'>
              <FaTimes />
            </div>
            
            <ul className='w-[80%] mt-4 flex flex-col'>
                <a href="#home" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Home</li>
                </a>
                <a href="#products" className='w-full mb-4 border-b border-b-slate-200'>
                  <li className='py-4' onClick={() => setSidebar(false)}>Products</li>
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

          <div className='lg:flex hidden w-max text-slate-300 py-5 mt-2 ml-auto pr-10 h-[60px]'>
            <ul className='w-[80%] flex items-center justify-between'>
              <a href="#home">
                <li className='mr-10'>Home</li>
              </a>
              <a href="#languages">
                <li className='mr-10'>Languages</li>
              </a>
              <a href="#product">
                <li className='mr-10'>Products</li>
              </a>
              <a href="#linkedin">
                <li className='mr-10'>Linkedin</li>
              </a>
              <a href="#experience">
                <li className='mr-10'>Experiences</li>
              </a>
              <a href="#github">
                <li className='mr-10'>Github</li>
              </a>
              <a href="#certifications">
                <li className='mr-10'>Certifications</li>
              </a>
              <a href="https://github.com/khoirulhudaadev">
                <Github01Icon size={30} />
              </a>
            </ul>
          </div>
        </nav>
        {/* Akhir navbar */}

        {/* Blur light */}
        {/* <div className='w-[100px] h-[1200px] bg-blue-600 blur-[220px] fixed z-[9] top-[0px] right-0'></div>
        <div className='w-[100px] h-[1200px] bg-blue-600 blur-[220px] fixed z-[9] top-[0px] left-0'></div> */}
        {/* Akhir Blur light */}
    
        <div id='home' className='relative z-[444] lg:px-10 px-6 pb-10 w-[94vw] lg:w-[100%] h-max lg:border-l-[1px] lg:ml-12 mt-[50px] lg:mt-[90px] pt-16 border-slate-100'>
          <div className='fixed top-0 right-0 overflow-hidden bg-transparent w-[100vw] h-[80vh]'>
            <div id='asteroid1a'></div>
            <div id='asteroid2a'></div>
            <div id='asteroid3a'></div>
            <div id='asteroid4a'></div>
            <div id='asteroid5a'></div>

            <div id='star1a' className='animate animate-pulse'></div>
            <div id='star2a' className='animate animate-pulse'></div>
            <div id='star3a' className='animate animate-pulse'></div>
            <div id='star4a' className='animate animate-pulse'></div>
            <div id='star5a' className='animate animate-pulse'></div>
            <div id='star6a' className='animate animate-pulse'></div>
            <div id='star7a' className='animate animate-pulse'></div>
          </div>

          {/* Side zigzag */}
          <div className='fixed w-[3vw] h-screen z-[33333333] col-start-1 top-0 left-0 row-span-full row-start-1 hidden border-x border-x-[#1D202A] 1D202Aa1e:repeating-linear-gradient(315deg,#1D202A,#1D202A,11D202Ar1nt_0,transparent_40%)] bg-[size:14px_14px] bg-fixed md:block dark:bg-[image:repeating-linear-gradient(315deg,#1D202A,#1D202A_1px,transparent_0,transparent_50%)]'>
          </div>
          <div className='fixed w-[3vw] h-screen z-[33333333] col-start-1 top-0 right-0 row-span-full row-start-1 hidden border-x border-x-[#1D202A] 1D202Aa1e:repeating-linear-gradient(315deg,#1D202A,#1D202A,11D202Ar1nt_0,transparent_40%)] bg-[size:14px_14px] bg-fixed md:block dark:bg-[image:repeating-linear-gradient(315deg,#1D202A,#1D202A_1px,transparent_0,transparent_50%)]'>
          </div>

          <div className='relative mb-6 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
            <p className='text-center px-5 py-2 w-max text-white flex items-center'>Fullstack Developer - MERN&Laravel</p>
          </div>

          <div className='relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
            <h1 className='text-white px-2 text-4xl tracking-tighter max-lg:font-medium max-sm:px-4 sm:text-5xl lg:text-6xl xl:text-8xl'>Fullstack Developer, Building MERN & Laravel</h1>
          </div>

          <div className='relative mt-6 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
            <p className='w-max text-slate-400 px-3 text-lg tracking-tighter text-balance max-lg:font-medium max-sm:px-4'>"Welcome to my homebase—where ideas, creativity, and experience come together in a digital portfolio."</p>
          </div>

          <div className='relative my-7 flex items-baseline before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
            <button className='outline-0 ml-4 mr-6 rounded-[12px] border-slate-100 border p-3 w-max lg h-max text-center font-[600] text-[14px] text-white'>Download Resume</button>
            <p className='text-md text-white tracking-tighter text-balance'>Chat via Whatsapp</p>
          </div>

        </div>
        
        <div id='languages' className='px-14 relative lg:flex flex-col hidden z-[444] pb-[30px] lg:pb-[80px] lg:pt-4 w-[94%] h-max lg:border-l-[1px] lg:ml-12 border-slate-100'>
        
          <small className='relative text-[#00B4F5] mb-4 text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Frontend + Backend.</small>
          <h2 className='relative text-[40px] text-white mb-10 font-medium text-balance tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Skill and languages</h2>
          <p className='relative text-base text-slate-400 w-[70%] tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</p>
        
          <div className='w-full rounded-[24px] bg-white/20 backdrop-blur-2xl p-4 z-40 flex items-center lg:flex-no-wrap flex-wrap justify-between mt-12'>
            <div className='w-full h-full rounded-[20px] bg-[#030712] p-10 border border-black flex items-center justify-between bg-[image:radial-gradient(circle,#D9D9D9_10%,transparent_20%)] bg-[size:10px_10px] bg-fixed dark:bg-[image:radial-gradient(circle,#D9D9D9_1%,transparent_20%)]'>
              <img loading='lazy' src={Reacts} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
              <img loading='lazy' src={Node} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
              <img loading='lazy' src={Redux} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
              <img loading='lazy' src={TS} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
              <img loading='lazy' src={TW} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
              <img loading='lazy' src={Laravel} alt='iconLanguage' className='w-[34px] lg:w-[80px] lg:mb-0 mb-5 lg:mr-14 z-[99999999999] cursor-pointer grayscale-[100%]' />
            </div>
          </div>
        </div>

        <div id='products' className='px-14 relative lg:flex flex-col hidden z-[444] pb-[30px] lg:pb-[80px] lg:pt-4 w-[94%] h-max lg:border-l-[1px] lg:ml-12 border-slate-100'>
          
          <div className="absolute left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[55%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
          <div className="absolute left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[78%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
          <img src={Pacticles2} alt='particles' className='absolute left-[30%] top-[-10%] w-[30%]' />

          <small className='relative text-[#00B4F5] mb-4 text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Frontend + Backend.</small>
          <h2 className='relative text-[40px] text-white mb-10 font-medium text-balance tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Skill and languages</h2>
          <p className='relative text-base text-slate-400 w-[70%] tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</p>
           
            <div className='w-full rounded-[24px] bg-white/20 backdrop-blur-2xl p-4 z-40 items-center justify-between mt-12'>
                <div className='w-full h-full rounded-[20px] bg-[#030712] p-6'>
                  <div className='w-full h-full relative flex-col lg:flex justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full flex items-baseline'>
                      <div className='w-full lg:flex items-baseline justify-start gap-6'>
                        <MapPinIcon size={30} />
                        <h2 className='text-white font-medium text-[26px] lg:text-[28px]'>SI GEO</h2>
                      </div>
                      <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <p>Node</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <p>MongoDB</p>
                        </div>
                      </div>
                    </div>
                    <h3 className='text-[14px] lg:w-[80%] mt-6 mb-10 text-slate-400'>Sigeo is an abbreviation for Geographic Information System (GIS), a technology used to gather, store, manipulate, analyze, and visualize location-based or geographic data in Cirebon Regency.</h3>
                  </div>
                  
                  <div className='w-full relative h-full border border-gray-700 p-6 bg-[image:radial-gradient(circle,#D9D9D9_10%,transparent_20%)] bg-[size:10px_10px] bg-fixed dark:bg-[image:radial-gradient(circle,#D9D9D9_1%,transparent_20%)]'>
                    <div className='relative left-0 w-full h-[100%] overflow-hidden border border-slate-800 rounded-[10px] lg mt-6 lg:mt-0'>
                      <img src={Geospasial} alt="geospasial-project" />
                    </div>
                  </div>
                </div>
            </div>
            
            <div className='mt-12 lg:mt-20'>
              <small className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Web development and landing page.</small>
              <h2 className='relative text-[40px] text-white mt-4 mb-10 font-medium text-balance tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Our web products</h2>
              <p className='relative text-base text-slate-400 w-[70%] tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</p>
            
              <div className='relative w-full grid grid-cols-3 mt-14 before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
                <div onClick={() => setSelectType('dev')} className={`flex gap-6 ${selectType === 'dev' ? 'bg-[#ff69df11]' : ''} items-center cursor-pointer p-6`}>
                  <BrowserIcon size={50} className={`${selectType === 'dev' ? 'text-[#f85c98]' : 'text-white'}`} />
                  <div className='flex-1'>
                    <h3 className={`${selectType === 'dev' ? 'text-[#f85c98]' : 'text-white'} font-medium`}>Web apps</h3>
                    <p className='text-[14px] mt-2 text-slate-400 leading-loose tracking-tighter'>Building web apps that simplify tasks and boost productivity.</p>
                  </div>
                </div>
                <div onClick={() => setSelectType('api')} className={`flex gap-6 ${selectType === 'api' ? 'bg-[#9e69ff11]' : ''} items-center cursor-pointer p-6 border-x border-gray-800`}>
                  <Link03Icon size={50} className={`${selectType === 'api' ? 'text-[#5E5CF8]' : 'text-white'}`} />
                  <div className='flex-1'>
                    <h3 className={`${selectType === 'api' ? 'text-[#5E5CF8]' : 'text-white'} font-medium`}>Integrate API</h3>
                    <p className='text-[14px] mt-2 text-slate-400 leading-loose tracking-tighter'>Integrating APIs to ensure fast and seamless functionality.</p>
                  </div>
                </div>
                <div onClick={() => setSelectType('slicing')} className={`flex gap-6 ${selectType === 'slicing' ? 'bg-[#69dcff11]' : ''} items-center cursor-pointer p-6`}>
                  <PaintBrush04Icon size={50} className={`${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-white'}`} />
                  <div className='flex-1'>
                    <h3 className={`${selectType === 'slicing' ? 'text-[#5cc7f8]' : 'text-white'} font-medium`}>Slicing</h3>
                    <p className='text-[14px] mt-2 text-slate-400 leading-loose tracking-tighter'>Transforming designs into clean, and efficient interfaces.</p>
                  </div>
                </div>
              </div>

              <div className='w-full flex z-40 py-8 relative left-[0px] mt-[40px] lg:mt-[60px] h-max before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>
                  <div className='relative w-[50%] py-6 min-h-[400px] after:absolute after:top-0 after:right-0 after:w-px after:h-full after:bg-gray-950/5 dark:after:bg-white/10'>
                    <h2 className='text-[24px] font-medium text-white mb-2'>1. Flowtrush web</h2>
                    <p className='text-slate-400 w-[85%] leading-loose tracking-tighter'>Flowtrush is created similar to Trello, to manage and organize task lists in a structured manner.</p>
                    
                    <Link to={'https://flowtrush.vercel.app/auth'}>
                      <p className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-[#00B4F5] relative flex items-center text-base'>FlowTrush in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </p>
                    </Link>

                    <div onClick={(() => setSelectAccordion(1))} className={`relative h-max mt-6 w-[85%] ${selectAccordion === 1 ? 'h-[140px]' : 'h-[80px]'} active:scale-[0.99] duration-200 ease-in-out py-3 border-y border-slate-700 overflow-hidden`}>
                      <div className='cursor-pointer w-full flex items-baseline justify-between py-3'>
                        <p className={`text-lg font-medium duration-200 ease-in ${selectAccordion === 1 ? 'text-white' : 'text-slate-400'}`}>Authentication system</p>
                        {
                          selectAccordion === 1 ? (
                            <></>
                          ):
                            <Add01Icon className='text-indigo-700 cursor-pointer' />
                        }
                      </div>

                      <p className={`w-full ${selectAccordion === 1 ? '' : 'hidden'} duratation-200 leading-loose tracking-tighter text-slate-400 text-sm`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laborum.</p>
                    </div>
                    <div onClick={() => setSelectAccordion(2)} className={`relative h-max mt-6 w-[85%] ${selectAccordion === 2 ? 'h-[140px]' : 'h-[80px]'} active:scale-[0.99] duration-200 ease-in-out py-3 border-y border-slate-700 overflow-hidden`}>
                      <div className='cursor-pointer w-full flex items-baseline justify-between py-3'>
                        <p className={`text-lg font-medium duration-200 ease-in ${selectAccordion === 2 ? 'text-white' : 'text-slate-400'}`}>About the website</p>
                        {
                          selectAccordion === 2 ? (
                            <></>
                          ):
                            <Add01Icon className='text-indigo-700 cursor-pointer' />
                        }
                      </div>
                      <p className={`w-full ${selectAccordion === 2 ? '' : 'hidden'} duratation-200 leading-loose tracking-tighter text-slate-400 text-sm`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, laborum.</p>
                    </div>
                  </div>
                  <div className='relative w-[50%] min-h-[400px] rounded-[24px] flex justify-center items-center p-10 bg-white/20 backdrop-blur-2xl'>

                    <div className="absolute right-0 w-[100%] py-[30%] transform -translate-y-[70%] -rotate-45 
                        bg-[radial-gradient(circle_at_left_bottom,#e6b7fe_10%,#5049c2_10%,rgba(87,78,255,0)_60%)] 
                        blur-[40px]">
                    </div>

                    <motion.div
                          key={selectAccordion} // Animasi berjalan setiap kali konten berubah
                          className='relative flex justify-center items-center rounded-[24px] overflow-hidden bg-white/20 backdrop-blur-2xl p-2 w-full h-max mt-6'
                          initial={{ opacity: 0, y: 40 }} // Muncul dari bawah
                          animate={{ opacity: 1, y: 0 }} // Naik ke posisi normal
                          exit={{ opacity: 0, y: -20 }} // Keluar ke atas (opsional)
                          transition={{ duration: 0.5, ease: "easeOut" }} // Durasi & easing smooth
                      >
                          <img
                              src={selectAccordion === 1 ? AuthFlow : FlowTrush}
                              alt="FlowTrush-project"
                              className='h-full w-auto object-cover rounded-[20px]'
                          />
                      </motion.div>

                  </div>
                  {/* <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                    <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                      <div className='w-full'>
                        <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                          <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>Unipay</h2>
                          <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                          <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                            <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                            <p>React</p>
                          </div>
                          <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                            <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                            <p>Node</p>
                          </div>
                          <div className='w-max text-white flex items-center'>
                            <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                            <p>MongoDB</p>
                          </div>
                        </div>
                        </div>
                        <h3 className='text-[13px] lg:text-[16px] text-white'>Unipay facilitates students and faculty members to digitally process ordering and payment of fees.</h3>
                      </div>
                      <Link to={'https://unipay-ikmi.vercel.app/auth'}>
                        <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Unipay in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                      </Link>
                    </div>
                    <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                      <img src={Unipay} alt="unipay-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                    </div>
                  </div>
                  <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>Swiftvel</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                        <h3 className='text-[13px] lg:text-[16px] text-white'>Swiftvel is a platform for building websites by easily assembling various components (click and add).</h3>
                      </div>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Swiftvel in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </div>
                    <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                      <img src={Swiftvel} alt="Swiftvel-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                    </div>
                  </div> */}
              </div>
             
            </div>

            {/* <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-[0px] lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>Valclass</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={HTML} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>HTML</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <img src={JS} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>JS</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-white'>Valclass is a CSS framework that operates similar to Tailwind CSS and also provides ready-to-use components.</h3>
                    </div>
                    <Link to={'https://valclassui-v1.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={Valclass} alt="valclass-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-[max] mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>Flowtrush</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-white'>Flowtrush is created similar to Trello, to manage and organize task lists in a structured manner.</h3>
                    </div>
                    <Link to={'https://flowtrush.vercel.app/auth'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>FlowTrush in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                   <img src={FlowTrush} alt="FlowTrush-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-0 lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>OMDB</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <img src={TW} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Tailwind</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-white'>OMDB is a platform to obtain a list of movies, built using React and utilizing the OMDB API.</h3>
                    </div>
                    <Link to={'https://omdb-api-vite.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Valclass in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={OMDB} alt="OMDB-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
                <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>WeatherWeb</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={TW} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Tailwind</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-white'>WeatherWeb is a platform for checking weather conditions in a city, leveraging the API from openweathermap.</h3>
                    </div>
                    <Link to={'https://weather-iota-gilt.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>WeatherWeb in here<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                   <img src={Weather} alt="weather-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>
            </div>

            <div className='w-[90vw] lg:flex flex-col lg:flex-row z-40 flex relative left-[0px] mt-0 lg:mt-14 h-max'>
              <div className='w-full lg:w-[45%] bg-white lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:px-8 lg:pb-12 lg:pt-8 border border-slate-700 rounded-[14px] lg:rounded-[20px]'>
                  <div className='w-full h-max relative lg:flex flex-col justify-between text-[20px] leading-loose text-white'>
                    <div className='w-full'>
                      <div className='w-full pb-3 lg:flex items-center justify-between border-b mb-4 border-b-slate-300'>
                        <h2 className='text-white font-bold text-[26px] lg:text-[28px]'>Puitisy</h2>
                        <div className='w-max text-[14px] lg:text-[16px] flex items-center'>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Reacts} alt="react-icon" className='w-[24px] lg:w-[26px] mr-2 lg:mr-3' />
                          <p>React</p>
                        </div>
                        <div className='w-max text-white flex items-center mr-3 lg:mr-4'>
                          <img src={Node} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Node</p>
                        </div>
                        <div className='w-max text-white flex items-center'>
                          <img src={Mongodb} alt="react-icon" className='w-[22px] lg:w-[24px] mr-2 lg:mr-3' />
                          <p>Mongodb</p>
                        </div>
                      </div>
                      </div>
                      <h3 className='text-[13px] lg:text-[16px] text-white'>– A digital space where words and poetic art unite, offering a platform for writers and readers to connect.</h3>
                    </div>
                    <Link to={'https://puitisy.vercel.app/'}>
                      <h3 className='cursor-pointer mt-6 hover:brightness-[90%] active:scale-[0.99] text-blue-700 relative top-[-6px] flex items-center lg:text-[15px] text-[14px]'>Puitisy in here <FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
                    </Link>
                  </div>
                  <div className='w-[100%] h-max overflow-hidden rounded-[10px] mt-[20px] lg:mt-[40px] border p-2 border-slate-800'>
                    <img src={OMDB} alt="OMDB-project" className=' hover:grayscale-[100%] h-nax duration-300' />
                  </div>
                </div>

                <div className='w-full text-white flex items-center justify-center text-[20px] lg:w-[45%] bg-transparent border-dashed border-2 border-slate-100 lg:mb-0 mb-8 h-max mr-8 pb-6 px-4 pt-6 lg:p-8 rounded-[14px] lg:rounded-[20px]'>
                  <p>Cooming soon ...</p>
                </div>
            </div> */}
        </div>

        <div id='linkedin' className='px-14 relative lg:flex flex-col hidden z-[444] pb-[30px] lg:pb-[80px] lg:pt-4 w-[94%] h-max lg:border-l-[1px] lg:ml-12 border-slate-100'>
          <small className='relative text-[#00B4F5] text-[14px] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Web development and landing page.</small>
          <h2 className='relative text-[40px] text-white mt-4 mb-10 font-medium text-balance tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>Profile - linkedin</h2>
          <p className='relative text-base text-slate-400 w-[70%] tracking-tighter before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-gray-950/5 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-gray-950/5 dark:after:bg-white/10 after:-left-[100vw]'>As a Fullstack Developer, I specialize in modern technologies, leveraging frameworks like MERN and Laravel while implementing best practices in web development to create efficient.</p>

          <div className="absolute left-[20%] w-[60%] h-[40px] py-[30%] transform -translate-y-[45%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_60%)] blur-[140px]"></div>
          <div className="absolute left-[15%] w-[100%] h-[40px] py-[30%] transform -translate-y-[71%] -rotate-45 bg-[radial-gradient(circle_at_left_bottom,_#e6b7fe_10%,_#5049c2_20%,_rgba(87,78,255,0)_0%)] blur-[25px]"></div>
          <img src={Pacticles2} alt='particles' className='absolute left-[30%] top-[-10%] w-[30%]' />

          <div className='relative w-full bg-white/20 backdrop-blur-sm rounded-[28px] border border-slate-300 p-4 z-40 items-center justify-between mt-24'>
            <div className='w-full h-full bg-[#030712] p-10 rounded-[24px]'>
              <div className='w-full'>
                <Link to={'https://www.linkedin.com/in/yoshua-gombo/'}>
                  <div className='w-full ;g:flex items-center justify-between mb-4'>
                    <div className='lg:flex items-center text-white'>
                      <div className='w-[40px] h-[40px] lg:mb-0 mb-4 overflow-hidden mr-3'>
                        <img src={PakYos} alt="foto" />
                      </div>
                      <p className='ml-4'>Pak. Yoshua Gombo - <br className='flex lg:hidden' /> <span className='text-[12px] lg:text-[14px]'>Co-Founder at Konstruksi.AI | Robotics & AI</span></p>
                    </div>
                  </div>
                </Link>

                <p className='text-base leading-loose tracking-tighter mt-6 mb-10 text-slate-400'>
                To whom it may concern:

                Huda worked with us at Konstruksi.AI developing the core main product as a Frontend developer. Although he was an intern, Huda contributed greatly to the team. Huda has an excellent skill related to Frontend development and always completed his tasks in timely manner. He can perform both individually and within a team as well. I recommend him as a Frontend developer and I believe he will be a great asset to any company.
                </p>

                <div className='w-max flex gap-2 items-center text-[#00B4F5]'>
                  <p>Go to Linkedin</p>
                  <ArrowRight02Icon />
                </div>
              </div>
            </div>
            {/* <div className='w-full h-full bg-white/20 backdrop-blur-sm p-2 rounded-[20px] overflow-hidden'>
            </div> */}
          </div>

          {/* <div className='relative w-[100vw] lg:w-[92vw] mx-auto lg:mx-0 text-left p-4 lg:p-10 z-40 overflow-hidden lg:left-[-35px] flex flex-col bg-white mt-8 lg:mt-14 lg:rounded-[12px] border border-slate-200 h-max'>
            <h3 className='text-white text-[15px] lg:text-[18px] lg:mb-4 w-[94%] lg:w-[90%] leading-loose'>Your LinkedIn profile section showcases your professional background, skills, education, and achievements, providing a comprehensive view of your career and allowing you to connect with other professionals in your field.</h3>
            
            <div className='w-full border border-slate-300 p-4 bg-white mt-5'>
              <div className='w-full border-b border-b-slate-300 pb-3 mb-5'>
                <h2>Recomendation</h2>
              </div>
              <Link to={'https://www.linkedin.com/in/yoshua-gombo/'}>
                <div className='w-full ;g:flex items-center justify-between mb-4'>
                  <div className='lg:flex items-center'>
                    <div className='w-[40px] h-[40px] lg:mb-0 mb-4 overflow-hidden mr-3'>
                      <img src={PakYos} alt="foto" />
                    </div>
                    <p>Pak. Yoshua Gombo - <br className='flex lg:hidden' /> <span className='text-slate-400 text-[12px] lg:text-[14px]'>Co-Founder at Konstruksi.AI | Robotics & AI</span></p>
                  </div>
                  <p className='bg-blue-500 text-white text-[14px]  px-3 w-max mt-4 py-[6px]'>Konstruksi.AI</p>
                </div>
              </Link>

              <p className='w-full mt-3 leading-loose text-slate-500 text-[14px] lg:text-[15px]'>
              To whom it may concern:

              Huda worked with us at Konstruksi.AI developing the core main product as a Frontend developer. Although he was an intern, Huda contributed greatly to the team. Huda has an excellent skill related to Frontend development and always completed his tasks in timely manner. He can perform both individually and within a team as well. I recommend him as a Frontend developer and I believe he will be a great asset to any company.
              </p>
            </div>
            
            <Link to={'https://www.linkedin.com/in/muhammad-khoirulhuda-223659207'}>
              <div className='w-max h-max text-white cursor-pointer hover:brightness-[90%] text-[12px] lg:text-[16px] active:scale-[0.98] mt-7 lg:mt-16 bg-slate-800 flex items-center justify-center px-6 lg:px-8 py-3'>
                Look at linkedin <FaArrowRight className='ml-3' />
              </div>
            </Link>
            <img src={Linkedin} alt="linkedin" className='absolute right-4 lg:right-10 bottom-4 lg:bottom-9 w-[6%]' />
          </div> */}
        </div>

      <div className='relative w-full lg:mt-0 mt-[50px] flex flex-col z-[4444] lg:px-0 border-box lg:ml-[48px] h-max lg:border-l-[1px] border-slate-100'>
          
          <img src={Earth} alt="earth" className='absolute right-[-700px] opacity-[0.2] top-[-200px]' />

          <div className='relative z-[4444] pb-[0px] px-4 lg:px-16 w-[100%] mt-[0px] lg:mt-20 lg:mb-20 h-max ml-[0px]'>
            <div className='w-max mb-3 border border-slate-100 text-white flex lg:ml-0 items-center text-center px-5 py-1'>
              Experiences
            </div>
            <h3 className='text-[40px] lg:text-[70px] text-blue-400 font-[500]'>My Intern</h3>
            <h2 className='text-[30px] text-white w-max hidden lg:flex items-center'>Part-time & full-time in my <span className='text-blue-400 ml-3 flex items-center'>Jobs.</span></h2>
          </div>

          {/* one */}
          <div id='experience' className='relative flex items-center h-max lg:h-[400px] lg:mt-0 mt-10 w-[90vw] ml-5 lg:ml-0 lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-[-1px] lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] w-max mb-5 border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>
                Frontend Developer
              </div>
              <h2 className='text-[24px] lg:text-[48px] lg:ml-[120px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>PT. Konstruksi.AI </h2>
              <p className='lg:text-white lg:ml-[120px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <Link to={'https://konstruksi.ai/'}>
                <h3 className='cursor-pointer underline ml-1 lg:ml-[120px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 text-[20px] flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
              </Link>
            </div>
          </div>
          {/* two */}
          <div className='relative flex items-center h-max lg:h-[400px] w-[90vw] ml-5 lg:ml-0 lg:w-full'>
            <div className='w-[150px] relative lg:flex hidden'>
              <img loading='lazy' src='https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg' alt="line" />
            </div>
            <div className='w-full relative left-0 lg:left-[-100px] mt-8'>
              <div className='lg:ml-[120px] mt-[0px] w-max mb-5 border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>
                Web Developer & Data Analysist
              </div>
              <h2 className='text-[24px] lg:text-[48px] lg:ml-[120px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>Diskominfo Cirebon </h2>
              <p className='lg:text-white lg:ml-[120px] mt-5 w-full lg:text-[16px] text-[14px] text-slate-300 text-left lg:w-[75%] leading-loose'>February 2024 - April 2024, Frontend Developer use React Vite + TailwindCSS, Create Structure Project Best Practive My Version and Use Redux (State Management) + TypeScript (Type Data Managment)</p>
              <Link to={'https://diskominfo.cirebonkab.go.id/'}>
                <h3 className='cursor-pointer underline ml-1 lg:ml-[120px] mt-[30px] mb-10 hover:brightness-[90%] active:scale-[0.99] text-blue-300 text-[20px] flex items-center w-max'>Company Profile<FaArrowRight className='ml-4 relative top-[0.8]' /> </h3>
              </Link>
            </div>
          </div>

          <div id='github' className='relative w-[100vw] lg:w-[92vw] text-left p-4 lg:p-10 z-40 overflow-hidden left-0 lg:left-[-35px] flex flex-col bg-white mt-8 lg:mb-0 mb-14 mr-8 lg:rounded-[12px] border border-slate-200 min-h-[284px] lg:min-h-[500px]'>
            <h3 className='text-white text-[15px] lg:text-[18px] w-[94%] text-left lg:w-[90%] leading-loose'>Your GitHub profile highlights your coding projects, contributions to open-source communities, and technical skills, offering a comprehensive view of your expertise in software development and collaboration within the tech community.</h3>
            
            <div className='w-full my-8 lg:flex justify-between items-center'>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-[20px]'>
                <div className='w-full h-[130px] bg-blue-200 flex justify-center items-center'>
                  <img src={Git1} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Pull Shark - 2x</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>@khoirulhudaa opened pull requests that have been merged.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-[20px]'>
                <div className='w-full h-[130px] bg-orange-200 flex justify-center items-center'>
                  <img src={Git2} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Quickdraw</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Closing issues or pull requests within 5 minutes after they are opened.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-[20px]'>
                <div className='w-full h-[130px] bg-yellow-200 flex justify-center items-center'>
                  <img src={Git3} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight className='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Yolo</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Achievement when you merge a PR without review.</p>
                </div>
              </div>
              <div className='w-full lg:mb-0 mb-5 lg:w-[24%] min-h-[300px] p-3 border border-slate-300 rounded-[20px]'>
                <div className='w-full h-[130px] bg-purple-300 flex justify-center items-center'>
                  <img src={Git4} alt="pull-shark" className='w-[30%]' />
                </div>
                <div className='w-full p-4'>
                  <div className='w-[30px] h-[30px] ml-auto flex items-center justify-center cursor-pointer p-1'>
                    <FaArrowRight classsetSelectAccordionName='relative text-blue-500 scale-[1.1] rotate-[-35deg]' />
                  </div>
                  <h2>Starstruck</h2>
                  <p className='mt-2 text-slate-500 text-[14px] leading-loose'>Starstruck: Having a repository with high popularity / a large number of stars.</p>
                </div>
              </div>
            </div>

            <Link to={'https://github.com/khoirulhudaa'}>
              <div className='w-max h-max text-white hover:brightness-[90%] active:scale-[0.98] mt-[-22px] lg:mt-5 bg-slate-800 flex items-center justify-center cursor-pointer px-6 lg:text-[16px] text-[12px] lg:px-8 py-3'>
                Look at github <FaArrowRight className='ml-3' />
              </div>
            </Link>
          </div>

        </div>

        <div className='relative lg:w-[90vw] flex flex-col z-[4444] pt-7 lg:pt-8 pb-5 lg:pb-36 lg:ml-[48px] h-max lg:border-l-[1px] border-slate-100'>

          <img src={Earth} alt="earth" className='absolute right-[-700px] scale-[2] opacity-[0.2] top-[25%]' />

          <div className='relative z-[4444] pb-[0px] px-0 lg:px-16 w-[100%] mt-[0px] lg:mt-20 lg:mb-20 h-max ml-[16px] lg:ml-[-17px]'>
            <div className='w-max mb-3 border border-slate-100 text-white flex lg:ml-0 items-center text-center px-5 py-1'>
              Certificates
            </div>
            <h3 className='text-[40px] lg:text-[70px] text-blue-400 font-[500]'>My Awards</h3>
            <h2 className='text-[30px] text-white w-max hidden lg:flex items-center'>Results from competitions & training.</h2>
          </div>

          <div className='w-full flex lg:px-0 px-5 lg:ml-12 flex-wrap'>
            <div id='certifications' className='relative flex items-center h-max lg:h-[320px] lg:mt-0 mt-10 w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
                <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Winner} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    Web Dev - UNTAR
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>2nd Place - National</h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(Jakarta)
                  setText('National-level team-based Web Development Competition with a maximum of three members per team in the I/O Festival 2024 at Tarumanegara University, Jakarta.')
                }} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate<FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>
          
            <div className='relative flex items-center h-max lg:h-[320px] w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Winner} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    WDC - UNMA
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>2nd Place - Public</h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(Majalengka)
                  setText('National-level Web Design Competition for Students at the Dies Natalis HMIF event at Majalengka University, Majalengka on May 20, 2024.')}}
                className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>

            <div className='relative flex items-center h-max lg:h-[320px] w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
              <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Winner} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    WDC - IKMI CIREBON
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>1nd Place - Public</h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(Majalengka)
                  setText('National-level Web Design Competition for Students at the Dies Natalis HMIF event at Majalengka University, Majalengka on May 20, 2024.')}}
                className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>

            <div className='relative flex items-center h-max lg:h-[320px] w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
                <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Winner} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    WDC - IKMI Cirebon
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>1st Place - Intramural </h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(Cirebon)
                  setText('Inter-College Landing Page Web Competition exclusively for STMIK IKMI CIREBON students at the IKMIMATCHCHAMPIONSHIP event from August 18 to 26, 2023.')}}
                className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>
          
            <div className='relative flex items-center h-max lg:h-[320px] w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
                <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Peserta} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    WDC - PNB
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>Participation </h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(Bali)
                  setText('National-level Web Design Competition for High School Students (SMA/SMK) at INTECHFEST 2020 with the theme "Information and Technology can Support Future Life".')}} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>
        
            <div className='relative flex items-center h-max lg:h-[320px] w-full lg:w-[45%] mb-8 lg:mb-14 lg:mr-8 p-6 border border-slate-100 rounded-[20px]'>
              <div className='w-full relative left-[-1px] lg:left-[-100px] mt-6 lg:mt-8'>
                <div className='lg:ml-[120px] mt-[0px] mb-5 flex items-center'>
                  <img src={Peserta} alt="winner-icon" className='w-[30px]' />
                  <div className='ml-5 mt-[0px] w-max border border-slate-100 bg-white text-black flex items-center text-center px-5 py-1 shadow-[20px]'>        
                    Junior Web Dev
                  </div>
                </div>
                <h2 className='text-[24px] lg:text-[40px] lg:ml-[110px] relative top-[5px] bg-gradient-to-r from-white to-slate-500 text-transparent w-[94vw] lg:w-[70vw] text-left bg-clip-text'>VSGA - JWD</h2>
                <div onClick={() => {
                  setIsModal(true)
                  setSelectImage(JWD)
                  setText(`It's a certifications training program for Junior Web Developers based on national competencies and one of the eight academies under the Digital Talent Scholarship (DTS) in 2022.`)}} className='cursor-pointer ml-1 lg:ml-[115px] mt-[30px] text-[20px] mb-6 lg:mb-10 hover:brightness-[90%] active:scale-[0.99] text-white flex items-center w-max border border-slate-100 py-2 px-3'>Show Certificate <FaArrowRight className='ml-4 relative top-[0.8]' /> </div>
              </div>
            </div>
          </div>
         

        </div>

        <footer className='relative w-full text-white lg:pb-16 lg:px-16 lg:before:absolute lg:before:left-[22px] lg:before:w-[54px] lg:before:h-[54px] lg:before:bg-white lg:before:shadow-md lg:before:shadow-black lg:before:content-["<>"] lg:before:flex lg:before:justify-center lg:before:items-center lg:before:text-purple-500 lg:before:font-bold lg:before:text-[24px] lg:before'>
          <div className='lg:ml-12'>
            <p className='w-[94%] text-[12px] lg:flex hidden lg:text-[16px] lg:w-[80%] leading-loose'>Website yang menjadi basecamp untuk semua karya dan pencapaian saya dalam dunia pemrogramman selama ini. Hasil kerja keras dan keyakinan untuk tetap berdedikasi dalam kompetensi tersebut.</p>
            <p className='lg text-black lg:mt-8 text-[16px] lg:text-[18px] px-4 py-3 lg:py-1 text-center bg-gradient-to-r from-white via-slate-400 to-white w-full lg:w-max'>2024 at the new portofolio</p>
          </div>
        </footer>

    </div>
  )
}

export default Homepage