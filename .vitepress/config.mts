import { defineConfig } from 'vitepress'

const mainBar = [
  {
    text: 'Minecraft 客户端',
    link: '/Content/Minecraft_Client/README'
  },
  {
    text: 'Minecraft 服务端',
    link: '/Content/Minecraft_Server/README'
  },
  {
    text: 'Unity',
    link: '/Content/Unity/README'
  },
  {
    text: '作品',
    link: '/Content/Production/README'
  },
]

const mcClientBar = [
  ...mainBar,
  {
    text: '快速开始',
    items:[
      {
        text: '概述',
        link: '/Content/Minecraft_Client/README'
      }
    ]
  }
]

const mcServerBar = [
  ...mainBar,
  {
    text: '快速开始',
    items:[
      {
        text: '概述',
        link: '/Content/Minecraft_Server/README'
      }
    ]
  }
]

const productionBar = [
  ...mainBar,
  {
    text: '整合包',
    items: [
      {
        text: '机械飞升 (制作中)',
        link: 'Content/Production/Minecraft_Clent/MA/README'
      }
    ]
  }
]

const unityBar = [
  ...mainBar,
  {
    text: '快速开始',
    items: [
      {
        text: '概述',
        link: 'Content/Unity/README'
      }
    ]
  }
]

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/WaterWiki/",
  head: [["link", { rel: "icon", href: "/WaterWiki/logo/chtholly_10.png" }]],
  title: "WaterWiki - 沐水文档",
  description: "A VitePress Site",
  themeConfig: {
    logo: '/logo/chtholly_10.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '跳转', items:[
        {text: 'MC客户端', link:'/'}
      ]},
      { text: '作品', link: '/markdown-examples' }
    ],



    sidebar: {
      // 各页面子侧边栏
      '/': mainBar,
      "/Content/Minecraft_Client/": mcClientBar,
      "/Content/Minecraft_Server/": mcServerBar,
      "/Content/Unity/": unityBar,
      "/Content/Production/": productionBar
    },


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
