const { PRODUCTS, PRODUCT_ORDER } = require('./config/products')

/**
 * 根据统一产品配置生成顶部导航项。
 * @param {string[]} productOrder 产品标识的展示顺序。
 * @param {Record<string, { label: string, docsPath: string }>} products 产品配置映射。
 * @returns {Array<{ to: string, label: string, position: string }>} Docusaurus 顶部导航配置。
 */
function createProductNavigationItems(productOrder, products) {
  // navigationItems 存储按产品顺序生成的顶部导航项。
  const navigationItems = []

  for (const productId of productOrder) {
    // product 存储当前导航项对应的产品配置。
    const product = products[productId]
    navigationItems.push({
      to: product.docsPath,
      label: product.label,
      position: 'left',
    })
  }

  return navigationItems
}

/**
 * 根据统一产品配置生成页脚产品入口。
 * @param {string[]} productOrder 产品标识的展示顺序。
 * @param {Record<string, { label: string, docsPath: string }>} products 产品配置映射。
 * @returns {Array<{ label: string, to: string }>} Docusaurus 页脚链接配置。
 */
function createProductFooterItems(productOrder, products) {
  // footerItems 存储产品中心入口和各产品文档入口。
  const footerItems = [{ label: '全部产品', to: '/products' }]

  for (const productId of productOrder) {
    // product 存储当前页脚入口对应的产品配置。
    const product = products[productId]
    footerItems.push({ label: product.label, to: product.docsPath })
  }

  return footerItems
}

module.exports = {
  title: 'Visual Docs',
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
      title: 'Visual Docs',
      logo: {
        alt: 'Visual Docs Logo',
        src: 'img/logo.png',
        href: '/products',
      },
      items: createProductNavigationItems(PRODUCT_ORDER, PRODUCTS),
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Visual 产品',
          items: createProductFooterItems(PRODUCT_ORDER, PRODUCTS),
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Visual Docs.`,
    },
  },
}
