import { Link } from "react-router-dom"
import { Footer } from '../Assets'

const FooterComp = () => {
    return (
        <footer className='bg-white/10 backdrop-blur-md relative w-full overflow-hidden px-2 md:px-6 mt-10 md:pb-0 pb-5 z-[8888] before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-white/10 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-white/10 after:-left-[100vw]'>
            <img src={Footer} alt='particles' className='absolute z-[-2] right-[0%] bottom-[-34%] w-full opacity-[60%]' />
            <div className="relative w-full md:ml-8 grid md:grid-cols-4 z-[999]">
                <div className="relative w-full md:flex hidden flex-col h-max md:min-h-[340px] md:py-10 md:px-6">
                    <ul className="list-none h-full ml-4 flex flex-col justify-between text-white text-[14px] font-normal before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/10 before:-top-[0px]">
                        <Link to={'https://github.com/khoirulhudaa'} target="__blank">
                            <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Github account 1</li>
                        </Link>
                        <Link to={'/'} target="__blank">
                            <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6'>Homepage</li>
                        </Link>
                        <Link to={'https://www.linkedin.com/in/muhammadkhoirulhuda'} target="__blank">
                            <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Linkedin</li>
                        </Link>
                    </ul>
                </div>
                <div className="relative w-full md:flex hidden flex-col h-max md:min-h-[340px] md:py-10 md:px-6">
                    <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
                    </div>
                    <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                        <Link to={'#languages'} target="__blank">
                            <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6'>Skill & languages</li>
                        </Link>
                            <li className='cursor-not-allowed overflow-hidden md:mb-4 relative text-slate-500 py-6'>Coresponden</li>
                        <Link to={'#xperiences'} target="__blank">
                            <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6'>Experience</li>
                        </Link>
                    </ul>
                </div>
                <div className="relative w-full h-max md:min-h-[340px] md:py-10 md:px-6">
                    <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
                    </div>
                    <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                        <Link to={'https://github.com/khoirulhudaadev'} target="__blank">
                            <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Github Account 2</li>
                        </Link>
                        <Link to={'#certifications'} target="__blank">
                            <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6 md:flex hidden'>Certifications</li>
                        </Link>
                        <Link to={'https://wa.me/6289513093406'} target="__blank">
                            <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">Whatsapp</li>
                        </Link>
                    </ul>
                </div>
                <div className="relative w-full h-max md:min-h-[340px] md:py-10 md:px-6">
                    <div className="absolute top-0 left-0 w-[10%] h-full before:absolute before:left-0 before:w-px before:h-full before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-top-[0px]">
                    </div>
                    <ul className="list-none h-full ml-4 md:ml-[10%] flex flex-col justify-between text-white text-[14px] font-normal">
                        <Link to={'https://ikmi.ac.id/'} target="__blank">
                            <li className='overflow-hidden hover:text-indigo-500 md:mb-4 relative py-6'>STMIK IKMI Cirebon</li>
                        </Link>
                        <Link to={'https://smkn1-cirebon.sch.id'} target="__blank">
                            <li className="overflow-hidden hover:text-indigo-500 md:mb-4 relative before:absolute before:top-0 before:h-px before:w-[200vw] before:bg-slate-900/80 dark:before:bg-slate-100/5 before:-left-[100vw] after:absolute after:bottom-0 after:h-px after:w-[200vw] after:bg-slate-900/80 dark:after:bg-slate-100/5 after:-left-[100vw] py-6">SMKN 1 Cirebon</li>
                        </Link>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default FooterComp
