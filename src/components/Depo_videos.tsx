import Image, { StaticImageData } from 'next/image'
import { topicsWelcome_content, blocsVideo_content } from '../utils/Contents'
import wallpaper from '/public/images/wallpaper-depo-videos.png'

interface DepoVideos {
  handleOferta: () => void
}

export const Depo_videos: React.FC<DepoVideos> = ({ handleOferta }) => {
  return (
    <header className="relative flex justify-center h-auto z-0 lg:pb-4 pb-14 bg-[#EC9D74] px-2 overflow-hidden">
      <div className="absolute">
        <Image
          src={wallpaper}
          className={`w-screen h-auto hidden lg:block
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative w-[100%] h-auto mt-16 max-w-screen-xl lg:text-[2.5rem] text-[1.5rem] font-bold p-12">
        <p
          className="relative text-center
          px-8 z-40 lg:mb-20 mb-12 uppercase"
        >
          Veja o que minhas alunas experimentaram ao vestir o{' '}
          <u>pijama de intimidade</u>
        </p>

        <div className="flex justify-between flex-wrap lg:gap-6 gap-14">
          <Depo
            video={'https://www.youtube.com/embed/az02QaBV6zM?controls=0'}
          />
          <Depo
            video={'https://www.youtube.com/embed/mo1AwVwqWPo?controls=0'}
          />
          <Depo
            video={'https://www.youtube.com/embed/zt9N7rBaVSo?controls=0'}
          />
          <Depo
            video={'https://www.youtube.com/embed/az02QaBV6zM?controls=0'}
          />
        </div>
        <div className="relative flex w-full justify-center items-center mt-12 w-2/3 h-auto m-auto z-40">
          <a className="w-full flex justify-center">
            <button
              onClick={handleOferta}
              className="lg:h-24 h-20 py-2 px-10 rounded-full 
             bg-[#751133] hover:bg-[#943a49] active:bg-[#751133]
             text-white hover:text-white active:text-white
             font-bold lg:text-3xl text-lg z-10
             transition duration-200 transform hover:scale-105 active:scale-100 mb-8"
              style={{ boxShadow: '0px 11px 24px -10px #313131ab' }}
            >
              VOU VESTIR O PIJAMA DA INTIMIDADE COM O PAI
            </button>
          </a>
        </div>
        {/* <div className="flex justify-around lg:w-3/5 m-auto lg:my-[3.5rem] my-[2rem]">
          {blocsVideo_content.map((content, i) => (
            <Blocs image={content.image} title={content.title} key={i} />
          ))}
        </div> */}
      </nav>
    </header>
  )
}

function Depo({ video }: { video: string }) {
  return (
    <div className="relative flex w-auto mb-4">
      <iframe
        src={video}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        className="lg:w-[559.998px] lg:h-[315px] w-[100%] h-[240px] lg:rounded-3xl rounded-t-3xl"
      ></iframe>
    </div>
  )
}

function Blocs({ image, title }: { image: StaticImageData; title: string }) {
  return (
    <div className="gap-6 lg:text-xl text-sm font-medium lg:w-44 w-32">
      <div className="relative flex justify-center">
        <Image
          src={image}
          alt={title}
          className="flex justify-center items-center z-40 lg:w-20 w-12 m-auto"
        />
      </div>

      <div className="text-center font-bold">{title}</div>
    </div>
  )
}
