/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import sombra from '/public/images/sombra.svg'
import ao_vivo from '/public/images/ao_vivo.png'
import wallpaper from '/public/images/fundos/laranja-baloes.png'
import biblia_aberta from '/public/images/biblia-aberta.png'

export default function Ao_vivo() {
  return (
    <header className="relative flex justify-center bg-[#C87116]">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover
          }`}
          alt="wallpaper"
        />
      </div>
      <nav className="relative w-[85%] h-auto max-w-screen-xl lg:w-full text-[#FEF4E6] flex flex-col justify-center items-center mt-20 md:mt-24">
        <p
          className="flex justify-center text-center text-4xl lg:text-7xl font-bold"
          style={{ textShadow: '1px 1px 4px rgba(0, 0, 0, 0.3)' }}
        >
          Uma verdadeira <br /> comunidade de devoção
        </p>

        <p className="lg:text-4xl text-xl md:!leading-tight w-[95%] md:w-[71%] mt-10 text-[#5E0616] md:text-center text-center">
          Todos os meses temos nosso <b>encontro do pijama</b> para compartilhar
          experiências, aprofundar nossos estudos e até mesmo praticarmos juntas{' '}
          <b>
            algumas práticas da espiritualidade cristã de forma ao vivo e online
          </b>
          . <br />É uma verdadeira caminhada de pijama, com suporte real e
          próximo!
        </p>

        <div className="w-[95%] md:w-[71%] h-auto m-auto mt-10 lg:p-6 rounded-[3.5rem]">
          <Image src={ao_vivo} className={``} alt="encontro on-line" />
        </div>

        <div className="relative w-[90%] md:w-[65%] md:h-20 m-auto mt-14 md:mt-36 z-10 mb-12 lg:mb-0">
          <Image
            src={biblia_aberta}
            className={`absolute left-1/2 transform -translate-x-1/2 -top-12 md:-top-60 h-auto z-10
          }`}
            alt="biblia"
          />
        </div>
      </nav>
    </header>
  )
}
