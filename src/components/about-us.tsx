import { Card } from "./ui/card";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-black text-white scroll-mt-16"
    >
      <div className="max-w-2xl text-center grid grid-cols-1 md:grid-cols-2 gap-4">
        <h2 className="text-3xl font-bold mb-4 col-span-full">About Us</h2>
        <Card className="p-6 bg-black border border-gray-800 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
            Content Production
          </h5>
          <p className="font-normal text-white">
            Arekta Gaming Limited, with its experienced production team strives
            to provide best esports productions in events, seminars and
            tournaments. Infused with data driven graphics, real time
            interaction and live production set, our production is top notch in
            the country.
          </p>
        </Card>
        <Card className="p-6 bg-black border border-gray-800 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
            Esports Broadcasting
          </h5>
          <p className="font-normal text-white">
            We specialize in creating interactive, appealing and informative
            esports broadcasts. Besides our own events we can also provide
            broadcast solutions to any events. From esports to corporate, any
            type of broadcast is our specialty.
          </p>
        </Card>
        <Card className="p-6 bg-black border border-gray-800 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
            Event Management
          </h5>
          <p className="font-normal text-white">
            Any LAN or Online event management is one of our key expertise. With
            our experienced logistics and crew members, self-made studio,
            powerful content team and managers reigning from corporate
            backgrounds, we conduct events like they are our playfield. .
          </p>
        </Card>
        <Card className="p-6 bg-black border border-gray-800 rounded-lg shadow">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200">
            Gaming or Esports Solutions
          </h5>
          <p className="font-normal text-white">
            We can provide gaming or esports related solutions such as
            broadcast, management, branding, LAN Hosting, Streaming, Content
            Creation etc as a vendor for any entity/company planning to enter
            the esports arena at the best price.
          </p>
        </Card>
      </div>
    </section>
  );
}
