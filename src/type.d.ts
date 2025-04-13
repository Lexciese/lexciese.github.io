import { IntegrationUserConfig as BaseIntegrationUserConfig } from 'astro-pure/types'

declare module 'astro-pure/types' {
  interface GiscusConfig {
    enable: boolean
    repo: string
    repoId: string
    category: string
    categoryId: string
    mapping: string
    reactionsEnabled: string
    emitMetadata: string
    inputPosition: string
    lang: string
  }

  interface IntegrationUserConfig extends BaseIntegrationUserConfig {
    giscus?: GiscusConfig
  }
}

declare module 'virtual:config' {
  const Config: import('astro-pure/types').ConfigOutput
  export default Config
}
