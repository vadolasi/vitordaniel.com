import { generatePageMetadata, RootPage } from "@payloadcms/next/views"
import type { Metadata } from "next"
import { Suspense } from "react"
import config from "@/payload.config"
import { importMap } from "../importMap"

type Args = {
  params: Promise<{
    segments: string[]
  }>
  searchParams: Promise<{
    [key: string]: string | string[]
  }>
}

export const generateMetadata = ({
  params,
  searchParams
}: Args): Promise<Metadata> =>
  generatePageMetadata({ config, params, searchParams })

async function PageContent({ params, searchParams }: Args) {
  return (
    <RootPage
      config={config}
      params={params}
      searchParams={searchParams}
      importMap={importMap}
    />
  )
}

export default function Page({ params, searchParams }: Args) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent params={params} searchParams={searchParams} />
    </Suspense>
  )
}
