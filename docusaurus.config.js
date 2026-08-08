module.exports = {
  title: 'Visual Products',
  tagline: 'Visual 系列产品与文档中心',
  url: 'https://visual-worktree-docs.netlify.app',
  baseUrl: '/',
  organizationName: 'imberZsk',
  projectName: 'visual-worktree-docs',
  favicon: 'img/favicon.ico',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  i18n: {
    defaultLocale: 'zh-CN',
    locales: ['zh-CN'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          routeBasePath: 'blog',
          showReadingTime: true,
          blogTitle: 'Visual Worktree 文章',
          blogDescription:
            '围绕多仓库任务开发、Git worktree 管理和桌面研发工具的实践文章。',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    image: 'img/visual-worktree-overview.png',
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Visual Products',
      logo: {
        alt: 'Visual Worktree Logo',
        src: 'img/logo.png',
      },
      items: [
        { to: '/products', label: '产品', position: 'left' },
        { to: '/', label: 'Worktree 文档', position: 'left' },
        { to: '/features', label: '功能', position: 'left' },
        { to: '/getting-started', label: '快速开始', position: 'left' },
        {
          to: '/blog/visual-worktree-product-tour',
          label: '功能文章',
          position: 'left',
        },
        {
          href: 'https://github.com/imberZsk/visual-worktree',
          label: '源码仓库',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '内容',
          items: [
            { label: '产品介绍', to: '/' },
            { label: '功能总览', to: '/features' },
            { label: '快速开始', to: '/getting-started' },
            { label: '数据与隐私', to: '/privacy-and-data' },
            { label: '功能文章', to: '/blog/visual-worktree-product-tour' },
          ],
        },
        {
          title: 'Visual 产品',
          items: [
            { label: '全部产品', to: '/products' },
            {
              label: 'Visual Worktree',
              href: 'https://github.com/imberZsk/visual-worktree',
            },
            {
              label: 'Visual AI Coding',
              href: 'https://github.com/imberZsk/visual-ai-coding',
            },
            {
              label: 'Visual Lark Bridge',
              href: 'https://github.com/imberZsk/visual-lark-bridge',
            },
            {
              label: 'Visual Learn',
              href: 'https://github.com/imberZsk/visual-learn',
            },
            {
              label: 'Visual Muse',
              href: 'https://github.com/imberZsk/visual-muse',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual Products.`,
    },
  },
}
