import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementSection from "./components/AchievementSection";
export default function Home() {
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID!;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID!;
  const userId = process.env.NEXT_PUBLIC_PUBLIC_KEY!;

  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection
          serviceId={serviceId}
          templateId={templateId}
          userId={userId}
        />
      </div>
      <Footer />
    </main>
  );
}
