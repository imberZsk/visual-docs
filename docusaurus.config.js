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
        alt: 'Visual Products Logo',
        src: 'img/logo.png',
        href: '/products',
      },
      items: [
        { to: '/', label: 'Visual Worktree', position: 'left' },
        {
          to: '/visual-ai-coding',
          label: 'Visual AI Coding',
          position: 'left',
        },
        {
          to: '/visual-lark-bridge',
          label: 'Visual Lark Bridge',
          position: 'left',
        },
        {
          to: '/visual-learn',
          label: 'Visual Learn',
          position: 'left',
        },
        {
          to: '/visual-muse',
          label: 'Visual Muse',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Visual 产品',
          items: [
            { label: '全部产品', to: '/products' },
            {
              label: 'Visual Worktree',
              to: '/',
            },
            {
              label: 'Visual AI Coding',
              to: '/visual-ai-coding',
            },
            {
              label: 'Visual Lark Bridge',
              to: '/visual-lark-bridge',
            },
            {
              label: 'Visual Learn',
              to: '/visual-learn',
            },
            {
              label: 'Visual Muse',
              to: '/visual-muse',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual Products.`,
    },
  },
}
