import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://0132354081914a89a41bc4fb75a4027d@bugsink.vitordaniel.com/1",

  sendDefaultPii: true,
  integrations: []
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
