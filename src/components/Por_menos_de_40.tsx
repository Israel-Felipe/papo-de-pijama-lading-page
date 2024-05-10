import Image from 'next/image'
import wallpaper from '/public/images/fundos/martaMaria.png'
import porMenosDe40_1 from '/public/images/porMenosDe40_1.svg'
import porMenosDe40_2 from '/public/images/porMenosDe40_2.svg'
import porMenosDe40_3 from '/public/images/porMenosDe40_3.svg'
import porMenosDe40_4 from '/public/images/porMenosDe40_4.svg'

export default function Por_menos_de_40() {
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

      <nav className="flex flex-col items-center w-[80%] h-auto my-16 md:my-20 max-w-screen-xl z-10 text-[#5E0616]">
        <p
          className="text-center
          lg:text-5xl text-3xl font-extrabold
        px-8 z-40 !leading-snug"
        >
          POR APENAS R$30,00/MÊS
        </p>

        <p
          className="text-center 
          lg:text-3xl text-lg font-light
        lg:leading-normal z-40 mt-4 tracking-[0.02em]"
        >
          Você tem acesso à:
        </p>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap gap-10 md:gap-[5%] mt-12">
          {/* Div 1 */}
          <div className={`md:w-[50%] flex gap-8 md:gap-6`}>
            <Image
              src={porMenosDe40_1}
              className={`w-[35%]`}
              alt="porMenosDe40_1"
            />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-xl md:text-2xl font-bold">
                Material Devocional
              </p>
              <p className="text-md md:text-xl">
                Materiais devocionais em PDF exclusivos para você estudar a
                bíblia com profundidade
              </p>
            </div>
          </div>

          {/* Div 2 */}
          <div
            className={`md:w-[45%] flex flex-row-reverse md:flex-row gap-8 md:gap-6`}
          >
            <Image
              src={porMenosDe40_2}
              className={`w-[35%]`}
              alt="porMenosDe40_2"
            />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-xl md:text-2xl font-bold">Encontros Ao Vivo</p>
              <p className="text-md md:text-xl">
                2 Encontros ao vivo para aprofundamento bíblico/teológico e
                tira-dúvidas
              </p>
            </div>
          </div>

          {/* Div 3 */}
          <div className={`md:w-[50%] flex gap-8 md:gap-6 md:mt-12`}>
            <Image
              src={porMenosDe40_3}
              className={`w-[35%]`}
              alt="porMenosDe40_3"
            />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-xl md:text-2xl font-bold">
                Comunidade das Tagarelas
              </p>
              <p className="text-md md:text-xl">
                Comunidade exclusiva com as integrantes do clube e para
                acompanhamento diário
              </p>
            </div>
          </div>

          {/* Div 4 */}
          <div
            className={`md:w-[45%] flex flex-row-reverse md:flex-row gap-8 md:gap-6 md:mt-12`}
          >
            <Image
              src={porMenosDe40_4}
              className={`w-[35%]`}
              alt="porMenosDe40_4"
            />
            <div className="flex flex-col justify-center gap-2">
              <p className="text-xl md:text-2xl font-bold">
                Biblioteca de Aulas
              </p>
              <p className="text-md md:text-xl">
                Aulas com professores convidados gravadas na plataforma
              </p>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
