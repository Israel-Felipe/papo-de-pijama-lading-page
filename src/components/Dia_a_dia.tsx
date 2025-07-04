import Image from 'next/image'
import wallpaper from '/public/images/fundos/rever-aulas.png'
import notebook_rever from '/public/images/notebook-rever.png'
import celular_rever from '/public/images/clubeDevocao/celular.svg'

interface Dia_a_diaProps {
  handleOferta: () => void
}

export const Dia_a_dia: React.FC<Dia_a_diaProps> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col lg:m-16 mt-16 z-40 max-w-screen-xl md:px-16 md:w-[90%] w-[90%]">
        <div>
          <div className="flex flex-col justify-center items-center lg:items-start text-center">
            <p className="lg:text-6xl text-4xl font-extrabold mt-16 mb-14 md:mb-16 md:ml-10">
              Você pode rever as aulas sempre que precisar!
            </p>
            <div className="flex flex-col md:flex-row items-center">
              <div className="flex items-center justify-center md:w-2/5 w-[80%] h-full">
                <Image
                  src={notebook_rever}
                  className={`w-auto`}
                  alt="aulas gravadas"
                />
              </div>
              <div className="flex flex-col md:w-1/2 w-[90%] mt-6 md:mt-0">
                <p className="lg:text-[1.6rem] text-lg text-center md:text-start !leading-normal font-medium">
                  Nossos encontros são verdadeiras aulas de espiritualidade e
                  interpretação bíblica com convidadas especiais! Por isso, eles
                  ficam gravados em nossa plataforma para você poder acessar
                  sempre que precisar retornar algum assunto estudado.
                </p>
                {/* <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfSUsihoGbCTTMQ3zAChvks3_Q7UIkRkOrI5En3_Gdx0o_J2w/viewform"
                  className="w-full  flex justify-center"
                > */}
                <button
                  onClick={handleOferta}
                  className="bg-[#5E0616] hover:bg-[#FD3665] active:bg-[#5E0616] text-[#fff] py-4 px-4 rounded-full lg:text-xl text-md z-10 transition duration-200 transform hover:scale-105 active:scale-100 mt-4 md:w-3/4 m-auto uppercase"
                >
                  <b>Quero papear de pijama também!</b>
                </button>
                {/* </a> */}
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center mt-10 md:mt-16">
              <div className="flex flex-col md:w-1/2 w-[90%] md:ml-10">
                <p className="lg:text-6xl text-3xl font-extrabold mt-8 mb-6 text-[#fff]">
                  Comunidade das tagarelas
                </p>
                <p className="bg-[#E98D2A] lg:text-[1.6rem] font-medium mb-6 text-[#fff]">
                  <i>Seu lugar para desabafar, perguntar e dividir!</i>
                </p>
                <p className="lg:text-[1.6rem] text-lg font-medium text-[#fff] !leading-normal">
                  Nesse grupo, você poderá tagarelar com outras mulheres que
                  estão na mesma jornada de intimidade com Deus, compartilhando
                  suas dificuldades, suas dúvidas, motivos de oração e muito
                  mais! Ao fazer parte do <b>Clube Papo de Pijama</b>, você terá
                  acesso a um espaço especial: a <b>Comunidade das Tagarelas</b>
                  .
                </p>
              </div>
              <div className="flex items-center justify-center w-[60%] md:w-[40%] mt-6 md:mt-10 mb-14 md:mb-0 h-full">
                <Image src={celular_rever} className={`w-auto`} alt="celular" />
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
