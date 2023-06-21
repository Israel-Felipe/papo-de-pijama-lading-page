import { motion } from 'framer-motion'
import Image from 'next/image'
import book from '/public/images/old_book.png'
import icon_conversa from '/public/images/icon_conversa.svg'
import icon_note from '/public/images/icon_note.png'

export default function Comunidade() {
  return (
    <motion.header className="relative flex justify-center items-center bg-[#FEF4E6] z-0 overflow-hidden">
      <motion.div
        initial={{ x: '0%', y: '0%', rotate: '0deg' }}
        animate={{ x: '40%', y: '50%', rotate: '-15deg', scale: 1.2 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          repeatType: 'reverse',
        }}
        className="absolute left-0 lg:-top-44 -top-20 -z-40"
      >
        <Image
          src={book}
          className={`w-[750px] h-auto filter opacity-30 blur-[1px] origin-center transform -rotate-[20deg]
          }`}
          alt="book"
        />
      </motion.div>

      <nav className="flex flex-col lg:flex-row lg:m-20 z-40 w-full h-full max-w-screen-xl">
        <div className="lg:w-1/2 w-4/5 m-auto">
          <p className="lg:w-[95%] lg:text-[3rem] text-[2rem] font-bold lg:mt-8 mt-14 text-center lg:text-start">
            SOZINHA VOCÊ NÃO VAI TÃO LONGE!
          </p>
          <p className=" w-full lg:text-[1.4rem] text-md font-medium mt-10">
            Jesus não enviou seus discípulos sozinhos! Mas os enviou para
            caminhar juntos!
            <br />
            <br />
            A vida de fé possui uma dimensão comunitária muito importante para
            se desenvolver, praticarmos o amor e sermos carregadas.
            <br />
            <br />
            É muito importante caminhar com mulheres que estão buscando serem
            mais parecidas com Jesus e viver a vontade de Deus no seu dia a dia!
            <br />
            <br />
            Para isso, no Método Papo de Pijama, além do material de estudo,
            você também terá acesso a:
          </p>
        </div>

        <div className="flex flex-col items-center lg:w-1/2 m-auto gap-16 mt-10 lg:mt-0 mb-20 lg:mb-0">
          <div className="flex flex-col items-center justify-center lg:w-3/5 w-4/5 gap-2">
            <div className="relative flex justify-center items-center mb-4">
              <Image
                src={icon_conversa}
                alt="conversa"
                className="top-0 left-0 z-40 lg:w-36 w-28 m-auto lg:m-0"
              />
              <div
                className="absolute lg:w-44 lg:h-44 w-36 h-36
              bg-[#E4AC80] bg-opacity-60 blur-[50.5px]
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              rounded-full -z-40"
              />
            </div>

            <p className="font-bold text-2xl text-center">
              Comunidade das Tagarelas
            </p>
            <p className="text-center text-lg">
              Suporte e acompanhamento diário para compartilhar seu dia a dia,
              desafios e alegrias.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center lg:w-3/5 w-4/5 gap-2">
            <div className="relative flex justify-center items-center mb-4">
              <Image
                src={icon_note}
                alt="icon_note"
                className="top-0 left-0 z-40 lg:w-36 w-28 m-auto lg:m-0"
              />
              <div
                className="absolute lg:w-44 lg:h-44 w-36 h-36
              bg-[#E4AC80] bg-opacity-60 blur-[50.5px]
              top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
              rounded-full -z-40"
              />
            </div>

            <p className="font-bold text-2xl text-center w-4/5 lg:w-full">
              Encontros do Pijama Ao Vivo
            </p>
            <p className="text-center text-lg">
              Encontros Ao Vivo para aprofundarmos os estudos bíblicos, orarmos
              juntas e aprender mais sobre o Senhor!
            </p>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
