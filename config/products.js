// PRODUCT_IDS 存储产品标识，供导航和文档页面稳定引用对应配置。
const PRODUCT_IDS = {
  WORKTREE: 'visual-worktree',
  AI_CODING: 'visual-ai-coding',
  LARK_BRIDGE: 'visual-lark-bridge',
  LEARN: 'visual-learn',
  MUSE: 'visual-muse',
}

// PRODUCTS 存储每个 Visual 项目的名称、站内文档路由、源码仓库和版本下载地址。
const PRODUCTS = {
  [PRODUCT_IDS.WORKTREE]: {
    label: 'Visual Worktree',
    docsPath: '/visual-worktree',
    repositoryUrl: 'https://github.com/imberZsk/visual-worktree',
    releasesUrl: 'https://github.com/imberZsk/visual-worktree/releases/latest',
  },
  [PRODUCT_IDS.AI_CODING]: {
    label: 'Visual AI Coding',
    docsPath: '/visual-ai-coding',
    repositoryUrl: 'https://github.com/imberZsk/visual-ai-coding',
    releasesUrl: 'https://github.com/imberZsk/visual-ai-coding/releases/latest',
  },
  [PRODUCT_IDS.LARK_BRIDGE]: {
    label: 'Visual Lark Bridge',
    docsPath: '/visual-lark-bridge',
    repositoryUrl: 'https://github.com/imberZsk/visual-lark-bridge',
    releasesUrl:
      'https://github.com/imberZsk/visual-lark-bridge/releases/latest',
  },
  [PRODUCT_IDS.LEARN]: {
    label: 'Visual Learn',
    docsPath: '/visual-learn',
    repositoryUrl: 'https://github.com/imberZsk/visual-learn',
    releasesUrl: 'https://github.com/imberZsk/visual-learn/releases/latest',
  },
  [PRODUCT_IDS.MUSE]: {
    label: 'Visual Muse',
    docsPath: '/visual-muse',
    repositoryUrl: 'https://github.com/imberZsk/visual-muse',
    releasesUrl: 'https://github.com/imberZsk/visual-muse/releases/latest',
  },
}

// PRODUCT_ORDER 存储产品在顶部导航和页脚中的统一展示顺序。
const PRODUCT_ORDER = [
  PRODUCT_IDS.WORKTREE,
  PRODUCT_IDS.AI_CODING,
  PRODUCT_IDS.LARK_BRIDGE,
  PRODUCT_IDS.LEARN,
  PRODUCT_IDS.MUSE,
]

module.exports = { PRODUCT_IDS, PRODUCTS, PRODUCT_ORDER }
