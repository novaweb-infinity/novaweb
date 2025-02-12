import { ContactSection } from '@/components/ContactSection'
import { CTASection } from '@/components/CTASection'
import { HeroSection } from '@/components/HeroSection'
import { PhilosophySection } from '@/components/PhilosophySection'
import { ProcessSection } from '@/components/ProcessSection'
import { ProjectsSection } from '@/components/ProjectsSection'
import { ReviewsSection } from '@/components/ReviewsSection'
import { ServicesSection } from '@/components/ServicesSection'
import { StaffSection } from '@/components/StaffSection'

export default function Page() {
  return (
    <>
      {/* <HeroSection /> */}
      <HeroSection />
      <PhilosophySection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      {/* <ReviewsSection />
      <StaffSection /> */}
      <ContactSection />
      <CTASection />
    </>
  )
}
