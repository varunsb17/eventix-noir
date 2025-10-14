import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, ArrowLeft, Plus, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AnimatedCard = ({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) => {
  const { elementRef, isVisible } = useScrollAnimation();
  
  return (
    <div
      ref={elementRef}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Events = () => {
  const events = [
    { id: 1, title: "Rock Festival 2024", type: "Concert", date: "Mar 15", price: "$45", venue: "City Arena" },
    { id: 2, title: "Jazz Night Live", type: "Music", date: "Mar 20", price: "$35", venue: "Blue Note" },
    { id: 3, title: "Comedy Stand-Up", type: "Comedy", date: "Mar 22", price: "$25", venue: "Laugh Factory" },
    { id: 4, title: "Classical Symphony", type: "Orchestra", date: "Mar 25", price: "$50", venue: "Concert Hall" },
    { id: 5, title: "Pop Stars Concert", type: "Concert", date: "Mar 28", price: "$60", venue: "Stadium" },
    { id: 6, title: "Theater Performance", type: "Theater", date: "Apr 1", price: "$40", venue: "Grand Theater" },
    { id: 7, title: "EDM Festival", type: "Music", date: "Apr 5", price: "$55", venue: "Open Air" },
    { id: 8, title: "Opera Night", type: "Opera", date: "Apr 8", price: "$65", venue: "Opera House" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <Link to="/">
              <Button variant="ghost" size="sm" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                <Ticket className="h-5 w-5 text-background" />
              </div>
              <div>
                <h1 className="text-2xl font-bold">Events</h1>
                <p className="text-xs text-muted-foreground">Live entertainment</p>
              </div>
            </div>
          </div>
          <Link to="/admin/create-event">
            <Button className="bg-gradient-to-r from-accent to-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" />
              Add Event
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/10 via-transparent to-transparent" />
        <div className="container mx-auto px-6">
          <div className="max-w-3xl animate-fade-up">
            <h2 className="text-6xl font-bold mb-6">
              Live{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Entertainment
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experience unforgettable concerts, shows, and performances. Get your tickets now.
            </p>
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {events.map((event, index) => (
              <AnimatedCard key={event.id} delay={index * 50}>
                <Card className="group overflow-hidden border-border hover:border-accent/50 transition-all duration-500 bg-card">
                  <Link to={`/event/${event.id}`}>
                    <div className="aspect-[4/3] bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-6xl group-hover:scale-110 transition-transform duration-500">🎵</span>
                    </div>
                    <div className="p-5 space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="text-lg font-semibold group-hover:text-accent transition-colors line-clamp-1">
                          {event.title}
                        </h3>
                        <Badge variant="secondary" className="shrink-0 text-xs bg-accent/20 text-accent border-accent/30">
                          {event.type}
                        </Badge>
                      </div>
                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-3 w-3" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3 w-3" />
                          <span className="line-clamp-1">{event.venue}</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-2xl font-bold text-accent">{event.price}</span>
                        <Button size="sm" className="bg-gradient-to-r from-accent to-primary hover:opacity-90">
                          Book Now
                        </Button>
                      </div>
                    </div>
                  </Link>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;
