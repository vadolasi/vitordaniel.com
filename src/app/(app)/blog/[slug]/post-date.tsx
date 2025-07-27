"use client"

import { formatDistanceToNow } from "date-fns"
import { ptBR } from "date-fns/locale"

function PostDate({ date }: { date: string }) {
  return (
    <span className="text-sm text-gray-500">
      Publicado{" "}
      {formatDistanceToNow(new Date(date), {
        addSuffix: true,
        locale: ptBR
      })}
    </span>
  )
}

export default PostDate
