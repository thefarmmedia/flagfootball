export interface Sponsor {
  id: string
  name: string
  tier: 'title' | 'gold' | 'silver' | 'bronze' | 'community'
  website?: string
  logo?: string
  description?: string
}

export const sponsors: Sponsor[] = [
  // Add sponsors here — example structure:
  // {
  //   id: 'sponsor-1',
  //   name: 'Acme Sports',
  //   tier: 'gold',
  //   website: 'https://example.com',
  //   logo: '/images/sponsors/acme-sports.png',
  //   description: 'Local sports equipment provider',
  // },
]

export const sponsorTiers = {
  title: { label: 'Title Sponsor', color: 'text-brand-gold', size: 'large' },
  gold: { label: 'Gold Sponsor', color: 'text-brand-gold', size: 'medium' },
  silver: { label: 'Silver Sponsor', color: 'text-gray-400', size: 'medium' },
  bronze: { label: 'Bronze Sponsor', color: 'text-amber-600', size: 'small' },
  community: { label: 'Community Partner', color: 'text-gray-500', size: 'small' },
}
