"use client";

import { Card } from "./ui/card";
import { FileText, Youtube, Wrench, Globe } from "lucide-react";
import { useState } from "react";

export default function About() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setCursorPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white scroll-mt-16 py-20"
    >
      <div className="max-w-7xl w-full mx-auto px-4">
        <div className="flex items-center gap-2 justify-center mb-16">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <h2
            className="text-5xl font-bold uppercase"
            style={{ fontFamily: "monospace" }}
          >
            About Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {[
            {
              title: "Content Production",
              icon: <FileText className="w-6 h-6 text-white" />,
              description:
                "Arekta Gaming Limited, with its experienced production team strives to provide best esports productions in events, seminars and tournaments. Infused with data driven graphics, real time interaction and live production set, our production is top notch in the country.",
              span: "lg:col-span-5",
            },
            {
              title: "Esports Broadcasting",
              icon: <Youtube className="w-6 h-6 text-white" />,
              description:
                "We specialize in creating interactive, appealing and informative esports broadcasts. Besides our own events we can also provide broadcast solutions to any events. From esports to corporate, any type of broadcast is our specialty.",
              span: "lg:col-span-7",
            },
            {
              title: "Event Management",
              icon: <Wrench className="w-6 h-6 text-white" />,
              description:
                "Any LAN or Online event management is one of our key expertise. With our experienced logistics and crew members, self-made studio, powerful content team and managers reigning from corporate backgrounds, we conduct events like they are our playfield.",
              span: "lg:col-span-4",
            },
            {
              title: "Gaming or Esports Solutions",
              icon: <Globe className="w-6 h-6 text-white" />,
              description:
                "We can provide gaming or esports related solutions such as broadcast, management, branding, LAN Hosting, Streaming, Content Creation etc as a vendor for any entity/company planning to enter the esports arena at the best price.",
              span: "lg:col-span-8",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className={`
                ${item.span}
                bg-black/50 border 
                border-gray-800 
                hover:border-gray-700
                transform
                transition
                duration-300
                hover:-translate-y-1
                group
                relative
                overflow-hidden
              `}
              onMouseMove={handleMouseMove}
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle 150px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(16, 185, 129, 0.3), transparent)`,
                }}
              />
              <div className="relative z-10 p-6">
                <div className="bg-black/80 p-3 w-fit rounded-lg mb-6 transition-colors duration-300 group-hover:bg-emerald-500">
                  {item.icon}
                </div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-1 h-8 bg-gray-500" />
                  <h3 className="text-white text-2xl font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
