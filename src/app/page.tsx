import ExperienceSection from '@/components/sections/ExperienceSection';
import AboutSection from '@/components/sections/AboutSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import SkillsSection from '@/components/sections/SkillsSection';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-12 p-8 pb-20 sm:items-start sm:p-20">
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
