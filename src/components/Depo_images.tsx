import depo1 from '/public/images/depo1.png'
import depo2 from '/public/images/depo2.png'
import depo3 from '/public/images/depo3.jpg'
import Image from 'next/image'
import wallpaper from '/public/images/fundos/roxo-escuro.png'

interface DepoImages {
  handleOferta: () => void
}

export const Depo_images: React.FC<DepoImages> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col justify-center items-center h-auto bg-[#E89D9B] z-0 overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter z-0`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative h-auto max-w-screen-xl mb-12 flex flex-col items-center justify-center w-[85%]">
        <p
          className="w-full lg:text-6xl text-[2.5rem] text-center !leading-tight font-extrabold mt-16 text-[#FEF4E6]"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
        >
          O que estão falando sobre as
          <span className="text-[#E98D2A]"> séries devocionais</span>:
        </p>

        <div className="flex flex-col lg:flex-row justify-center items-center lg:px-0 mt-14 gap-8 lg:gap-[2%]">
          <Image
            src={depo1}
            className={'w-[90%] md:w-[32%] rounded-xl'}
            alt="depoimento 1"
          />
          <Image
            src={depo2}
            className={'w-[90%] md:w-[32%] rounded-xl'}
            alt="depoimento 2"
          />
          <Image
            src={depo3}
            className={'w-[90%] md:w-[32%] rounded-xl'}
            alt="depoimento 3"
          />
        </div>

        <div className="flex justify-center items-center mt-12 h-auto z-40 w-full">
          <button
            onClick={handleOferta}
            className="bg-[#E98D2A] hover:bg-[#FFA74D] active:bg-[#B5711E] text-[#5E0616] py-3 px-12 rounded-full font-bold lg:text-3xl text-lg z-10 transition duration-200 transform hover:scale-105 active:scale-95 mb-8 max-w-[90%]"
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow = 'none')
            }
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow =
                '-6px 8px 2px 0px rgba(94, 6, 22, 0.8)')
            }
          >
            Eu quero fazer parte do
            <br />
            Clube de Devoção!
          </button>
        </div>
      </nav>
    </header>
  )
}
