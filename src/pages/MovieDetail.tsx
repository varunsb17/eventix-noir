import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Clock, Star } from "lucide-react";

const MovieDetail = () => {
  const { id } = useParams();

  // Mock data - will be replaced with real data
  const movie = {
    id,
    title: "The Last Journey",
    genre: "Action",
    rating: "8.5",
    duration: "2h 15m",
    price: "$12",
    description: "An epic adventure following the last survivor of a fallen empire on their quest for redemption.",
    director: "Jane Director",
    cast: ["Actor One", "Actor Two", "Actor Three"],
    showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-4 py-4">
          <Link to="/movies">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Movies
            </Button>
          </Link>
        </div>
      </header>

      {/* Movie Detail */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Poster */}
          <div className="lg:col-span-1">
            <Card className="overflow-hidden">
              <div className="aspect-[2/3] bg-muted flex items-center justify-center">
                <span className="text-6xl">🎬</span>
              </div>
            </Card>
          </div>

          {/* Details */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-4xl font-bold mb-4 text-foreground">{movie.title}</h1>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <Badge variant="secondary" className="text-base px-3 py-1">{movie.genre}</Badge>
                <Badge variant="outline" className="text-base px-3 py-1">
                  <Star className="h-4 w-4 mr-1 fill-current" />
                  {movie.rating}
                </Badge>
                <Badge variant="outline" className="text-base px-3 py-1">
                  <Clock className="h-4 w-4 mr-1" />
                  {movie.duration}
                </Badge>
              </div>
              <p className="text-xl font-semibold text-primary mb-4">{movie.price} per ticket</p>
              <p className="text-muted-foreground text-lg">{movie.description}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Director</h3>
              <p className="text-muted-foreground">{movie.director}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">Cast</h3>
              <p className="text-muted-foreground">{movie.cast.join(", ")}</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4 text-foreground">Showtimes</h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {movie.showtimes.map((time, index) => (
                  <Button key={index} variant="outline" className="w-full">
                    {time}
                  </Button>
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

export default MovieDetail;
