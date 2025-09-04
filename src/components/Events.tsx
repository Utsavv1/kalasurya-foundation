import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Women's Health Workshop Series",
      date: "March 15-17, 2024",
      time: "9:00 AM - 5:00 PM",
      location: "Community Center, Ahmedabad",
      description: "Comprehensive three-day workshop covering menstrual health, nutrition, and reproductive wellness.",
      capacity: "50 participants",
      status: "Registration Open",
      type: "Workshop",
      featured: true
    },
    {
      id: 2,
      title: "Environmental Action Rally",
      date: "April 22, 2024",
      time: "7:00 AM - 12:00 PM",
      location: "Multiple locations across Gujarat",
      description: "Join our Earth Day celebration with tree planting, cleanup drives, and awareness campaigns.",
      capacity: "200+ volunteers",
      status: "Registration Open",
      type: "Rally",
      featured: false
    },
    {
      id: 3,
      title: "Community Leadership Summit",
      date: "May 10, 2024",
      time: "10:00 AM - 4:00 PM",
      location: "Conference Hall, Surat",
      description: "Annual gathering of community leaders, volunteers, and stakeholders to plan future initiatives.",
      capacity: "100 leaders",
      status: "Invitation Only",
      type: "Summit",
      featured: false
    }
  ];

  const pastEvents = [
    {
      title: "World Earth Day Bike Rally 2023",
      date: "April 22-24, 2023",
      participants: "150+",
      impact: "5 communities reached",
      description: "Three-day environmental awareness campaign with bike rallies from Ahmedabad to Surat."
    },
    {
      title: "Menstrual Health Awareness Camp",
      date: "March 8, 2023",
      participants: "300+",
      impact: "200 women educated",
      description: "International Women's Day special program focusing on menstrual hygiene and health."
    },
    {
      title: "Volunteer Training Workshop",
      date: "February 15, 2023",
      participants: "75+",
      impact: "50 new volunteers trained",
      description: "Comprehensive training program for new volunteers joining our programs."
    }
  ];

  return (
    <section id="events" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Events & Activities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join us at our upcoming events or learn about the impact we've made through 
            past initiatives. Every event is an opportunity to connect and create change.
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Upcoming Events
          </h3>
          
          <div className="grid gap-8">
            {upcomingEvents.map((event) => (
              <Card 
                key={event.id} 
                className={`shadow-card transition-smooth hover:shadow-lg ${
                  event.featured ? 'ring-2 ring-primary bg-primary/5' : ''
                }`}
              >
                <div className="grid lg:grid-cols-3 gap-6 p-6">
                  {/* Event Info */}
                  <div className="lg:col-span-2">
                    <CardHeader className="p-0 mb-4">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge variant={event.featured ? "default" : "secondary"}>
                          {event.type}
                        </Badge>
                        <Badge 
                          variant={event.status === 'Registration Open' ? 'outline' : 'secondary'}
                          className={event.status === 'Registration Open' ? 'border-secondary text-secondary' : ''}
                        >
                          {event.status}
                        </Badge>
                        {event.featured && (
                          <Badge variant="default" className="bg-accent text-accent-foreground">
                            Featured Event
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {event.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {event.description}
                      </p>
                    </CardHeader>
                    
                    <div className="grid sm:grid-cols-2 gap-4 text-sm">
                      <div className="flex items-center text-muted-foreground">
                        <Calendar className="w-4 h-4 mr-2 text-primary" />
                        {event.date}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Clock className="w-4 h-4 mr-2 text-primary" />
                        {event.time}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-2 text-primary" />
                        {event.location}
                      </div>
                      <div className="flex items-center text-muted-foreground">
                        <Users className="w-4 h-4 mr-2 text-primary" />
                        {event.capacity}
                      </div>
                    </div>
                  </div>

                  {/* Registration CTA */}
                  <div className="flex flex-col justify-center">
                    <div className="text-center space-y-4">
                      <Button 
                        size="lg" 
                        className="w-full"
                        disabled={event.status === 'Invitation Only'}
                      >
                        {event.status === 'Registration Open' ? 'Register Now' : 'Learn More'}
                      </Button>
                      <Button variant="outline" size="sm" className="w-full">
                        Add to Calendar
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Past Events */}
        <div>
          <h3 className="text-3xl font-bold text-foreground mb-8 text-center">
            Past Events & Impact
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {pastEvents.map((event, index) => (
              <Card key={index} className="shadow-card transition-smooth hover:shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg font-bold text-foreground">
                    {event.title}
                  </CardTitle>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {event.date}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Participants:</span>
                      <span className="font-semibold text-primary">{event.participants}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Impact:</span>
                      <span className="font-semibold text-secondary">{event.impact}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="shadow-card bg-gradient-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Don't Miss Our Next Event
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Stay updated on our latest events, workshops, and community activities. 
                Subscribe to our newsletter for priority registration and exclusive invitations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Subscribe for Updates
                </Button>
                <Button variant="outline" size="lg">
                  View Event Calendar
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Events;