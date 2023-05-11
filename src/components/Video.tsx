import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import { blocsVideo_content } from "../utils/Contents";
import Image, { StaticImageData } from "next/image";
import foto from "../images/foto-video.png";
import sombra from "../images/sombra.svg";

export default function Video() {
  return (
    <motion.header className="relative flex justify-center h-screen bg-[#FEF4E6] z-0">
      <nav className="relative w-auto h-auto mt-12 max-w-screen-xl w-full">
        <motion.div
          initial="hidden"
          whileInView="show"
          className="w-3/5 h-auto m-auto"
        >
          <Image
            src={foto}
            className={`w-screen h-auto
          }`}
            alt="wallpaper"
          />
          {/* <div style={{ position: "relative", paddingBottom: "56.25%" }}>
            <iframe
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
              }}
              src="https://www.youtube-nocookie.com/embed/wh5fqGcKn98"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
          </div> */}
        </motion.div>

        <div className="relative w-[65%] h-auto m-auto mt-10 z-10">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-20 w-[97%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a href="#">
            <button
              className=" bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133] w-full h-24 py-2 px-4 rounded-full text-white font-bold text-[26px] z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              QUERO SER ÍNTIMA DE DEUS NO DIA A DIA!
            </button>
          </a>
        </div>

        <motion.div className="flex justify-around w-3/5 m-auto mt-16">
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
      variants={textTransition(0.4)}
      className="gap-6 items-center justify-center text-[26px] font-medium w-44"
    >
      <motion.div
        variants={textTransition(0.2)}
        className="relative flex justify-center"
      >
        <Image
          src={image}
          alt={title}
          className="flex justify-center items-center z-50 w-20 m-auto lg:m-0"
        />
      </motion.div>

      <motion.div
        variants={textTransition(0.6)}
        className="flex justify-center items-center text-center font-bold text-[20px]"
      >
        {title}
      </motion.div>
    </motion.div>
  );
}
