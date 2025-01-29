
const ModalCertification = ({ image, text, close, title }:{ image?: any; text?: string;close?: any; title?: any }) => {

  return (
    <section className='w-screen h-screen fixed left-0 bottom-0 bg-slate-900 bg-opacity-[0.7] lg:flex items-center justify-center z-[999999999999]'>
      <div className="relative w-full lg:w-[75%] h-screen lg:h-max overflow-y-auto bg-white lg:rounded-[14px] pt-10 pb-6 px-6 shadow-lg z-[999999999999]">
        <div className="lg:relative lg:flex w-full h-full">
            <div className="w-full lg:w-1/2 max-h-1/2 lg:h-full flex">
                <div className="w-full h-max lg:max-h-[330px] mb-4 overflow-hidden border border-slate-400 rounded-lg">
                    <img src={image} alt="image" className="w-full h-full object-hover lg:object-contain" />
                </div>
            </div>
            <div className="lg:relative h-1/2 lg:h-full w-full lg:w-1/2 lg:pl-8 pt-8">
                <h2 className="relative font-bold">{title ?? ''}</h2>
                <p className="text-slate-500 text-[12px] my-3">2024</p>
                <p className="w-[96%] mt-4 text-[15px] leading-loose text-slate-600">{text}</p>
                <div onClick={() => close()} className="relative lg:border border-[1.6px] border-red-600 text-red-600 font-normal w-full h-max lg:py-3 py-4 mt-6 rounded-md flex items-center justify-center cursor-pointer active:scale-[0.98] hover:brightness-[90%]">
                  Close Now
                </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ModalCertification
