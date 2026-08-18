import { siteConfig } from '../config/site'

export interface PageMeta {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export function buildTitle(pageTitle: string): string {
  return `${pageTitle} | ${siteConfig.organization.name}`
}

export function buildCanonical(path: string): string {
  const base = siteConfig.siteUrl.replace(/\/$/, '')
  return `${base}${path}`
}

export const defaultOgImage = '/images/logos/missouri-epic-logo.png'
