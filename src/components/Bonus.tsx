import Image from 'next/image'
import wallpaper from '/public/images/wallpaper_biblej.png'
import biblej1 from '/public/images/biblej1.png'
import biblej2 from '/public/images/biblej2.png'

interface BonusProps {
  handleOferta: () => void
}

export const Bonus: React.FC<BonusProps> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden lg:p-20 h-auto">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:flex-row z-40 max-w-screen-xl w-[85%] lg:w-auto mt-16 lg:mt-0">
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
            className="flex justify-center lg:text-end lg:text-6xl text-[2.5rem] lg:leading-normal leading-normal font-bold text-[#E98D2A] text-center"
            style={{
              textShadow:
                '0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6, 0px 0px 4px #FEF4E6',
            }}
          >
            Bônus especial
          </p>

          <p
            className="flex justify-center md:justify-end lg:text-end text-center
          lg:text-4xl text-2xl w-full font-medium leading-normal italic"
          >
            Templates para Bible Journaling
          </p>

          <p
            className="flex justify-center lg:justify-end lg:text-end text-justify md:text-start
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

          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSUsihoGbCTTMQ3zAChvks3_Q7UIkRkOrI5En3_Gdx0o_J2w/viewform"
            className="w-full flex items-end lg:justify-end justify-center lg:mt-0 mt-8 mb-14 lg:mb-0"
          > */}
          <button
            onClick={handleOferta}
            className="bg-[#E98D2A] hover:bg-[#F2A644] active:bg-[#D27920] text-[#FFFFFF]
                h-14 py-2 px-4 rounded-full
                font-bold text-lg lg:text-xl z-10
              transition duration-200 transform hover:scale-105 active:scale-95"
            onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow = 'none')
            }
            onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
              (e.currentTarget.style.boxShadow =
                '-4px 7px 4px 0px rgba(94, 6, 22, 0.6)')
            }
          >
            QUERO GARANTIR MEU BÔNUS!
          </button>
          {/* </a> */}
        </div>
      </nav>
    </header>
  )
}
