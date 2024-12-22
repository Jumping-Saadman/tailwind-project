"use client";

import { useState, useEffect, useRef } from "react";
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
  targetId,
  children,
  onClick,
  isActive,
}: {
  targetId: string;
  children: React.ReactNode;
  onClick: () => void;
  isActive: boolean;
}) => (
  <button
    onClick={() => {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
      onClick();
    }}
    className={`flex items-center space-x-2 transition-all duration-300 ${
      isActive
        ? "text-green-500 font-semibold"
        : "text-gray-400 hover:text-gray-100"
    }`}
  >
    <span>{children}</span>
  </button>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const observerRefs = useRef<IntersectionObserver[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "events", "about", "contact"];

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) {
              setActiveSection(section);
            }
          },
          { threshold: 0.5 }
        );
        observer.observe(element);
        observerRefs.current.push(observer);
      }
    });

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect());
    };
  }, []);

  const closeMenu = () => setIsOpen(false);

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
            <button
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                closeMenu();
              }}
              className="flex-shrink-0"
            >
              <Image
                src="/logos/Arekta-gaming-logo.svg"
                alt="Logo"
                width={160}
                height={120}
                className="h-10 w-auto"
              />
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavItem
                targetId="home"
                onClick={closeMenu}
                isActive={activeSection === "home"}
              >
                Home
              </NavItem>
              <NavItem
                targetId="events"
                onClick={closeMenu}
                isActive={activeSection === "events"}
              >
                Events
              </NavItem>
              <NavItem
                targetId="about"
                onClick={closeMenu}
                isActive={activeSection === "about"}
              >
                About us
              </NavItem>
              <NavItem
                targetId="contact"
                onClick={closeMenu}
                isActive={activeSection === "contact"}
              >
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
            <NavItem
              targetId="home"
              onClick={closeMenu}
              isActive={activeSection === "home"}
            >
              Home
            </NavItem>
            <NavItem
              targetId="events"
              onClick={closeMenu}
              isActive={activeSection === "events"}
            >
              Events
            </NavItem>
            <NavItem
              targetId="about"
              onClick={closeMenu}
              isActive={activeSection === "about"}
            >
              About us
            </NavItem>
            <NavItem
              targetId="contact"
              onClick={closeMenu}
              isActive={activeSection === "contact"}
            >
              Contact
            </NavItem>
          </div>
        </div>
      )}
    </nav>
  );
}
