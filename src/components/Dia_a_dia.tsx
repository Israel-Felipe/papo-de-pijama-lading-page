import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper_woman.png";
import celular from "/public/images/celular.png";

export default function Dia_a_dia() {
  return (
    <motion.header className="relative flex flex-col items-center justify-center overflow-hidden pb-10">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 2,
        }}
        className="absolute"
      >
        <Image
          src={wallpaper}
          className={`w-screen filter opacity-20`}
          alt="wallpaper"
        />
      </motion.div>

      <nav className="flex m-20 z-50 max-w-screen-xl">
        <div className="w-2/3">
          <p className=" w-full text-[3rem] font-bold mt-8">
            CONHECENDO
            <br />E FAZENDO A <br />
            VONTADE DO PAI
            <br /> NO SEU DIA A DIA
          </p>
          <p className=" w-full text-[1.5rem] font-medium mt-10">
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

        <div className="relative flex items-center -mr-80 w-2/3">
          <Image
            src={celular}
            className={`absolute top-10 left-16 w-2/3`}
            alt="celular"
          />
          <div className="w-[400px] h-[98%] absolute top-14 left-10 rounded-[5rem] overflow-hidden -z-10">
            <iframe
              src="https://player.vimeo.com/video/827673289?h=0eb6e6a68c&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;player_id=0&amp;app_id=58479"
              width="100%"
              height="100%"
              title="video_celular"
            ></iframe>
          </div>
        </div>
      </nav>
      <a
        href="#"
        className="w-full max-w-screen-xl flex justify-center items-center mt-10 z-50"
      >
        <button
          className="w-4/5 h-24 py-2 px-4 rounded-full 
          bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133]
          text-[#751133] hover:text-white active:text-white
          font-bold text-[36px] z-10
          transition duration-200 transform hover:scale-110 active:scale-100"
        >
          EU QUERO VIVER A VONTADE DE DEUS
        </button>
      </a>
    </motion.header>
  );
}
