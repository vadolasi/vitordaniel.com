import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: "https://ffb5f92369f2ffb2de0a10539e97df89@o4509896925642752.ingest.us.sentry.io/4509896928133120",
  tracesSampleRate: 1,
  enableLogs: true,
  debug: false
})
