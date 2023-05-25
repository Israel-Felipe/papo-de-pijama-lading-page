import Image from "next/image";
import logo from "/public/images/logo_footer.png";
import insta from "/public/images/insta.svg";
import youtube from "/public/images/youtube.svg";
import twitter from "/public/images/twitter.svg";

export default function Footer() {
  return (
    <footer className="flex justify-center bg-[#E4AC80] w-full h-auto p-6">
      <nav className="w-[90%] h-auto max-w-screen-xl flex justify-between">
        <div className="w-40">
          <Image
            src={logo}
            className={`w-32 h-auto m-auto
          }`}
            alt="logo"
          />
        </div>

        <div className="flex flex-col justify-center items-center text-lg w-96">
          <p>Ministério Papo de Pijama</p>
          <p>Paola Milbauer CNPJ: 38.285.769/0001-76</p>
          <p>
            2023 ©{" "}
            <a href="https://linktr.ee/israel.felipe" target="_blank">
              <span>Israel Felipe Teixeira</span>
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center gap-4 w-40">
          <a
            href="https://www.instagram.com/paolamilbauer/"
            className="w-14 h-auto hover:scale-110"
            target="_blank"
          >
            <Image src={insta} alt="insta" />
          </a>

          <a
            href="https://www.youtube.com/@paolamilbauer/"
            className="w-14 h-auto hover:scale-110"
            target="_blank"
          >
            <Image src={youtube} alt="youtube" />
          </a>

          <a
            href="https://twitter.com/paolamilbauer"
            className="w-14 h-auto hover:scale-110"
            target="_blank"
          >
            <Image src={twitter} alt="twitter" />
          </a>
        </div>
      </nav>
    </footer>
  );
}

/*  */
