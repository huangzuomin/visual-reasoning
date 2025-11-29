// docs/.vitepress/config.mts
import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import matter from 'gray-matter'

// 通用：根据目录生成 sidebar（支持 title 和 sidebarOrder）
function genSidebarFromDir(dir: string, base = '/frameworks/') {
  const absDir = path.resolve(__dirname, '..', dir)

  const files = fs
    .readdirSync(absDir)
    .filter((file) => file.endsWith('.md'))

  const items = files.map((file) => {
    const fullPath = path.join(absDir, file)
    const content = fs.readFileSync(fullPath, 'utf-8')
    const { data } = matter(content)

    const nameWithoutExt = file.replace(/\.md$/, '')

    return {
      // 优先用 frontmatter 的 title，没有就退回文件名
      text: (data as any).title || nameWithoutExt,
      link: `${base}${nameWithoutExt}`,
      // 用来排序，没写 sidebarOrder 的放后面
      order: (data as any).sidebarOrder ?? 999
    }
  })

  // 根据 order 排序
  items.sort((a, b) => a.order - b.order)

  // 去掉 order，只返回 VitePress 需要的结构
  return items.map(({ text, link }) => ({ text, link }))
}

export default defineConfig({
  title: '视觉推理 Visual Reasoning',
  description: 'S-L-G-T 视觉推理框架与新闻可视化方法论',
  lang: 'zh-CN',

  themeConfig: {
    nav: [
      { text: '指南', link: '/guide/intro' },
      { text: 'S-L-G-T', link: '/frameworks/slgt' },
      { text: '案例库', link: '/cases/' },
      {
        text: '回到温故智新',
        link: 'https://huangzuomin.com'
      }
    ],

    sidebar: {
      '/guide/': [
        {
          text: '入门',
          collapsed: false,
          items: [
            { text: '发刊词（第 0 期）', link: '/guide/intro' },
            { text: '视觉推理是什么', link: '/guide/visual-reasoning' }
          ]
        }
      ],

      '/frameworks/': [
        {
          text: 'S-L-G-T 框架',
          collapsed: false,
          // 🔥 这里自动从 docs/frameworks 生成菜单
          items: genSidebarFromDir('frameworks')
        }
      ],

      '/cases/': [
        {
          text: '案例库',
          collapsed: false,
          items: [
            { text: '概览', link: '/cases/' }
          ]
        }
      ]
    }
  }
})
