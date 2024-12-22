import { Card } from "./ui/card";
import { FileText, Youtube, Wrench, Globe } from "lucide-react";

export default function About() {
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
          {/* Content Production - Spans 5 columns */}
          <Card className="lg:col-span-5 bg-black/50 border border-gray-800 hover:border-gray-700 transition-colors p-8">
            <div className="bg-black/80 p-3 w-fit rounded-lg mb-6">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-gray-500" />
              <h3 className="text-2xl font-bold">Content Production</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Arekta Gaming Limited, with its experienced production team
              strives to provide best esports productions in events, seminars
              and tournaments. Infused with data driven graphics, real time
              interaction and live production set, our production is top notch
              in the country.
            </p>
          </Card>

          {/* Esports Broadcasting - Spans 7 columns */}
          <Card className="lg:col-span-7 bg-black/50 border border-gray-800 hover:border-gray-700 transition-colors p-8">
            <div className="bg-black/80 p-3 w-fit rounded-lg mb-6">
              <Youtube className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-gray-500" />
              <h3 className="text-2xl font-bold">Esports Broadcasting</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We specialize in creating interactive, appealing and informative
              esports broadcasts. Besides our own events we can also provide
              broadcast solutions to any events. From esports to corporate, any
              type of broadcast is our specialty.
            </p>
          </Card>

          {/* Event Management - Spans 4 columns */}
          <Card className="lg:col-span-4 bg-black/50 border border-gray-800 hover:border-gray-700 transition-colors p-8">
            <div className="bg-black/80 p-3 w-fit rounded-lg mb-6">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-gray-500" />
              <h3 className="text-2xl font-bold">Event Management</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Any LAN or Online event management is one of our key expertise.
              With our experienced logistics and crew members, self-made studio,
              powerful content team and managers reigning from corporate
              backgrounds, we conduct events like they are our playfield.
            </p>
          </Card>

          {/* Gaming Solutions - Spans 8 columns */}
          <Card className="lg:col-span-8 bg-black/50 border border-gray-800 hover:border-gray-700 transition-colors p-8">
            <div className="bg-black/80 p-3 w-fit rounded-lg mb-6">
              <Globe className="w-6 h-6 text-white" />
            </div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-1 h-8 bg-gray-500" />
              <h3 className="text-2xl font-bold">
                Gaming or Esports Solutions
              </h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              We can provide gaming or esports related solutions such as
              broadcast, management, branding, LAN Hosting, Streaming, Content
              Creation etc as a vendor for any entity/company planning to enter
              the esports arena at the best price.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
