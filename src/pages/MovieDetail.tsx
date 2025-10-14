import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, Clock, Star, Calendar, Users } from "lucide-react";

const MovieDetail = () => {
  const { id } = useParams();

  const movie = {
    id,
    title: "The Last Journey",
    genre: "Action",
    rating: "8.5",
    duration: "2h 15m",
    price: "$12",
    year: "2024",
    description: "An epic adventure following the last survivor of a fallen empire on their quest for redemption. With stunning visuals and heart-pounding action sequences, this film takes audiences on an unforgettable journey through fantastical landscapes.",
    director: "Jane Director",
    cast: ["Actor One", "Actor Two", "Actor Three", "Actor Four"],
    showtimes: ["10:00 AM", "1:30 PM", "5:00 PM", "8:30 PM"],
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="container mx-auto px-6 py-6">
          <Link to="/movies">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Movies
            </Button>
          </Link>
        </div>
      </header>

      {/* Movie Detail */}
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Poster */}
            <div className="lg:col-span-2">
              <Card className="overflow-hidden border-border sticky top-32 animate-scale-in">
                <div className="aspect-[2/3] bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <span className="text-9xl relative z-10">🎬</span>
                </div>
              </Card>
            </div>

            {/* Details */}
            <div className="lg:col-span-3 space-y-8 animate-fade-up">
              <div>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-5xl font-bold mb-2">{movie.title}</h1>
                    <p className="text-muted-foreground text-lg">{movie.year}</p>
                  </div>
                  <Badge variant="secondary" className="text-lg px-4 py-2">
                    {movie.genre}
                  </Badge>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 fill-primary text-primary" />
                    <span className="text-xl font-semibold text-foreground">{movie.rating}</span>
                    <span>/10</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    <span>{movie.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Now Showing</span>
                  </div>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <h3 className="text-2xl font-semibold mb-4">Synopsis</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">{movie.description}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Director
                  </h3>
                  <p className="text-muted-foreground">{movie.director}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Cast
                  </h3>
                  <p className="text-muted-foreground">{movie.cast.join(", ")}</p>
                </div>
              </div>

              <div className="h-px bg-border" />

              <div>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-semibold">Select Showtime</h3>
                  <span className="text-3xl font-bold text-primary">{movie.price}</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {movie.showtimes.map((time, index) => (
                    <Button
                      key={index}
                      variant="outline"
                      className="h-16 text-lg border-primary/30 hover:bg-primary/10 hover:border-primary hover:text-primary transition-all"
                    >
                      {time}
                    </Button>
                  ))}
                </div>
              </div>

              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg px-12 py-6 bg-gradient-to-r from-primary to-accent hover:opacity-90"
              >
                Proceed to Booking
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MovieDetail;
