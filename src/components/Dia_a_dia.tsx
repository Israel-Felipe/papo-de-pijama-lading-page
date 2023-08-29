import Image from 'next/image'
import wallpaper from '/public/images/wallpaper_woman.png'
import trilha from '/public/images/trilha.png'
import flecha from '/public/images/flecha.svg'

interface Dia_a_diaProps {
  handleOferta: () => void
}

export const Dia_a_dia: React.FC<Dia_a_diaProps> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-20`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:m-16 z-40 max-w-screen-xl px-16">
        <div>
          <div className="flex flex-col justify-center items-center lg:items-start">
            <p className="lg:text-5xl text-3xl lg:leading-tight font-bold mt-8">
              Você recebe um{' '}
              <span className="text-[#E4795B]">plano semanal estruturado</span>{' '}
              com estudos profundos, simples e práticos
            </p>
            <p className="lg:text-[1.6rem] font-medium mt-10">
              Ao ingressar no Método Papo de Pijama, você terá acesso a um
              material devocional exclusivo da metodologia, organizado em um{' '}
              <u>plano semanal estruturado</u> que abrange as três esferas da
              intimidade: <b>Interpretar, Guardar e Aplicar</b>.
            </p>
          </div>
        </div>

        <div className="flex items-start justify-center mt-16">
          <div className="flex flex-col items-center justify-center lg:w-[70%]">
            <p className="lg:text-4xl text-3xl lg:leading-tight font-bold text-center text-[#E4795B]">
              Plano Semanal Estruturado
            </p>
            <div className="bg-[#E2CEB6] bg-opacity-[40%] rounded-[20px] w-[80%] p-4 mt-4 relative">
              <Image
                src={flecha}
                className={`absolute -top-8 -right-16`}
                alt="flecha"
              />
              <Image src={trilha} className={``} alt="trilha" />
            </div>
            <p className="lg:text-4xl text-3xl lg:leading-tight font-bold w-[60%] text-center mt-6">
              Acesse em qualquer lugar ou imprima para poder riscar!
            </p>
          </div>
          <div className="flex items-center justify-center lg:w-[30%]">
            <iframe
              src="https://player.vimeo.com/video/830669354?h=9d2f66a051&amp;badge=0&amp;autopause=0&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;player_id=0&amp;app_id=58479"
              allow="autoplay; fullscreen; picture-in-picture"
              title="video-celular"
              className="rounded-[13%] w-auto h-[613.333px]"
            ></iframe>
          </div>
        </div>
      </nav>
    </header>
  )
}
