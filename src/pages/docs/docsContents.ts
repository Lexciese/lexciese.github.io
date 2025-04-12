import type { CardListData } from 'astro-pure/types'

// Docs content declaration
export const docs: CardListData = {
  title: 'Docs content',
  list: [
    {
      title: 'Test',
      children: [
        { title: 'Deployment', link: '/docs/test/test' }
      ]
    }
  ]
}
