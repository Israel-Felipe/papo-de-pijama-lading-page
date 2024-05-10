/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiChevronRight } from 'react-icons/fi'
import Image from 'next/image'
import faq from '/public/images/faq.svg'
import { FAQ_content } from '../utils/Contents'
import wallpaper from '/public/images/fundos/faq.png'

export default function FAQ() {
  return (
    <header className="relative flex flex-col justify-center items-center h-auto bg-[#E89D9B] z-0 overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter z-0`}
          alt="wallpaper"
        />
      </div>
      <nav className="relative w-[85%] md:w-[80%] h-auto mt-0 max-w-screen-xl text-[#FEF4E6] flex flex-col justify-start items-center lg:items-start pt-12 md:pt-28 pb-16">
        <div className="lg:w-full w-[90%] h-auto flex justify-between items-center mb-10">
          <p
            className="flex justify-center text-center w-full
          lg:text-5xl text-4xl font-bold text-[#FEF4E6] leading-normal
         "
          >
            FAQ - DÚVIDAS FREQUENTES
          </p>

          {/* <Image
            src={faq}
            className={`w-52 h-auto hidden lg:block
          }`}
            alt="faq"
          /> */}
        </div>

        <div className="flex flex-col items-center justify-center lg:gap-8 gap-4">
          {FAQ_content.map((content, i) => (
            <BlocsFAQ title={content.title} text={content.text} key={i} />
          ))}
        </div>

        <div className="lg:w-full w-[90%] flex flex-col justify-center items-center mt-12 md:mt-20 gap-8">
          <h1 className="lg:text-4xl text-3xl font-bold text-center">
            Sua dúvida não está nessa lista acima?
          </h1>
          <h2 className="text-[#751133] lg:text-2xl text-xl text-center lg:w-[50%] lg:leading-[3rem]">
            Entre em contato conosco pelo WhatsApp para tirar as suas dúvidas
            sobre o Método Papo de pijama clicando no botão abaixo:
          </h2>

          <div className="relative lg:w-[60%] h-auto m-auto z-10 flex justify-center">
            <a
              href="https://api.whatsapp.com/send?phone=5547999060823&text=Oi%20Paola.%20Vi%20a%20página%20do%20Clube%20Papo%20de%20Pijama%20e%20quero%20saber%20mais%20sobre%20ele.%20Pode%20me%20ajudar?"
              className="w-full flex justify-center"
              target="_blank"
            >
              <button
                className=" bg-[#00BF63] hover:bg-[#029B51] active:bg-[#006233]
                text-[#FEF4E6] active:text-[#FEF4E6]
              py-4 px-6 rounded-3xl
              font-bold lg:text-3xl z-10
            transition duration-200 transform hover:scale-105 active:scale-95"
              >
                Quero tirar dúvidas no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}

function BlocsFAQ({ title, text }: { title: string; text: string }) {
  const [isTextVisible, setTextVisible] = useState(false)

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible)
  }

  const formattedText = text.split('<br />').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ))

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <nav className="w-full">
      <div
        className="z-40 relative cursor-pointer flex lg:justify-start items-center justify-center w-full"
        onClick={toggleTextVisibility}
      >
        <h1 className="bg-[#751133] lg:text-2xl text-lg font-bold text-left h-auto lg:rounded-full rounded-3xl py-4 lg:px-12 px-8 w-full lg:w-auto">
          {title}
        </h1>
        {!isTextVisible && (
          <motion.a
            initial={{ x: '-180%' }}
            animate={{ x: '-150%' }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: 'reverse',
            }}
          >
            <FiChevronRight className="w-6 h-6" />
          </motion.a>
        )}
      </div>

      {isTextVisible && (
        <motion.div
          className="bg-[#FEF4E6] w-[95%] md:w-auto h-auto rounded-3xl py-4 px-12 -mt-6 md:ml-4 z-20 relative ml-[2.5%]"
          initial="hidden"
          animate={isTextVisible ? 'visible' : 'hidden'}
          variants={variants}
        >
          <p className="lg:text-xl text-[#323232] font-medium mt-6 lg:leading-loose leading-relaxed">
            {formattedText}
          </p>
        </motion.div>
      )}
    </nav>
  )
}
