import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WaterWiki",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo/chtholly_10.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '跳转', items:[
        {text: 'MC客户端', link:'/'}
      ]},
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
