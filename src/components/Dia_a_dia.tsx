import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FaSpinner } from "react-icons/fa";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper_woman.png";

export default function Dia_a_dia() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsLoaded(true);
    }
  }, [inView]);

  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden pb-10">
      <div className="absolute">
        <Image
          src={wallpaper}
          className={`w-screen hidden lg:block filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:flex-row lg:m-20 z-50 max-w-screen-xl lg:ml-40">
        <div className="lg:w-3/4 flex flex-col justify-center items-center lg:items-start">
          <p className=" w-4/5 lg:w-1/2 lg:text-5xl text-3xl lg:leading-tight font-bold mt-8">
            CONHECENDO E FAZENDO A VONTADE DO PAI NO SEU DIA A DIA
          </p>
          <p className=" w-4/5 lg:text-[1.5rem] font-medium mt-10">
            Toda semana você terá acesso a um estudo temático para meditar ao
            longo dos 7 passos descritos acima!
            <br />
            <br />
            Dessa forma, você vai conseguir estudar com profundidade e
            praticidade um tema específico da vida cristã e seus desafios
            diários a partir da palavra de Deus.
            <br />
            <br />E mais do que isso! Você vai conseguir aplicar e testemunhar a
            transformação do Pai no seu dia a dia.
          </p>
        </div>

        <div
          ref={ref}
          className="flex items-center justify-center mt-8 lg:mt-0 w-auto"
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
          transition duration-200 transform hover:scale-110 active:scale-100"
        >
          EU QUERO VIVER A VONTADE DE DEUS!
        </button>
      </a>
    </header>
  );
}
