import { Helmet } from 'react-helmet-async'
import { siteConfig } from '../../config/site'
import { buildCanonical, defaultOgImage } from '../../utils/meta'

interface PageMetaProps {
  title: string
  description: string
  path: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
}

export default function PageMeta({
  title,
  description,
  path,
  ogTitle,
  ogDescription,
  ogImage = defaultOgImage,
}: PageMetaProps) {
  const fullTitle = `${title} | ${siteConfig.organization.name}`
  const canonical = buildCanonical(path)

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={ogTitle ?? fullTitle} />
      <meta property="og:description" content={ogDescription ?? description} />
      <meta property="og:image" content={`${siteConfig.siteUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteConfig.organization.fullName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle ?? fullTitle} />
      <meta name="twitter:description" content={ogDescription ?? description} />
      <meta name="twitter:image" content={`${siteConfig.siteUrl}${ogImage}`} />
    </Helmet>
  )
}
