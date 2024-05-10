import Image from 'next/image'
import wallpaper from '/public/images/wallpaper_woman.png'
import material1 from '/public/images/material1.jpeg'
import material2 from '/public/images/material2.jpeg'

export default function Sobre_o_material() {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full md:w-screen object-cover filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col my-16 md:my-24 z-40 max-w-screen-xl w-[75%] md:w-[80%] items-center">
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col items-end md:w-[62%]">
            <p className="md:text-[2.5rem] text-3xl !leading-tight font-extrabold uppercase">
              Estudos bíblicos que cabem na sua rotina
            </p>
            <p className="md:text-2xl text-lg font-medium mt-6 md:mt-10 tracking-wide">
              Nosso material é produzido para o acompanhamento e
              <b> crescimento espiritual de mulheres</b> e é escrito por uma
              equipe com mais de 22 mulheres cristãs com profundidade teológica!
            </p>
            <p className="md:text-3xl font-bold mt-6 hidden md:flex">
              Você pode imprimir ou baixar em seus dispositivos móveis.
            </p>
          </div>
          <div className="flex items-center justify-start md:w-[38%] ml-[3%] md:ml-[5%] mt-6 md:mt-0">
            <iframe
              src="https://player.vimeo.com/video/830669354?h=9d2f66a051&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              title="video-celular"
              className="rounded-[19%] w-auto h-[563.333px]"
            ></iframe>
          </div>
        </div>

        <div className="hidden relative md:flex w-full md:h-[60vh] h-[30vh]">
          <Image
            src={material1}
            className={
              'absolute max-w-[60%] md:max-w-[35%] h-auto rounded-2xl -top-20 md:-top-32 md:left-8 transform -rotate-6'
            }
            alt="material 1"
          />
          <Image
            src={material2}
            className={
              'absolute w-[90%] md:w-[55%] h-auto rounded-2xl md:top-16 top-20 md:right-24 right-0'
            }
            alt="material 2"
          />
        </div>
      </nav>
    </header>
  )
}
