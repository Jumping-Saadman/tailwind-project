"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Menu,
  X,
  Home,
  Info,
  Mail,
  TypeIcon as type,
  LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const NavItem = ({
  href,
  children,
  icon: Icon,
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
}) => (
  <Link
    href={href}
    className="flex items-center space-x-2 text-gray-200 hover:text-gray-300 transition-colors duration-200"
  >
    <Icon className="h-5 w-5" />
    <span>{children}</span>
  </Link>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/8 dark:bg-gray-900/80 shadow backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logos/Arekta-gaming-logo.svg"
                alt="Logo"
                width={80}
                height={80}
                className="h-8 w-auto"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem href="/" icon={Home}>
                Home
              </NavItem>
              <NavItem href="/events" icon={Home}>
                Events
              </NavItem>
              <NavItem href="/about" icon={Info}>
                About us
              </NavItem>
              <NavItem href="/contact" icon={Mail}>
                Contact
              </NavItem>
            </div>
          </div>
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavItem href="/" icon={Home}>
              Home
            </NavItem>
            <NavItem href="/events" icon={Home}>
              Events
            </NavItem>
            <NavItem href="/about" icon={Info}>
              About us
            </NavItem>
            <NavItem href="/contact" icon={Mail}>
              Contact
            </NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}
