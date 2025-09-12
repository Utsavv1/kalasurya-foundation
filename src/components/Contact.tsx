import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react";
import { useState } from "react"; // 👈 ADDED: Import useState (if not already imported)

const Contact = () => {
  const opportunities = [ /* ... your existing code doesn't have this — ignore if not present */ ];

  const contactInfo = [
    {
      icon: MapPin,
      title: "Our Address",
      details: [
        "Kalasurya Foundation Kalasurya House",
        "4 Sarthi Duplex",
        "Nr. Sterling City",
        "Bopal, Ahmedabad, Gujarat 380058"
      ]
    },
    {
      icon: Phone,
      title: "Phone & WhatsApp",
      details: [
        <a href="tel:+919727717975" key="phone1" className="text-#847062 hover:underline">
          +91 97277 17975
        </a>,
        "Available for calls and messages",
        "Mon - Fri: 9:00 AM - 6:00 PM",
        "Sat: 9:00 AM - 2:00 PM"
      ]
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        <a href="mailto:info@kalasuryafoundation.org" key="email1" className="text-#847062 hover:underline">
          info@kalasuryafoundation.org
        </a>,
        <a href="mailto:programs@kalasuryafoundation.org" key="email2" className="text-#847062 hover:underline">
          programs@kalasuryafoundation.org
        </a>,
        <a href="mailto:volunteer@kalasuryafoundation.org" key="email3" className="text-#847062 hover:underline">
          volunteer@kalasuryafoundation.org
        </a>,
        <a href="mailto:media@kalasuryafoundation.org" key="email4" className="text-#847062 hover:underline">
          media@kalasuryafoundation.org
        </a>
      ]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: [
        "Monday - Friday",
        "9:00 AM - 6:00 PM",
        "Saturday",
        "9:00 AM - 2:00 PM"
      ]
    }
  ];

  const officeLocations = [
    {
      city: "Ahmedabad",
      address: "Main Office, Community Center",
      type: "Headquarters",
      contact: <a href="tel:+919727717975" key="phone1" className="text-#847062 hover:underline">
        +91 97277 17975
      </a>,
    },
    {
      city: "Mumbai",
      address: "Andheri West",
      type: "India Chepter",
      contact: <a href="tel:++91 63551 00803" key="phone1" className="text-#847062 hover:underline">
        +91 63551 00803
      </a>,
    },
    {
      city: "USA",
      address: "Dorchester,Bosten",
      type: "International",
      contact: <a href="tel:+1 857-397-6316" key="phone1" className="text-#847062 hover:underline">
        +1 857-397-6316
      </a>,
    }
  ];

  // 👇 ADDED: State for form submission loading
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you. Whether you have questions about our programs,
            want to volunteer, or need support, we're here to help and connect.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 mb-16">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                  <Send className="w-6 h-6 text-primary mr-2" />
                  Send us a Message
                </CardTitle>
                <p className="text-muted-foreground">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
              </CardHeader>
              <CardContent>
                {/* 👇 ONLY ADDED onSubmit — NO OTHER CHANGES */}
                <form 
                  className="space-y-6"
                  onSubmit={async (e) => {
                    e.preventDefault();
                    setIsSubmitting(true);

                    const formData = new FormData(e.target as HTMLFormElement);
                    const data = {
                      first_name: formData.get('first_name'),
                      last_name: formData.get('last_name'),
                      email: formData.get('email'),
                      phone: formData.get('phone'),
                      subject: formData.get('subject'),
                      message: formData.get('message'),
                    };

                    try {
                      const response = await fetch('https://kalasurya-backend.onrender.com/api/contact', {
                        method: 'POST',
                        headers: {
                          'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data),
                      });

                      const result = await response.json();

                      if (response.ok) {
                        alert(result.message || 'Thank you! We’ll get back to you soon.');
                        (e.target as HTMLFormElement).reset();
                      } else {
                        alert(result.error || 'Failed to send message. Please try again.');
                      }
                    } catch (error) {
                      alert('Network error. Please check if backend is running.');
                      console.error('Error:', error);
                    } finally {
                      setIsSubmitting(false);
                    }
                  }}
                >
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        First Name *
                      </label>
                      {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                      <Input name="first_name" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Last Name *
                      </label>
                      {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                      <Input name="last_name" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                    <Input name="email" type="email" placeholder="Enter your email address" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                    <Input name="phone" placeholder="Enter your phone number" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                    <Input name="subject" placeholder="What is this regarding?" />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    {/* 👇 ONLY ADDED name attribute — NO OTHER CHANGES */}
                    <Textarea
                      name="message"
                      placeholder="Tell us more about your inquiry..."
                      rows={6}
                    />
                  </div>

                  {/* 👇 ONLY ADDED type="submit" and disabled — NO OTHER CHANGES */}
                  <Button 
                    size="lg" 
                    className="w-full"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground mb-2">{info.title}</h3>
                      <div className="space-y-1">
                        {info.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="text-sm text-muted-foreground">
                            {detail}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Quick Actions */}
            <Card className="shadow-card bg-gradient-card">
              <CardContent className="p-6 text-center">
                <MessageCircle className="w-8 h-8 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Need Immediate Help?</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  For urgent matters or immediate assistance, reach out via WhatsApp.
                </p>
                <Button
                  variant="secondary"
                  className="w-full"
                  onClick={() => window.open("https://wa.me/919727717975?text=Hello%20Kalasurya%20Foundation!", "_blank")}
                >
                  WhatsApp Us
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Office Locations */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-8">
            Our Locations
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {officeLocations.map((location, index) => (
              <Card key={index} className="shadow-card transition-smooth hover:shadow-lg">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-6 h-6 text-secondary" />
                  </div>
                  <h4 className="font-bold text-foreground mb-2">{location.city}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{location.address}</p>
                  <div className="text-xs text-primary font-medium mb-3">{location.type}</div>
                  <div className="text-sm text-muted-foreground">{location.contact}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map Placeholder with Google Maps as background */}
        <Card className="shadow-card">
          <CardContent className="p-0 h-64 overflow-hidden rounded-lg">
            <a
              href="  https://www.google.com/maps/search/?api=1&query=Kalasurya+Foundation,+Kalasurya+House,+4+Sarthi+Duplex,+Nr.+Sterling+City,+Bopal,+Ahmedabad,+Gujarat+380058"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full"
            >
              <div className="relative w-full h-full">
                <iframe
                  title="Kalasurya Foundation Location"
                  src="  https://www.google.com/maps?q=Kalasurya+Foundation,+Kalasurya+House,+4+Sarthi+Duplex,+Nr.+Sterling+City,+Bopal,+Ahmedabad,+Gujarat+380058&output=embed"
                  allowFullScreen
                  loading="lazy"
                  className="absolute top-0 left-0 w-full h-full"
                ></iframe>
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center text-white p-4">
                  <MapPin className="w-12 h-12 mb-2" />
                  <p className="text-lg font-semibold">Interactive Map</p>
                  <p className="text-sm">Visit us at our main office in Bopal, Ahmedabad</p>
                </div>
              </div>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;