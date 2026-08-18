export interface Program {
  id: string
  name: string
  shortName: string
  slug: string
  tagline: string
  description: string
  longDescription: string
  ageRange: string
  gender: string
  color: string
  bgColor: string
  icon: string
  features: string[]
  highlights: string[]
}

export const programs: Program[] = [
  {
    id: 'nfl-flag',
    name: 'NFL FLAG Football',
    shortName: 'NFL FLAG',
    slug: 'nfl-flag',
    tagline: 'The Official Youth Flag Football of the NFL',
    description:
      'Experience the NFL FLAG program — the most widely played youth flag football league in the country, backed by all 32 NFL teams.',
    longDescription:
      'Missouri EPIC is your local NFL FLAG provider. Our NFL FLAG program delivers an authentic, safe, and competitive flag football experience for kids ages 5–17. With NFL-quality equipment, certified coaches, and league play that mirrors the excitement of the NFL, your athlete will develop football fundamentals while having the time of their life.',
    ageRange: '6–14',
    gender: 'Coed',
    color: 'brand-red',
    bgColor: 'bg-brand-red',
    icon: 'trophy',
    features: [
      'Official NFL FLAG curriculum',
      'All 32 NFL team jerseys available',
      'Certified coaching staff',
      'League games + playoffs',
      'NFL-quality flags and equipment',
      'Path to NFL FLAG Bowl',
    ],
    highlights: [
      'No blocking or tackling — safer for all skill levels',
      'Develops route running, throwing, and defensive skills',
      'Competitive divisions by age group',
      'Championship opportunities at regional and national level',
    ],
  },
  {
    id: 'girls-flag',
    name: 'Girls Flag Football',
    shortName: 'Girls Flag',
    slug: 'girls-flag-football',
    tagline: 'Her Game. Her Field. Her Time.',
    description:
      'A dedicated girls-only flag football league that gives young women a premier competitive football experience in a welcoming environment.',
    longDescription:
      'Girls Flag Football at Missouri EPIC is one of the fastest-growing programs in the region. We provide a dedicated competitive space for girls to develop their football skills, compete at a high level, and be part of one of the most exciting movements in youth sports. From beginners to experienced athletes, every girl has a place on the field.',
    ageRange: '8–14',
    gender: 'Girls',
    color: 'brand-navy',
    bgColor: 'bg-brand-navy',
    icon: 'star',
    features: [
      'Girls-only competitive league',
      'Experienced female-inclusive coaching staff',
      'Season-long schedule with playoffs',
      'Skill development clinics',
      'Collegiate showcase opportunities',
      'Supportive team environment',
    ],
    highlights: [
      'One of the fastest-growing youth sports programs nationally',
      'Builds confidence, leadership, and teamwork',
      'Pathway to high school and collegiate flag football',
      'Celebrates and elevates girls in football',
    ],
  },
  {
    id: '7v7',
    name: '7v7 Competitive Football',
    shortName: '7v7',
    slug: '7v7',
    tagline: 'Elite. Fast. Competitive.',
    description:
      'High-level 7v7 competition that sharpens passing, route running, and defensive skills for athletes looking to elevate their game.',
    longDescription:
      'The Missouri EPIC 7v7 program is built for athletes who want to compete at the highest level. Our 7v7 teams train year-round, compete in top tournaments, and produce athletes who go on to excel at the high school level and beyond. If your athlete is serious about football, this is where they need to be.',
    ageRange: '12–17',
    gender: 'Coed',
    color: 'brand-gold',
    bgColor: 'bg-brand-gold',
    icon: 'zap',
    features: [
      'Select / competitive tryout-based teams',
      'Year-round training and development',
      'Regional and national tournaments',
      'Film study and advanced coaching',
      'Recruiting exposure opportunities',
      'Elite competition',
    ],
    highlights: [
      'Skills-based tryout process — earn your spot',
      'Compete against the best teams in the region',
      'Develop skills that translate to tackle football',
      'Build relationships with elite coaches and players',
    ],
  },
]
