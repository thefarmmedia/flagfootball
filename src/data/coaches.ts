export interface Coach {
  id: string
  name: string
  title: string
  program: string
  bio: string
  image?: string
  certifications?: string[]
}

export const coaches: Coach[] = [
  {
    id: 'coach-1',
    name: 'Head Coach',
    title: 'NFL FLAG Director',
    program: 'NFL FLAG',
    bio: 'Our experienced coaching staff brings years of football knowledge and a passion for youth development. Profiles coming soon.',
    image: undefined,
    certifications: ['NFL FLAG Certified'],
  },
  {
    id: 'coach-2',
    name: 'Girls Program Director',
    title: 'Girls Flag Football Director',
    program: 'Girls Flag',
    bio: 'Leading our girls program with a commitment to excellence, inclusivity, and developing the next generation of female football athletes.',
    image: undefined,
    certifications: ['NFL FLAG Certified'],
  },
  {
    id: 'coach-3',
    name: '7v7 Head Coach',
    title: 'Competitive 7v7 Director',
    program: '7v7',
    bio: 'Bringing elite-level coaching to our 7v7 program with a focus on skill development and competitive excellence.',
    image: undefined,
    certifications: ['7v7 Elite Certified'],
  },
]
