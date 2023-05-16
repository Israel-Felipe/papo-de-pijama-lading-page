import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import { topicsWelcome_content } from "../utils/Contents";
import Image from "next/image";
import wallpaper from "../images/wallpaper-folhas2.png";
import logo from "../images/logo.png";

export default function Welcome() {
  return (
    <motion.header className="relative flex justify-center ">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 2,
        }}
        className="absolute -top-40"
      >
        <Image
          src={wallpaper}
          className={`w-screen h-auto 
          filter opacity-30 blur-[8px]
          }`}
          alt="wallpaper"
        />
      </motion.div>

      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textTransition(0.4)}
        className="relative w-auto h-auto mt-32 lg:mt-20 max-w-screen-xl"
      >
        <Image
          src={logo}
          className={`w-60 h-auto m-auto
          }`}
          alt="logo"
        />
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="relative flex justify-center text-center
          text-[38px] font-bold
        px-8 sm:px-16 md:px-12 md:leading-[52px] z-50 mt-16"
        >
          Entenda como é possível desfrutar intimidade com Deus no dia a dia e
          ser uma mulher segundo a vontade do Pai.
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="relative flex justify-center text-center
          text-[30px] font-bold text-[#943A49]
        px-8 sm:px-16 md:px-12 md:leading-[52px] z-50 mt-10"
        >
          Assistindo a aula introdutória você vai aprender 3 coisas:
        </motion.p>

        <nav className="my-[6.5rem]">
          {topicsWelcome_content.map((content, i) => (
            <Topics number={content.number} text={content.text} key={i} />
          ))}
        </nav>
      </motion.header>
    </motion.header>
  );
}

function Topics({ number, text }: { number: string; text: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={textTransition(0.6)}
      className="flex mt-10 gap-6 items-center justify-start text-[26px] font-medium"
    >
      <div className="flex justify-center items-center rounded-full text-center w-10 h-10 border border-[#751133]">
        <h1 className="flex items-center justify-center text-[14px]">
          {number}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="flex items-center justify-center">{text}</h1>
      </div>
    </motion.div>
  );
}
