import { Depos_content } from '../utils/Contents'
import Image from 'next/image'
import wallpaper from '/public/images/fundos/laranja-rosa.png'

interface DepoImages {
  handleOferta: () => void
}

export const Depo_videos: React.FC<DepoImages> = ({ handleOferta }) => {
  return (
    <header className="relative flex flex-col justify-center items-center h-auto bg-[#E89D9B] z-0 overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter z-0`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative h-auto max-w-screen-xl w-full mb-12 flex flex-col items-center justify-center">
        <p className="lg:text-5xl text-3xl font-extrabold text-center mt-16 mb-6 text-[#FFFFFF]">
          VOCÊ NÃO ESTÁ SOZINHA
        </p>

        <div className="max-w-[80%] md:max-w-[900px] md:px-20 bg-[#E98D2A] flex items-center justify-center p-3 rounded-3xl md:mt-4">
          <p className="text-center lg:text-4xl text-[#FFFFFF]">
            Veja o que as participantes falam sobre o
            <b> Clube de Devoção Papo de Pijama</b>
          </p>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-start lg:px-0 mt-12 md:mt-14 gap-6 md:gap-6">
          <BlocsDepos
            video={
              'https://player.vimeo.com/video/944671998?h=9d2f66a051&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            }
            name="Esther Costa"
            citacao=""
          />
          <BlocsDepos
            video={
              'https://player.vimeo.com/video/944675312?&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            }
            name="Isa Polastri"
            citacao=""
          />
          <BlocsDepos
            video={
              'https://player.vimeo.com/video/944678098?&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            }
            name="Jamilles"
            citacao=""
          />
          <BlocsDepos
            video={
              'https://player.vimeo.com/video/944679548?&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479'
            }
            name="Adri Beppler"
            citacao=""
          />
          {/* <BlocsDepos
            video={'https://www.youtube.com/  embed/az02QaBV6zM?controls=0'}
            name="Renata Barbosa Lucas"
            idade="29 anos"
            citacao="O Papo de Pijama me ensinou a ter mais intimidade com Deus e encontrá-lo no meu dia a dia"
          /> */}
          {/* <BlocsDepos
            video={'https://www.youtube.com/embed/mo1AwVwqWPo?controls=0'}
            name="Nome da mulher"
            idade="34 anos"
            citacao="Alguma frase do vídeo ou algo assim...."
          />
          <BlocsDepos
            video={'https://www.youtube.com/embed/zt9N7rBaVSo?controls=0'}
            name="Nome da mulher"
            idade="22 anos"
            citacao="Alguma frase do vídeo ou algo assim...."
          />
          <BlocsDepos
            video={'https://www.youtube.com/embed/az02QaBV6zM?controls=0'}
            name="Nome da mulher"
            idade="24 anos"
            citacao="Precisa pegar o link certo desse video!"
          /> */}
        </div>

        <div className="relative flex justify-center items-center mt-12 h-auto z-40">
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSfSUsihoGbCTTMQ3zAChvks3_Q7UIkRkOrI5En3_Gdx0o_J2w/viewform"
            className="w-full  flex justify-center"
          >
            <button
              //onClick={handleOferta}
              className="bg-[#B52446] hover:bg-[#FD3665] active:bg-[#B52446] text-[#fff] py-4 px-6 md:px-32 rounded-full lg:text-3xl text-lg z-10 transition duration-200 transform hover:scale-105 active:scale-95 mb-8"
              style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
            >
              <b>QUERO PARTICIPAR DO CLUBE</b>
            </button>
          </a>
        </div>
      </nav>
    </header>
  )
}

function BlocsDepos({
  video,
  name,
  citacao,
}: {
  video: string
  name: string
  citacao: string
}) {
  return (
    <nav className="w-auto h-[100%] flex flex-col items-center">
      <div className="z-50 mb-4 overflow-hidden">
        {/* <iframe
          src={video}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="lg:w-[250px] lg:h-[240px] w-[100%] h-[240px] rounded-3xl rounded-t-3xl"
        ></iframe> */}
        <iframe
          src={video}
          allow="autoplay; fullscreen; picture-in-picture"
          title="Depoimento Esther Costa"
          className="w-[260px] h-[462px] rounded-[10px]"
        ></iframe>
      </div>

      <div className="hidden w-[85%] gap-4 bg-[#FFFFFF] bg-opacity-[0.35] p-4 py-10 rounded-lg -mt-6">
        <div className="flex flex-col justify-center">
          <p className="text-xl">
            <b>{name}</b>
          </p>
          {/* <p className="mt-3">
            <i>{citacao}</i>
          </p> */}
        </div>
      </div>
    </nav>
  )
}
