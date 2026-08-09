import React from 'react'
import { Redirect } from '@docusaurus/router'

/**
 * 将站点根路径统一导向 Visual 产品总览页。
 * @returns {React.JSX.Element} Docusaurus 客户端重定向组件。
 */
export default function HomePage() {
  return React.createElement(Redirect, { to: '/products' })
}
