import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SignaturePieces from "@/components/SignaturePieces";
import MaisonStory from "@/components/MaisonStory";
import LuxuryLookbook from "@/components/LuxuryLookbook";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <div className="w-full">
      <CustomCursor />
      <Navigation />
      <Hero />
      <SignaturePieces />
      <MaisonStory />
      <LuxuryLookbook />
      <Footer />
    </div>
  );
}
