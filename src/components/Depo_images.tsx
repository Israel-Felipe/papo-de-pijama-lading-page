import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import { Depos_content } from "../utils/Contents";
import Image, { StaticImageData } from "next/image";

import foto from "../images/foto-video.png";
import sombra from "../images/sombra.svg";
import wallpaper from "../images/sombra_planta.svg";

export default function DepoImages() {
  return (
    <motion.header className="relative flex flex-col justify-center items-center h-auto bg-[#943A49] z-0 overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 2,
        }}
        className="absolute object-contain"
      >
        <Image
          src={wallpaper}
          className={`w-screen h-auto
          filter opacity-30 blur-[8px]
          }`}
          alt="wallpaper"
        />
      </motion.div>

      <motion.nav className="relative h-auto max-w-screen-xl w-full mt-12 mb-12">
        <motion.div
          initial="hidden"
          whileInView="show"
          variants={fadeIn("right", "spring", 0.4, 1)}
          className="flex justify-around m-auto gap-6"
        >
          {Depos_content.map((content, i) => (
            <BlocsDepos
              image={content.image}
              foto={content.foto}
              name={content.name}
              idade={content.idade}
              cidade={content.cidade}
              key={i}
            />
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          className="relative flex w-full justify-center items-center mt-12 w-[60%] h-auto m-auto z-10"
          variants={textTransition(0.6)}
        >
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[95%] w-[97%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a href="#">
            <button
              className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#E4795B] text-[#751133] active:text-[#FEF4E6] h-24 py-2 px-4 rounded-full font-bold text-[34px] z-10
            transition duration-200 transform hover:scale-110 active:scale-100 w-[780px]"
            >
              QUERO SER UMA TAGARELA!
            </button>
          </a>
        </motion.div>
      </motion.nav>

      <motion.div className="bg-blue-300 w-full"></motion.div>
    </motion.header>
  );
}

function BlocsDepos({
  image,
  foto,
  name,
  idade,
  cidade,
}: {
  image: StaticImageData;
  foto: StaticImageData;
  name: string;
  idade: string;
  cidade: string;
}) {
  return (
    <nav className="relative w-96 h-[550px] w-[800px] bg-white bg-opacity-90 rounded-lg hover:scale-110">
      <Image
        src={image}
        className={`w-full h-auto rounded-lg
          }`}
        alt="depoimento"
      />

      <motion.div
        initial="hidden"
        whileInView="show"
        className="absolute bottom-0 flex gap-4 bg-white bg-opacity-70 w-full p-4 rounded-lg"
        variants={textTransition(0.3)}
      >
        <div>
          <Image
            src={foto}
            className={`w-20 h-auto rounded-full
          }`}
            alt="foto"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="font-medium ">{name}</p>
          <p>{idade}</p>
          <p>{cidade}</p>
        </div>
      </motion.div>
    </nav>
  );
}
