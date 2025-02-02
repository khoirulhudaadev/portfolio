import { useEffect } from "react";

const ModalCertification = ({ image, onClose }:{ image?: string; onClose: () => void }) => {

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
      <div className="relative left-[-16px] w-[70vw] h-[80vh] bg-white/20 backdrop-blur-2xl p-4 rounded-[24px]">
        <div className="relative w-full h-full bg-white rounded-[20px] shadow-lg z-[999999999999]">
          
          <div onClick={() => onClose()} className='absolute right-0 top-0 p-4 cursor-pointer active:scale-[0.98]'>
            <div className="w-max flex items-center gap-2">
                <p className="text-[12px] text-slate-400">for close</p>
                <div onClick={() => onClose()} className="border border-slate-400 bg-white text-slate-600 rounded-[6px] px-3 py-1 font-normal text-[10px]">
                    <p>click / esc</p>
                </div>
            </div>
          </div>
          
          <div className="w-full h-full mb-4 p-4">
              <img src={image} alt="image" className={`w-auto h-full rounded-[16px] object-contain`} />
          </div>

          <div className='absolute right-0 bottom-0 w-full p-4 text-[12px] text-slate-500 flex items-center justify-end'>
              <p>Powered by developer</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ModalCertification
