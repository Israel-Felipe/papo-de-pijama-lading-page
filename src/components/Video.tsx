import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import { blocsVideo_content } from "../utils/Contents";
import Image, { StaticImageData } from "next/image";
import sombra from "/public/images/sombra.svg";

export default function Video() {
  return (
    <motion.header className="relative flex justify-center  bg-[#FEF4E6] z-0">
      <nav className="relative w-auto h-auto lg:mt-12 max-w-screen-xl w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="lg:w-3/5 h-auto m-auto"
        >
          <div
            style={{
              position: "relative",
              paddingBottom: "56.25%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube.com/embed/tqorirMBzvg?controls=1"
              title="O segredo do Pijama para a Intimidade com Deus"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:rounded-2xl"
            ></iframe>
          </div>
        </motion.div>

        <div className="relative lg:w-[65%] w-[95%] h-auto m-auto mt-10 z-10">
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
              className=" bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133] w-full lg:h-24 h-16 lg:py-2 px-4 rounded-full text-white font-bold lg:text-3xl text-sm z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              QUERO SER ÍNTIMA DE DEUS NO DIA A DIA!
            </button>
          </a>
        </div>

        <motion.div className="flex justify-around lg:w-3/5 m-auto lg:my-[4.5rem] my-[2rem]">
          {blocsVideo_content.map((content, i) => (
            <Blocs image={content.image} title={content.title} key={i} />
          ))}
        </motion.div>
      </nav>
    </motion.header>
  );
}

function Blocs({ image, title }: { image: StaticImageData; title: string }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={textTransition(0.4)}
      className="gap-6 lg:text-xl text-sm font-medium lg:w-44 w-32"
    >
      <motion.div className="relative flex justify-center">
        <Image
          src={image}
          alt={title}
          className="flex justify-center items-center z-50 lg:w-20 w-14 m-auto"
        />
      </motion.div>

      <motion.div
        variants={textTransition(0.6)}
        className="text-center font-bold"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
