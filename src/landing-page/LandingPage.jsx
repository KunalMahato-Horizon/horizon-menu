import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import HowItWorks from "./components/HowItWorks";
import Templates from "./components/Templates";
import Pricing from "./components/Pricing";
import Included from "./components/Included";
import AboutUs from "./components/AboutUs";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-warm-bg text-navy antialiased selection:bg-brand-soft selection:text-brand-dark">
      {/* 1. Sticky Navigation */}
      <Navbar />

      <main>
        {/* 2. First Impression Hero */}
        <Hero />

        {/* 3. From Paper to Digital: The Old Way vs New Way */}
        <About />

        {/* 4. Core Features & Price Change Lifecycle */}
        <Features />

        {/* 5. Customer & Business Onboarding Flows */}
        <HowItWorks />

        {/* 6. 6 Interactive Styles (T01 - T06) */}
        <Templates />

        {/* 7. Transparent Pricing (Ready, Plus, Custom) */}
        <Pricing />

        {/* 8. Concrete Deliverables (What Customer Gets) */}
        <Included />

        {/* 9. Human Mission Statement */}
        <AboutUs />

        {/* 10. Common Questions & Answers */}
        <FAQ />

        {/* 11. Final Conversion CTA */}
        <Contact />
      </main>

      {/* 12. Site Footer & Scroll Top */}
      <Footer />
    </div>
  );
}