import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Clock } from "lucide-react";

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: "Girl's Menstrual Health Seminar Series",
      date: "September 17 to 21, 2025",
      time: "9:00 AM - 5:00 PM",
      location: "Dev Bhumi,Dwarka and Porbander",
      description: "Comprehensive five-days workshop covering menstrual health, nutrition, and reproductive wellness.",
      capacity: "1200+ participants",
      status: "Registration Open",
      type: "Workshop",
      featured: false
    },
    {
      id: 2,
      title: "Senior Citizen's Picnic",
      date: "November 4, 2025",
      time: "5:00 AM - 1:00 AM",
      location: "Statue Of Unity",
      description: "One day picnic with senior citizens to entertain them.",
      capacity: "70 Persons",
      status: "Registration Open",
      type: "Picnic",
      featured: false
    },
    {
      id: 3,
      title: "Bharatnatyam Dikshant Samaroh 2025",
      date: "December 21, 2025",
      time: "5:00 PM - 9:00 PM",
      location: "Bhagwat Vidhyapith Sola, Ahmedabad",
      description: "Nine disciples of our foundation will present their Arangetram,performing non-stop for 2 hours.",
      capacity: "1700 Audiance",
      status: "Invitation Only",
      type: "Bharatnatyam Nrity",
      featured: false
    },
    {
      id: 4,
      title: "Joint Family Award Ceremoney Season - 7",
      date: "May 10, 2026",
      time: "3:00 PM - 6:00 PM",
      location: "Tagor Hall,Ahmedabad",
      description: "If you're living in joint family with more then 20 members register your name and we will falicitate your family.",
      capacity: "45 family",
      status: "Registration Open",
      type: "Award Ceremoney",
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
    },
    {
      title: "Joint Family Award Ceremoney",
      date: "May 12, 2024",
      participants: "2000+",
      impact: "75 families falicitated",
      description: "We organize joint family award ceremoney every year on mother's day.Till date,we falicitated 75 joint families."
    },
    {
      title: "Ignite Learning Movement ",
      date: "2020 - 2024",
      participants: "500+",
      impact: "200 kids and 300 adults were educated ",
      description: "We have been educating children,domestic helpers and auto drivers from slum areas,empowering them with the literacy."
    }
    ,{
      title: "Skill Training Program",
      date: "2021 - 2025",
      participants: "1500+",
      impact: "1500+ Womens Empower",
      description: "We provide skill training in all areas such as heavy motor driving,stitching,acting,hair & makeup artistry and more to empower women."
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
                      {/* 👇 ONLY ADDED onClick — NO OTHER CHANGES */}
                      <Button
                        variant="outline"
                        size="sm"
                        className="w-full"
                        type="button"
                        onClick={() => {
                          // Format date for Google Calendar (convert to YYYYMMDDTHHMMSS)
                          const formatDateForCalendar = (dateStr, timeStr) => {
                            const monthMap = {
                              January: "01", February: "02", March: "03", April: "04",
                              May: "05", June: "06", July: "07", August: "08",
                              September: "09", October: "10", November: "11", December: "12"
                            };

                            // Extract first date (start date) from range like "September 17 to 21, 2025"
                            const [monthName, dayPart] = dateStr.split(' ');
                            const day = dayPart.split(',')[0].padStart(2, '0');
                            const year = dateStr.split(', ')[1] || new Date().getFullYear().toString();

                            // Extract time (assume "9:00 AM" → "090000")
                            let [time, modifier] = timeStr.split(' ');
                            let [hour, minute] = time.split(':');
                            hour = parseInt(hour);
                            if (modifier === 'PM' && hour < 12) hour += 12;
                            if (modifier === 'AM' && hour === 12) hour = 0;
                            const hourStr = hour.toString().padStart(2, '0');
                            const minuteStr = minute || '00';

                            return `${year}${monthMap[monthName]}${day}T${hourStr}${minuteStr}00`;
                          };

                          const startDate = formatDateForCalendar(event.date, event.time.split(' - ')[0]);
                          const endDate = formatDateForCalendar(event.date, event.time.split(' - ')[1]);

                          const title = encodeURIComponent(event.title);
                          const description = encodeURIComponent(event.description);
                          const location = encodeURIComponent(event.location);

                          const googleUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${description}&location=${location}`;

                          window.open(googleUrl, '_blank');
                        }}
                      >
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