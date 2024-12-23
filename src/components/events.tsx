"use client";

import { EventCard } from "@/components/event-card";

const events = [
  {
    id: 1,
    imageUrl: "/images/AES-season1-logo.webp",
    title: "Fortnite Championship",
    seasonNumber: 5,
    prizePool: 100000,
    slots: 100,
    date: "2023-08-15",
  },
  {
    id: 2,
    imageUrl: "/images/AES-season2-logo.webp",
    title: "League of Legends Tournament",
    seasonNumber: 3,
    prizePool: 50000,
    slots: 64,
    date: "2023-09-01",
  },
  {
    id: 3,
    imageUrl: "/images/agl-cff-logo.png",
    title: "CS:GO Invitational",
    seasonNumber: 2,
    prizePool: 75000,
    slots: 32,
    date: "2023-07-30",
  },
  {
    id: 4,
    imageUrl: "/images/chess-s1-logo-white.png",
    title: "Chess tourny",
    seasonNumber: 2,
    prizePool: 75000,
    slots: 32,
    date: "2023-07-30",
  },
  {
    id: 5,
    imageUrl: "/images/F84ssb-season-1-logo.png",
    title: "Fifa 84",
    seasonNumber: 2,
    prizePool: 75000,
    slots: 32,
    date: "2023-07-30",
  },
];

export default function EventsSection() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center gap-2 justify-center mb-16">
        <div className="w-3 h-3 rounded-full bg-green-500" />
        <h2
          className="text-5xl font-bold uppercase"
          style={{ fontFamily: "monospace" }}
        >
          Events
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0">
        {events.map((event) => (
          <EventCard
            key={event.id}
            imageUrl={event.imageUrl}
            title={event.title}
            seasonNumber={event.seasonNumber}
            prizePool={event.prizePool}
            slots={event.slots}
            date={event.date}
            onDetailsClick={() =>
              console.log(`Showing details for event ${event.id}`)
            }
            p-0
            m-0
          />
        ))}
      </div>
    </div>
  );
}
