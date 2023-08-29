import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import whats from '/public/images/whats.svg'

import Head from 'next/head'
import { Welcome } from '../components/Welcome'
import { Depo_videos } from '../components/Depo_videos'
import Lista from '../components/Lista'
import Pijama from '../components/Pijama'
import Esferas from '../components/Esferas'
import { Depo_images } from '../components/Depo_images'
import Trilha_semanal from '../components/Trilha_semanal'
import Comparative from '../components/Comparative'
import { Dia_a_dia } from '../components/Dia_a_dia'
import Comunidade from '../components/Comunidade'
import { Ao_vivo } from '../components/Ao_vivo'
import { Bonus } from '../components/Bonus'
import Quemsou from '../components/Quemsou'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const [showScrollIcon, setShowScrollIcon] = useState(false)
  const [hideWhats, setHideWhats] = useState(false)

  const ofertaRef = useRef<HTMLElement | null>(null)

  const handleOferta = () => {
    if (ofertaRef.current) {
      ofertaRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const handleButtonClick = () => {
    window.location.href =
      'https://api.whatsapp.com/send?phone=5547999060823&text=Oi%20Paola.%20Eu%20preciso%20de%20ajuda%20para%20saber%20mais%20sobre%20o%20papo%20de%20pijama!'
  }

  const handleHideButton = () => {
    setShowScrollIcon(false)
    setHideWhats(true)
  }

  const handleScroll = () => {
    const currentPosition =
      window.pageYOffset || document.documentElement.scrollTop

    const windowHeight = window.innerHeight
    const pageHeight = document.documentElement.scrollHeight
    const scrollableDistance = pageHeight - windowHeight
    const scrollPercentage = (currentPosition / scrollableDistance) * 100

    if (scrollPercentage > 50) {
      setShowScrollIcon(true)
    } else {
      setShowScrollIcon(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
        <Welcome handleOferta={handleOferta} />
        <Depo_videos handleOferta={handleOferta} />
        {/* <Lista /> */}
        <Pijama />
        <Esferas />
        <Dia_a_dia handleOferta={handleOferta} />
        <Depo_images handleOferta={handleOferta} />
        {/*         <Trilha_semanal /> */}
        <Comparative />
        {/*         <Comunidade /> */}
        <Ao_vivo handleOferta={handleOferta} />
        <Bonus handleOferta={handleOferta} />
        <Quemsou />
        <div className="flex justify-center bg-gradient-to-br from-[#EBA695] via-[#E4795B] to-[#E4795B] z-0 lg:p-20">
          <nav
            className="h-auto mt-12 max-w-screen-xl lg:w-full w-[90%] text-[#FEF4E6] flex flex-col justify-center items-center"
            ref={ofertaRef}
          >
            <p
              className="flex justify-center text-center
            lg:text-5xl text-4xl font-bold text-[#FEF4E6] w-[90%] lg:w-auto
          "
              style={{
                textShadow:
                  '0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133, 0px 0px 4px #751133',
              }}
            >
              O QUE VOCÊ VAI TER ACESSO?
            </p>

            <div className="bg-[#751133] lg:w-1/2 w-[90%] h-auto rounded-3xl mt-10 flex flex-col lg:p-16 p-8 justify-center items-center">
              <ul className="list-disc ml-4 lg:text-2xl text-lg font-medium lg:leading-10">
                <li>
                  Estudo semanal com a metodologia Papo de Pijama, totalizando
                  52 temas bíblicos e 365 estudos!
                </li>
                <li>Encontros do Pijama Ao Vivo</li>
                <li>Comunidade das Tagarelas no Whats</li>
                <li>Aulas gravadas na plataforma</li>
                <li>Bônus - Templates para Bible Journaling</li>
                <li>Bônus - Adesivos exclusivos</li>
                <li>1 ano de acesso!</li>
              </ul>

              <div className="flex items-center justify-center font-bold gap-2 mt-6">
                <p>de:</p>
                <div className="relative">
                  <p className="text-[#EF4123] text-4xl">R$ 497,00</p>
                  <div className="absolute w-[105%] h-1 bg-[#E4795B] transform -rotate-[5deg] top-1/2 left-0 right-0 rounded-full"></div>
                </div>
              </div>

              <div className="flex items-center justify-center font-bold gap-2 mt-2">
                <p className="text-2xl">12x</p>
                <div className="relative">
                  <p className="text-[#F8F0E7] lg:text-5xl text-4xl">
                    R$ 34,83
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center text-center font-bold gap-2 mt-1">
                <p className="lg:text-xl text-lg">OU R$ 347,00 À VISTA</p>
              </div>
            </div>

            <div className="relative lg:w-[55%] w-[90%] h-auto m-auto mt-10 z-10">
              <a
                href="https://pay.hotmart.com/H82747095C?off=gjb2hj2p"
                className="w-full"
              >
                <button
                  className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#751133] text-[#751133] active:text-[#FEF4E6]
                w-full h-20 py-2 px-4 rounded-full
                font-bold  text-xl lg:text-2xl z-10
              transition duration-200 transform hover:scale-105 active:scale-100"
                >
                  EU QUERO TER ACESSO AO PAPO DE PIJAMA!
                </button>
              </a>
            </div>
          </nav>
        </div>
        <FAQ />
        <Footer />
      </main>

      <div
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
      </div>
    </>
  )
}
