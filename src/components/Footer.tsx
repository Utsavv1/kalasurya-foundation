import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "About Us", href: "#about" },
    { name: "Our Programs", href: "#programs" },
    { name: "Get Involved", href: "#get-involved" },
    { name: "Events", href: "#events" },
    { name: "News & Updates", href: "#news" },
    { name: "Contact", href: "#contact" }
  ];

  const programs = [
    { name: "Menstrual Health Education", href: "#programs" },
    { name: "Environmental Initiatives", href: "#programs" },
    { name: "Women's Empowerment", href: "#programs" },
    { name: "Community Development", href: "#programs" }
  ];

  const resources = [
    { name: "Annual Reports", href: "#" },
    { name: "Impact Stories", href: "#" },
    { name: "Media Kit", href: "#" },
    { name: "Volunteer Resources", href: "#" },
    { name: "Partnership Opportunities", href: "#" }
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" }
  ];

  return (
    <footer className="bg-card border-t border-border">
      {/* Newsletter CTA */}
      <div className="bg-gradient-hero py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Stay Connected with Our Mission
          </h3>
          <p className="text-gray-900 mb-6 max-w-2xl mx-auto">
            Subscribe to receive updates on our programs, impact stories, and ways to get involved in creating positive change.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-2 rounded-md text-foreground border border-gray-300 focus:border-gray-500 focus:outline-none"
            />
            <Button variant="secondary" size="lg">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Kalasurya Foundation
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering communities through health education, environmental consciousness,
              and sustainable development programs that create lasting positive change.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 mr-2 text-primary" />
                Ahmedabad, Gujarat, India
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+919727717975" key="phone1" className="text-#847062 hover:underline">
                  +91 97277 17975
                </a>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a href="mailto:info@kalasuryafoundation.org" key="email1" className="text-#847062 hover:underline">
                  info@kalasuryafoundation.org
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-smooth"
                  aria-label={social.name}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Our Programs</h4>
            <ul className="space-y-3">
              {programs.map((program) => (
                <li key={program.name}>
                  <a
                    href={program.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-3 mb-6">
              {resources.map((resource) => (
                <li key={resource.name}>
                  <a
                    href={resource.href}
                    className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                  >
                    {resource.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* Donate Button */}
            <Card className="p-4 bg-gradient-card">
              <div className="text-center">
                <Heart className="w-6 h-6 text-primary mx-auto mb-2" />
                <p className="text-sm text-foreground font-medium mb-3">Support Our Mission</p>
                <Button size="sm" className="w-full">
                  Donate Now
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground">
              © 2025 Kalasurya Foundation. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-smooth">
                Code of Conduct
              </a>
            </div>

            <div className="text-sm text-muted-foreground">
              Made with ❤️ by GFuture Tech Pvt Ltd
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;