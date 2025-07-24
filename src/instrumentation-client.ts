import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://dd9c7ffd8d8a4e7c8ed33cdcd256ce42@bugsink.vitordaniel.com/1",

  sendDefaultPii: true,
  integrations: []
})

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart
