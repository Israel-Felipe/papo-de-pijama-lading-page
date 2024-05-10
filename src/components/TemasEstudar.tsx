import Image from 'next/image'
import wallpaper from '/public/images/fundos/temas-estudar.png'
import brilho from '/public/images/brilho.svg'
import { temas_content } from '../utils/Contents'

export default function TemasEstudar() {
  return (
    <header className="relative flex justify-center overflow-hidden bg-gradient-to-b from-[#B72A45] to-[#D69C9A]">
      <div className="absolute h-full w-full">
        {/* <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover
          }`}
          alt="wallpaper"
        /> */}
      </div>

      <nav className="relative w-auto h-auto mt-6 max-w-screen-xl flex flex-col items-center pb-32">
        <div className="flex justify-around items-center w-[950px] mb-28 mt-20">
          <Image
            src={brilho}
            className={`max-w-[40px] m-auto
          }`}
            alt="brilho"
          />
          <p className="text-center lg:text-6xl text-3xl z-40 text-[#fff] w-[900px]">
            Veja os{' '}
            <span className="font-extrabold">
              temas que vamos estudar juntas
            </span>{' '}
            em 2024!
          </p>
          <Image
            src={brilho}
            className={`max-w-[40px] m-auto
          }`}
            alt="brilho"
          />
        </div>
        {temas_content.map((content, i) => (
          <Topics mes={content.mes} text={content.text} key={i} />
        ))}
      </nav>
    </header>
  )
}

function Topics({ mes, text }: { mes: string; text: string }) {
  return (
    <div className="lg:w-[850px] bg-[#B05E00] bg-opacity-50 rounded-[50px] relative mb-5 flex items-center p-3 border-[#FB9930] border-dashed border-[2px]">
      <p className="text-[#B52446] text-2xl bg-[#FB9930] w-[125px] rounded-[50px] py-4 font-bold text-center">
        {mes}
      </p>
      <p className="text-[#fff] text-3xl font-bold ml-6">{text}</p>
    </div>
  )
}
