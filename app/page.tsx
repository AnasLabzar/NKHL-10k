import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import StatsBar from "@/components/sections/StatsBar";
import RouteMapSection from "@/components/sections/RouteMap";
import EventsCalendar from "@/components/sections/EventsCalendar";
import ExperienceTimeline from "@/components/sections/ExperienceTimeline";
import AthleteKit from "@/components/sections/AthleteKit";
import CorporatePackages from "@/components/sections/CorporatePackages";
import Partners from "@/components/sections/Partners";
import KineticSection from "@/components/sections/KineticSection";
import RaceExperienceGrid from "@/components/sections/RaceExperienceGrid";
import RaceBentoGrid from "@/components/sections/RaceBentoGrid";
import CinematicGallery from "@/components/sections/CinematicGallery";
import JoinTheElite from "@/components/sections/JoinTheElite";

export default function Home() {
  return (
    <div className="bg-black min-h-screen font-sans text-white">
      <Navigation />

      <main>
        {/* 1 · Cinematic hero with particle field */}
        <Hero />

        {/* 2 · Full-width animated stats strip */}
        <StatsBar />

        {/* 2.5 · Kinetic 3D Text transition */}
        <KineticSection />

        {/* 3 · Interactive Mapbox route */}
        <RouteMapSection />

        {/* 3.5 · Technical Race Bento Grid */}
        <RaceBentoGrid />

        {/* 4 · Events calendar (timeline of phases) */}
        <EventsCalendar />

        {/* 5 · Race day experience timeline */}
        <ExperienceTimeline />

        {/* 5.5 · Premium Race Experience Cards */}
        <RaceExperienceGrid />

        {/* 6 · Athlete kit showcase */}
        <AthleteKit />

        {/* 7 · Corporate packages */}
        <CorporatePackages />

        {/* 7.5 · Cinematic storytelling gallery */}
        <CinematicGallery />

        {/* 8 · Join the elite CTA */}
        <JoinTheElite />

        {/* 9 · Partners & sponsors marquee */}
        <Partners />
      </main>

      <Footer />
    </div>
  );
}
