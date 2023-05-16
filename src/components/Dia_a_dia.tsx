import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "../images/wallpaper_woman.png";
import celular from "../images/celular.png";

export default function Dia_a_dia() {
  return (
    <motion.header className="relative flex justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 2,
        }}
        className="absolute "
      >
        <Image
          src={wallpaper}
          className={`w-screen filter opacity-30`}
          alt="wallpaper"
        />
      </motion.div>

      <nav className="flex m-20 z-50 max-w-screen-xl">
        <div className="w-3/5">
          <p className=" w-[70%] text-[48px] font-bold mt-16">
            CONHECENDO
            <br />E FAZENDO A VONTADE DO PAI NO SEU DIA A DIA
          </p>
          <p className=" w-[95%] text-[26px] font-medium mt-16">
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

        <div className="flex justify-center items-center -mr-48">
          <Image src={celular} className={`w-[750px]`} alt="celular" />
        </div>
      </nav>
    </motion.header>
  );
}
