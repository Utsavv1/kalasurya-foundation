import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Bookmark } from "lucide-react";

const News = () => {
  const newsItems = [
    {
      id: 1,
      title: "New Partnership Expands Menstrual Health Education Reach",
      excerpt: "Kalasurya Foundation announces strategic partnership with local health centers to bring comprehensive menstrual health education to rural communities across Gujarat.",
      category: "Partnership",
      author: "Communications Team",
      date: "March 1, 2024",
      readTime: "3 min read",
      featured: true
    },
    {
      id: 2,
      title: "Environmental Rally Sees Record Participation",
      excerpt: "Over 200 volunteers joined our recent environmental awareness rally, resulting in the planting of 500+ trees and cleanup of multiple community spaces.",
      category: "Impact Story",
      author: "Program Team",
      date: "February 25, 2024",
      readTime: "2 min read",
      featured: false
    },
    {
      id: 3,
      title: "Annual Impact Report 2024 Now Available",
      excerpt: "Our comprehensive annual report showcases the significant impact made across all programs, with detailed statistics and community testimonials.",
      category: "Report",
      author: "Research Team",
      date: "February 20, 2025",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 4,
      title: "Volunteer Spotlight: Community Champions Making a Difference",
      excerpt: "Meet the dedicated volunteers who have gone above and beyond in their service to communities, creating lasting positive change through their commitment.",
      category: "Volunteer Stories",
      author: "Communications Team",
      date: "February 15, 2024",
      readTime: "4 min read",
      featured: false
    },
    {
      id: 5,
      title: "New Workshop Series Launches for Women Entrepreneurs",
      excerpt: "Introducing our latest program focused on supporting women entrepreneurs with business skills, financial literacy, and market access opportunities.",
      category: "Program Launch",
      author: "Program Team",
      date: "February 10, 2024",
      readTime: "3 min read",
      featured: false
    }
  ];

  const mediaKit = [
    {
      title: "Press Kit 2024",
      description: "Official logos, brand guidelines, and high-resolution images",
      type: "Download"
    },
    {
      title: "Media Contact",
      description: "Get in touch with our communications team",
      type: "Contact"
    },
    {
      title: "Newsletter Archive",
      description: "Access previous editions of our monthly newsletter",
      type: "Archive"
    }
  ];

  return (
    <section id="news" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Latest News & Updates
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay informed about our latest initiatives, impact stories, and community 
            developments as we continue our mission of empowerment and change.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main News Section */}
          <div className="lg:col-span-3">
            {/* Featured Article */}
            {newsItems
              .filter(item => item.featured)
              .map(article => (
                <Card key={article.id} className="shadow-card mb-8 overflow-hidden">
                  <div className="bg-gradient-hero p-6" style={{ color: "#847062" }}>
                    <Badge variant="secondary" className="mb-4">
                      Featured Story
                    </Badge>
                    <CardTitle className="text-2xl font-bold mb-3">
                      {article.title}
                    </CardTitle>
                    <p className="mb-4">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: "#847062" }}>
                      <User className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.author}</span>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span className="mr-4">{article.date}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <Button variant="default" className="flex items-center">
                        Read Full Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Bookmark className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}

            {/* Regular News Articles */}
            <div className="grid gap-6">
              {newsItems
                .filter(item => !item.featured)
                .map(article => (
                  <Card key={article.id} className="shadow-card transition-smooth hover:shadow-lg">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline">{article.category}</Badge>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="w-4 h-4 mr-1" />
                          {article.date}
                        </div>
                      </div>
                      <CardTitle className="text-xl font-bold text-foreground hover:text-primary transition-smooth cursor-pointer">
                        {article.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-sm text-muted-foreground">
                          <User className="w-4 h-4 mr-1" />
                          <span className="mr-4">{article.author}</span>
                          <span>{article.readTime}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          Read More
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Newsletter Signup */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  Stay Updated
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">
                  Subscribe to receive our latest news, impact stories, and event updates directly in your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-input rounded-md text-sm"
                  />
                  <Button className="w-full" size="sm">
                    Subscribe
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Media Kit */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  Media Resources
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {mediaKit.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                    <div>
                      <div className="font-medium text-foreground text-sm">{item.title}</div>
                      <div className="text-xs text-muted-foreground">{item.description}</div>
                    </div>
                    <Button variant="ghost" size="sm">
                      {item.type}
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="shadow-card bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-lg font-bold text-foreground">
                  Impact This Month
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">250+</div>
                  <div className="text-sm text-muted-foreground">Women Reached</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">15</div>
                  <div className="text-sm text-muted-foreground">Programs Conducted</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-accent">8</div>
                  <div className="text-sm text-muted-foreground">Communities Served</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Archive Section */}
        <div className="text-center mt-16">
          <Card className="shadow-card p-8">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Looking for Older News?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Browse our complete news archive to find press releases, impact reports, 
                and stories from throughout our organization's history.
              </p>
              <Button size="lg" variant="outline">
                Visit News Archive
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default News;