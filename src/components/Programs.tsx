import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import healthEducationImage from "@/assets/Menstrual-Revolution_Kalasurya-Foundation.jpg";
import environmentalImage from "@/assets/plantation.jpeg";
import CommunityDevelopment from "@/assets/health-education.jpg"

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "Companion to the Menstrual Revolution",
      category: "Health Education",
      description: "Comprehensive menstrual health education program that empowers women and girls with knowledge about proper hygiene practices, sustainable products, and breaking taboos around menstruation.",
      image: healthEducationImage,
      impact: "5,000+ women educated",
      status: "Active",
      features: [
        "Interactive workshops and seminars",
        "Distribution of sustainable menstrual products",
        "Community health volunteer training",
        "School-based education programs"
      ]
    },
    {
      id: 2,
      title: "Environmental Awareness & Action",
      category: "Environmental Conservation",
      description: "Community-driven environmental programs including tree planting, waste management, and sustainable living practices that create lasting ecological impact.",
      image: environmentalImage,
      impact: "100+ communities engaged",
      status: "Active",
      features: [
        "Community tree planting initiatives",
        "Waste reduction and recycling programs",
        "Sustainable lifestyle workshops",
        "Environmental advocacy campaigns"
      ]
    },
    {
      id: 3,
      title: "Women's Empowerment Workshops",
      category: "Community Development",
      description: "Skill-building and leadership development programs designed to enhance women's economic opportunities and decision-making capabilities within their communities.",
      image: CommunityDevelopment,
      impact: "2,000+ women trained",
      status: "Growing",
      features: [
        "Financial literacy training",
        "Leadership development workshops",
        "Skill-based training programs",
        "Microenterprise development support"
      ]
    }
  ];

  return (
    <section id="programs" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Programs
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover how we're creating lasting change through targeted initiatives 
            that address the root causes of social and environmental challenges.
          </p>
        </div>

        <div className="grid gap-12">
          {programs.map((program, index) => (
            <Card key={program.id} className="overflow-hidden shadow-card transition-smooth hover:shadow-lg">
              <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* Image */}
                <div className={`relative h-64 lg:h-full ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-card/90 text-foreground">
                      {program.category}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge 
                      variant={program.status === 'Active' ? 'default' : 'outline'}
                      className={program.status === 'Active' ? 'bg-secondary text-secondary-foreground' : ''}
                    >
                      {program.status}
                    </Badge>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-8 lg:p-12 ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {program.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {program.description}
                    </p>
                  </CardHeader>

                  <CardContent className="p-0">
                    <div className="mb-6">
                      <div className="text-sm font-medium text-primary mb-2">Program Impact</div>
                      <div className="text-2xl font-bold text-accent">{program.impact}</div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-4">Key Features:</h4>
                      <ul className="space-y-2">
                        {program.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            <span className="text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button variant="default" size="lg">
                        Learn More
                      </Button>
                      <Button variant="outline" size="lg">
                        Support This Program
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="shadow-card bg-gradient-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Want to Learn More About Our Programs?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Get detailed information about our initiatives, impact reports, and how you can 
                get involved in creating positive change in your community.
              </p>
              <Button size="lg" variant="default">
                Download Program Guide
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Programs;