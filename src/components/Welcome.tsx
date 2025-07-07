import wallpaper from '/public/images/fundos/welcome.jpg'
import logo from '/public/images/logo/logo-clara.png'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Welcome {
  handleOferta: () => void
}

export const Welcome: React.FC<Welcome> = ({ handleOferta }) => {
  //export default function Welcome() {
  const [wordIndex, setWordIndex] = useState(0)
  const words = ['leve', 'profunda', 'prática']

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prevIndex) => (prevIndex + 1) % words.length)
    }, 2000) // Mude o valor do intervalo conforme necessário

    return () => clearInterval(interval)
  }, [])

  const useTypingEffect = (word: string) => {
    const typingSpeed = 100 // Velocidade de digitação (em milissegundos)
    const [text, setText] = useState('')

    useEffect(() => {
      let isMounted = true
      let index = 0

      const typeInterval = setInterval(() => {
        if (isMounted && index <= word.length) {
          setText(word.slice(0, index))
          index++
        } else {
          clearInterval(typeInterval)
          const deleteInterval = setInterval(() => {
            if (isMounted && index >= 0) {
              setText(word.slice(0, index))
              index--
            } else {
              clearInterval(deleteInterval)
            }
          }, typingSpeed)
        }
      }, typingSpeed)

      return () => {
        isMounted = false
        clearInterval(typeInterval)
      }
    }, [word])

    return text
  }

  return (
    <header className="h-screen relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter z-0`}
          alt="wallpaper"
        />
      </div>

      <div className="h-screen max-w-screen-xl flex flex-col items-center justify-center z-10 md:py-0">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={logo}
            className={`md:max-w-[300px] w-[55%] h-auto m-auto
          }`}
            alt="logo"
          />
          <p className="text-center lg:max-w-[800px] max-w-[70%] lg:text-5xl text-2xl font-bold !leading-normal lg:mt-10 mt-6">
            Desfrute de
            <span className="md:text-[#B52548]"> intimidade com Deus </span>
            no dia a dia de forma{' '}
            <span className="bg-[#FF9E9C]">
              {/* simples, profunda e prática! */}
              {useTypingEffect(words[wordIndex])}{' '}
            </span>
          </p>
        </div>
        <div className="relative flex justify-center items-center mt-12 h-auto z-40">
          {/* <a
            href="https://pay.hotmart.com/H82747095C?off=uqkucoiq&bid=1736199271925&_hi=eyJjaWQiOiIxNzQ1NTA3MjQxNTU0NjUzNTM4ODI4MDE3Mjg4MjAwIiwiYmlkIjoiMTc0NTUwNzI0MTU1NDY1MzUzODgyODAxNzI4ODIwMCIsInNpZCI6ImZjNTllZjk1NDNmNTQ0ZGM4YTE0NmEzNzkyOTUwNGQ5In0=.1746480068258"
            className="w-full flex justify-center"
          > */}
          {/* <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSUsihoGbCTTMQ3zAChvks3_Q7UIkRkOrI5En3_Gdx0o_J2w/viewform"
            className="w-full  flex justify-center"
          > */}
          <button
            onClick={handleOferta}
            className="bg-[#B52446] hover:bg-[#FD3665] active:bg-[#B52446] text-[#fff] py-4 px-6 md:px-32 rounded-full lg:text-3xl text-lg z-10 transition duration-200 transform hover:scale-105 active:scale-95 mb-8"
            style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
          >
            <b>QUERO PARTICIPAR DO CLUBE</b>
          </button>
          {/* </a> */}
        </div>
      </div>

      {/* <nav className="relative w-full h-auto max-w-screen-xl my-[3rem]">
        <div className="lg:w-3/5 h-auto m-auto">
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                boxShadow: '0px 9px 21px -10px rgba(0, 0, 0, 0.678)',
              }}
              src="https://www.youtube.com/embed/iv8EnSe4oT4"
              title="O segredo do Pijama para a Intimidade com Deus"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:rounded-md"
              onLoad={handleVideoPlay}
            ></iframe>
          </div>
        </div>
        <a
          className={`full max-w-screen-xl flex justify-center items-center mt-16 z-40 
          }`}
        >
          <button
            onClick={handleOferta}
            className="lg:h-24 h-20 py-2 px-20 rounded-full 
             bg-[#751133] hover:bg-[#943a49] active:bg-[#751133]
             text-white hover:text-white active:text-white
             font-bold lg:text-3xl text-lg z-10
             transition duration-200 transform hover:scale-105 active:scale-100 mb-8"
            style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
          >
            EU QUERO VIVENCIAR O PARADIGMA DO PIJAMA
          </button>
        </a>
        <div className="flex flex-col justify-center items-center">
          <Image src={pagamento} className={`w-[40%] mb-4`} alt="pagamento" />
          <Image src={garantia} className={`w-[35%] `} alt="garantia" />
        </div>
      </nav> */}
    </header>
  )
}

/* className="lg:h-24 h-20 py-2 px-10 rounded-full 
             bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133]
             text-[#751133] hover:text-white active:text-white
             font-bold lg:text-3xl text-lg z-10
             transition duration-200 transform hover:scale-105 active:scale-100 mb-8" */
