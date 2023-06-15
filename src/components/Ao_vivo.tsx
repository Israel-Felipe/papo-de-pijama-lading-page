/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import sombra from '/public/images/sombra.svg'
import ao_vivo from '/public/images/ao_vivo.png'

export default function Ao_vivo() {
  return (
    <header className="flex justify-center  bg-[#943A49] z-0 lg:p-20 overflow-hidden ">
      <nav className="w-[90%] h-auto lg:mt-12 max-w-screen-xl lg:w-full text-[#FEF4E6] flex flex-col justify-center items-center mt-20 lg:mt-0">
        <p
          className="flex justify-center text-center
          text-4xl lg:text-5xl font-bold text-[#E4795B]
         "
          style={{ textShadow: '1px 1px #FEF4E6' }}
        >
          ENCONTROS DO PIJAMA AO VIVO
        </p>

        <p
          className="flex justify-center text-center
          lg:text-3xl text-xl font-bold lg:w-3/5 leading-normal mt-8"
        >
          Um ambiente para Fortalecer a fé, ser Ouvida, Aprofundar-se e ser
          Encorajada!
        </p>

        <p
          className="flex justify-center text-center
          lg:text-2xl lg:w-3/5 text-lg font-medium leading-normal mt-6 italic"
        >
          "que nos animemos uns aos outros por meio da fé que vocês e eu temos”
          Rm 1.12
        </p>

        <p
          className="flex justify-center text-start
          lg:text-xl lg:w-3/4 lg:leading-relaxed leading-relaxed mt-10"
        >
          Na carta aos Romanos, o Apóstolo Paulo expressa o seu desejo de
          visitá-los e compartilhar os dons espirituais e fortalecer a fé para
          serem animados mutuamente por meio da vivência conjunta da fé.
          <br />
          <br />
          No Método Papo de Pijama, esse compartilhar de vivências e
          experiências acontece em nossos Encontros do Pijama, afinal, não
          usamos o pijama na frente de qualquer pessoa não é? Apenas de pessoas
          íntimas e próximas com quem podemos dividir nossa vida e crescer
          juntas na fé.
        </p>

        <div className="lg:w-3/5 h-auto m-auto lg:mt-16 mt-10 bg-[#E4795B] lg:p-6 rounded-[3.5rem]">
          <Image
            src={ao_vivo}
            className={`lg:hover:scale-125
          }`}
            alt="encontro on-line"
          />
        </div>

        <div className="relative lg:w-[55%] h-auto m-auto mt-12 z-10 mb-12 lg:mb-0">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[90%] w-[95%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a href="#oferta" className="w-full">
            <button
              className=" bg-[#FEF4E6] hover:bg-[#E4AC80] active:bg-[#E4795B] text-[#751133] active:text-[#FEF4E6]
              w-full h-24 py-2 px-10 rounded-full
              font-bold lg:text-2xl text-xl z-10
            transition duration-200 transform ho  ver:scale-110 active:scale-100"
            >
              EU QUERO VESTIR O PIJAMA DA INTIMIDADE
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}
