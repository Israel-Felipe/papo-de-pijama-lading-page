import Image from 'next/image'
import wallpaper from '/public/images/wallpaper_biblej.png'
import biblej1 from '/public/images/biblej1.png'
import biblej2 from '/public/images/biblej2.png'

export default function Bonus() {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden lg:p-20 h-auto">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:flex-row z-40 max-w-screen-xl w-[90%] lg:w-auto mt-16 lg:mt-0">
        <div className="lg:w-1/2 flex flex-col w-[100%]">
          <Image
            src={biblej1}
            alt="bible jorning images"
            className="w-[85%] z-40 hover:scale-125 hidden lg:block"
          />
          <Image
            src={biblej2}
            alt="bible jorning images"
            className="lg:w-[85%] z-40 lg:hover:scale-125"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col lg:items-end lg:mt-20 mt-6">
          <p
            className="flex justify-center lg:text-end lg:text-6xl text-[2.5rem] lg:leading-normal leading-normal font-bold text-[#E4795B] text-center"
            style={{
              textShadow:
                '0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6',
            }}
          >
            Bônus especial
          </p>

          <p
            className="flex justify-end lg:text-end text-center
          lg:text-4xl text-2xl w-full font-medium leading-normal italic"
          >
            Templates para Bible Journaling
          </p>

          <p
            className="flex justify-center lg:justify-end lg:text-end
          lg:text-[1.7rem] w-[90%] leading-normal mt-10 m-auto lg:m-0 lg:my-10"
          >
            E se junto disso tudo você ainda pudesse expressar os seus estudos
            da bíblia em forma de desenho?
            <br />
            <br />
            Essa é a ideia do Bible Journaling, onde o aprendizado e a
            experiência com os textos bíblicos são transformados em expressões
            artísticas.
            <br />
            <br />
            Para isso, você vai receber de bônus no mínimo 12 templates
            exclusivos criados a partir de nossos estudos para você ter essa
            experiência mesmo se não souber desenhar!
          </p>

          <a
            href="#oferta"
            className="w-full flex items-end lg:justify-end justify-center lg:mt-0 mt-8 mb-8 lg:mb-0"
          >
            <button
              className=" bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133] text-white
              w-[95%] h-16 py-2 px-2 rounded-full
              font-bold lg:text-2xl text-md z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              EU QUERO GARANTIR MEU BÔNUS!
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}
