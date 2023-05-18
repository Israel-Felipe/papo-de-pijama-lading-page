/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import Image from "next/image";
import foto from "/public/images/foto-video.png";
import sombra from "/public/images/sombra.svg";
import ao_vivo from "/public/images/ao_vivo.png";

export default function Ao_vivo() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex justify-center  bg-[#943A49] z-0 p-20"
    >
      <nav className="w-auto h-auto mt-12 max-w-screen-xl w-full text-[#FEF4E6] flex flex-col justify-center items-center">
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="flex justify-center text-center
          text-[42px] font-bold text-[#E4795B]
         "
          style={{ textShadow: "1px 1px #FEF4E6" }}
        >
          ENCONTROS DO PIJAMA AO VIVO
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="flex justify-center text-center
          text-[30px] font-bold w-3/5 leading-lg mt-6"
        >
          Um ambiente para Fortalecer a fé, ser Ouvida, Aprofundar-se e ser
          Encorajada!
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="flex justify-center text-center
          text-[30px] font-medium w-3/4 leading-lg mt-6"
        >
          "que nos animemos uns aos outros por meio da fé que vocês e eu temos”
          Rm 1.12
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="flex justify-center text-start
          text-[22px] w-3/4 leading-lg mt-10"
        >
          Na carta aos Romanos, o Apóstolo Paulo expressa o seu desejo de
          visitá-los e compartilhar os dons espirituais e fortalecer a fé para
          serem animados mutuamente por meio da vivência conjunta da fé.
          <br />
          <br />
          No Método Papo de Pijama, esse compartilhar de vivências e
          experiências acontece em nossos Encontros do Pijama, afinal, não
          usamos o pijama na frente de qualquer pessoa não é? Apenas de pessoas
          íntimas e próximas com quem podemos dividir nossa vida e crescer
          juntas na fé.
        </motion.p>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-3/5 h-auto m-auto mt-16 bg-[#E4795B] p-6  rounded-[3.5rem]"
        >
          <Image
            src={ao_vivo}
            className={`hover:scale-125
          }`}
            alt="encontro on-line"
          />
        </motion.div>

        <div className="relative w-[55%] h-auto m-auto mt-16 z-10">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[90%] w-[95%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a href="#" className="w-full">
            <button
              className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#E4795B] text-[#751133] active:text-[#FEF4E6]
              w-full h-24 py-2 px-4 rounded-full
              font-bold text-[26px] z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              EU QUERO VESTIR O PIJAMA DA INTIMIDADE
            </button>
          </a>
        </div>
      </nav>
    </motion.header>
  );
}
