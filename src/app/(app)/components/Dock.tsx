"use client"

import Link from "next/link"
import type React from "react"
import {
  FaEnvelope,
  FaGithub,
  FaHome,
  FaLinkedin,
  FaWhatsapp
} from "react-icons/fa"
import { Dock, DockIcon } from "@/components/magicui/dock"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from "@/components/ui/tooltip"
import { cn } from "@/lib/utils"

const Icons: Record<
  string,
  (props: React.HTMLAttributes<SVGElement>) => React.JSX.Element
> = {
  gitHub: (props) => (
    <FaGithub {...props} title="GitHub" aria-label="GitHub" role="img" />
  ),
  linkedin: (props) => (
    <FaLinkedin {...props} title="GitHub" aria-label="GitHub" role="img" />
  ),
  email: (props) => (
    <FaEnvelope {...props} title="GitHub" aria-label="GitHub" role="img" />
  ),
  whatsapp: (props) => (
    <FaWhatsapp {...props} title="GitHub" aria-label="GitHub" role="img" />
  )
}

const DATA = {
  navbar: [{ href: "#", icon: FaHome, label: "Home" }],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/vadolasi/",
        icon: Icons.gitHub
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/vitordanieldevrn/",
        icon: Icons.linkedin
      },
      email: {
        name: "Send Email",
        url: "mailto:vitor036daniel@gmail.com",
        icon: Icons.email
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/5584981437676",
        icon: Icons.whatsapp
      }
    }
  }
}

export default function LinksDock() {
  return (
    <div className="flex flex-col items-center justify-center">
      <TooltipProvider>
        <Dock direction="middle" className="border-secondary">
          {DATA.navbar.map((item) => (
            <DockIcon key={item.label}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                        className: "hover:bg-neutral"
                      }),
                      "size-12 rounded-full"
                    )}
                  >
                    <item.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{item.label}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
          <Separator orientation="vertical" className="h-full bg-secondary" />
          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <DockIcon key={name}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Link
                    href={social.url}
                    aria-label={social.name}
                    target="_blank"
                    className={cn(
                      buttonVariants({
                        variant: "ghost",
                        size: "icon",
                        className: "hover:bg-neutral"
                      }),
                      "size-12 rounded-full"
                    )}
                  >
                    <social.icon className="size-4" />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>{name}</p>
                </TooltipContent>
              </Tooltip>
            </DockIcon>
          ))}
        </Dock>
      </TooltipProvider>
    </div>
  )
}
