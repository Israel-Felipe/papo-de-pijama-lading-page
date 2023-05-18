import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper_quemsou.png";
import foto from "/public/images/foto_paola.jpg";

export default function Quemsou() {
  return (
    <motion.header className="relative flex flex-col justify-center items-center overflow-hidden p-36 h-auto">
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
          className={`w-screen filter opacity-30`}
          alt="wallpaper"
        />
      </motion.div>

      <nav className="flex items-center justify-center z-50 max-w-screen-xl">
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-4/5 h-auto m-auto bg-[#E4795B] p-2 rounded-[3.5rem]">
            <Image
              src={foto}
              alt="Paola Muehlbauer"
              className="rounded-[3.5rem]"
            />
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-1/2 flex flex-col items-start"
        >
          <motion.p
            variants={fadeIn("right", "spring", 0.4, 1)}
            className="flex justify-center text-start text-[2.7rem] font-bold text-[#E4795B]"
          >
            Quem é a Paola Milbauer?
          </motion.p>

          <motion.p
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="flex justify-center text-start
          text-[1.4rem] w-full mt-8 font-medium leading-9"
          >
            Muito prazer! Eu sou a Paola Milbauer, cristã por redenção e teóloga
            por formação!
            <br />
            <br />
            Cresci na igreja mas por muito tempo minha fé se resumiu a uma lista
            de obrigações e religiosidade. Mas, em Sua graça e misericórdia, o
            Senhor tem me ensinado a vestir o pijama de filha e desfrutar de
            intimidade com Ele - uma intimidade real que vai além de uma lista
            de obrigações e envolve todo o nosso ser!
            <br />
            <br />
            Desde 2020, ao final da minha faculdade de teologia, o Senhor tem me
            impulsionado a conduzir mulheres para um encontro de pijama com Ele
            e umas com as outras por meio do Ministério Papo de Pijama, das
            ministrações itinerantes em retiros e eventos para mulheres nas mais
            diversas cidades do Brasil e também em meus canais na internet!
          </motion.p>
        </motion.div>
      </nav>
    </motion.header>
  );
}
