/* eslint-disable react/no-unescaped-entities */
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronRight } from "react-icons/fi";
import { textTransition, fadeIn } from "../utils/Transition";
import Image from "next/image";
import faq from "/public/images/faq.svg";
import { FAQ_content } from "../utils/Contents";

export default function FAQ() {
  return (
    <motion.header
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="flex justify-center bg-gradient-to-br from-[#E4795B] via-[#E4795B] to-[#EBA695] z-0 p-10"
    >
      <nav className="w-auto h-auto mt-0 max-w-screen-xl w-full text-[#FEF4E6] flex flex-col justify-start items-start">
        <header className="w-full h-auto flex justify-between items-center">
          <motion.p
            variants={fadeIn("right", "spring", 0.4, 1)}
            className="flex justify-center text-center
          text-[42px] font-bold text-[#FEF4E6]
         "
            style={{
              textShadow:
                "0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133",
            }}
          >
            FAQ - DÚVIDAS FREQUENTES
          </motion.p>

          <Image
            src={faq}
            className={`w-52 h-auto
          }`}
            alt="faq"
          />
        </header>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="flex flex-col gap-8"
        >
          {FAQ_content.map((content, i) => (
            <BlocsFAQ title={content.title} text={content.text} key={i} />
          ))}
        </motion.div>

        <div className="w-full flex flex-col justify-center items-center mt-24 gap-8">
          <h1 className="text-5xl font-bold text-center underline">
            A sua dúvida não foi respondida?
          </h1>
          <h2 className="text-[#751133] text-4xl text-center w-[59%] leading-[3rem]">
            Entre em contato conosco pelo WhatsApp para tirar as suas dúvidas
            sobre o Método Papo de pijama clicando no botão abaixo:
          </h2>

          <div className="relative w-[60%] h-auto m-auto z-10">
            <a
              href="https://pay.hotmart.com/H82747095C?off=gjb2hj2p"
              className="w-full"
            >
              <button
                className=" bg-[#00BF63] hover:bg-[#029B51] active:bg-[#006233]
                text-[#FEF4E6] active:text-[#FEF4E6]
              w-full h-20 py-2 px-4 rounded-3xl
              font-bold  text-4xl z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
              >
                Quero tirar dúvidas no WhatsApp
              </button>
            </a>
          </div>
        </div>
      </nav>
    </motion.header>
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
        className="z-50 relative cursor-pointer flex justify-start items-center"
        onClick={toggleTextVisibility}
      >
        <h1 className="bg-[#751133] text-2xl font-bold text-left h-auto inline-block rounded-full py-4 px-12">
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
          <p className="text-xl text-[#323232] font-medium mt-6 leading-8">
            {formattedText}
          </p>
        </motion.div>
      )}
    </nav>
  );
}
