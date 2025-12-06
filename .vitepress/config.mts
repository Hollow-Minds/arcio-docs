import { defineConfig } from 'vitepress'
import { itemData } from './src/data/items'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  base: "/arcio-docs/",
  title: "🧙 Arcio",
  description: "A magical Hytale automation mod",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/getting-started' },
      { text: 'Items', link: '/item/' },
      { text: 'API', link: '/api/' }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '📖 Guide',
          items: [
            { text: '🚀 Getting Started', link: '/guide/getting-started' },
            { text: '🌟 Overview', link: '/guide/overview' },
            { text: '🧱 Blocks & Items', link: '/guide/blocks' },
            { text: '⚙️ Core Mechanics', link: '/guide/mechanics' },
            { text: '✨ Leylight', link: '/guide/leylight' },
            { text: '🛠️ Advanced Features', link: '/guide/advanced' },
            { text: '🌍 Community & Sharing', link: '/guide/community' },
            { text: '📅 Development Plans', link: '/guide/development' }
          ]
        }
      ],
      '/api/': [
        {
          text: '📚 API Documentation'
        }
      ],
      '/item/': itemData.filter(item => !item.native).map(item => ({
        text: item.name,
        link: `/item/${item.uri}`
      })),
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/Void-Bond/arcio' },
      { icon: 'discord', link: 'https://discord.gg/8tX9us8XBN' },
    ],
    footer: {
      message: "Made with ✨",
      copyright: "Copyright © 2025 Void Bond"
    }
  }
})
