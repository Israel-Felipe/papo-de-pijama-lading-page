import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper_biblej.png";
import biblej1 from "/public/images/biblej1.png";
import biblej2 from "/public/images/biblej2.png";

export default function Bonus() {
  return (
    <motion.header className="relative flex flex-col justify-center items-center overflow-hidden p-20 h-auto">
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

      <nav className="flex z-50 max-w-screen-xl">
        <div className="w-1/2">
          <Image
            src={biblej1}
            alt="bible jorning images"
            className="w-[85%] top-0 left-0 z-50 m-auto lg:m-0 hover:scale-125"
          />
          <Image
            src={biblej2}
            alt="bible jorning images"
            className="w-[85%] top-0 left-0 z-50 m-auto lg:m-0 hover:scale-125"
          />
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="w-1/2 flex flex-col items-end mt-20"
        >
          <motion.p
            variants={fadeIn("right", "spring", 0.4, 1)}
            className="flex justify-center text-end text-[52px] font-bold text-[#E4795B]"
            style={{
              textShadow:
                "0px 0px 5px #FEF4E6, 0px 0px 5px #FEF4E6, 0px 0px 5px #FEF4E6, 0px 0px 5px #FEF4E6",
            }}
          >
            Bônus especial
          </motion.p>

          <motion.p
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="flex justify-center text-end
          text-[38px] w-4/5 font-medium leading-lg italic"
          >
            Templates para Bible Journaling
          </motion.p>

          <motion.p
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="flex justify-center text-end
          text-[26px] w-full leading-lg mt-10"
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
            Para isso, você vai receber de bônus ao 12 templates exclusivos
            criados a partir de nossos estudos para você ter essa experiência
            mesmo se não souber desenhar!
          </motion.p>

          <a href="#" className="w-full flex items-end justify-end mt-16">
            <button
              className=" bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133] text-white
              w-[90%] h-16 py-2 px-4 rounded-full
              font-bold text-2xl z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              EU QUERO GARANTIR MEU BÔNUS!
            </button>
          </a>
        </motion.div>
      </nav>
    </motion.header>
  );
}
