
import { useState } from "react";
import { Calendar, Heart, Users, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      title: "Your health and safety have always been our top priority",
      image: "/lovable-uploads/e9cdcf25-2fbb-4aad-82df-7eecdb65954d.png",
    },
    // Add more slides as needed
  ];

  const newsItems = [
    {
      title: "New Medical Equipment",
      description: "Latest technology for better patient care",
      image: "/placeholder.svg",
    },
    {
      title: "Staff Training Program",
      description: "Continuous education for healthcare professionals",
      image: "/placeholder.svg",
    },
    {
      title: "Community Outreach",
      description: "Expanding healthcare access to all",
      image: "/placeholder.svg",
    },
  ];

  const stats = [
    { icon: Users, label: "Patients Served", value: "10,000+" },
    { icon: Heart, label: "Success Rate", value: "98%" },
    { icon: Calendar, label: "Years of Service", value: "25+" },
    { icon: Phone, label: "24/7 Support", value: "Available" },
  ];

  return (
    <div className="min-h-screen bg-white animate-fade-in">
      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <Carousel
          className="w-full h-full"
          current={currentSlide}
          onSelect={setCurrentSlide}
        >
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index} className="relative h-full">
                <img
                  src={slide.image}
                  alt="Healthcare professionals"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center">
                  <div className="container mx-auto px-6">
                    <h1 className="text-white text-4xl md:text-6xl font-bold max-w-3xl leading-tight">
                      {slide.title}
                    </h1>
                    <Button className="mt-8 bg-primary hover:bg-primary/90 text-white">
                      Learn More
                    </Button>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* News Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                  <Button variant="link" className="mt-4 p-0">
                    Read More →
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-secondary py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-muted-foreground">
                Dedicated to providing exceptional healthcare services to our community.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Primary Care</li>
                <li>Preventive Care</li>
                <li>Specialized Treatment</li>
                <li>Emergency Services</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>123 Healthcare Ave</li>
                <li>City, State 12345</li>
                <li>Phone: (123) 456-7890</li>
                <li>Email: info@healthcare.com</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Facebook
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  Twitter
                </a>
                <a href="#" className="text-muted-foreground hover:text-primary">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-muted-foreground">
            © 2024 Healthcare Center. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
