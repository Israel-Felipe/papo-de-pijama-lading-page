import Image from "next/image";
import wallpaper from "/public/images/sombra_trilha.png";
import trilha from "/public/images/trilha.png";

export default function Trilha_semanal() {
  return (
    <header className="relative flex justify-center overflow-hidden">
      <div className="absolute">
        <Image
          src={wallpaper}
          className={`lg:w-screen lg:h-auto w-auto h-screen
          }`}
          alt="wallpaper"
        />
      </div>

      <nav className="relative w-auto h-auto mt-20 max-w-screen-xl">
        <p
          className="relative flex justify-center text-center
          lg:text-5xl text-3xl font-bold
        px-8 leading-10 z-50 lg:mt-16"
        >
          Um plano diário profundo, simples e prático
        </p>

        <p
          className="relative flex justify-start text-start
          lg:text-3xl text-lg font-medium text-[#943A49]
        px-10 lg:px-12 lg:leading-normal z-50 lg:mt-16 mt-8 tracking-[0.02em]"
        >
          Com o método Papo de Pijama você tem uma trilha semanal para
          aprofundar um tema bíblico ao longo da sua semana de forma simples,
          prática e profunda!
        </p>
        <p
          className="relative flex justify-start text-start
          lg:text-3xl text-lg font-medium text-[#943A49]
        px-10 lg:px-12 lg:leading-normal z-50 lg:mt-10 mt-8 tracking-[0.02em]"
        >
          O tema bíblico da semana possui 7 passos importantes distribuídos ao
          longo da sua semana:
        </p>

        <div>
          <Image
            src={trilha}
            className={`max-w-[80%] lg:max-w-screen-lg m-auto pg:my-16 my-6
          }`}
            alt="trilha"
          />
        </div>
      </nav>
    </header>
  );
}
