import React, { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaSpinner } from 'react-icons/fa'
import Image from 'next/image'
import wallpaper from '/public/images/wallpaper_woman.png'

export default function Dia_a_dia() {
  const [isLoaded, setIsLoaded] = useState(false)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })

  useEffect(() => {
    if (inView) {
      setIsLoaded(true)
    }
  }, [inView])

  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:flex-row lg:m-16 z-50 max-w-screen-xl">
        <div className="lg:w-[70%] flex flex-col justify-center items-center lg:items-start">
          <p className=" w-4/5 lg:w-4/5 lg:text-5xl text-3xl lg:leading-tight font-bold mt-8">
            CONHECER PARA FAZER A VONTADE DE DEUS NO DIA A DIA
          </p>
          <p className=" w-4/5 lg:w-[90%] lg:text-[1.4rem] font-medium mt-10">
            Você já conseguiu estudar com profundidade no mínimo 52 temas
            bíblicos?
            <br />
            <br />
            Como seria seu crescimento na fé se você conseguisse absorver e
            guardar no coração o que o Senhor tem para te ensinar?
            <br />
            <br />
            Por muitas vezes, fiz meus devocionais com superficialidade sem
            gravar ou aprofundar temas importantíssimos para a minha vida com o
            Senhor.
            <br />
            <br />
            Para fazermos a Vontade do Senhor, é necessário aprendemos a ouvir a
            sua voz por meio da sua Palavra!
            <br />
            <br />
            Mas com o método Papo de Pijama, pude além de estudar com
            profundidade temas centrais da fé e do cotidiano da minha vida,
            gravar em meu coração e experimentar o agir de Deus ouvindo sua voz
            para além do devocional!
            <br />
            <br />
            Um dos pilares importantes do método Papo de Pijama é te conduzir
            nessa jornada por meio dos nossos materiais exclusivos que seguem
            uma metologia que aprofunda os temas bíblicos ao longo de sua
            semana.
          </p>
        </div>

        <div
          ref={ref}
          className="flex items-center justify-center mt-8 lg:mt-0 lg:w-[30%]"
        >
          {!isLoaded && (
            <div className="flex flex-col items-center justify-center w-full h-full">
              <span className="text-3xl text-gray-500 mb-4">Carregando...</span>
              <FaSpinner
                className="animate-spin text-gray-500 mt-6"
                size={40}
              />
            </div>
          )}
          {isLoaded && (
            <iframe
              src="https://player.vimeo.com/video/830669354?h=9d2f66a051&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              title="video-celular"
              className="rounded-[13%] w-auto h-[613.333px]"
            ></iframe>
          )}
        </div>
      </nav>
      <a
        href="https://pay.hotmart.com/H82747095C?off=gjb2hj2p"
        target="_blank"
        className="w-full max-w-screen-xl flex justify-center items-center mt-10 lg:mt-0 z-50"
      >
        <button
          className="w-4/5 lg:h-24 h-20 py-2 px-4 rounded-full 
          bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133]
          text-[#751133] hover:text-white active:text-white
          font-bold lg:text-4xl text-lg z-10
          transition duration-200 transform hover:scale-110 active:scale-100 mb-10"
        >
          EU QUERO VIVER A VONTADE DE DEUS!
        </button>
      </a>
    </header>
  )
}
