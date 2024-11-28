import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "ONGAESHI",
  description: "I make things.",
  head: [
    [
      'style',
      {},
      ':root { --vp-home-hero-name-color: #c82925; }'
    ]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'History', link: '/history.html' }
    ],

    sidebar: [
      {
        // text: 'Examples',
        // items: [
        //   { text: 'Markdown Examples', link: '/markdown-examples' },
        //   { text: 'Runtime API Examples', link: '/api-examples' }
        // ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ongaeshi' }
    ]
  }
})
