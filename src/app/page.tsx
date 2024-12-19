import HomeSection from "@/components/home";
import AboutSection from "@/components/about-us";
import ContactsSection from "@/components/contacts";
import EventsSection from "@/components/events";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeSection />
      <EventsSection />
      <AboutSection />
      <ContactsSection />
    </main>
  );
}
