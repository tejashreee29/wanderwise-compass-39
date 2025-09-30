import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Navbar from "@/components/Navbar";
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

const Dashboard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    if (!session) {
      navigate("/auth");
    } else {
      setLoading(false);
    }
  };

  const modules = [
    {
      icon: Compass,
      title: "Destination Recommendations",
      description: "Get personalized suggestions based on your preferences",
      color: "text-primary",
      bgGradient: "from-primary/10 to-accent/10",
      comingSoon: true,
    },
    {
      icon: CloudSun,
      title: "Weather Forecast",
      description: "Check live weather for your destinations",
      color: "text-accent",
      bgGradient: "from-accent/10 to-primary/10",
      comingSoon: true,
    },
    {
      icon: DollarSign,
      title: "Currency Converter",
      description: "Live exchange rates and conversions",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-primary/10",
      comingSoon: true,
    },
    {
      icon: Wallet,
      title: "Travel Wallet",
      description: "Track your budget and expenses",
      color: "text-primary",
      bgGradient: "from-primary/10 to-secondary/10",
      comingSoon: true,
    },
    {
      icon: UtensilsCrossed,
      title: "Food & Culture",
      description: "Discover local cuisine and experiences",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-accent/10",
      comingSoon: true,
    },
    {
      icon: Hotel,
      title: "Stay & Transport",
      description: "Find hotels and travel options",
      color: "text-accent",
      bgGradient: "from-accent/10 to-secondary/10",
      comingSoon: true,
    },
    {
      icon: Calendar,
      title: "Itinerary Planner",
      description: "Plan your day-by-day activities",
      color: "text-primary",
      bgGradient: "from-primary/10 to-primary/5",
      comingSoon: true,
    },
    {
      icon: Languages,
      title: "Language Help",
      description: "Translations and useful phrases",
      color: "text-accent",
      bgGradient: "from-accent/10 to-accent/5",
      comingSoon: true,
    },
    {
      icon: MessageSquare,
      title: "AI Chatbot Assistant",
      description: "Your personal travel guide",
      color: "text-secondary",
      bgGradient: "from-secondary/10 to-secondary/5",
      comingSoon: true,
    },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Welcome to Your Travel Dashboard
            </h1>
            <p className="text-muted-foreground text-lg">
              Choose a module below to start planning your perfect journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={index}
                className={`relative overflow-hidden hover:shadow-elevated transition-all duration-300 hover:-translate-y-1 cursor-pointer group bg-gradient-to-br ${module.bgGradient}`}
              >
                {module.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full">
                    Coming Soon
                  </div>
                )}
                <CardHeader>
                  <module.icon
                    className={`w-12 h-12 ${module.color} mb-2 group-hover:scale-110 transition-transform`}
                  />
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-1 w-0 bg-gradient-hero group-hover:w-full transition-all duration-300 rounded-full"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
