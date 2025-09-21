import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Clock, 
  MapPin, 
  Utensils, 
  Hotel, 
  Camera, 
  Car, 
  Coffee,
  Star,
  DollarSign,
  Navigation,
  Calendar
} from 'lucide-react';

interface ItineraryItem {
  id: string;
  time: string;
  type: 'travel' | 'meal' | 'activity' | 'accommodation' | 'rest';
  title: string;
  location: string;
  description: string;
  duration: string;
  cost: number;
  rating?: number;
  image?: string;
}

const sampleItinerary: ItineraryItem[] = [
  {
    id: '1',
    time: '08:00',
    type: 'travel',
    title: 'Departure from Delhi',
    location: 'New Delhi, India',
    description: 'Start your journey with a scenic drive through the countryside',
    duration: '4 hours',
    cost: 50,
    rating: 4.5
  },
  {
    id: '2',
    time: '10:30',
    type: 'rest',
    title: 'Coffee Break',
    location: 'Highway Cafe, Gurgaon',
    description: 'Refreshing break with local coffee and snacks',
    duration: '30 mins',
    cost: 15,
    rating: 4.2
  },
  {
    id: '3',
    time: '12:00',
    type: 'meal',
    title: 'Lunch at Local Restaurant',
    location: 'Roadside Dhaba, Haryana',
    description: 'Authentic North Indian cuisine with regional specialties',
    duration: '1 hour',
    cost: 25,
    rating: 4.7
  },
  {
    id: '4',
    time: '15:00',
    type: 'activity',
    title: 'Scenic Viewpoint',
    location: 'Mountain View Point',
    description: 'Breathtaking panoramic views and photo opportunities',
    duration: '45 mins',
    cost: 0,
    rating: 4.9
  },
  {
    id: '5',
    time: '18:00',
    type: 'accommodation',
    title: 'Check-in Hotel',
    location: 'Mountain Resort, Shimla',
    description: 'Comfortable accommodation with mountain views',
    duration: 'Overnight',
    cost: 120,
    rating: 4.6
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'travel':
      return <Car className="h-4 w-4" />;
    case 'meal':
      return <Utensils className="h-4 w-4" />;
    case 'activity':
      return <Camera className="h-4 w-4" />;
    case 'accommodation':
      return <Hotel className="h-4 w-4" />;
    case 'rest':
      return <Coffee className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'travel':
      return 'bg-primary/10 text-primary border-primary/20';
    case 'meal':
      return 'bg-accent/10 text-accent border-accent/20';
    case 'activity':
      return 'bg-secondary/10 text-secondary border-secondary/20';
    case 'accommodation':
      return 'bg-purple-500/10 text-purple-600 border-purple-200';
    case 'rest':
      return 'bg-green-500/10 text-green-600 border-green-200';
    default:
      return 'bg-muted/10 text-muted-foreground border-muted/20';
  }
};

const ItineraryDisplay = () => {
  const totalCost = sampleItinerary.reduce((sum, item) => sum + item.cost, 0);

  return (
    <div className="space-y-6">
      {/* Itinerary Header */}
      <Card className="bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Navigation className="h-6 w-6 text-primary" />
            Your AI-Generated Itinerary
          </CardTitle>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              Day 1 of 3
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              8+ hours of activities
            </div>
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              Total: ${totalCost}
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Itinerary Timeline */}
      <div className="space-y-4">
        {sampleItinerary.map((item, index) => (
          <Card key={item.id} className="bg-gradient-to-r from-card to-muted/20 border-border/50 hover:shadow-md transition-all duration-300 animate-slide-in">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                {/* Time & Icon */}
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/20 shadow-sm">
                    <div className={`p-2 rounded-full ${getTypeColor(item.type)}`}>
                      {getTypeIcon(item.type)}
                    </div>
                  </div>
                  <div className="text-sm font-semibold text-primary mt-2">{item.time}</div>
                  {index < sampleItinerary.length - 1 && (
                    <div className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="h-3 w-3" />
                        {item.location}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-foreground">${item.cost}</div>
                      {item.rating && (
                        <div className="flex items-center gap-1 text-sm">
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <span className="text-muted-foreground">{item.rating}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground">{item.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Badge variant="outline" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {item.duration}
                      </Badge>
                      <Badge className={getTypeColor(item.type)}>
                        {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                      </Badge>
                    </div>
                    <Button variant="outline" size="sm" className="text-xs">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Trip Summary */}
      <Card className="bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20 shadow-lg">
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Day 1 Summary</h3>
              <p className="text-sm text-muted-foreground">
                Total estimated cost: <span className="font-bold text-accent">${totalCost}</span> per person
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Share Itinerary
              </Button>
              <Button className="bg-accent hover:bg-accent/90" size="sm">
                Start Navigation
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ItineraryDisplay;