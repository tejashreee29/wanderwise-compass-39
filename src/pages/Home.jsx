import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import {
  Compass,
  CloudSun,
  DollarSign,
  Wallet,
  UtensilsCrossed,
  Hotel,
  Calendar,
  Languages,
  MessageSquare,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import heroImage from "@/assets/hero-travel.jpg";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Compass,
      title: "Smart Destinations",
      description: "Get personalized recommendations based on your preferences",
    },
    {
      icon: CloudSun,
      title: "Weather Forecast",
      description: "Real-time weather updates for your destinations",
    },
    {
      icon: DollarSign,
      title: "Currency Converter",
      description: "Live exchange rates and conversion tools",
    },
    {
      icon: Wallet,
      title: "Travel Wallet",
      description: "Track your budget and expenses seamlessly",
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Culture",
      description: "Discover local cuisine and cultural experiences",
    },
    {
      icon: Hotel,
      title: "Stay & Transport",
      description: "Find perfect accommodations and travel options",
    },
    {
      icon: Calendar,
      title: "Itinerary Planner",
      description: "Create day-by-day travel plans effortlessly",
    },
    {
      icon: Languages,
      title: "Language Help",
      description: "Instant translations and useful phrases",
    },
    {
      icon: MessageSquare,
      title: "AI Assistant",
      description: "Your personal travel guide powered by AI",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-16 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Plan Your Dream
                <span className="block bg-gradient-hero bg-clip-text text-transparent">
                  Journey Today
                </span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-xl">
                Your all-in-one travel companion. From destination recommendations to budget
                tracking, weather forecasts to cultural insights - everything you need for the
                perfect trip.
              </p>
              <div className="flex gap-4">
                <Button
                  size="lg"
                  onClick={() => navigate("/auth")}
                  className="bg-gradient-hero shadow-elevated hover:shadow-soft transition-all"
                >
                  Start Planning
                </Button>
                <Button size="lg" variant="outline" onClick={() => navigate("/auth")}>
                  Learn More
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-sunset opacity-20 blur-3xl rounded-full"></div>
              <img
                src={heroImage}
                alt="Beautiful tropical destination"
                className="relative rounded-2xl shadow-elevated w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive tools to make your travel planning effortless
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group"
              >
                <feature.icon className="w-12 h-12 text-primary mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="p-12 bg-gradient-ocean text-white text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00em0wLTEwYzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHptLTEwIDBjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCA0LTEuNzkgNC00eiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
            <div className="relative z-10 space-y-6">
              <h2 className="text-4xl font-bold">Ready to Explore?</h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of travelers who trust TravelPlan to make their journeys
                unforgettable
              </p>
              <Button
                size="lg"
                variant="secondary"
                onClick={() => navigate("/auth")}
                className="bg-white text-primary hover:bg-white/90 shadow-elevated"
              >
                Get Started Free
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 TravelPlan. Your journey begins here.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
