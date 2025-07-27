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

export default function Page({ params, searchParams }: Args) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RootPage
        config={config}
        params={params}
        searchParams={searchParams}
        importMap={importMap}
      />
    </Suspense>
  )
}
