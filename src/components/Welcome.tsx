import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import { topicsWelcome_content } from "../utils/Contents";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper-folhas2.png";
import logo from "/public/images/logo.png";

export default function Welcome() {
  return (
    <motion.header className="relative flex justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 2,
        }}
        className="absolute lg:-top-40"
      >
        <Image
          src={wallpaper}
          className={`lg:w-screen w-auto lg:h-auto h-[40rem] filter opacity-30 blur-[8px]`}
          alt="wallpaper"
        />
      </motion.div>

      <motion.header
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        variants={textTransition(0.4)}
        className="relative w-auto h-auto mt-10 lg:mt-20 max-w-screen-xl"
      >
        <Image
          src={logo}
          className={`lg:w-60 w-32 h-auto m-auto
          }`}
          alt="logo"
        />
        <motion.p
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="relative flex justify-center text-center
          lg:text-4xl text-[1.2rem] font-bold
        px-8 sm:px-16 md:px-12 leading-[2rem] lg:leading-[3.5rem] z-50 lg:mt-16 mt-6"
        >
          Entenda como é possível desfrutar intimidade com Deus no dia a dia e
          ser uma mulher segundo a vontade do Pai.
        </motion.p>

        <motion.p
          variants={fadeIn("left", "tween", 0.4, 1)}
          className="relative flex justify-center text-center
          lg:text-3xl text-lg font-bold text-[#943A49]
        px-8 sm:px-16 md:px-12 z-50 mt-6"
        >
          Assistindo a aula introdutória você vai aprender 3 coisas:
        </motion.p>

        <nav className="lg:my-[6.5rem] my-8 px-6">
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
      className="flex lg:mt-10 mt-8 gap-4 items-center justify-start lg:text-2xl text-sm font-medium"
    >
      <div className="flex justify-center items-center rounded-full text-center border border-[#751133]">
        <h1 className="flex items-center justify-center lg:text-lg lg:w-10 lg:h-10 w-6 h-6">
          {number}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="flex items-center justify-center">{text}</h1>
      </div>
    </motion.div>
  );
}

function WallpaperImage({ className }: { className?: string }) {
  return (
    <Image
      src={wallpaper}
      className={`lg:w-screen w-full h-auto filter opacity-30 blur-[8px] ${className}`}
      alt="wallpaper"
    />
  );
}
