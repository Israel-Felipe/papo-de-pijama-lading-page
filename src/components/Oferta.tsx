/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import Image from "next/image";
import sombra from "/public/images/sombra.svg";
import ao_vivo from "/public/images/ao_vivo.png";

export default function Oferta() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex justify-center bg-gradient-to-br from-[#EBA695] via-[#E4795B] to-[#E4795B] z-0 p-20"
    >
      <nav className="w-auto h-auto mt-12 max-w-screen-xl w-full text-[#FEF4E6] flex flex-col justify-center items-center">
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="flex justify-center text-center
          text-[42px] font-bold text-[#FEF4E6]
         "
          style={{
            textShadow:
              "0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133",
          }}
        >
          O QUE VOCÊ VAI TER ACESSO?
        </motion.p>

        <div className="bg-[#751133] w-1/2 h-auto rounded-3xl mt-10 flex flex-col p-12 justify-center items-center">
          <ul className="list-disc ml-4 text-2xl font-medium leading-9">
            <li>
              Estudo semanal com a metodologia Papo de Pijama, totalizando 52
              temas bíblicos e 365 estudos!
            </li>
            <li>Encontros do Pijama Ao Vivo</li>
            <li>Comunidade das Tagarelas no Whats</li>
            <li>Aulas gravadas na plataforma</li>
            <li>Bônus - Templates para Bible Journaling</li>
            <li>Bônus - Adesivos exclusivos</li>
            <li>1 ano de acesso!</li>
          </ul>

          <div className="flex items-center justify-center font-bold gap-2 mt-6">
            <p>de:</p>
            <div className="relative">
              <p className="text-[#EF4123] text-4xl">R$ 497,00</p>
              <div className="absolute w-[105%] h-1 bg-[#E4795B] transform -rotate-[5deg] top-1/2 left-0 right-0 rounded-full"></div>
            </div>
          </div>

          <div className="flex items-center justify-center font-bold gap-2 mt-2">
            <p className="text-2xl">12x</p>
            <div className="relative">
              <p className="text-[#F8F0E7] text-5xl">R$ 34,83</p>
            </div>
          </div>

          <div className="flex items-center justify-center font-bold gap-2 mt-1">
            <p className="text-xl">OU R$ 347,00 À VISTA</p>
          </div>
        </div>

        <div className="relative w-[55%] h-auto m-auto mt-10 z-10">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[90%] w-[95%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a
            href="https://pay.hotmart.com/H82747095C?off=gjb2hj2p"
            className="w-full"
          >
            <button
              className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#751133] text-[#751133] active:text-[#FEF4E6]
              w-full h-24 py-2 px-4 rounded-full
              font-bold  text-[26px] z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              EU QUERO TER ACESSO AO PAPO DE PIJAMA!
            </button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
