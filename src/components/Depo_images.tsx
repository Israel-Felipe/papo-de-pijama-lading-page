import { Depos_content } from '../utils/Contents'
import Image, { StaticImageData } from 'next/image'

import sombra from '/public/images/sombra.svg'
import wallpaper from '/public/images/sombra_planta.png'

interface DepoImages {
  handleOferta: () => void
}

export const Depo_images: React.FC<DepoImages> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col justify-center items-center h-auto bg-[#943A49] z-0 overflow-hidden">
      <div className="absolute object-contain">
        <Image
          src={wallpaper}
          className={`w-screen h-auto hidden lg:block
          filter opacity-30 blur-[8px]
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative h-auto max-w-screen-xl w-full mb-12 px-16">
        <p className="lg:text-4xl text-3xl lg:leading-tight font-bold text-center mt-20 mb-10 text-[#FFF]">
          O que estão falando sobre o Devocional
        </p>
        <div className="flex flex-col lg:flex-row justify-around items-center m-auto lg:gap-6 gap-14 px-6 lg:px-0 w-[90%]">
          {Depos_content.map((content, i) => (
            <BlocsDepos
              image={content.image}
              name={content.name}
              idade={content.idade}
              cidade={content.cidade}
              key={i}
            />
          ))}
        </div>

        <div className="relative flex justify-center items-center mt-12 h-auto m-auto z-40">
          <button
            onClick={handleOferta}
            className=" bg-[#FEF4E6] text-[#751133] hover:bg-[#E4AC80] active:bg-[#E4795B] lg:h-24 h-20 py-2 px-20 rounded-full font-bold lg:text-3xl text-lg z-10 transition duration-200 transform hover:scale-105 active:scale-100 mb-8"
            style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
          >
            Eu preciso desse Plano Semanal Estruturado
          </button>
        </div>
      </nav>
    </header>
  )
}

function BlocsDepos({
  image,
}: {
  image: StaticImageData
  name: string
  idade: string
  cidade: string
}) {
  return (
    <nav className="relative w-auto h-[100%] lg:hover:scale-110">
      <Image
        src={image}
        className={`w-full h-auto rounded-lg`}
        alt="depoimento"
      />

      {/*  <div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="absolute bottom-0 flex gap-4 bg-white bg-opacity-70 w-full p-4 rounded-lg"
        variants={textTransition(0.6)}
      >
        <div>
          <Image
            src={foto}
            className={`w-20 h-auto rounded-full
          }`}
            alt="foto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-medium ">{name}</p>
          <p>{idade}</p>
          <p>{cidade}</p>
        </div>
      </div> */}
    </nav>
  )
}
