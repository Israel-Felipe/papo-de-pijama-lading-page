import { Depos_content } from '../utils/Contents'
import Image, { StaticImageData } from 'next/image'

import sombra from '/public/images/sombra.svg'
import wallpaper from '/public/images/sombra_planta.png'

export default function DepoImages() {
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

      <nav className="relative h-auto max-w-screen-xl w-full mt-14 mb-12">
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

        <div className="relative flex w-full justify-center items-center mt-12 w-2/3 h-auto m-auto z-40">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[95%] lg:w-[96%] w-[85%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a href="#oferta" className="w-full flex justify-center">
            <button
              className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#E4795B] text-[#751133] active:text-[#FEF4E6] lg:h-24 h-16 py-2 px-4 rounded-full font-bold lg:text-4xl text-md z-10
            transition duration-200 transform hover:scale-110 active:scale-100 lg:w-full w-[90%]"
            >
              QUERO SER UMA TAGARELA!
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}

function BlocsDepos({
  image,
  name,
  idade,
  cidade,
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
