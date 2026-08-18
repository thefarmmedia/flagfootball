import PageMeta from '../components/ui/PageMeta'
import HeroSection from '../sections/HeroSection'
import SeasonSection from '../sections/SeasonSection'
import ProgramsSection from '../sections/ProgramsSection'
import WhySection from '../sections/WhySection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Missouri EPIC Flag Football"
        description="Southwest Missouri's premier flag football organization. NFL FLAG Fall League — Tuesday Nights, 9/27–11/3 at Ballparks of America, Branson, MO. Ages 8U–17U. Registration open!"
        path="/"
        ogTitle="Missouri EPIC | NFL FLAG · Girls Flag · 7v7"
        ogDescription="Be the Future of Flag Football. Play EPIC. NFL FLAG Fall League now open in Branson, MO — Tuesday Nights, 9/27–11/3, ages 8U–17U."
      />
      <HeroSection />
      <SeasonSection />
      <ProgramsSection />
      <WhySection />
      <CTASection />
    </>
  )
}
