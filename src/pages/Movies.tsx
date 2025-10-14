import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Ticket, ArrowLeft } from "lucide-react";

const Movies = () => {
  // Mock data - will be replaced with real data
  const movies = [
    { id: 1, title: "The Last Journey", genre: "Action", rating: "8.5", price: "$12" },
    { id: 2, title: "Silent Echoes", genre: "Drama", rating: "7.8", price: "$10" },
    { id: 3, title: "Cosmic Dawn", genre: "Sci-Fi", rating: "9.1", price: "$15" },
    { id: 4, title: "Mystery Boulevard", genre: "Thriller", rating: "8.2", price: "$12" },
    { id: 5, title: "Summer Dreams", genre: "Romance", rating: "7.5", price: "$10" },
    { id: 6, title: "Dark Legacy", genre: "Horror", rating: "8.7", price: "$12" },
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
              <Ticket className="h-6 w-6 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">Movies</h1>
            </div>
          </div>
          <Link to="/admin/create-movie">
            <Button>Add Movie</Button>
          </Link>
        </div>
      </header>

      {/* Movies Grid */}
      <section className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {movies.map((movie) => (
            <Card key={movie.id} className="overflow-hidden hover:border-primary/50 transition-colors">
              <div className="aspect-[2/3] bg-muted flex items-center justify-center">
                <span className="text-4xl">🎬</span>
              </div>
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-foreground">{movie.title}</h3>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">{movie.genre}</Badge>
                  <Badge variant="outline">⭐ {movie.rating}</Badge>
                </div>
                <p className="text-lg font-semibold text-primary">{movie.price}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0 flex gap-2">
                <Link to={`/movie/${movie.id}`} className="flex-1">
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

export default Movies;
