import Image from "next/image"
import photo from "@/assets/foto.png"
import LinksDock from "./components/Dock"
import { BlurFade } from "@/components/magicui/blur-fade"

export default function Home() {
  return (
    <>
      <div className="fixed bottom-10 left-0 w-full z-50">
        <LinksDock />
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center h-screen lg:gap-20 bg-gradient-to-br from-base-300 to-base-100 overflow-hidden">
        <div className="p-10 h-full flex flex-col justify-center">
          <BlurFade>
            <h1 className="text-5xl font-bold tracking-tighter text-base-content sm:text-6xl md:text-7xl lg:text-8xl">
              Vitor Daniel
            </h1>
          </BlurFade>

          <BlurFade delay={0.2}>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 animate-gradient bg-[length:200%_auto]">
              Desenvolvedor Full Stack
            </h2>
          </BlurFade>
        </div>

        <div className="flex justify-center items-center h-full">
          <BlurFade delay={0.4}>
            <Image
              src={photo}
              width={600}
              className="sm:max-w-[80vw] md:max-w-[60vw]"
              alt="Vitor Daniel"
            />
          </BlurFade>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen px-10 py-30 mx-auto prose lg:prose-lg">
        <div>
          <h1>Sobre mim</h1>

          <p>
            Sou desenvolvedor full stack com mais de 5 anos de experiência
            prática e dezenas de projetos concluídos e clientes satisfeitos. Meu
            foco é entender o problema e desenvolver soluções completas.
          </p>

          <p>
            Sou apaixonado por tecnologia desde que me entendo por gente. Eu era
            aquela criança curiosa que desmontava os brinquedos para tentar
            entender como funcionava. Essa curiosidade me levou a aprender
            programação bem cedo. Além de curioso, sempre tive vontade de por
            meus conhecimentos em prática e criar soluções para o mundo real.
            Por isso comecei a fazer freelancer quando eu tinha por volta de 14
            anos.
          </p>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-5xl font-black">Meus projetos</h1>

        <p className="text-xl mt-4">
          Aqui estão alguns dos meus projetos mais recentes. Estou sempre
          buscando aprender e melhorar minhas habilidades, então fique à vontade
          para explorar meu trabalho.
        </p>
      </section>
    </>
  )
}
