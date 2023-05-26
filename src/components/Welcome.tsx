import { topicsWelcome_content } from "../utils/Contents";
import Image from "next/image";
import wallpaper from "/public/images/wallpaper-folhas2.png";
import logo from "/public/images/logo.png";

export default function Welcome() {
  return (
    <header className="relative flex justify-center overflow-hidden ">
      <div className="absolute h-full w-full">
        <Image
          src={wallpaper}
          className={`lg:w-screen w-auto lg:h-auto h-full filter opacity-30 blur-[8px] object-cover`}
          alt="wallpaper"
        />
      </div>

      <header className="relative w-auto h-auto mt-10 lg:mt-20 max-w-screen-xl">
        <Image
          src={logo}
          className={`lg:w-60 w-32 h-auto m-auto
          }`}
          alt="logo"
        />
        <p
          className="relative flex justify-center text-center
          lg:text-4xl text-[1.2rem] font-bold
        px-8 sm:px-16 md:px-12 leading-[2rem] lg:leading-[3.5rem] z-50 lg:mt-16 mt-6"
        >
          Entenda como é possível desfrutar intimidade com Deus no dia a dia e
          ser uma mulher segundo a vontade do Pai.
        </p>

        <p
          className="relative flex justify-center text-center
          lg:text-3xl text-lg font-bold text-[#943A49]
        px-8 sm:px-16 md:px-12 z-50 mt-6"
        >
          Assistindo a aula introdutória você vai aprender 3 coisas:
        </p>

        <nav className="lg:my-[6.5rem] my-8 px-6">
          {topicsWelcome_content.map((content, i) => (
            <Topics number={content.number} text={content.text} key={i} />
          ))}
        </nav>
      </header>
    </header>
  );
}

function Topics({ number, text }: { number: string; text: string }) {
  return (
    <div className="flex lg:mt-10 mt-8 gap-4 items-center justify-start lg:text-2xl text-sm font-medium">
      <div className="flex justify-center items-center rounded-full text-center border border-[#751133]">
        <h1 className="flex items-center justify-center lg:text-lg lg:w-10 lg:h-10 w-6 h-6">
          {number}
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <h1 className="flex items-center justify-center">{text}</h1>
      </div>
    </div>
  );
}
