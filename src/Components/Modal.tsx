import { CircleIcon, LinkSquare01Icon, Search01Icon } from "hugeicons-react"

interface ModalState {
    onClose: () => void;
}

const ModalSearch = ({ onClose }: ModalState) => {

    interface DataItem {
        title: string;
        value: string;
    }
    

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

  return (
    <div className="w-screen h-screen fixed z-[99999999999999] bg-black/80 flex justify-center items-center">
        <div className="w-[60vw] h-[80vh] bg-white/20 backdrop-blur-2xl p-4 rounded-[24px]">
            <div className="w-[60vw] h-[80vh] bg-white p-6 rounded-[20px]">
                <div className='w-full flex items-center justify-between border-b border-b-slate-300 pb-3'>
                    <div className="flex items-center gap-2">
                        <Search01Icon className="w-5 h-5" />
                        <input type="text" className="text-[13px] outline-0 border-0 p-2" placeholder="Search information" />
                    </div>
                    <div className="w-max flex items-center gap-2">
                        <p className="text-[12px] text-slate-400">for close</p>
                        <div onClick={() => onClose()} className="border border-slate-400 rounded-[6px] px-3 py-1 text-slate-600 font-normal text-[10px]">
                            <p>esc</p>
                        </div>
                    </div>
                </div>

                <div className="w-full h-[75%] pr-6 overflow-y-auto mt-6">
                    <div className="border-b border-slate-300">
                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                            <CircleIcon className="w-4 h-4" />
                            Internship
                        </h2>
                        {
                            internship.map((data: DataItem, index: number) => (
                                <a href={data?.value} target="__blank">
                                    <div key={index} className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-blue-400 hover:text-white">
                                        {data?.title}
                                        <LinkSquare01Icon className="w-4 h-4" />
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <div className="border-b border-slate-300">
                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                            <CircleIcon className="w-4 h-4" />
                            Education
                        </h2>
                        {
                            educations.map((data: DataItem, index: number) => (
                                <a href={data?.value} target="__blank">
                                    <div key={index} className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-blue-400 hover:text-white">
                                        {data?.title}
                                        <LinkSquare01Icon className="w-4 h-4" />
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <div className="border-b border-slate-300">
                        <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                            <CircleIcon className="w-4 h-4" />
                            Certifications
                        </h2>
                        {
                            certifications.map((data: DataItem, index: number) => (
                                <a href={data?.value} target="__blank">
                                    <div key={index} className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-blue-400 hover:text-white">
                                        {data?.title}
                                        <LinkSquare01Icon className="w-4 h-4" />
                                    </div>
                                </a>
                            ))
                        }
                    </div>
                    <h2 className="text-base font-medium ml-1 my-4 flex items-center gap-2">
                        <CircleIcon className="w-4 h-4" />
                        Accounts
                    </h2>
                    {
                        datas.map((data: DataItem, index: number) => (
                            <a href={data?.value} target="__blank">
                                <div key={index} className="w-full flex items-center justify-between rounded-[10px] mb-4 cursor-pointer active:scale-[0.99] duration-100 text-[14px] px-4 py-4 bg-slate-200 text-slate-600 hover:bg-blue-400 hover:text-white">
                                    {data?.title}
                                    <LinkSquare01Icon className="w-4 h-4" />
                                </div>
                            </a>
                        ))
                    }
                </div>

                <div className='absolute border-t border-slate-300 left-0 bottom-0 w-full pt-4 text-[12px] text-slate-500 flex items-center justify-end'>
                    <p>Powered by developer</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ModalSearch
