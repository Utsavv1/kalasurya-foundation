import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Programs", href: "#programs" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Events", href: "#events" },
    { name: "News", href: "#news" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-card shadow-soft fixed w-full top-0 z-50 transition-smooth">
      <div className="container mx-auto px-4 py-4 lg:px-8 lg:py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img
                src=" https://kalasuryafoundation.org/images/kalasurya_logo.png    "
                alt="Kalasurya Foundation Logo"
                className="h-16 w-16 mr-2 lg:h-14 lg:w-14 mt-1"
              />
              {/* 👇 ONLY CHANGED: Added text-3xl md:text-4xl — NO OTHER CHANGES */}
              <h1 className="text-3xl md:text-4xl font-bold text-primary lg:text-4xl">
                Kalasurya Foundation
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8 lg:space-x-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-smooth font-medium lg:text-sm"
              >
                {item.name}
              </a>
            ))}
            {/* 👇 ONLY CHANGED: Added asChild + <a> — NO OTHER CHANGES */}
            <Button asChild variant="default" size="sm" className="ml-4 lg:ml-2">
              <a href="#donation">Donate Now</a>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-primary transition-smooth"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary transition-smooth font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button asChild variant="default" size="sm" className="mt-4 self-start">
                <a href="#donation">Donate Now</a>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;