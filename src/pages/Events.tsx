import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, ArrowLeft } from "lucide-react";

const Events = () => {
  // Mock data - will be replaced with real data
  const events = [
    { id: 1, title: "Rock Festival 2024", type: "Concert", date: "Mar 15", price: "$45" },
    { id: 2, title: "Jazz Night Live", type: "Music", date: "Mar 20", price: "$35" },
    { id: 3, title: "Comedy Stand-Up", type: "Comedy", date: "Mar 22", price: "$25" },
    { id: 4, title: "Classical Symphony", type: "Orchestra", date: "Mar 25", price: "$50" },
    { id: 5, title: "Pop Stars Concert", type: "Concert", date: "Mar 28", price: "$60" },
    { id: 6, title: "Theater Performance", type: "Theater", date: "Apr 1", price: "$40" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Ticket className="h-6 w-6 text-accent" />
              <h1 className="text-2xl font-bold text-foreground">Events</h1>
            </div>
          </div>
          <Link to="/admin/create-event">
            <Button>Add Event</Button>
          </Link>
        </div>
      </header>

      {/* Events Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event) => (
            <Card key={event.id} className="overflow-hidden hover:border-accent/50 transition-colors">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-4xl">🎵</span>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{event.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{event.type}</Badge>
                  <Badge variant="outline">📅 {event.date}</Badge>
                </div>
                <p className="text-lg font-semibold text-accent">{event.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Link to={`/event/${event.id}`} className="flex-1">
                  <Button className="w-full">View Details</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Events;
