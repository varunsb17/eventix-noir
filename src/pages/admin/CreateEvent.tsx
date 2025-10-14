import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Ticket } from "lucide-react";
import { toast } from "sonner";

const CreateEvent = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    type: "",
    date: "",
    time: "",
    venue: "",
    location: "",
    price: "",
    description: "",
    lineup: "",
    availableTickets: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Create event:", formData);
    toast.success("Event created successfully!");
    navigate("/events");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card">
        <div className="container mx-auto px-6 py-6 flex items-center gap-4">
          <Link to="/events">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
              <Ticket className="h-5 w-5 text-background" />
            </div>
            <h1 className="text-2xl font-bold">Add New Event</h1>
          </div>
        </div>
      </header>

      <section className="container mx-auto px-6 py-12 max-w-3xl">
        <Card className="border-border animate-fade-up">
          <CardHeader>
            <CardTitle className="text-3xl">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-base">Event Title *</Label>
                <Input
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="h-12 border-border"
                  required
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="type" className="text-base">Event Type *</Label>
                  <Input
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    placeholder="e.g. Concert"
                    className="h-12 border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-base">Ticket Price *</Label>
                  <Input
                    id="price"
                    name="price"
                    value={formData.price}
                    onChange={handleChange}
                    placeholder="e.g. $45"
                    className="h-12 border-border"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-base">Event Date *</Label>
                  <Input
                    id="date"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="h-12 border-border"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time" className="text-base">Start Time *</Label>
                  <Input
                    id="time"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    className="h-12 border-border"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="venue" className="text-base">Venue Name *</Label>
                <Input
                  id="venue"
                  name="venue"
                  value={formData.venue}
                  onChange={handleChange}
                  className="h-12 border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-base">Location/Address *</Label>
                <Input
                  id="location"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="h-12 border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="availableTickets" className="text-base">Available Tickets *</Label>
                <Input
                  id="availableTickets"
                  name="availableTickets"
                  type="number"
                  value={formData.availableTickets}
                  onChange={handleChange}
                  className="h-12 border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lineup" className="text-base">Lineup (comma separated) *</Label>
                <Input
                  id="lineup"
                  name="lineup"
                  value={formData.lineup}
                  onChange={handleChange}
                  placeholder="Artist 1, Artist 2, Artist 3"
                  className="h-12 border-border"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description" className="text-base">Description *</Label>
                <Textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={5}
                  className="border-border resize-none"
                  required
                />
              </div>
              <div className="flex gap-4 pt-4">
                <Button 
                  type="submit" 
                  className="flex-1 h-12 bg-gradient-to-r from-accent to-primary hover:opacity-90"
                >
                  Create Event
                </Button>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => navigate("/events")}
                  className="border-border h-12"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default CreateEvent;
