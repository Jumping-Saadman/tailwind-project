import {
  Facebook,
  Youtube,
  Linkedin,
  Instagram,
  DiscIcon as Discord,
} from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/arektagaming",
      label: "Facebook",
    },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@arekta.gaming",
      label: "YouTube",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/arekta-gaming",
      label: "LinkedIn",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/arekta.gaming/",
      label: "Instagram",
    },
    {
      icon: Discord,
      href: "https://discord.com/invite/mWZTf84vWy",
      label: "Discord",
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-96 flex flex-col items-center justify-center bg-black text-white p-8 scroll-mt-16"
    >
      <div className="flex flex-col items-center mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <h2 className="text-3xl font-bold uppercase font-mono">
            Arekta <span className="text-emerald-500">Gaming</span>
          </h2>
        </div>
        <p className="text-lg">info@arektagaming.com</p>
      </div>

      <div className="flex gap-4">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="group flex h-10 w-10 items-center justify-center rounded-full border border-emerald-500 transition-all duration-300 hover:bg-emerald-500 hover:-translate-y-1"
            aria-label={social.label}
          >
            <social.icon className="h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
          </Link>
        ))}
      </div>
    </section>
  );
}
