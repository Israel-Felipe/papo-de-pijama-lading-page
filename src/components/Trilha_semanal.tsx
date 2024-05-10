import Image from 'next/image'
import wallpaper from '/public/images/sombra_trilha.png'
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
          className="text-start md:text-center tracking-wide 
          lg:text-3xl text-lg font-medium text-[#943A49]
        lg:leading-normal z-40 lg:mt-10 mt-8"
        >
          Ao fazer sua inscrição, você receberá mensalmente os materiais
          devocionais exclusivos da metodologia <b>Papo de Pijama</b>, os quais
          dividem o texto bíblico em estudos sequenciais de uma semana. Isso
          permitirá que você <u>aprofunde</u> o entendimento do texto e,
          consequentemente, <u>aplique</u> seus ensinamentos em sua vida!
        </p>

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
