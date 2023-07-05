import wallpaper from '/public/images/wallpaper-folhas2.png'
import logo from '/public/images/logo.png'
import Image from 'next/image'

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

      <header className="relative w-auto h-auto mt-10 lg:mt-10 max-w-screen-xl flex flex-col items-center w-[70%]">
        <Image
          src={logo}
          className={`lg:w-44 w-32 h-auto m-auto
          }`}
          alt="logo"
        />
        <p
          className="relative flex justify-center text-center
          lg:text-4xl text-[1.2rem] font-bold
        leading-[2rem] lg:leading-[3rem] z-40 lg:mt-4 mt-6 max-w-[80%]"
        >
          Desenvolva sua intimidade com Deus e perceba a sua presença em meio a
          sua rotina diária
        </p>

        <p className="relative text-center lg:text-3xl lg:leading-[2.8rem] text-lg font-medium text-[#943A49] px-8 sm:px-16 md:px-12 z-40 mt-6 max-w-[98%]">
          Entenda como muitas mulheres estão <b>crescendo na fé</b> e
          experimentando <b>senso de propósito, significado e paz</b> no dia a
          dia ao vivenciarem o <u>segredo do pijama</u> e aplicarem as{' '}
          <u>três esferas da intimidade</u>:
        </p>
      </header>

      <nav className="relative w-auto h-auto max-w-screen-xl w-full my-[3.5rem]">
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
      </nav>
    </header>
  )
}
