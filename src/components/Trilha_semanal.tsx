import Image from 'next/image'
import wallpaper from '/public/images/sombra_trilha.png'
import material1 from '/public/images/material1.jpeg'
import material2 from '/public/images/material2.jpeg'
import trilha from '/public/images/trilha.png'

export default function Trilha_semanal() {
  return (
    <header className="relative flex justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover z-0
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="w-[75%] md:w-3/4 h-auto my-20 max-w-screen-xl z-10">
        <p
          className="md:text-center
          lg:text-5xl text-2xl font-bold
        md:px-8 z-40 !leading-snug"
        >
          Estude a Bíblia de forma profunda, simples e prática com o material
          exclusivo do método <b>Papo de Pijama</b>
        </p>

        <p
          className="hidden md:block text-start md:text-center tracking-wide 
          lg:text-3xl text-lg font-medium text-[#943A49]
        lg:leading-normal z-40 lg:mt-10 mt-8"
        >
          Ao fazer sua inscrição, você receberá mensalmente os materiais
          devocionais exclusivos da metodologia <b>Papo de Pijama</b>, os quais
          dividem o texto bíblico em estudos sequenciais de uma semana. Isso
          permitirá que você <u>aprofunde</u> o entendimento do texto e,
          consequentemente, <u>aplique</u> seus ensinamentos em sua vida!
        </p>

        <div className="relative flex md:hidden w-full md:h-[60vh] h-[30vh] mt-20 mb-20">
          <Image
            src={material1}
            className={
              'absolute max-w-[60%] h-auto rounded-2xl -top-8 transform -rotate-6'
            }
            alt="material 1"
          />
          <Image
            src={material2}
            className={'absolute w-[90%] h-auto rounded-2xl top-40 right-0'}
            alt="material 2"
          />
        </div>

        <p
          className="text-center
          lg:text-5xl text-3xl font-bold
        md:px-8 z-40 !leading-snug mt-10"
        >
          Divisão dos blocos de estudo:
        </p>

        <div>
          <Image
            src={trilha}
            className={`lg:max-w-screen-lg m-auto mt-10
          }`}
            alt="trilha"
          />
        </div>
      </nav>
    </header>
  )
}
