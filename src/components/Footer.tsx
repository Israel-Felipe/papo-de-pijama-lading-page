import Image from 'next/image'
import logo from '/public/images/logo_footer.png'
import insta from '/public/images/insta.svg'
import youtube from '/public/images/youtube.svg'
import twitter from '/public/images/twitter.svg'

export default function Footer() {
  return (
    <footer className="absolute bottom-0 flex justify-center bg-[#E4AC80] w-full h-auto p-6">
      <nav className="w-[90%] h-auto max-w-screen-xl flex flex-col-reverse lg:flex-row justify-between">
        <div className="w-40">
          <Image
            src={logo}
            className={`w-32 h-auto m-auto hidden lg:block
          }`}
            alt="logo"
          />
        </div>

        <div className="flex flex-col justify-center items-center lg:text-lg text-sm text-center lg:w-96 mt-4">
          <p className="font-bold">Ministério Papo de Pijama</p>
          <p>Paola Milbauer CNPJ: 38.285.769/0001-76</p>
          <p>
            2023 ©{' '}
            <a href="https://linktr.ee/israel.felipe">
              <span>Israel Felipe Teixeira</span>
            </a>
          </p>
        </div>

        <div className="flex justify-center items-center lg:gap-4 gap-6 lg:w-40">
          <a
            href="https://www.instagram.com/paolamilbauer/"
            className="lg:w-14 w-12 h-auto hover:scale-110"
          >
            <Image src={insta} alt="insta" />
          </a>

          <a
            href="https://www.youtube.com/@paolamilbauer/"
            className="lg:w-14 w-12 h-auto hover:scale-110"
          >
            <Image src={youtube} alt="youtube" />
          </a>

          <a
            href="https://twitter.com/paolamilbauer"
            className="lg:w-14 w-12 h-auto hover:scale-110"
          >
            <Image src={twitter} alt="twitter" />
          </a>
        </div>
      </nav>
    </footer>
  )
}

/*  */
