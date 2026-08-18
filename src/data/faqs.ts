export interface FAQ {
  id: string
  question: string
  answer: string
  category: 'general' | 'nfl-flag' | 'girls-flag' | '7v7' | 'registration'
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'What is Missouri EPIC Flag Football?',
    answer:
      'Missouri EPIC is Southwest Missouri\'s premier flag football organization. We operate three programs: NFL FLAG (the official NFL youth league), Girls Flag Football, and competitive 7v7. Our mission is to develop young athletes through the game of football in a safe, competitive, and fun environment.',
    category: 'general',
  },
  {
    id: 'faq-2',
    question: 'What age groups do you serve?',
    answer:
      'Our NFL FLAG program serves athletes ages 6–14. Girls Flag Football is open to girls ages 8–14. Our competitive 7v7 program is designed for athletes ages 12–17. If you\'re unsure which program is right for your child, contact us and we\'ll help you find the best fit.',
    category: 'general',
  },
  {
    id: 'faq-3',
    question: 'Do players need prior football experience?',
    answer:
      'Not at all! Our NFL FLAG and Girls Flag programs welcome athletes of all skill levels — from first-timers to experienced players. Our coaches are trained to develop fundamental skills while making the experience fun. The 7v7 competitive program is geared toward more experienced players, but we evaluate each athlete individually.',
    category: 'general',
  },
  {
    id: 'faq-4',
    question: 'What equipment does my athlete need?',
    answer:
      'Missouri EPIC provides all essential game equipment including flags and jerseys. Athletes should wear comfortable athletic clothing and cleats appropriate for the playing surface. A mouthguard is also recommended. We\'ll let you know about any program-specific gear when you register.',
    category: 'registration',
  },
  {
    id: 'faq-5',
    question: 'How does NFL FLAG work?',
    answer:
      'NFL FLAG is the official youth flag football league of the NFL, played by more than 500,000 kids across the country. Players wear flags attached to a belt, and the defensive team removes the flag to stop the play instead of tackling. It\'s a safe, fast, and exciting version of football that teaches real football skills.',
    category: 'nfl-flag',
  },
  {
    id: 'faq-6',
    question: 'Can my daughter play in the NFL FLAG program?',
    answer:
      'Yes! Our NFL FLAG program is coed and welcomes girls at every age group. We also offer a dedicated Girls Flag Football league for athletes who want to compete in a girls-only environment. Many athletes participate in both!',
    category: 'girls-flag',
  },
  {
    id: 'faq-7',
    question: 'How does the 7v7 tryout process work?',
    answer:
      'Our 7v7 program is competitive and requires a tryout to earn a roster spot. Tryouts evaluate athleticism, football IQ, route running, throwing ability, and coachability. We announce tryout dates through our social media and email list. Players who don\'t make a team one season are encouraged to develop and try again.',
    category: '7v7',
  },
  {
    id: 'faq-8',
    question: 'What tournaments does the 7v7 team compete in?',
    answer:
      'Our 7v7 teams compete in regional and national tournaments throughout the season. We target top events that offer the best competition and recruiting exposure. Tournament schedules are shared with team members at the start of each season.',
    category: '7v7',
  },
  {
    id: 'faq-9',
    question: 'How do I register?',
    answer:
      'Registration is available online through our registration portal. Visit the program page for NFL FLAG, Girls Flag, or 7v7 to find registration links. Spots are limited, so we recommend registering early. If registration isn\'t open yet, you can submit your contact info to be notified when spots become available.',
    category: 'registration',
  },
  {
    id: 'faq-10',
    question: 'Are there scholarship or financial assistance options?',
    answer:
      'We believe every athlete deserves to play. Contact us directly to learn about financial assistance options. We work with families on a case-by-case basis to ensure cost is not a barrier to participation.',
    category: 'registration',
  },
  {
    id: 'faq-11',
    question: 'How can I volunteer or coach?',
    answer:
      'We\'re always looking for passionate volunteers and coaches! Experience in football is helpful but not required — we provide training and certification. Submit a volunteer interest form through our contact page or reach out to us directly.',
    category: 'general',
  },
  {
    id: 'faq-12',
    question: 'How can my business become a sponsor?',
    answer:
      'Sponsoring Missouri EPIC is a great way to support youth athletics and get your brand in front of thousands of families in Southwest Missouri. We offer multiple sponsorship tiers with various benefits. Fill out our sponsorship inquiry form or contact us to learn more.',
    category: 'general',
  },
]
