import SectionHeader from '../components/ui/SectionHeader'
import ProgramCard from '../components/ui/ProgramCard'
import { programs } from '../data/programs'

export default function ProgramsSection() {
  return (
    <section className="py-20 lg:py-28 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 lg:mb-16">
          <SectionHeader
            eyebrow="Our Programs"
            title="Three Ways to <span class='gradient-text'>Play Football</span>"
            subtitle="Choose the program that fits your athlete. Every level, every age, every goal — Missouri EPIC has a spot for you."
            centered
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={program.id} program={program} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
