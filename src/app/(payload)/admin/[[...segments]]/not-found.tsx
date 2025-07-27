import { generatePageMetadata, NotFoundPage } from "@payloadcms/next/views"
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

function NotFound({ params, searchParams }: Args) {
  return (
    <Suspense>
      <NotFoundPage
        config={config}
        params={params}
        searchParams={searchParams}
        importMap={importMap}
      />
    </Suspense>
  )
}

export default NotFound
