export interface Sponsor {
  id: string
  name: string
  tier: 'title' | 'gold' | 'silver' | 'bronze' | 'community'
  website?: string
  logo?: string
  description?: string
}

export const sponsors: Sponsor[] = [
  {
    id: 'sponsor-1',
    name: 'Sponsor 1',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor1.jfif',
  },
  {
    id: 'sponsor-2',
    name: 'Sponsor 2',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor2.jfif',
  },
  {
    id: 'sponsor-3',
    name: 'Sponsor 3',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor3.jfif',
  },
  {
    id: 'sponsor-4',
    name: 'Sponsor 4',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor4.jfif',
  },
  {
    id: 'sponsor-5',
    name: 'Sponsor 5',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor5.jfif',
  },
  {
    id: 'sponsor-6',
    name: 'Sponsor 6',
    tier: 'gold',
    website: '',
    logo: '/images/sponsors/sponsor6.jfif',
  },
]

export const sponsorTiers = {
  title: { label: 'Title Sponsor', color: 'text-brand-gold', size: 'large' },
  gold: { label: 'Gold Sponsors', color: 'text-brand-gold', size: 'medium' },
  silver: { label: 'Silver Sponsors', color: 'text-gray-400', size: 'medium' },
  bronze: { label: 'Bronze Sponsors', color: 'text-amber-600', size: 'small' },
  community: { label: 'Community Partners', color: 'text-gray-500', size: 'small' },
}
