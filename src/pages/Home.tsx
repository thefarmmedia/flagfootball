import PageMeta from '../components/ui/PageMeta'
import HeroSection from '../sections/HeroSection'
import HalloweenTournamentBanner from '../sections/HalloweenTournamentBanner'
import TerriAnnouncementSection from '../sections/TerriAnnouncementSection'
import GallerySection from '../sections/GallerySection'
import FallLeagueSection from '../sections/FallLeagueSection'
import WhatsIncludedSection from '../sections/WhatsIncludedSection'
import ProgramsSection from '../sections/ProgramsSection'
import WhySection from '../sections/WhySection'
import CommunitySection from '../sections/CommunitySection'
import MerchandiseSection from '../sections/MerchandiseSection'
import ContactBannerSection from '../sections/ContactBannerSection'
import CTASection from '../sections/CTASection'

export default function Home() {
  return (
    <>
      <PageMeta
        title="Missouri EPIC Flag Football | Branson, MO"
        description="Southwest Missouri's premier NFL FLAG football organization. Fall League 2026 — Tuesday Nights, 9/29–11/3 at Ballparks of America, Branson, MO. Ages 8U–17U. $250 early bird. Register now!"
        path="/"
        ogTitle="Missouri EPIC | BE EPIC. PLAY EPIC. GROW EPIC."
        ogDescription="NFL FLAG Fall League 2026 now open. Tuesday Nights at Ballparks of America, Branson MO. Ages 8U–17U. $250 early bird by Sept 4."
      />
      <HeroSection />
      <HalloweenTournamentBanner />
      <TerriAnnouncementSection />
      <GallerySection />
      <FallLeagueSection />
      <WhatsIncludedSection />
      <ProgramsSection />
      <WhySection />
      <CommunitySection />
      <MerchandiseSection />
      <ContactBannerSection />
      <CTASection
        title="Secure Your Spot Now"
        subtitle="Early bird pricing ends September 4. Registration closes September 11. Don't miss your athlete's season."
        primaryLabel="Register — $250 Early Bird"
        secondaryLabel="Contact Us"
        secondaryHref="/contact"
      />
    </>
  )
}
