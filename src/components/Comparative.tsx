import { motion } from "framer-motion";
import { textTransition } from "../utils/Transition";
import {
  Comparative_devos_content,
  Comparative_papo_content,
} from "../utils/Contents";
import Image from "next/image";
import flor from "../images/flor.png";
import topic from "../images/topic.svg";
import faixa from "../images/faixa.svg";

export default function Comparative() {
  return (
    <motion.header className="relative flex justify-center h-[1000px] bg-[#FEF4E6] z-0 mt-[500px] p-[100px]">
      <motion.div
        initial={{ x: "0%", rotate: "0deg" }}
        animate={{ x: "75%", rotate: "-20deg", scale: 1.5 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute left-44 bottom-10 -z-50"
      >
        <Image
          src={flor}
          className={`w-[500px] h-auto
          }`}
          alt="flor"
        />
      </motion.div>
      <nav className="relative bg-[#F8F0E7] bg-opacity-80 w-3/5 rounded-3xl py-[50px]">
        <Image
          src={faixa}
          className={`absolute h-[100px] w-auto -right-[4.7rem] top-20
          }`}
          alt="faixa"
        />
        <Image
          src={faixa}
          className={`absolute h-[100px] w-auto -left-[4.7rem] top-20 scale-x-[-1]
          }`}
          alt="faixa"
        />
        <div className="bg-[#E4795B] w-full h-[100px] flex justify-around items-center">
          <div className=" w-[40%]">
            <p className="font-bold text-[28px] text-center">DEVOCIONAIS</p>
          </div>
          <div className="bg-[#943A49] rounded-full w-[140px] h-[140px] flex items-center justify-center z-50">
            <p className="font-black text-[46px] text-white">VS</p>
          </div>
          <div className=" w-[40%]">
            <p className="font-bold text-[28px] text-center">PAPO DE PIJAMA</p>
          </div>
        </div>

        {
          <div className="w-full h-[90%] flex">
            <div className="w-1/2 border-r border-[#D4B095] px-12">
              {Comparative_devos_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
            <div className="w-1/2 border-l border-[#D4B095] px-12">
              {Comparative_papo_content.map((content, i) => (
                <Topics text={content.text} key={i} />
              ))}
            </div>
          </div>
        }
      </nav>
    </motion.header>
  );
}

function Topics({ text }: { text: string }) {
  return (
    <div className="flex items-center h-28 gap-6 mt-3">
      <Image src={topic} className={`w-[24px]`} alt="topic" />
      <p className="text-[#323232] text-[24px]">{text}</p>
    </div>
  );
}
