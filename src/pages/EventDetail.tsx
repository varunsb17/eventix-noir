import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin, Clock, Users, Ticket as TicketIcon } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();

  const event = {
    id,
    title: "Rock Festival 2024",
    type: "Concert",
    date: "March 15, 2024",
    time: "7:00 PM",
    venue: "City Arena",
    location: "Downtown, Main Street",
    price: "$45",
    description: "Join us for the biggest rock festival of the year featuring top artists and bands from around the world. Experience an unforgettable night of music, energy, and incredible performances.",
    lineup: ["The Rockers", "Electric Storm", "Sound Wave", "Night Riders", "Metal Hearts", "Thunder Road"],
    availableTickets: 150,
    duration: "6 hours",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/events">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Events
            </Button>
          </Link>
        </div>
      </header>

      {/* Event Detail */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Image */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-border sticky top-32 animate-scale-in">
                <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="text-9xl relative z-10">🎵</span>
                </div>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-3 space-y-8 animate-fade-up">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-5xl font-bold mb-2">{event.title}</h1>
                    <Badge variant="secondary" className="text-base px-4 py-2 bg-accent/20 text-accent border-accent/30">
                      {event.type}
                    </Badge>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-sm">
                  <Badge variant="outline" className="border-accent/50">
                    <TicketIcon className="h-3 w-3 mr-1" />
                    {event.availableTickets} tickets left
                  </Badge>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div className="grid sm:grid-cols-2 gap-6">
                <Card className="border-border bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                        <Calendar className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Date & Time</h3>
                        <p className="text-muted-foreground">{event.date}</p>
                        <p className="text-muted-foreground">{event.time}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                        <MapPin className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Venue</h3>
                        <p className="text-muted-foreground">{event.venue}</p>
                        <p className="text-muted-foreground text-sm">{event.location}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                        <Clock className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Duration</h3>
                        <p className="text-muted-foreground">{event.duration}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border bg-card/50">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="h-12 w-12 bg-accent/20 rounded-xl flex items-center justify-center shrink-0">
                        <TicketIcon className="h-6 w-6 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Price</h3>
                        <p className="text-2xl font-bold text-accent">{event.price}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4">About This Event</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{event.description}</p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                  <Users className="h-6 w-6 text-accent" />
                  Lineup
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {event.lineup.map((artist, index) => (
                    <Card key={index} className="border-border hover:border-accent/50 transition-colors">
                      <CardContent className="p-4">
                        <p className="font-medium text-lg">{artist}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-12 py-6 bg-gradient-to-r from-accent to-primary hover:opacity-90"
              >
                Get Your Tickets
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
