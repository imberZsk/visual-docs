import React from 'react'
import Link from '@docusaurus/Link'

import productConfig from '../../../config/products'

/**
 * 渲染指定产品的源码与版本下载入口。
 * @param {{ productId: string }} props 组件参数，productId 用于读取对应产品配置。
 * @returns {React.ReactNode} 产品链接列表；配置不存在时不渲染内容。
 */
export default function ProductLinks({ productId }) {
  // product 存储当前文档页面对应的项目链接配置。
  const product = productConfig.PRODUCTS[productId]

  if (!product) {
    // 配置缺失时不生成错误链接，避免页面跳转到其他项目。
    return null
  }

  return React.createElement(
    'ul',
    null,
    React.createElement(
      'li',
      null,
      React.createElement(Link, { to: product.repositoryUrl }, '源码仓库')
    ),
    React.createElement(
      'li',
      null,
      React.createElement(Link, { to: product.releasesUrl }, '下载最新版本')
    )
  )
}
