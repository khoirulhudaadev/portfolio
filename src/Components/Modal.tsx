import { CircleIcon, LinkSquare01Icon, Search01Icon } from "hugeicons-react";
import { useState } from "react";

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
        value: "/"
    },
    {
        title: "Linkedin account",
        value: "/"
    },
    {
        title: "Github account 1",
        value: "/"
    },
    {
        title: "Github account 2",
        value: "/"
    },
    {
        title: "Framework Valclass",
        value: "/"
    },
    {
        title: "SIGEO web",
        value: "/"
    },
]

const internship = [
    {
        title: "Konstruksi.AI",
        value: "/"
    },
  ]

  const certifications = [
    {
        title: "Certification (National)",
        value: "/"
    },
    {
        title: "Certification (District)",
        value: "/"
    },
    {
        title: "Certification (Public)",
        value: "/"
    },
  ]

  const educations = [
    {
        title: "STMIK IKMI CIREBON",
        value: "/"
    },
    {
        title: "SMKN 1 CIREBON",
        value: "/"
    },
  ]

  const filteredInternships = internship.filter((data) =>
    search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
  );
  
  const filteredEducations = educations.filter((data) =>
    search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
  );
  
  const filteredCertifications = certifications.filter((data) =>
    search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
  );
  
  const filteredAccounts = datas.filter((data) =>
    search ? data.title.toLowerCase().includes(search.toLowerCase()) : true
  );

  return (
    <div className="w-screen h-screen fixed z-[99999999999999] bg-black/80 flex justify-center items-center">
        <div className="relative left-[-16px] w-[60vw] h-[80vh] bg-white/20 backdrop-blur-2xl p-4 rounded-[24px]">
            <div className="relative w-[60vw] h-[80vh] overflow-hidden bg-white p-6 rounded-[20px]">
                <div className='w-full flex items-center justify-between border-b border-b-slate-300 pb-3'>
                    <div className="flex flex-1 mr-4 items-center gap-2">
                        <Search01Icon className="w-5 h-5" />
                        <input type="text" onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} className="text-[13px] w-full outline-0 border-0 p-2" placeholder="Search information" />
                    </div>
                    <div className="w-max flex items-center gap-2">
                        <p className="text-[12px] text-slate-400">for close</p>
                        <div onClick={() => onClose()} className="border border-slate-400 rounded-[6px] px-3 py-1 text-slate-600 font-normal text-[10px]">
                            <p>esc</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[76%] pr-6 overflow-y-auto mt-6">
                    {/* Cek jika semua kategori kosong */}
                    {filteredInternships.length === 0 &&
                    filteredEducations.length === 0 &&
                    filteredCertifications.length === 0 &&
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

                        {/* Education Section */}
                        {filteredEducations.length > 0 && (
                            <div className="border-b border-slate-300">
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

                        {/* Certifications Section */}
                        {filteredCertifications.length > 0 && (
                            <div className="border-b border-slate-300">
                            <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                                <CircleIcon className="w-4 h-4" />
                                Certifications
                            </h2>
                            {filteredCertifications.map((data, index) => (
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
                            <div>
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
                        </>
                    )}
                    </div>


                <div className='absolute border-t border-slate-300 left-0 bottom-0 w-full px-8 py-4 text-[12px] text-slate-500 flex items-center justify-end'>
                    <p>Powered by developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalSearch
