import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Target } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We approach every initiative with empathy and understanding for the communities we serve."
    },
    {
      icon: Users,
      title: "Community Focus",
      description: "Our programs are designed by the community, for the community, ensuring lasting impact."
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description: "We believe in creating solutions that protect both people and our planet for future generations."
    },
    {
      icon: Target,
      title: "Impact Driven",
      description: "Every program is measurable, accountable, and designed to create real, lasting change."
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            About Kalasurya Foundation
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Founded with a vision to create sustainable change, Kalasurya Foundation works at the 
            intersection of health education, environmental consciousness, and community empowerment.
          </p>
        </div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="shadow-card transition-smooth hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower women and communities through comprehensive health education, 
                environmental stewardship, and sustainable development programs that create 
                lasting positive change in society.
              </p>
            </CardContent>
          </Card>

          <Card className="shadow-card transition-smooth hover:shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-secondary mb-4">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                A world where every woman has access to quality health education, 
                where communities thrive in harmony with their environment, and where 
                sustainable practices drive social and economic growth.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center text-foreground mb-12">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center shadow-card transition-smooth hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* History Section */}
        <Card className="shadow-card">
          <CardContent className="p-8 lg:p-12">
            <h3 className="text-3xl font-bold text-foreground mb-6">Our Journey</h3>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p className="mb-4">
                Established with the belief that education and community action can transform lives, 
                Kalasurya Foundation began as a grassroots movement focused on addressing critical 
                gaps in women's health education and environmental awareness.
              </p>
              <p className="mb-4">
                Over the years, we have evolved into a comprehensive organization that implements 
                evidence-based programs, partners with local communities, and creates sustainable 
                solutions to complex social challenges.
              </p>
              <p>
                Today, our work spans multiple initiatives from menstrual health education to 
                environmental conservation, always with the goal of empowering individuals and 
                communities to create lasting change in their own lives.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;