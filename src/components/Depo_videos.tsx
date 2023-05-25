import { motion } from "framer-motion";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper-depo-videos.png";
import balon1 from "/public/images/balon1.svg";
import balon2 from "/public/images/balon2.svg";

export default function DepoVideos() {
  return (
    <motion.header className="relative flex justify-center h-auto z-0 pb-40 bg-[#EC9D74] n">
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

      <motion.nav
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative w-auto h-auto mt-28 max-w-screen-xl text-[44px] font-bold"
      >
        <p
          className="relative flex justify-center text-center
          text-white
          px-8 z-50"
        >
          O que as tagarelas estão falando sobre o
        </p>
        <p
          className="relative flex justify-center text-center
          px-8 z-50 mb-20"
        >
          Método Papo de Pijama
        </p>

        <nav className="flex flex-col gap-32">
          <DepoLeft
            video={"https://www.youtube.com/embed/az02QaBV6zM?controls=0"}
            name={"Renata,"}
            age={"Belo Horizonte - MG"}
            text={`" O papo de pijama veio no momento certo, ele me ajudou a ter mais intimidade com Deus e uma responsabilidade diária de buscar a Deus".`}
          />

          <DepoRigth
            video={"https://www.youtube.com/embed/mo1AwVwqWPo?controls=0"}
            name={"Patricia,"}
            age={"Atlanta, USA"}
            text={`"A Paty é legal e mais coisinhas aqui a ter mais intimidade com Deus e uma responsabilidade diária de buscar a Deus "`}
          />

          <DepoLeft
            video={"https://www.youtube.com/embed/zt9N7rBaVSo?controls=0"}
            name={"Jana,"}
            age={"Joinville - SC"}
            text={`"Cada vez sinto que Deus fala mais e mais de uma forma extraordinário que só fazendo o Papo de Pijama para experimentar" .`}
          />
        </nav>
      </motion.nav>
    </motion.header>
  );
}

function DepoLeft({
  video,
  name,
  age,
  text,
}: {
  video: string;
  name: string;
  age: string;
  text: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={textTransition(0.6)}
      className="flex text-[26px] w-full"
    >
      <motion.div className="relative flex w-auto">
        <iframe
          style={{
            width: "622.2223px",
            height: "350px",
          }}
          src={video}
          name={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-3xl"
        ></iframe>

        <Image
          src={balon1}
          alt={name}
          className="absolute -bottom-20 -right-16 w-52"
        />
        <p className="absolute bottom-12 right-0 text-[20px] -rotate-12 text-white font-bold">
          {name}
        </p>
        <p className="absolute bottom-4 -right-2 text-[20px] -rotate-12 text-white font-normal">
          {age}
        </p>
      </motion.div>

      <motion.div className="flex justify-center items-center text-start font-normal text-[26px] bg-white bg-opacity-50 rounded-r-3xl p-16 -ml-4">
        <motion.h3
          className="ml-4 text-[#323232]"
          variants={textTransition(0.6)}
        >
          {text}
        </motion.h3>
      </motion.div>
    </motion.div>
  );
}

function DepoRigth({
  video,
  name,
  age,
  text,
}: {
  video: string;
  name: string;
  age: string;
  text: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      variants={textTransition(0.4)}
      className="flex text-[26px] w-full gap-20"
    >
      <motion.div className="flex justify-center items-center text-end font-normal text-[26px] bg-white bg-opacity-50 rounded-l-3xl p-16 -mr-24">
        <motion.h3
          className="mr-4 text-[#323232]"
          variants={textTransition(0.6)}
        >
          {text}
        </motion.h3>
      </motion.div>

      <motion.div className="relative flex justify-center w-auto">
        <iframe
          style={{
            width: "622.2223px",
            height: "350px",
          }}
          src={video}
          name={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="rounded-3xl"
        ></iframe>
        <Image
          src={balon2}
          alt={name}
          className="absolute -bottom-20 -left-20 w-52"
        />
        <p className="absolute bottom-10 left-0 text-[20px] rotate-12 text-white font-bold">
          {name}
        </p>
        <p className="absolute bottom-2 -left-2 text-[20px] rotate-12 text-white font-normal">
          {age}
        </p>
      </motion.div>
    </motion.div>
  );
}
