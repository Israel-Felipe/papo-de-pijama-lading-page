import Image from 'next/image'
import wallpaper from '/public/images/fundos/deseja-ser-mais-parecida.jpg'
import logo from '/public/images/logo/logo-clara.png'

export default function DesejaSerMaisParecida() {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden py-14 md:py-20 h-auto">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover z-0`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:col items-start justify-center z-40 max-w-screen-xl w-[75%] md:w-[80%]">
        <div className="lg:w-[65%] items-center lg:items-start">
          <p className="text-start md:text-start lg:text-5xl text-3xl font-[600] text-[#B52446] !leading-snug">
            Deseja ser mais parecida com Maria e <b>ouvir</b> ao Senhor em meio
            a sua <b>rotina</b>?
          </p>
        </div>
        <div className="flex">
          <div className="lg:w-[80%] items-center lg:items-start mt-6 md:mt-10">
            <p className="text-justify md:text-start text-lg lg:text-2xl tracking-wide lg:w-full font-medium text-[#751133]">
              Esse é o objetivo do{' '}
              <span className="text-[#B52548] font-bold">
                Clube de Devoção Papo de Pijama
              </span>{' '}
              que vai lhe conduzir numa jornada de crescimento espiritual de
              forma profunda, simples e prática a partir do{' '}
              <b>estudo das Escrituras</b> e o desenvolvimento de{' '}
              <span className="text-[#E98D2A] font-bold">
                disciplinas espirituais no dia a dia
              </span>
              .
            </p>
          </div>
          <Image
            src={logo}
            className={`ml-[4%] -mt-10 w-[45%] h-auto m-auto hidden md:flex
          }`}
            alt="logo"
          />
        </div>
      </nav>
    </header>
  )
}
