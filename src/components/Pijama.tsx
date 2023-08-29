/* eslint-disable react/no-unescaped-entities */
import pijama from '/public/images/pijama.png'
import Image from 'next/image'
export default function Pijama() {
  return (
    <header className="flex justify-center bg-[#751133] z-0 overflow-hidden">
      <nav className="p-12 h-auto lg:mt-12 max-w-screen-xl lg:w-full text-[#FEF4E6] flex flex-col mt-20 lg:mt-0">
        <p
          className="text-start text-4xl lg:text-[2.6rem] font-bold text-[#E4795B] leading-[65px] uppercase"
          style={{ textShadow: '0px 0px 10px rgba(49, 49, 49, 0.685)' }}
        >
          Antes de abrir a bíblia, vista o seu pijama
        </p>

        <div className="flex">
          <p className="lg:text-[1.4rem] font-medium mt-10 w-[60%]">
            Antes de abrir minha Bíblia, eu abri minha gaveta.{' '}
            <b>Lá estava meu pijama velho</b>, aquele todo surrado que ganhei de
            presente de aniversário.
            <br />
            <br />
            Enquanto eu o desenrolo , ele olha pra mim e diz:
            <br />
            <br />
            Eu <b>posso estar gasto</b> mas ainda me lembro do{' '}
            <b>som das suas risadas naquela noite</b> de julho com as amigas na
            sua sala.
            <br />
            <br />
            Eu <b>posso estar furado</b>, mas eu ainda sinto o cheiro daquele
            cafezinho coado que seu marido te trouxe na cama
            <b> no dia do seu aniversário</b>.
            <br />
            <br />
            Eu <b>posso estar manchado</b>, mas como eu amo{' '}
            <b>passar o domingo contigo</b> e sentir os abraço dos seus
            familiares.
          </p>
          <Image
            src={pijama}
            className={`w-[35%] h-auto m-auto
          }`}
            alt="pijama"
          />
        </div>

        <p className="lg:text-[1.4rem] font-medium mt-10">
          Ao ouvir o meu velho pijama, meus olhos abriram para{' '}
          <b>uma das lições mais importantes do dia a dia</b>. Percebi que o que
          pra mim é apenas rotineiro, como o simples vestir um pijama, pode
          carregar os momentos mais íntimos da minha história.
          <br />
          <br />
          Não o uso diante de qualquer um, afinal, pijama é intimidade. Pijama é
          simplicidade. Pijama é poder estar segura diante daqueles que me amam
          para além de performances e aparências.
          <br />
          <br />E o mais surpreendente é aprender a <b>vestir o pijama</b>{' '}
          diante daquele que quer ter um <b>relacionamento íntimo comigo</b>, e
          me diz:
        </p>

        <p
          className="flex justify-center text-center text-[#E4AC80]
          lg:text-3xl text-xl font-bold my-10 m-auto"
        >
          "Filha, andas inquieta e agitada com muitas coisas mas apenas uma é
          necessária, sente-se aqui, vamos papear de pijama?"
        </p>
      </nav>
    </header>
  )
}
