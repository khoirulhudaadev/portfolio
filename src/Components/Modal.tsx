import { CircleIcon, LinkSquare01Icon, Search01Icon } from "hugeicons-react";
import { useState } from "react";
import { motion } from "framer-motion";

interface ModalState {
    onClose: () => void;
}

const ModalSearch = ({ onClose }: ModalState) => {

    const [search, setSearch] = useState<string>('')

    const datas = [
        {
            title: "Download resume",
            value: "/"
        },
        {
            title: "Email account",
            value: "muhammadkhoirulhuda111@gmail.com"
        },
        {
            title: "Linkedin account",
            value: "https://www.linkedin.com/in/muhammadkhoirulhuda"
        },
        {
            title: "Github account 1",
            value: "https://github.com/khoirulhudaa"
        },
        {
            title: "Github account 2",
            value: "https://github.com/khoirulhudaadev"
        },
        {
            title: "SIGEO web",
            value: "https://sigeo-user.vercel.app/"
        },
    ]

    const internship = [
        {
            title: "Konstruksi.AI",
            value: "https://konstruksi.ai/"
        },
    ]

    const educations = [
        {
            title: "STMIK IKMI CIREBON",
            value: "https://ikmi.ac.id/"
        },
        {
            title: "SMKN 1 CIREBON",
            value: "https://smkn1-cirebon.sch.id/"
        },
    ]

    const filteredInternships = internship.filter((data) =>
        search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
    );

    const filteredEducations = educations.filter((data) =>
        search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
    );

    const filteredAccounts = datas.filter((data) =>
        search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
    );

    return (
        <motion.div
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            whileInView={{ opacity: 1, filter: 'blur(0px)' }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-screen h-screen fixed z-[99999999999999] bg-black/80 flex justify-center items-center">
            <div className="relative md:left-[-16px] md:top-0 top-[-20px] w-full md:w-[60vw] h-[80vh] bg-white/20 backdrop-blur-2xl p-4 md:rounded-[24px]">
                <div className="relative w-full md:w-[60vw] h-[80vh] overflow-hidden bg-white p-4 md:p-6 md:rounded-[20px]">
                    <div className='w-full flex items-center justify-between border-b border-b-slate-300 pb-3'>
                        <div className="flex md:flex-1 md:mr-4 items-center gap-2">
                            <Search01Icon className="w-5 h-5" />
                            <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className="text-[13px] w-full outline-0 border-0 p-2" placeholder="Search information" />
                        </div>
                        <div className="mt-0 md:w-max flex items-center gap-2">
                            <p className="text-[12px] text-slate-400">for close</p>
                            <div onClick={() => onClose()} className="border border-slate-400 rounded-[6px] px-3 py-1 text-slate-600 font-normal text-[12px] md:text-[10px]">
                                <p>esc</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-[76%] md:pr-6 overflow-y-auto mt-4 md:mt-6">
                        {/* Cek jika semua kategori kosong */}
                        {filteredInternships.length === 0 &&
                            filteredEducations.length === 0 &&
                            filteredAccounts.length === 0 ? (
                            <>
                                <div className="w-full h-full flex items-center justify-center">
                                    <p className="text-center text-gray-500">Information not available</p>
                                </div>
                            </>
                        ) : (
                            <>
                                {/* Internship Section */}
                                {filteredInternships.length > 0 && (
                                    <div className="border-b border-slate-300">
                                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                                            <CircleIcon className="w-4 h-4" />
                                            Internship
                                        </h2>
                                        {filteredInternships.map((data, index) => (
                                            <a key={index} href={data?.value} target="__blank">
                                                <div className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-black/90 hover:text-white">
                                                    {data?.title}
                                                    <LinkSquare01Icon className="w-4 h-4" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* Accounts Section */}
                                {filteredAccounts.length > 0 && (
                                    <div className="border-b border-slate-300">
                                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                                            <CircleIcon className="w-4 h-4" />
                                            Accounts
                                        </h2>
                                        {filteredAccounts.map((data, index) => (
                                            <a key={index} href={data?.value} target="__blank">
                                                <div className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-black/90 hover:text-white">
                                                    {data?.title}
                                                    <LinkSquare01Icon className="w-4 h-4" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}

                                {/* Education Section */}
                                {filteredEducations.length > 0 && (
                                    <div>
                                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                                            <CircleIcon className="w-4 h-4" />
                                            Education
                                        </h2>
                                        {filteredEducations.map((data, index) => (
                                            <a key={index} href={data?.value} target="__blank">
                                                <div className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-black/90 hover:text-white">
                                                    {data?.title}
                                                    <LinkSquare01Icon className="w-4 h-4" />
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </>
                        )}
                    </div>

                    <div className='absolute border-t border-slate-300 left-0 bottom-0 w-full px-4 md:px-8 py-4 text-[12px] text-slate-500 flex items-center justify-end'>
                        <p>Powered by developer</p>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default ModalSearch
