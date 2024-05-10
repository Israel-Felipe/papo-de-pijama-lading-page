import Image from 'next/image'
import wallpaper from '/public/images/fundos/laranja-baloes.png'
import foto from '/public/images/foto_paola.png'

export default function Quemsou() {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden md:p-20 h-auto">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover z-0`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:col items-center md:items-start justify-center z-40 max-w-screen-xl w-[85%] pb-16">
        <div className="w-[90%] md:w-auto flex md:justify-between justify-center items-center mt-12 md:mt-0 gap-3 md:gap-0">
          <div className="relative w-[75%] lg:w-[54%] flex flex-col justify-center items-center lg:items-start">
            <p
              className="flex justify-center lg:text-7xl text-3xl font-[600] text-[#ffffff] mt-0 md:mt-28"
              style={{ textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)' }}
            >
              Quem vai vestir o pijama com você?
            </p>
            <p className="hidden md:flex justify-center lg:text-start text-center lg:text-5xl text-3xl font-[600] text-[#ffffff] bg-[#B52446] pl-80 -ml-80 mt-12 py-2 px-16 rounded-[30px]">
              Paola Milbauer
            </p>

            <p
              className="hidden md:flex justify-center text-start md:mt-20
              lg:text-2xl tracking-wide lg:w-full font-medium text-[#ffffff]"
              style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
            >
              Muito prazer! Eu sou a Paola Milbauer, cristã por redenção,
              teóloga por formação e escritora por paixão!
            </p>
          </div>
          <div className="w-[70%] md:w-[43%] h-auto rounded-[3.5rem]">
            <Image
              src={foto}
              alt="Paola Muehlbauer"
              className="rounded-[1.5rem] md:rounded-[3.5rem]"
            />
          </div>
        </div>
        <div className="flex flex-col items-center">
          <p
            className="w-[90%] flex justify-center lg:text-2xl tracking-wide lg:w-full font-medium text-[#ffffff] text-justify md:hidden my-6"
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Muito prazer! Eu sou a Paola Milbauer, cristã por redenção, teóloga
            por formação e escritora por paixão!
          </p>
          <p
            className="w-[90%] flex justify-center lg:text-2xl tracking-wide lg:w-full md:mt-8 font-medium text-[#ffffff] text-justify"
            style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
          >
            Cresci na igreja mas por muito tempo minha fé se resumiu a uma lista
            de obrigações e religiosidade. Mas, em Sua graça e misericórdia, o
            Senhor tem me ensinado a vestir o pijama de filha e desfrutar de
            intimidade com Ele - uma intimidade real que vai além de uma lista
            de obrigações e envolve todo o nosso ser!
            <br />
            <br />
            Desde 2020, ao final da minha faculdade de teologia, o Senhor tem me
            impulsionado a conduzir mulheres para um encontro de pijama com Ele
            e umas com as outras por meio do Ministério Papo de Pijama, das
            ministrações itinerantes em retiros e eventos para mulheres nas mais
            diversas cidades do Brasil e também em meus canais na internet!
            <br />
            <br />
            Através do Papo de Pijama eu já tive o privilégio de acompanhar mais
            de 100 mulheres na jornada de intimidade com o Pai e será uma
            alegria acompanhar você também!
          </p>
        </div>
      </nav>
    </header>
  )
}
