import Image from 'next/image'
import lista from '/public/images/lista.png'

export default function Lista() {
  return (
    <nav className="flex flex-col justify-center items-center lg:m-auto max-w-screen-xl w-[100%] p-12">
      <p className=" w-4/5 lg:w-4/5 lg:text-5xl text-3xl lg:leading-tight font-bold mt-8 uppercase text-center text-[#EF4123]">
        Tem um erro nessa lista. Consegue identificar qual é?
      </p>
      <div className="flex mb-14">
        <div className="lg:w-[70%] flex flex-col justify-center items-center lg:items-start">
          <p className=" w-4/5 lg:w-[90%] lg:text-[1.4rem] font-medium mt-10">
            Talvez você procurou um erro de português, ou até mesmo estranhou
            chamar alguém de chato. Talvez você supôs que o erro{' '}
            <b>foi deixar o momento com Deus por último</b>.
            <br />
            <br />
            Você não está errada. Mas tem algo muito mais sutil que lhe passa
            despercebido e te faz viver a sua vida com Deus na superficialidade.
            <br />
            <br />
            Já sabe?
            <br />
            <br />
            {
              'Quando você transforma o seu "momento com Deus" em apenas mais um checklist da sua agenda'
            }{' '}
            você ainda não experimentou o que significa{' '}
            <b>intimidade com Deus no todo do seu dia a dia</b>.
          </p>
        </div>

        <div className="flex items-center justify-center mt-8 lg:mt-0 lg:w-[40%] transform -rotate-3">
          <Image src={lista} alt="lista" className="z-40 m-auto lg:m-0" />
        </div>
      </div>
    </nav>
  )
}
