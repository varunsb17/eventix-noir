import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";

const EventDetail = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data
  const event = {
    id,
    title: "Rock Festival 2024",
    type: "Concert",
    date: "March 15, 2024",
    time: "7:00 PM",
    venue: "City Arena",
    location: "Downtown, Main Street",
    price: "$45",
    description: "Join us for the biggest rock festival of the year featuring top artists and bands.",
    lineup: ["The Rockers", "Electric Storm", "Sound Wave", "Night Riders"],
    availableTickets: 150,
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/events">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Events
            </Button>
          </Link>
        </div>
      </header>

      {/* Event Detail */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Image */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="aspect-[4/3] bg-muted flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">{event.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-base px-3 py-1">{event.type}</Badge>
                <Badge variant="outline" className="text-base px-3 py-1">
                  {event.availableTickets} tickets left
                </Badge>
              </div>
              <p className="text-xl font-semibold text-accent mb-4">{event.price} per ticket</p>
              <p className="text-muted-foreground text-lg">{event.description}</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Date & Time</h3>
                  <p className="text-muted-foreground">{event.date} at {event.time}</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <h3 className="font-semibold text-foreground">Venue</h3>
                  <p className="text-muted-foreground">{event.venue}</p>
                  <p className="text-muted-foreground text-sm">{event.location}</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3 text-foreground">Lineup</h3>
              <div className="grid grid-cols-2 gap-3">
                {event.lineup.map((artist, index) => (
                  <Card key={index}>
                    <CardContent className="p-4">
                      <p className="font-medium text-foreground">{artist}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Button size="lg" className="w-full sm:w-auto">
              Book Tickets
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetail;
