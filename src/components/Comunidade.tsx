import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import Image from "next/image";
import book from "/public/images/old_book.png";
import icon_conversa from "/public/images/icon_conversa.svg";
import icon_note from "/public/images/icon_note.svg";

export default function Comunidade() {
  return (
    <motion.header className="relative flex justify-center items-center bg-[#FEF4E6] z-0 overflow-hidden h-[800px]">
      <motion.div
        initial={{ x: "0%", y: "0%", rotate: "0deg" }}
        animate={{ x: "40%", y: "50%", rotate: "-15deg", scale: 1.2 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute left-0 -top-44 -z-50"
      >
        <Image
          src={book}
          className={`w-[750px] h-auto filter opacity-30 blur-[1px] origin-center transform -rotate-[20deg]
          }`}
          alt="book"
        />
      </motion.div>

      <nav className="flex m-20 z-50 w-full h-full max-w-screen-xl">
        <div className="w-1/2 m-auto">
          <p className=" w-full text-[3rem] font-bold mt-8">
            VOCÊ NÃO PRECISA <br />
            FAZER ISSO SOZINHA!
          </p>
          <p className=" w-full text-[1.5rem] font-medium mt-10">
            Caminhe com mulheres que estão buscando serem mais parecidas com
            Jesus e viver a vontade de Deus no seu dia a dia!
            <br />
            <br />
            No Método Papo de Pijama, além do material de estudo, você também
            terá acesso a:
          </p>
        </div>

        <div className="flex flex-col items-center w-1/2 m-auto gap-16">
          <div className="flex flex-col items-center justify-center w-3/5 gap-2">
            <div className="relative flex justify-center items-center mb-4">
              <Image
                src={icon_conversa}
                alt="conversa"
                className="top-0 left-0 z-50 w-[150px] m-auto lg:m-0"
              />
              <div
                className="absolute w-[200px] h-[200px]
              bg-[#E4AC80] bg-opacity-60 blur-[50.5px]
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              rounded-full -z-40"
              />
            </div>

            <p className="font-bold text-2xl">Comunidade das Tagarelas</p>
            <p className="text-center text-lg">
              Suporte e acompanhamento diário para compartilhar seu dia a dia,
              desafios e alegrias.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center w-3/5 gap-2">
            <div className="relative flex justify-center items-center mb-4">
              <Image
                src={icon_note}
                alt="icon_note"
                className="top-0 left-0 z-50 w-[150px] m-auto lg:m-0"
              />
              <div
                className="absolute w-[200px] h-[200px]
              bg-[#E4AC80] bg-opacity-60 blur-[50.5px]
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              rounded-full -z-40"
              />
            </div>

            <p className="font-bold text-2xl">Encontros do Pijama Ao Vivo</p>
            <p className="text-center text-lg">
              Encontros Ao Vivo para aprofundarmos os estudos bíblicos, orarmos
              juntas e aprender mais sobre o Senhor!
            </p>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
