import Image from 'next/image'
import wallpaper from '/public/images/fundos/clube-devocao.png'
import livro from '/public/images/clubeDevocao/livro.svg'
import celular from '/public/images/clubeDevocao/celular.svg'
import notebook from '/public/images/clubeDevocao/notebook.svg'

export default function OQueEClubeDeDevocao() {
  return (
    <header className="relative flex justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen lg:h-auto object-cover
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative w-auto h-auto mt-24 max-w-screen-xl flex flex-col items-center">
        <p className="flex justify-center text-center lg:text-5xl text-3xl font-extrabold z-40 text-[#fff]">
          O QUE É O CLUBE DE DEVOÇÃO?
        </p>

        <p
          className="flex justify-center text-center max-w-[1000px]
          lg:text-3xl text-lg font-medium text-[#fff]
        lg:leading-snug z-40 lg:mt-16 mt-8 tracking-[0.02em]"
        >
          O Clube de Devoção Papo de Pijama é um clube de leitura devocional que
          tem o objetivo de conduzir mulheres numa jornada de crescimento
          espiritual de forma profunda, simples e prática a partir do estudo das
          Escrituras e o desenvolvimento de disciplinas espirituais no dia a
          dia.
        </p>
        <p
          className="flex justify-center lg:text-end lg:text-4xl text-[2.5rem] font-extrabold text-[#E98D2A] text-center my-16"
          style={{
            textShadow:
              '0px 0px 2px #751133, 0px 0px 2px #751133, 0px 0px 2px #751133, 0px 0px 2px #751133',
          }}
        >
          Você terá acesso de um ano à:
        </p>

        <div className="lg:w-[920px] lg:h-[200px] bg-[#EAD8C7] rounded-[50px] relative mb-12 flex items-center p-12">
          <Image
            src={livro}
            className={`max-w-[260px] m-auto absolute -left-4
          }`}
            alt="livro"
          />
          <p className="text-[#943A49] text-2xl ml-[220px]">
            <b>Materiais Devocionais</b> mensais em e-book seguindo a
            <b> metodologia exclusiva do Papo de Pijama</b> para você baixar
            e/ou imprimir e estudar a Bíblia no seu dia-a-dia.
          </p>
        </div>

        <div className="lg:w-[920px] lg:h-[200px] bg-[#EAD8C7] rounded-[50px] relative mb-12 flex items-center p-12">
          <Image
            src={celular}
            className={`max-w-[220px] m-auto absolute left-6
          }`}
            alt="celular"
          />
          <p className="text-[#943A49] text-2xl ml-[220px]">
            <b>Clube das Tagarelas</b>, a nossa comunidade no whatsapp para
            <b> caminharmos mais de perto</b> umas com as outras, tirar dúvidas,
            compartilhar aprendizados e ainda ter acesso aos conteúdos extras.
          </p>
        </div>

        <div className="lg:w-[920px] lg:h-[200px] bg-[#EAD8C7] rounded-[50px] relative mb-40 flex items-center p-12">
          <Image
            src={notebook}
            className={`max-w-[220px] m-auto absolute left-0
          }`}
            alt="notebook"
          />
          <p className="text-[#943A49] text-2xl ml-[220px]">
            Acesso ao <b>Encontro do Pijama</b>, nossas aulas ao vivo para
            aprofundar os estudos e <b> praticarmos juntas</b> exercícios da
            espiritualidade cristã.
          </p>
        </div>
      </nav>
    </header>
  )
}
