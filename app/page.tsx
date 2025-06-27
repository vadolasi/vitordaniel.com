import type { StaticImport } from "next/dist/shared/lib/get-img-props"
import Image from "next/image"
import { GrMysql } from "react-icons/gr"
import {
  SiAmazonwebservices,
  SiDaisyui,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiJavascript,
  SiMongodb,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiRedis,
  SiShadcnui,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si"
import type { Person, WithContext } from "schema-dts"
import photo from "@/assets/foto.png"
import goliImage from "@/assets/goli.png"
import inbcmImage from "@/assets/inbcm.jpg"
import { BlurFade } from "@/components/magicui/blur-fade"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "@/components/ui/card"
import LinksDock from "./components/Dock"

const BLUR_FADE_DELAY = 0.4

const Icons: Record<
  string,
  (props: React.HTMLAttributes<SVGElement>) => React.JSX.Element
> = {
  javascript: (props) => (
    <SiJavascript
      {...props}
      title="JavaScript"
      aria-label="JavaScript"
      role="img"
    />
  ),
  typescript: (props) => (
    <SiTypescript
      {...props}
      title="TypeScript"
      aria-label="TypeScript"
      role="img"
    />
  ),
  nodejs: (props) => (
    <SiNodedotjs {...props} title="Node.js" aria-label="Node.js" role="img" />
  ),
  python: (props) => (
    <SiPython {...props} title="Python" aria-label="Python" role="img" />
  ),
  mongodb: (props) => (
    <SiMongodb {...props} title="MongoDB" aria-label="MongoDB" role="img" />
  ),
  postgresql: (props) => (
    <SiPostgresql
      {...props}
      title="PostgreSQL"
      aria-label="PostgreSQL"
      role="img"
    />
  ),
  mysql: (props) => (
    <GrMysql {...props} title="MySQL" aria-label="MySQL" role="img" />
  ),
  aws: (props) => (
    <SiAmazonwebservices {...props} title="AWS" aria-label="AWS" role="img" />
  ),
  react: (props) => (
    <SiReact {...props} title="React.js" aria-label="React.js" role="img" />
  ),
  nestjs: (props) => (
    <SiNestjs {...props} title="NestJS" aria-label="NestJS" role="img" />
  ),
  nextjs: (props) => (
    <SiNextdotjs {...props} title="Next.js" aria-label="Next.js" role="img" />
  ),
  tailwindcss: (props) => (
    <SiTailwindcss
      {...props}
      title="Tailwind CSS"
      aria-label="Tailwind CSS"
      role="img"
    />
  ),
  daisyui: (props) => (
    <SiDaisyui {...props} title="DaisyUI" aria-label="DaisyUI" role="img" />
  ),
  shadcnui: (props) => (
    <SiShadcnui
      {...props}
      title="Shadcn UI"
      aria-label="Shadcn UI"
      role="img"
    />
  ),
  reactHookForm: (props) => (
    <SiReacthookform
      {...props}
      title="React Hook Form"
      aria-label="React Hook Form"
      role="img"
    />
  ),
  reactQuery: (props) => (
    <SiReactquery
      {...props}
      title="React Query"
      aria-label="React Query"
      role="img"
    />
  ),
  fastapi: (props) => (
    <SiFastapi {...props} title="FastAPI" aria-label="FastAPI" role="img" />
  ),
  redis: (props) => (
    <SiRedis {...props} title="Redis" aria-label="Redis" role="img" />
  ),
  docker: (props) => (
    <SiDocker {...props} title="Docker" aria-label="Docker" role="img" />
  ),
  express: (props) => (
    <SiExpress
      {...props}
      title="Express.js"
      aria-label="Express.js"
      role="img"
    />
  )
}

const skills: Record<
  string,
  (props: React.HTMLAttributes<SVGElement>) => React.JSX.Element
> = {
  JavaScript: Icons.javascript,
  TypeScript: Icons.typescript,
  Python: Icons.python,
  "Node.js": Icons.nodejs,
  "React.js": Icons.react,
  PostgreSQL: Icons.postgresql,
  MongoDB: Icons.mongodb,
  MySQL: Icons.mysql,
  Redis: Icons.redis,
  Docker: Icons.docker,
  AWS: Icons.aws,
  "Tailwind CSS": Icons.tailwindcss,
  "Next.js": Icons.nextjs,
  "Express.js": Icons.express,
  NestJS: Icons.nestjs,
  DaisyUI: Icons.daisyui,
  "Shadcn UI": Icons.shadcnui,
  "React Hook Form": Icons.reactHookForm,
  "React Query": Icons.reactQuery,
  FastAPI: Icons.fastapi
}

const projects: {
  name: string
  description: string
  url: string
  image: string | StaticImport
  skills: ((props: React.HTMLAttributes<SVGElement>) => React.JSX.Element)[]
}[] = [
  {
    name: "Inventário Nacional de Bens Culturais Musealizados (INBCM)",
    description:
      "Ferramenta para o Instituto Brasileiro de Museus (IBRAM) catalogar e analisar os acervos de todos os mais de 3 mil museus dos país",
    url: "https://nocs.ifrn.edu.br/nocs-lab-apresenta-inovacoes-no-forum-nacional-de-museus-com-os-projetos-inbcm-e-obatala/",
    image: inbcmImage,
    skills: [
      skills["TypeScript"],
      skills["React.js"],
      skills["Node.js"],
      skills["Express.js"],
      skills["MongoDB"],
      skills["React Hook Form"],
      skills["React Query"],
      skills["Tailwind CSS"]
    ]
  },
  {
    name: "Glossário Online em Libras para Informática (GOLI)",
    description:
      "Glossário online em libras para facilitar o aprendizado de termos técnicos para pessoas surdas",
    url: "https://ojs.studiespublicacoes.com.br/ojs/index.php/cadped/article/view/13995",
    image: goliImage,
    skills: [
      skills["TypeScript"],
      skills["React.js"],
      skills["Next.js"],
      skills["Node.js"],
      skills["Express.js"],
      skills["MySQL"],
      skills["React Hook Form"],
      skills["React Query"],
      skills["Tailwind CSS"]
    ]
  }
]

export default function Home() {
  const jsonLd: WithContext<Person> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Vitor Daniel",
    url: "https://vitordaniel.com",
    image: "https://github.com/vadolasi.png",
    jobTitle: "Desenvolvedor Full Stack"
  }

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: Needs to be escaped for JSON-LD
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c")
        }}
      />

      <div className="fixed bottom-10 left-0 w-full z-50">
        <LinksDock />
      </div>

      <section className="flex flex-col lg:flex-row items-center justify-center h-screen lg:gap-20 bg-gradient-to-br from-base-100 to-base-300 overflow-hidden">
        <div className="p-10 h-full flex flex-col justify-center">
          <BlurFade>
            <h1 className="text-5xl font-bold tracking-tighter text-base-content sm:text-6xl md:text-7xl lg:text-8xl">
              Vitor Daniel
            </h1>
          </BlurFade>

          <BlurFade delay={BLUR_FADE_DELAY * 1}>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-sky-500 via-indigo-500 to-fuchsia-500 animate-gradient bg-[length:200%_auto]">
              Desenvolvedor Full Stack
            </h2>
          </BlurFade>
        </div>

        <div className="flex justify-center items-center h-full">
          <BlurFade delay={BLUR_FADE_DELAY * 2}>
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

          <h2>Principais tecnologias</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-4">
            {Object.entries(skills).map(([name, Icon]) => (
              <div key={name} className="flex flex-col items-center">
                <Icon className="size-10 text-primary mb-2" />
                <span className="text-xs text-center">{name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center min-h-screen px-10 py-30 w-full bg-base-200">
        <div className="md:w-2/3 lg:w-1/2">
          <h1 className="text-5xl font-black">Meus projetos</h1>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6 mt-10">
            {projects.map((project) => (
              <Card key={project.name} className="pt-0">
                <Image
                  src={project.image}
                  alt={project.name}
                  width={600}
                  height={337}
                  className="rounded-t-xl object-cover aspect-16/9 w-full m-0!"
                />
                <CardHeader>
                  <CardTitle className="text-base">{project.name}</CardTitle>
                  <CardDescription className="text-sm">
                    {project.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.skills.map((SkillIcon) => (
                      <SkillIcon
                        key={SkillIcon.name}
                        className="size-5 text-primary"
                      />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline text-sm font-medium mt-2"
                  >
                    Mais informações
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
