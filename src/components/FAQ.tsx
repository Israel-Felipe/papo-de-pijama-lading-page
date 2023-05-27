/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import Image from "next/image";
import faq from "/public/images/faq.svg";
import { FAQ_content } from "../utils/Contents";

export default function FAQ() {
  return (
    <header className="flex justify-center bg-[#E4795B] z-0 lg:p-28 pt-40 lg:pt-0">
      <nav className="w-auto h-auto mt-0 max-w-screen-xl lg:w-full text-[#FEF4E6] flex flex-col justify-start items-center lg:items-start">
        <header className="lg:w-full w-[90%] h-auto flex justify-between items-center">
          <p
            className="flex justify-center text-center
          lg:text-5xl text-4xl font-bold text-[#FEF4E6] mb-10 lg:mb-0 leading-normal
         "
            style={{
              textShadow:
                "0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133",
            }}
          >
            FAQ - DÚVIDAS FREQUENTES
          </p>

          <Image
            src={faq}
            className={`w-52 h-auto hidden lg:block
          }`}
            alt="faq"
          />
        </header>

        <div className="flex flex-col lg:gap-8 gap-4 w-[90%] lg:w-full">
          {FAQ_content.map((content, i) => (
            <BlocsFAQ title={content.title} text={content.text} key={i} />
          ))}
        </div>

        <div className="lg:w-full w-[90%] flex flex-col justify-center items-center mt-24 gap-8">
          <h1 className="lg:text-5xl text-4xl font-bold text-center underline">
            A sua dúvida não foi respondida?
          </h1>
          <h2 className="text-[#751133] lg:text-4xl text-xl text-center lg:w-[59%] lg:leading-[3rem]">
            Entre em contato conosco pelo WhatsApp para tirar as suas dúvidas
            sobre o Método Papo de pijama clicando no botão abaixo:
          </h2>

          <div className="relative lg:w-[70%] h-auto m-auto z-10 mb-12">
            <a
              href="https://api.whatsapp.com/send?phone=5547999060823&text=Oii%20Paola!%20Eu%20tenho%20d%C3%BAvida%20sobre%20o%20M%C3%A9todo%20Papo%20de%20Pijama...%20pode%20me%20ajudar?%20:)"
              className="w-full"
              target="_blank"
            >
              <button
                className=" bg-[#00BF63] hover:bg-[#029B51] active:bg-[#006233]
                text-[#FEF4E6] active:text-[#FEF4E6]
              w-full h-20 py-2 px-4 rounded-3xl
              font-bold lg:text-4xl z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
              >
                Quero tirar dúvidas no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

function BlocsFAQ({ title, text }: { title: string; text: string }) {
  const [isTextVisible, setTextVisible] = useState(false);

  const toggleTextVisibility = () => {
    setTextVisible(!isTextVisible);
  };

  const formattedText = text.split("<br />").map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));

  const variants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <nav>
      <div
        className="z-50 relative cursor-pointer flex lg:justify-start items-center"
        onClick={toggleTextVisibility}
      >
        <h1 className="bg-[#751133] lg:text-2xl text-lg font-bold text-left h-auto lg:rounded-full rounded-3xl py-4 lg:px-12 px-8 w-full lg:w-auto">
          {title}
        </h1>
        {!isTextVisible && (
          <motion.a
            initial={{ x: "-180%" }}
            animate={{ x: "-150%" }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <FiChevronRight className="w-6 h-6" />
          </motion.a>
        )}
      </div>

      {isTextVisible && (
        <motion.div
          className="bg-[#FEF4E6] w-auto h-auto rounded-3xl py-4 px-12 -mt-6 ml-4 z-20 relative"
          initial="hidden"
          animate={isTextVisible ? "visible" : "hidden"}
          variants={variants}
        >
          <p className="lg:text-xl text-[#323232] font-medium mt-6 lg:leading-loose leading-relaxed">
            {formattedText}
          </p>
        </motion.div>
      )}
    </nav>
  );
}
