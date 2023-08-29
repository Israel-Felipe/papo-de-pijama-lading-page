/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import esferas from '/public/images/esferas.png'
import interpretar from '/public/images/interpretar.png'
import guardar from '/public/images/guardar.png'
import aplicar from '/public/images/aplicar.png'

export default function Esferas() {
  return (
    <nav className="flex flex-col justify-center items-center lg:m-auto max-w-screen-xl w-[100%] p-12 pb-40 pt-20">
      <p className=" lg:text-5xl text-3xl lg:leading-tight font-bold text-center text-[#E05A47]">
        Um Método para o seu crescimento espiritual
      </p>
      <p className=" lg:text-5xl text-3xl lg:leading-tight font-bold text-center text-[#943A49]">
        perceptível no seu dia a dia
      </p>

      <div className="flex flex-col justify-center items-center lg:items-start">
        <p className="lg:text-[1.7rem] font-medium mt-10">
          Para desfrutar de um relacionamento íntimo com o Senhor, o Método Papo
          de Pijama compreende que existem <u>três esferas</u> que irão orientar
          o desenvolvimento de sua intimidade com Deus:
        </p>

        <p
          className="text-center w-full my-20
          text-3xl lg:text-4xl font-bold text-[#751133]
         "
        >
          AS 3 ESFERAS DA INTIMIDADE (I.G.A)
        </p>
      </div>

      <div className="flex items-center justify-center mt-8 lg:mt-0 lg:w-3/5">
        <Image
          src={esferas}
          alt="esferas"
          className="z-40 m-auto lg:m-0 max-w-[90%]"
        />
      </div>

      <div className="flex mt-24">
        <Image
          src={interpretar}
          alt="interpretar"
          className="z-50 w-72 h-full m-auto lg:m-0"
        />
        <div className="flex bg-[#E2CEB6] bg-opacity-[40%] rounded-[60px] -ml-6 p-10 pl-14 h-auto mt-10 ">
          <p className="lg:text-3xl !leading-snug">
            Na esfera da interpretação, você mergulhará no universo de um texto
            bíblico, aprendendo a compreender seu contexto, suas palavras e seu
            tema central. <b>Trata-se de entender o que Deus diz</b>.
          </p>
        </div>
      </div>
      <div className="flex mt-24">
        <Image
          src={guardar}
          alt="guardar"
          className="z-50 w-72 h-full m-auto lg:m-0"
        />
        <div className="flex flex-col bg-[#E2CEB6] bg-opacity-[40%] rounded-[60px] -ml-6 p-4 pl-10 h-auto mt-10">
          <p className="lg:text-3xl !leading-snug text-center">
            <i>
              "Guardei no coração a tua palavra para não pecar contra ti" Sl
              119.11"
            </i>
          </p>
          <p className="lg:text-3xl !leading-snug mt-2">
            Na esfera do guardar, você aprenderá técnicas da espiritualidade
            cristã que ajudam a internalizar o que aprendeu, levando-o da mente
            para o coração. <b>Trata-se de guardar o que Deus diz.</b>
          </p>
        </div>
      </div>
      <div className="flex mt-24">
        <Image
          src={aplicar}
          alt="aplicar"
          className="z-50 w-72 h-full m-auto lg:m-0"
        />
        <div className="flex flex-col bg-[#E2CEB6] bg-opacity-[40%] rounded-[60px] -ml-6 p-8 pl-14 h-auto mt-10 ">
          <p className="lg:text-3xl !leading-snug text-center">
            <i>
              "Mas quem ouve estas minhas palavras e não as pratica é como um
              insensato que construiu a sua casa sobre a areia" Mt 7.24a
            </i>
          </p>
          <p className="lg:text-3xl !leading-snug mt-2">
            Na esfera da aplicação, você compreenderá como aquele texto se
            relaciona com a sua vida e o que o Senhor deseja transformar em seu
            dia a dia, de forma prática.{' '}
            <b>Trata-se de praticar o que Deus diz.</b>
          </p>
        </div>
      </div>
    </nav>
  )
}
