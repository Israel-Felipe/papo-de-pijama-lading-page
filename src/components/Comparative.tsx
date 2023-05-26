import { motion } from "framer-motion";
import {
  Comparative_devos_content,
  Comparative_papo_content,
} from "../utils/Contents";
import Image from "next/image";
import flor from "/public/images/flor.png";
import topic from "/public/images/topic.svg";
import faixa from "/public/images/faixa.svg";

export default function Comparative() {
  return (
    <header className="relative flex justify-center h-auto bg-[#FEF4E6] z-0 lg:py-16 py-8 overflow-hidden">
      <motion.div
        initial={{ x: "0%", y: "0%", rotate: "0deg" }}
        animate={{ x: "100%", y: "-20%", rotate: "30deg", scale: 1.5 }}
        transition={{
          duration: 50,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute lg:left-44 lg:bottom-20 -left-96 -z-50"
      >
        <Image
          src={flor}
          className={`w-[500px] h-auto
          }`}
          alt="flor"
        />
      </motion.div>

      <nav className="relative bg-[#F8F0E7] bg-opacity-80 lg:w-3/5 w-screen rounded-3xl lg:py-[50px]">
        <Image
          src={faixa}
          className={`absolute h-24 w-auto -right-[4.7rem] top-20 hidden lg:block
          }`}
          alt="faixa"
        />
        <Image
          src={faixa}
          className={`absolute h-24 w-auto -left-[4.7rem] top-20 scale-x-[-1] hidden lg:block
          }`}
          alt="faixa"
        />
        <div className="bg-[#E4795B] w-full lg:h-24 h-12 flex justify-around items-center">
          <div className=" w-[40%]">
            <p className="font-bold lg:text-3xl text-md text-center">
              DEVOCIONAIS
            </p>
          </div>
          <div className="bg-[#943A49] rounded-full lg:w-40 lg:h-40 w-16 h-16 flex items-center justify-center z-50">
            <p className="font-black lg:text-5xl text-white">VS</p>
          </div>
          <div className=" w-[40%]">
            <p className="font-bold lg:text-3xl text-md text-center">
              PAPO DE PIJAMA
            </p>
          </div>
        </div>

        {
          <div className="w-full h-auto flex pb-6">
            <div className="w-1/2 border-r border-[#D4B095] lg:px-12 px-4">
              {Comparative_devos_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
            <div className="w-1/2 border-l border-[#D4B095] lg:px-12 px-4">
              {Comparative_papo_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
          </div>
        }
      </nav>
    </header>
  );
}

function Topics({ text }: { text: string }) {
  return (
    <div className="flex items-center min-h-[5rem] lg:gap-6 gap-4 mt-3">
      <Image src={topic} className={`lg:w-[24px] w-[16px]`} alt="topic" />
      <p className="text-[#323232] lg:text-[1.25rem] text-[0.8rem] leading-normal">
        {text}
      </p>
    </div>
  );
}
