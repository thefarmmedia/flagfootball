import PageMeta from '../components/ui/PageMeta'
import HeroSection from '../sections/HeroSection'
import StatsSection from '../sections/StatsSection'
import ProgramsSection from '../sections/ProgramsSection'
import WhySection from '../sections/WhySection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Missouri EPIC Flag Football"
        description="Southwest Missouri's premier flag football organization offering NFL FLAG, Girls Flag Football, and competitive 7v7 programs for youth athletes ages 6–17."
        path="/"
        ogTitle="Missouri EPIC | NFL FLAG · Girls Flag · 7v7"
        ogDescription="Play. Compete. Win. Missouri EPIC brings NFL FLAG, Girls Flag Football, and elite 7v7 programs to Southwest Missouri."
      />
      <HeroSection />
      <StatsSection />
      <ProgramsSection />
      <WhySection />
      <CTASection />
    </>
  )
}
