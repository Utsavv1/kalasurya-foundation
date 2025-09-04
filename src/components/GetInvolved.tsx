import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Heart, Users, HandHeart, Calendar, DollarSign, Megaphone } from "lucide-react";

const GetInvolved = () => {
  const opportunities = [
    {
      icon: Users,
      title: "Volunteer with Us",
      description: "Join our community of dedicated volunteers and make a direct impact through hands-on involvement in our programs.",
      action: "Sign Up to Volunteer",
      color: "bg-primary"
    },
    {
      icon: DollarSign,
      title: "Make a Donation",
      description: "Support our mission with a financial contribution that helps us expand our reach and deepen our impact.",
      action: "Donate Now",
      color: "bg-secondary"
    },
    {
      icon: Calendar,
      title: "Attend Events",
      description: "Participate in our workshops, rallies, and community events to learn more and connect with like-minded individuals.",
      action: "View Events",
      color: "bg-accent"
    },
    {
      icon: Megaphone,
      title: "Spread Awareness",
      description: "Help us reach more people by sharing our mission and programs through your social networks and communities.",
      action: "Share Our Story",
      color: "bg-primary"
    }
  ];

  const donationLevels = [
    {
      amount: "$25",
      impact: "Provides educational materials for 5 women",
      popular: false
    },
    {
      amount: "$100",
      impact: "Sponsors a complete workshop for 20 participants",
      popular: true
    },
    {
      amount: "$250",
      impact: "Funds environmental program for one community",
      popular: false
    },
    {
      amount: "$500",
      impact: "Supports comprehensive program development",
      popular: false
    }
  ];

  return (
    <section id="get-involved" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get Involved
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            There are many ways to support our mission and become part of our community. 
            Choose the option that works best for you and start making a difference today.
          </p>
        </div>

        {/* Ways to Get Involved */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {opportunities.map((opportunity, index) => (
            <Card key={index} className="shadow-card transition-smooth hover:shadow-lg hover:-translate-y-2 text-center">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 mx-auto mb-4 ${opportunity.color} rounded-full flex items-center justify-center`}>
                  <opportunity.icon className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {opportunity.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                  {opportunity.description}
                </p>
                <Button variant="outline" className="w-full">
                  {opportunity.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Donation Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Donation Levels */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <Heart className="w-6 h-6 text-primary mr-2" />
                Make a Donation
              </CardTitle>
              <p className="text-muted-foreground">
                Your support helps us continue our vital work in communities. Choose an amount that works for you.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {donationLevels.map((level, index) => (
                  <Card 
                    key={index} 
                    className={`cursor-pointer transition-smooth hover:shadow-md ${
                      level.popular ? 'ring-2 ring-primary bg-primary/5' : ''
                    }`}
                  >
                    <CardContent className="p-4 text-center">
                      <div className="text-2xl font-bold text-primary mb-2">{level.amount}</div>
                      <div className="text-xs text-muted-foreground">{level.impact}</div>
                      {level.popular && (
                        <div className="text-xs font-semibold text-primary mt-1">Most Popular</div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <div className="space-y-4">
                <Input placeholder="Enter custom amount" />
                <Button className="w-full" size="lg">
                  Donate Securely
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Volunteer Application */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-foreground flex items-center">
                <HandHeart className="w-6 h-6 text-secondary mr-2" />
                Volunteer Application
              </CardTitle>
              <p className="text-muted-foreground">
                Join our team of dedicated volunteers and help us create meaningful change in communities.
              </p>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <Input placeholder="Full Name" />
                <Input type="email" placeholder="Email Address" />
                <Input placeholder="Phone Number" />
                <Input placeholder="Area of Interest" />
                <Button className="w-full" size="lg" variant="secondary">
                  Submit Application
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Newsletter Signup */}
        <Card className="shadow-card bg-gradient-card text-center">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Stay Connected
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive updates on our programs, upcoming events, 
              and impact stories from the communities we serve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input 
                placeholder="Enter your email address" 
                className="flex-1"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default GetInvolved;