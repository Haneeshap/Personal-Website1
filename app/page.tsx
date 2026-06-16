import { Navigation } from '@/components/layout/navigation';
import { Footer } from '@/components/layout/footer';
import {
  HeroSection,
  SkillsSection,
  ProjectsSection,
  ExperienceSection,
  ArchitectureSection,
  CaseStudiesSection,
  BlogSection,
  GitHubSection,
  ContactSection,
} from '@/components/sections';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ArchitectureSection />
      <ExperienceSection />
      <GitHubSection />
      <CaseStudiesSection />
      <BlogSection />
      <ContactSection />

      <Footer />
    </main>
  );
}
