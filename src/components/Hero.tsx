import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-foundation.jpg";

const Hero = () => {
  return (
    // 👇 ONLY CHANGED: Updated className to add responsive padding — NO OTHER CHANGES
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-8 lg:pt-12">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
            Empowering Communities,
            <span className="text-accent"> Transforming Lives</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Through health education, environmental initiatives, and community empowerment, 
            we're building a brighter future for women and families across our communities.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" variant="default" className="text-lg px-8 py-3 shadow-card">
              Learn About Our Work
            </Button>
            <Button size="lg" variant="secondary" className="text-lg px-8 py-3 shadow-card">
              Get Involved Today
            </Button>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">5,000+</div>
              <div className="text-primary-foreground/80">Women Empowered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-primary-foreground/80">Programs Launched</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-primary-foreground/80">Communities Reached</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;