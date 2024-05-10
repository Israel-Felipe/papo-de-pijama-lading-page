import wallpaper from '/public/images/fundos/martaMaria.png'
import martaMaria from '/public/images/martaMaria.jpg'
import Image from 'next/image'
import {
  Comparative_marta_content,
  Comparative_maria_content,
} from '../utils/Contents'
import topic from '/public/images/topic.svg'

export default function TesteMartaMaria() {
  return (
    <header className="relative flex flex-col items-center justify-center min-h-[100vh]">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter z-0`}
          alt="wallpaper"
        />
      </div>

      <div className="lg:max-w-screen-xl max-w-[75%] flex flex-col items-center z-10">
        <p
          className="text-center
          lg:text-4xl text-2xl font-bold
        lg:leading-[5rem] mt-10 text-[#751133]"
        >
          COM QUEM VOCÊ SE IDENTIFICA?
        </p>
        <p
          className="text-center
          lg:text-5xl text-2xl font-extrabold
         text-[#E98D2A] mt-2 md:mt-0"
        >
          MARTA <span className="font-bold">ou</span> MARIA?
        </p>

        <Image
          src={martaMaria}
          className={`lg:w-2/5 h-auto m-auto rounded-3xl mt-4 md:mt-6
          }`}
          alt="Marta e Maria"
        />
        <p
          className="text-center lg:text-2xl
        mt-4 text-[#751133] lg:w-1/2"
        >
          <i>
            "<b>Marta, Marta, andas inquieta e agitada</b> com muitas coisas,
            mas apenas uma é necessária. <b>Maria escolheu a boa parte</b>, e
            esta não lhe será tirada." - Lc 10.41
          </i>
        </p>
      </div>

      <nav className="relative lg:w-[850px] w-[90%] py-0 pt-12 pb-4 lg:py-20 text-[#5E0616]">
        <div className="border-[#943A49] border-dotted border-[2px] rounded-[50px] w-full lg:h-16 h-12 flex justify-around items-center">
          <div className=" w-[45%]">
            <p className="font-bold lg:text-5xl text-md text-center">MARTA</p>
          </div>
          <div className="bg-[#FF9E9C] border-[#fff] border-dotted border-[2px] rounded-full lg:w-24 lg:h-24 w-16 h-16 flex items-center justify-center z-40">
            <p className="font-black lg:text-5xl">X</p>
          </div>
          <div className=" w-[45%]">
            <p className="font-bold lg:text-5xl text-md text-center tracking-tight">
              MARIA
            </p>
          </div>
        </div>

        <div className="w-full h-auto flex py-6">
          <div className="w-[50%] border-r-[1px] border-dotted border-[#943A49] lg:px-6 px-4">
            {Comparative_marta_content.map((content, i) => (
              <Topics text={content.text} key={i} />
            ))}
          </div>
          <div className="w-[50%] lg:px-6 px-4">
            {Comparative_maria_content.map((content, i) => (
              <Topics text={content.text} key={i} />
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}

function Topics({ text }: { text: string }) {
  return (
    <div className="flex items-center min-h-[5rem] md:min-h-[6rem] lg:gap-4 gap-4">
      <Image src={topic} className={`lg:w-[24px] w-[16px]`} alt="topic" />
      <p className="text-[#5E0616] lg:text-2xl text-[0.8rem] leading-normal">
        {text}
      </p>
    </div>
  )
}
