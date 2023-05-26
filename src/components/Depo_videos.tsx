import Image from "next/image";
import wallpaper from "/public/images/wallpaper-depo-videos.png";
import balon1 from "/public/images/balon1.svg";
import balon2 from "/public/images/balon2.svg";

export default function DepoVideos() {
  return (
    <header className="relative flex justify-center h-auto z-0 lg:pb-40 pb-14 bg-[#EC9D74] px-2">
      <div className="absolute">
        <Image
          src={wallpaper}
          className={`w-screen h-auto hidden lg:block
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative w-[100%] h-auto lg:mt-28 mt-16 max-w-screen-xl lg:text-[2.8rem] text-[1.5rem] font-bold">
        <p
          className="relative flex justify-center text-center
          text-white
          px-8 z-50"
        >
          O que as tagarelas estão falando sobre o
        </p>
        <p
          className="relative flex justify-center text-center
          px-8 z-50 lg:mb-20 mb-12"
        >
          Método Papo de Pijama
        </p>

        <div className="flex flex-col lg:gap-32 gap-14">
          <DepoLeft
            video={"https://www.youtube.com/embed/az02QaBV6zM?controls=0"}
            name={"Renata, Belo Horizonte - MG"}
            text={`"O papo de pijama veio no momento certo, ele me ajudou a ter mais intimidade com Deus e uma responsabilidade diária de buscar a Deus".`}
          />

          <DepoRigth
            video={"https://www.youtube.com/embed/mo1AwVwqWPo?controls=0"}
            name={"Patricia, Atlanta (USA)"}
            text={`"A Paty é legal e mais coisinhas aqui a ter mais intimidade com Deus e uma responsabilidade diária de buscar a Deus".`}
          />

          <DepoLeft
            video={"https://www.youtube.com/embed/zt9N7rBaVSo?controls=0"}
            name={"Janaina, Joinville - SC"}
            text={`"Cada vez sinto que Deus fala mais e mais de uma forma extraordinário que só fazendo o Papo de Pijama para experimentar".`}
          />
        </div>
      </nav>
    </header>
  );
}

function DepoLeft({
  video,
  name,
  text,
}: {
  video: string;
  name: string;
  text: string;
}) {
  return (
    <div className="lg:flex w-full">
      <div className="relative flex w-auto">
        <iframe
          src={video}
          name={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="lg:w-[622.22px] lg:h-[350px] w-[100%] h-[240px] lg:rounded-3xl rounded-t-3xl"
        ></iframe>

        <Image
          src={balon1}
          alt={name}
          className="absolute lg:-bottom-20 lg:-right-16 lg:w-52 w-32 -bottom-12 -right-4 transform rotate-[16deg] lg:rotate-0"
        />

        <p
          className="absolute lg:bottom-4 lg:-right-10 bottom-2 -right-0
        lg:text-[20px] text-[12.5px] lg:-rotate-[8deg] rotate-[8deg] text-white font-normal lg:w-40 w-24 text-center"
        >
          {name}
        </p>
      </div>

      <div className="flex justify-center items-center text-center lg:text-start font-normal lg:text-[1.6rem] text-[1.2rem] bg-white bg-opacity-50 rounded-r-3xl rounded-l-3xl lg:rounded-l-none lg:p-16 p-8 lg:-ml-6 -mt-6 lg:-mt-0">
        <h3 className="lg:ml-4 text-[#323232] mt-6 lg:mt-0">{text}</h3>
      </div>
    </div>
  );
}

function DepoRigth({
  video,
  name,
  text,
}: {
  video: string;
  name: string;
  text: string;
}) {
  return (
    <div className="lg:flex-row w-full flex flex-col-reverse">
      <div className="flex justify-center items-center text-center lg:text-end font-normal lg:text-[1.6rem] text-[1.2rem] bg-white bg-opacity-50 rounded-r-3xl rounded-l-3xl lg:rounded-r-none lg:p-16 p-8 lg:-mr-24 -mt-8 lg:-mt-0">
        <h3 className="lg:mr-20 text-[#323232] mt-6 lg:mt-0">{text}</h3>
      </div>

      <div className="relative flex w-auto">
        <iframe
          src={video}
          name={name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          className="lg:w-[622.22px] lg:h-[350px] w-[100%] h-[240px] lg:rounded-3xl rounded-t-3xl"
        ></iframe>
        <Image
          src={balon2}
          alt={name}
          className="absolute lg:-bottom-20 lg:-left-20 -bottom-10 -right-4
          lg:w-52 w-32"
        />
        <p
          className="absolute lg:bottom-4 lg:-left-10 bottom-4 right-0
        lg:text-[20px] text-[13px] rotate-[8deg] text-white font-normal lg:w-36 w-24 text-center"
        >
          {name}
        </p>
      </div>
    </div>
  );
}
