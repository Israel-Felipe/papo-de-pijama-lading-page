import wallpaper from '/public/images/fundos/Fundo-comparative.png'
import {
  Comparative_devos_content,
  Comparative_papo_content,
} from '../utils/Contents'
import Image from 'next/image'
import topic from '/public/images/topic.svg'

export default function Comparative() {
  return (
    <header className="relative flex justify-center h-auto bg-[#FEF4E6] overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative w-[90%] lg:w-[850px] py-16 md:py-24 text-[#5E0616]">
        <div className="border-[#943A49] border-dotted border-[2px] rounded-[50px] w-full lg:h-16 h-12 flex justify-around items-center">
          <div className=" w-[40%]">
            <p className="font-bold lg:text-5xl text-lg text-center">
              Devocionais
            </p>
          </div>
          <div className="bg-[#FF9E9C] border-[#fff] border-dotted border-[2px] rounded-full lg:w-24 lg:h-24 w-16 h-16 flex items-center justify-center z-40">
            <p className="font-black lg:text-5xl">Vs</p>
          </div>
          <div className=" w-[47%]">
            <p className="font-bold lg:text-5xl text-lg text-center tracking-tight">
              Papo de Pijama
            </p>
          </div>
        </div>

        {
          <div className="w-full h-auto flex py-8 md:py-12">
            <div className="w-[46.5%] border-r-[1px] border-dotted border-[#943A49] lg:px-12 px-3">
              {Comparative_devos_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
            <div className="w-[53.5%] lg:px-12 px-3">
              {Comparative_papo_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
          </div>
        }
      </nav>
    </header>
  )
}

function Topics({ text }: { text: string }) {
  return (
    <div className="flex items-center min-h-[12vh] md:min-h-[6rem] md:gap-4 gap-4 mt-5">
      <Image src={topic} className={`lg:w-[24px] w-[10px]`} alt="topic" />
      <p className="text-[#5E0616] lg:text-2xl text-md leading-normal font-bold">
        {text}
      </p>
    </div>
  )
}
