import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import AboutSection from '@/components/home/AboutSection';
import ApproachSection from '@/components/home/ApproachSection';
import OutdoorLearning from '@/components/home/OutdoorLearning';
import FamilyStrip from '@/components/home/FamilyStrip';
import ContactPanel from '@/components/home/ContactPanel';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ApproachSection />
        <OutdoorLearning />
        <FamilyStrip />
        <ContactPanel />
      </main>
      <Footer />
    </>
  );
}
