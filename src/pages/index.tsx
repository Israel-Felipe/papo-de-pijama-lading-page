import { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Welcome from '../components/Welcome'
import TesteMartaMaria from '../components/TesteMartaMaria'
import DesejaSerMaisParecida from '../components/DesejaSerMaisParecida'
import { Depo_videos } from '../components/Depo_videos'
import Trilha_semanal from '../components/Trilha_semanal'
import Sobre_o_material from '../components/Sobre_o_material'
import TemasEstudar from '../components/TemasEstudar'
import Comparative from '../components/Comparative'
import { Depo_images } from '../components/Depo_images'
import Ao_vivo from '../components/Ao_vivo'
import { Dia_a_dia } from '../components/Dia_a_dia'
import Por_menos_de_40 from '../components/Por_menos_de_40'
import Lista from '../components/Lista'
import Pijama from '../components/Pijama'
import Esferas from '../components/Esferas'

import Comunidade from '../components/Comunidade'

import { Bonus } from '../components/Bonus'
import Quemsou from '../components/Quemsou'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'
import Image from 'next/image'
import wallpaper_investimento from '/public/images/fundos/alternativo.png'

export default function Home() {
  const ofertaRef = useRef<HTMLElement | null>(null)

  const handleOferta = () => {
    if (ofertaRef.current) {
      ofertaRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <Head>
        <title>Papo de Pijama</title>
        <meta name="description" content="Papo de Pijama - Lading Page" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <link rel="icon" href="/images/favicon.ico.svg" />
      </Head>

      <main className="min-h-xl m-auto flex-col justify-center items-center bg-[#FEF4E6]">
        <Welcome />
        <TesteMartaMaria />
        <DesejaSerMaisParecida />
        <Depo_videos handleOferta={handleOferta} />
        <Trilha_semanal />
        <Sobre_o_material />
        {/*<OQueEClubeDeDevocao />*/}
        {/* <TemasEstudar /> */}
        <Comparative />
        <Depo_images handleOferta={handleOferta} />
        <Ao_vivo />
        <Dia_a_dia handleOferta={handleOferta} />
        <Por_menos_de_40 />
        <div className="flex flex-col">
          <div className="flex justify-center bg-gradient-to-br from-[#FBA6A2] via-[#E56C7B] to-[#E36D79] z-0 overflow-hidden">
            {/* <div className="absolute h-full w-full">
              <Image
              src={wallpaper_investimento}
              className={`w-auto h-full lg:w-screen lg:h-auto object-cover`}
              alt="wallpaper"
            />
            </div> */}
            <nav
              className="h-auto mt-12 max-w-screen-xl lg:w-full w-[90%] text-[#FEF4E6] flex flex-col justify-center items-center"
              ref={ofertaRef}
            >
              <p
                className="flex justify-center text-center
            lg:text-5xl text-4xl font-bold text-[#FEF4E6] w-[90%] lg:w-auto tracking-[0.05em]
          "
              >
                Qual é o investimento?
              </p>

              <div className="bg-[#fff] lg:w-1/2 w-[90%] h-auto rounded-3xl mt-10 flex flex-col justify-center items-center overflow-hidden z-50">
                <div className="w-full flex items-center justify-center bg-[#E98D2A] font-bold gap-2 py-2">
                  <p className="tracking-[0.3em]">PLANO ANUAL</p>
                </div>

                <div className="flex items-center justify-center font-bold gap-2 mt-8">
                  <p className="text-2xl text-[#E98D2A] leading-6">
                    Até
                    <br />
                    12x
                  </p>
                  <div className="relative">
                    <p className="text-[#E98D2A] lg:text-6xl text-5xl font-extrabold">
                      59,90
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center text-center font-bold my-4">
                  <p className="lg:text-xl text-lg text-[#b0173b]">
                    OU R$ 599,99 À VISTA
                  </p>
                </div>
              </div>

              <div className="lg:w-1/2 w-[90%] h-auto m-auto mt-12 mb-16 z-10">
                <a
                  href="https://pay.hotmart.com/H82747095C?off=uqkucoiq&bid=1736199271925"
                  className="w-full  flex justify-center"
                >
                  <button
                    className="bg-[#E98D2A] hover:bg-[#F2A644] active:bg-[#D27920] text-[#FFFFFF]
                md:w-3/5 h-14 py-2 px-4 rounded-full
                font-bold text-xl lg:text-2xl z-10
              transition duration-200 transform hover:scale-105 active:scale-95"
                    onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) =>
                      (e.currentTarget.style.boxShadow = 'none')
                    }
                    onMouseOut={(e: React.MouseEvent<HTMLButtonElement>) =>
                      (e.currentTarget.style.boxShadow =
                        '-4px 7px 4px 0px rgba(94, 6, 22, 0.6)')
                    }
                  >
                    QUERO ME INSCREVER!
                  </button>
                </a>
              </div>
            </nav>
          </div>
          <div className="flex flex-col justify-center items-center bg-gradient-to-br from-[#B92645] via-[#8D1D32] to-[#671423] z-0 overflow-hidden py-12">
            <p
              className="flex justify-center text-center
            lg:text-3xl text-2xl font-bold text-[#E98D2A] w-[90%] lg:w-auto"
            >
              Garantia Incondicional de 7 dias
            </p>
            <p
              className="flex justify-center text-center
            lg:text-2xl text-lg md:font-bold text-[#FFFFFF] w-[90%] md:w-[70%] mt-6"
            >
              Se, durante os primeiros 7 dias, você decidir que o Clube não
              atende às suas expectativas, basta cancelar sua compra na
              plataforma e solicitar o reembolso.
            </p>
          </div>
        </div>
        <Bonus handleOferta={handleOferta} />
        <Quemsou />
        <FAQ />
        <Footer />
      </main>

      {/* <div
        className={`fixed bottom-10 right-6 md:bottom-12 md:right-12 z-50 transition transform ease-in duration-1000 ${
          showScrollIcon
            ? 'transition-transform transform translate-x-100 opacity-100'
            : 'translate-x-60 transition-transform duration-1000 ease-out opacity-50'
        }
        ${hideWhats ? 'hidden' : ''}`}
      >
        <div className="relative">
          <button
            className="p-2 bg-green-500 text-white rounded-full transform hover:-translate-x-1 hover:scale-110"
            onClick={handleButtonClick}
          >
            <Image src={whats} className={`w-14 h-14`} alt="wallpaper" />
          </button>
          <button
            className="p-2 ml-2 bg-red-500 text-white rounded-full absolute bottom-0 right-0 -mb-2 -mr-2"
            onClick={handleHideButton}
          >
            <span className="sr-only">Fechar</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="white"
              className="w-4 h-4"
            >
              <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41zM12 22C6.48 22 2 17.52 2 12S6.48 2 12 2s10 4.48 10 10-4.48 10-10 10z" />
            </svg>
          </button>
        </div>
      </div> */}
    </>
  )
}
