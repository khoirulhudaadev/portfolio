import { useEffect } from "react";
import { Laravel } from "../Assets";

const ModalDetail = ({ onClose, textEnglish, features, title, implement }: { onClose: () => void, textEnglish: string, features: string[], title: string, implement: string[] }) => {

    // Menambahkan event listener untuk ESC key
    useEffect(() => {
        const handleEscPress = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose()
            }
        };

        // Menambahkan listener saat komponen dipasang
        document.addEventListener('keydown', handleEscPress);

        // Membersihkan listener saat komponen dilepas
        return () => {
            document.removeEventListener('keydown', handleEscPress);
        };
    }, []);

    return (
        <section className='w-screen h-screen fixed left-0 bottom-0 bg-slate-900 bg-opacity-[0.7] lg:flex items-center justify-center z-[999999999999]'>
            <div className="relative md:left-[-16px] w-ful md:w-[80vw] h-full md:h-[80vh] bg-white/20 backdrop-blur-2xl md:p-4 md:rounded-[24px]">
                <div className="relative flex items-center justify-center w-full h-full bg-white md:rounded-[20px] shadow-lg z-[999999999999]">

                    <div onClick={() => onClose()} className='md:w-max w-full md:flex hidden absolute right-0 top-2 z-[333] p-4 cursor-pointer active:scale-[0.98]'>
                        <div className="w-full md:w-max flex items-center gap-2">
                            <p className="text-[12px] md:mb-0 mb-2 w-max text-slate-400">for close</p>
                            <div onClick={() => onClose()} className="border border-slate-400 bg-white text-slate-600 md:rounded-[6px] w-max px-3 py-3 md:py-1 font-normal text-[12px] md:text-[10px]">
                                <p>click / esc</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full flex h-max md:h-full">
                        <div className="relative w-full h-full pt-6 pb-4 px-8">
                            <div className="w-max flex items-center">
                                <h2 className="text-[30px] w-max font-bold mb-2 mr-3">{title}</h2>
                                <img src={Laravel} alt="laravel-logo" className="relative top-[-4px] w-7 h-7" />
                            </div>
                            <p className="border-t border-slate-300 py-4">{textEnglish}</p>
                            <div className="grid py-4 grid-cols-1">
                                <h3 className="font-bold text-[16px] text-black">Features:</h3>
                                <ul className="flex flex-wrap border-t border-slate-300 py-6">
                                    {
                                        features?.map((data: string, index: number) => (
                                            <li className="mb-4 mr-4 border-r border-slate-500 pr-4" key={index}>{data}</li>
                                        ))
                                    }
                                </ul>
                                <h3 className="font-bold text-[16px] text-black">Implementation:</h3>
                                <ul className="flex flex-wrap border-t border-slate-300 py-6">
                                    {
                                        implement?.map((data: string, index: number) => (
                                            <li className="mb-4 mr-4 border-r border-slate-500 pr-4" key={index}>{data}</li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModalDetail
