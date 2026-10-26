import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import MissionSection from "./components/MissionSection";
import DomainsSection from "./components/DomainsSection";
import MembersSection from "./components/MembersSection";
import GovernanceSection from "./components/GovernanceSection";
import ResourcesSection from "./components/ResourcesSection";
import DocumentsSection from "./components/DocumentsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <DomainsSection />
        <MembersSection />
        <GovernanceSection />
        <ResourcesSection />
        {/* <DocumentsSection /> */}
        {/* <ContactSection /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
