import Image from "next/image";
import wallpaper from "/public/images/wallpaper_quemsou.png";
import foto from "/public/images/foto_paola.jpg";

export default function Quemsou() {
  return (
    <header className="relative flex flex-col justify-center items-center overflow-hidden lg:p-36 h-auto">
      <div className="absolute  h-full w-full">
        <Image
          src={wallpaper}
          className={`w-auto h-full lg:w-screen object-cover filter opacity-30 hidden lg:block`}
          alt="wallpaper"
        />
      </div>

      <nav className="flex flex-col-reverse lg:flex-row items-center justify-center z-50 max-w-screen-xl">
        <div className="lg:w-1/2 w-full flex items-center justify-center mt-8 mb-10">
          <div className="w-4/5 h-auto m-auto bg-[#E4795B] p-2 rounded-[3.5rem]">
            <Image
              src={foto}
              alt="Paola Muehlbauer"
              className="rounded-[3.5rem]"
            />
          </div>
        </div>

        <div className="lg:w-1/2 w-[90%] flex flex-col items-center lg:items-start mt-14 lg:mt-0">
          <p className="flex justify-center lg:text-start text-center lg:text-[2.7rem] text-[2.3rem] font-bold text-[#E4795B]">
            Quem é a Paola Milbauer?
          </p>

          <p
            className="flex justify-center text-start
          lg:text-[1.4rem] lg:w-full w-[90%] mt-8 font-medium leading-relaxed"
          >
            Muito prazer! Eu sou a Paola Milbauer, cristã por redenção e teóloga
            por formação!
            <br />
            <br />
            Cresci na igreja mas por muito tempo minha fé se resumiu a uma lista
            de obrigações e religiosidade. Mas, em Sua graça e misericórdia, o
            Senhor tem me ensinado a vestir o pijama de filha e desfrutar de
            intimidade com Ele - uma intimidade real que vai além de uma lista
            de obrigações e envolve todo o nosso ser!
            <br />
            <br />
            Desde 2020, ao final da minha faculdade de teologia, o Senhor tem me
            impulsionado a conduzir mulheres para um encontro de pijama com Ele
            e umas com as outras por meio do Ministério Papo de Pijama, das
            ministrações itinerantes em retiros e eventos para mulheres nas mais
            diversas cidades do Brasil e também em meus canais na internet!
          </p>
        </div>
      </nav>
    </header>
  );
}
