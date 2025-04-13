import { z } from 'astro/zod'

import { FriendLinksSchema } from '../schemas/links'

export const IntegrationConfigSchema = () =>
  z.object({
    links: FriendLinksSchema(),

    /**
     * Define whether default site search provider Pagefind is enabled.
     * Set to `false` to disable indexing your site with Pagefind.
     * This will also hide the default search UI if in use.
     */
    pagefind: z.boolean().optional(),

    /**
     * Add a random quote to the footer (default on homepage footer).
     * The quote will be fetched from the specified server and the target will be replaced with the quote.
     */
    quote: z.object({
      /** The server to fetch the quote from. */
      server: z.string(),
      /** target: string, but (data: unknown) => string */
      target: z.string()
    }),

    /** Tailwindcss typography */
    typography: z.object({
      /** The class to apply to the typography. */
      class: z
        .string()
        .default('prose prose-pure dark:prose-invert dark:prose-pure prose-headings:font-medium')
    }),

    /** A lightbox library that can add zoom effect */
    mediumZoom: z.object({
      /** Enable the medium zoom library. */
      enable: z.boolean().default(true),
      /** The selector to apply the zoom effect to. */
      selector: z.string().default('.prose .zoomable'),
      /** Options to pass to the medium zoom library. */
      options: z.record(z.string(), z.any()).default({ className: 'zoomable' })
    }),

    /** The Waline comment system */
    waline: z.object({
      /** Enable the Waline comment system. */
      enable: z.boolean().default(false),
      /** The server to use for the Waline comment system. */
      server: z.string().optional(),
      /** The emoji to use for the Waline comment system. */
      emoji: z.array(z.string()).optional(),
      /** Additional configurations for the Waline comment system. */
      additionalConfigs: z.record(z.string(), z.any()).default({})
    }),
    
    /** The Giscus comment system */
    giscus: z.object({
      /** Enable the Giscus comment system. */
      enable: z.boolean().default(false),
      /** The GitHub repository to use for comments. */
      repo: z.string(),
      /** The repository ID. */
      repoId: z.string(),
      /** The discussion category name. */
      category: z.string(),
      /** The discussion category ID. */
      categoryId: z.string(),
      /** The mapping between the current page and GitHub discussion. */
      mapping: z.string().default('pathname'),
      /** Whether to enable reactions for the comments. */
      reactionsEnabled: z.string().default('1'),
      /** Whether the metadata should be sent to the parent window. */
      emitMetadata: z.string().default('0'),
      /** Where the comment box should be placed. */
      inputPosition: z.string().default('top'),
      /** The language Giscus should use. */
      lang: z.string().default('en')
    })
  })

export type IntegrationConfig = z.infer<ReturnType<typeof IntegrationConfigSchema>>
export type IntegrationUserConfig = z.input<ReturnType<typeof IntegrationConfigSchema>>
