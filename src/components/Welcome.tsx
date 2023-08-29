import wallpaper from '/public/images/wallpaper-folhas2.png'
import logo from '/public/images/logo.png'
import garantia from '/public/images/garantias.svg'
import pagamento from '/public/images/pagamentos.svg'
import Image from 'next/image'
import { useState } from 'react'

interface WelcomeProps {
  handleOferta: () => void
}

export const Welcome: React.FC<WelcomeProps> = ({ handleOferta }) => {
  const [showButton, setShowButton] = useState(false)

  const handleVideoPlay = () => {
    setTimeout(() => {
      setShowButton(true)
    }, 10000)
  }

  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-30 blur-[8px]`}
          alt="wallpaper"
        />
      </div>

      <header className="relative w-auto h-auto mt-10 lg:mt-10 max-w-screen-xl flex flex-col items-center w-[70%]">
        <Image
          src={logo}
          className={`lg:w-44 w-32 h-auto m-auto
          }`}
          alt="logo"
        />
        <p
          className="relative flex justify-center text-center
          lg:text-[2.2rem] text-[1.2rem] font-[600]
        leading-[2rem] lg:leading-[3rem] z-40 lg:mt-4 mt-6 max-w-[90%]"
        >
          Deus está presente em todos os lugares.
          <br />
          Porque temos dificuldades de enxergá-lo no dia a dia?
        </p>

        <p className="relative text-center lg:text-[1.7rem] lg:leading-[2.6rem] text-md font-medium text-[#943A49] px-8 sm:px-16 md:px-12 z-40 mt-6 max-w-[95%]">
          <u>Assista a vídeo aula</u> para entender como desenvolver{' '}
          <b>intimidade com Deus no seu dia a dia</b>, para crescer na fé e
          experimentar a presença de Deus diariamente através do{' '}
          <b>paradigma do pijama</b>.
        </p>
      </header>

      <nav className="relative w-full h-auto max-w-screen-xl my-[3rem]">
        <div className="lg:w-3/5 h-auto m-auto">
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                boxShadow: '0px 9px 21px -10px rgba(0, 0, 0, 0.678)',
              }}
              src="https://www.youtube.com/embed/iv8EnSe4oT4"
              title="O segredo do Pijama para a Intimidade com Deus"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:rounded-md"
              onLoad={handleVideoPlay}
            ></iframe>
          </div>
        </div>
        <a
          className={`full max-w-screen-xl flex justify-center items-center mt-16 z-40 
          }`}
        >
          <button
            onClick={handleOferta}
            className="lg:h-24 h-20 py-2 px-20 rounded-full 
             bg-[#751133] hover:bg-[#943a49] active:bg-[#751133]
             text-white hover:text-white active:text-white
             font-bold lg:text-3xl text-lg z-10
             transition duration-200 transform hover:scale-105 active:scale-100 mb-8"
            style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
          >
            EU QUERO VIVENCIAR O PARADIGMA DO PIJAMA
          </button>
        </a>
        <div className="flex flex-col justify-center items-center">
          <Image src={pagamento} className={`w-[40%] mb-4`} alt="pagamento" />
          <Image src={garantia} className={`w-[35%] `} alt="garantia" />
        </div>
      </nav>
    </header>
  )
}

/* className="lg:h-24 h-20 py-2 px-10 rounded-full 
             bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133]
             text-[#751133] hover:text-white active:text-white
             font-bold lg:text-3xl text-lg z-10
             transition duration-200 transform hover:scale-105 active:scale-100 mb-8" */
