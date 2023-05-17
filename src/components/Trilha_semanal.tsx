import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "/public/images/sombra_trilha.png";
import trilha from "/public/images/trilha.png";

export default function Trilha_semanal() {
  return (
    <motion.header className="relative flex justify-center overflow-hidden">
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
          className={`w-screen h-auto
          }`}
          alt="wallpaper"
        />
      </motion.div>

      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textTransition(0.4)}
        className="relative w-auto h-auto mt-20 max-w-screen-xl"
      >
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="relative flex justify-center text-center
          text-[48px] font-bold
        px-8 leading-[52px] z-50 mt-16"
        >
          Um plano diário profundo, simples e prático
        </motion.p>

        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="relative flex justify-start text-start
          text-[30px] font-medium text-[#943A49]
        px-8 sm:px-16 md:px-12 md:leading-[46px] z-50 mt-16 tracking-[0.02em]"
        >
          Com o método Papo de Pijama você tem uma trilha semanal para
          aprofundar um tema bíblico ao longo da sua semana de forma simples,
          prática e profunda!
        </motion.p>
        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="relative flex justify-start text-start
          text-[30px] font-medium text-[#943A49]
        px-8 sm:px-16 md:px-12 md:leading-[46px] z-50 mt-10 tracking-[0.02em]"
        >
          O tema bíblico da semana possui 7 passos importantes distribuídos ao
          longo da sua semana:
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 100 }}
          transition={{
            duration: 2,
          }}
          className=""
        >
          <Image
            src={trilha}
            className={`w-[90%] h-auto m-auto my-16
          }`}
            alt="trilha"
          />
        </motion.div>
      </motion.header>
    </motion.header>
  );
}
