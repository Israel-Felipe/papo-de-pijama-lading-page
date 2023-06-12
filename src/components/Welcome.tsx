import { topicsWelcome_content, blocsVideo_content } from '../utils/Contents'
import wallpaper from '/public/images/wallpaper-folhas2.png'
import logo from '/public/images/logo.png'
import Image, { StaticImageData } from 'next/image'
import sombra from '/public/images/sombra.svg'

export default function Welcome() {
  return (
    <header className="relative flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-30 blur-[8px]`}
          alt="wallpaper"
        />
      </div>

      <header className="relative w-auto h-auto mt-10 lg:mt-10 max-w-screen-xl flex flex-col items-center">
        <Image
          src={logo}
          className={`lg:w-52 w-32 h-auto m-auto
          }`}
          alt="logo"
        />
        <p
          className="relative flex justify-center text-center
          lg:text-3xl text-[1.2rem] font-bold
        leading-[2rem] lg:leading-[3rem] z-40 lg:mt-4 mt-6 max-w-[80%]"
        >
          Entenda como é possível desfrutar intimidade com Deus no dia a dia e
          ser uma mulher segundo a vontade do Pai.
        </p>

        <p
          className="relative flex justify-center text-center
          lg:text-2xl text-lg font-bold text-[#943A49]
        px-8 sm:px-16 md:px-12 z-40 mt-6"
        >
          Assistindo a aula introdutória você vai aprender 3 coisas:
        </p>

        <nav className="lg:my-[1.5rem] mb-6 px-6">
          {topicsWelcome_content.map((content, i) => (
            <Topics number={content.number} text={content.text} key={i} />
          ))}
        </nav>
      </header>

      <nav className="relative w-auto h-auto lg:mt-8 max-w-screen-xl w-full">
        <div className="lg:w-3/5 h-auto m-auto">
          <div
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
              src="https://www.youtube.com/embed/iv8EnSe4oT4"
              title="O segredo do Pijama para a Intimidade com Deus"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="lg:rounded-2xl"
            ></iframe>
          </div>
        </div>

        <div className="relative lg:w-[65%] w-[95%] h-auto m-auto mt-10 z-10">
          <Image
            src={sombra}
            className={`absolute left-1/2 transform -translate-x-1/2 top-[90%] w-[95%] h-auto -z-10
          }`}
            alt="sombra"
          />
          <a
            href="https://pay.hotmart.com/H82747095C?off=gjb2hj2p"
            className="w-full"
          >
            <button
              className=" bg-[#E4795B] hover:bg-[#943a49] active:bg-[#751133] w-full lg:h-24 h-16 lg:py-2 px-4 rounded-full text-white font-bold lg:text-3xl text-sm z-10
            transition duration-200 transform hover:scale-110 active:scale-100"
            >
              QUERO SER ÍNTIMA DE DEUS NO DIA A DIA!
            </button>
          </a>
        </div>

        <div className="flex justify-around lg:w-3/5 m-auto lg:my-[4.5rem] my-[2rem]">
          {blocsVideo_content.map((content, i) => (
            <Blocs image={content.image} title={content.title} key={i} />
          ))}
        </div>
      </nav>
    </header>
  )
}

function Topics({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex lg:mt-6 mt-4 gap-4 items-center justify-start lg:text-xl text-sm font-medium">
      <div className="flex justify-center items-center rounded-full text-center border border-[#751133]">
        <h1 className="flex items-center justify-center lg:text-md lg:w-8 lg:h-8 w-6 h-6">
          {number}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="flex items-center justify-center">{text}</h1>
      </div>
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
