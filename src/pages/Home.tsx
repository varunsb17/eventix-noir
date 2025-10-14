import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Film, Ticket } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Ticket className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold text-foreground">TicketHub</h1>
          </div>
          <nav className="flex items-center gap-4">
            <Link to="/movies">
              <Button variant="ghost">Movies</Button>
            </Link>
            <Link to="/events">
              <Button variant="ghost">Events</Button>
            </Link>
            <Link to="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link to="/signup">
              <Button>Sign Up</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-foreground">
            Book Your Next Experience
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Discover and book tickets for the latest movies and live events
          </p>
          <div className="flex gap-4 justify-center">
            <Link to="/movies">
              <Button size="lg" className="gap-2">
                <Film className="h-5 w-5" />
                Browse Movies
              </Button>
            </Link>
            <Link to="/events">
              <Button size="lg" variant="secondary" className="gap-2">
                <Ticket className="h-5 w-5" />
                Browse Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Film className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Latest Movies</h3>
            <p className="text-muted-foreground">
              Book tickets for the newest blockbusters and indie films
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
              <Ticket className="h-6 w-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Live Events</h3>
            <p className="text-muted-foreground">
              Experience concerts, sports, and entertainment events
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg border border-border">
            <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <Ticket className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">Easy Booking</h3>
            <p className="text-muted-foreground">
              Simple and secure ticket booking process
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
