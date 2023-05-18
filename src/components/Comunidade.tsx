import { motion } from "framer-motion";
import { textTransition, fadeIn, textContainer } from "../utils/Transition";
import Image from "next/image";
import book from "/public/images/old_book.png";

export default function Comunidade() {
  return (
    <motion.header className="relative flex justify-center items-center bg-[#FEF4E6] z-0 overflow-hidden h-[700px]">
      <motion.div
        initial={{ x: "0%", y: "0%", rotate: "0deg" }}
        /* animate={{ x: "20%", y: "-0%", rotate: "-30deg", scale: 1.5 }} */
        transition={{
          duration: 50,
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

      <nav className="flex m-20 z-50 w-full max-w-screen-xl">
        <div className="w-1/2 bg-green-200">
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

        <div className="relative flex items-center -mr-80 w-1/2 bg-red-200"></div>
      </nav>
    </motion.header>
  );
}
