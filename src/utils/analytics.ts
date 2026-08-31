// Centralized analytics event tracking
// Supports GA4 and Meta Pixel when configured in site.ts

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
  }
}

type ConversionEvent =
  | 'register_nfl_flag'
  | 'register_girls_flag'
  | 'seven_on_seven_inquiry'
  | 'tournament_pre_register'
  | 'sponsor_inquiry'
  | 'contact_submit'
  | 'phone_click'
  | 'email_click'
  | 'page_view'

export function trackEvent(event: ConversionEvent, params?: Record<string, string | number>) {
  // GA4
  if (typeof window.gtag === 'function') {
    window.gtag('event', event, params)
  }

  // Meta Pixel
  if (typeof window.fbq === 'function') {
    window.fbq('track', event, params)
  }
}

export function trackPageView(path: string, title: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('config', window.__GA4_ID__ ?? '', {
      page_path: path,
      page_title: title,
    })
  }
}

declare global {
  interface Window {
    __GA4_ID__?: string
  }
}
