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
      className="min-h-screen flex items-center justify-center bg-black text-white scroll-mt-16"
    >
      <div className="max-w-md w-full">
        <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      </div>
      <div className="flex items-center justify-center gap-4 bg-black p-4">
        {socialLinks.map((social) => (
          <Link
            key={social.label}
            href={social.href}
            className="group relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-500/20 transition-all duration-300 hover:border-emerald-500/50"
            aria-label={social.label}
          >
            <div className="absolute -inset-0.5 rounded-full bg-emerald-500/20 blur opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            <social.icon className="relative h-5 w-5 text-white transition-transform duration-300 group-hover:scale-110" />
          </Link>
        ))}
      </div>
    </section>
  );
}
