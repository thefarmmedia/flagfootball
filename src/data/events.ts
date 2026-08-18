export interface Event {
  id: string
  title: string
  date: string
  time?: string
  location?: string
  description: string
  program: 'nfl-flag' | 'girls-flag' | '7v7' | 'all'
  type: 'registration' | 'tryout' | 'game' | 'tournament' | 'clinic' | 'other'
  registrationUrl?: string
}

export const events: Event[] = [
  // Add upcoming events here
  // Example:
  // {
  //   id: 'event-1',
  //   title: 'NFL FLAG Registration Opens',
  //   date: '2025-03-01',
  //   description: 'Online registration opens for the 2025 NFL FLAG season.',
  //   program: 'nfl-flag',
  //   type: 'registration',
  //   registrationUrl: '',
  // },
]
