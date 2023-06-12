import { useState } from 'react'
import Image from 'next/image'
import whats from '/public/images/whats.svg'

import Head from 'next/head'
import Welcome from '../components/Welcome'
import Depo_videos from '../components/Depo_videos'
import Depo_images from '../components/Depo_images'
import Trilha_semanal from '../components/Trilha_semanal'
import Comparative from '../components/Comparative'
import Dia_a_dia from '../components/Dia_a_dia'
import Comunidade from '../components/Comunidade'
import Ao_vivo from '../components/Ao_vivo'
import Bonus from '../components/Bonus'
import Quemsou from '../components/Quemsou'
import Oferta from '../components/Oferta'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

export default function Home() {
  const [showButton, setShowButton] = useState(true)

  const handleButtonClick = () => {
    window.location.href =
      'https://api.whatsapp.com/send?phone=5547999906082&text=Oi%20Paola.%20Eu%20preciso%20de%20ajuda%20para%20saber%20mais%20sobre%20o%20papo%20de%20pijama!'
  }

  const handleHideButton = () => {
    setShowButton(false)
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

      <main className="min-h-xl m-auto flex-col justify-center items-start">
        <Welcome />
        <Depo_videos />
        <Depo_images />
        <Trilha_semanal />
        <Comparative />
        <Dia_a_dia />
        <Comunidade />
        <Ao_vivo />
        <Bonus />
        <Quemsou />
        <Oferta />
        <FAQ />
        <Footer />
      </main>

      {showButton && (
        <div className="fixed bottom-4 right-4">
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
      )}
    </>
  )
}
