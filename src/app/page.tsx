import HomeSection from "@/components/home";
import AboutSection from "@/components/about-us";
import ContactsSection from "@/components/contacts";
import EventsSection from "@/components/events";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <HomeSection />
      </section>
      <section id="events">
        <EventsSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="contact">
        <ContactsSection />
      </section>
    </main>
  );
}
