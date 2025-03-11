/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_NAME: string
  readonly VITE_BASE_URL: string
  readonly VITE_BASE_URL_BE: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
