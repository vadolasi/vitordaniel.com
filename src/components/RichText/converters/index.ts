import type { DefaultNodeTypes } from "@payloadcms/richtext-lexical"
import {
  type JSXConvertersFunction,
  LinkJSXConverter
} from "@payloadcms/richtext-lexical/react"
import { internalDocToHref } from "@/components/RichText/converters/internalLink"

type NodeTypes = DefaultNodeTypes

export const jsxConverter: JSXConvertersFunction<NodeTypes> = ({
  defaultConverters
}) => ({
  ...defaultConverters,
  ...LinkJSXConverter({ internalDocToHref })
})
