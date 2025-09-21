import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, DollarSign, Clock, Car, Utensils, Hotel, Navigation } from 'lucide-react';
import { toast } from 'sonner';

interface TripData {
  from: string;
  to: string;
  startDate: string;
  endDate: string;
  budget: number;
  travelers: number;
  interests: string[];
}

const TripPlanner = () => {
  const [tripData, setTripData] = useState<TripData>({
    from: '',
    to: '',
    startDate: '',
    endDate: '',
    budget: 0,
    travelers: 1,
    interests: []
  });

  const [isPlanning, setIsPlanning] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const interestOptions = ['Adventure', 'Culture', 'Food', 'Nature', 'Relaxation', 'Photography', 'Shopping', 'Nightlife'];

  const handleInterestToggle = (interest: string) => {
    setTripData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handlePlanTrip = async () => {
    if (!tripData.from || !tripData.to || !tripData.startDate) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsPlanning(true);
    
    // Simulate AI planning process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsPlanning(false);
    setShowResults(true);
    toast.success('Your AI-powered itinerary is ready! 🎉');
  };

  const estimatedCosts = {
    accommodation: Math.round(tripData.budget * 0.4),
    food: Math.round(tripData.budget * 0.3),
    transport: Math.round(tripData.budget * 0.2),
    activities: Math.round(tripData.budget * 0.1)
  };

  return (
    <div className="space-y-6">
      {/* Trip Planning Form */}
      <Card className="bg-gradient-to-br from-card to-muted/30 border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-2xl">
            <Navigation className="h-6 w-6 text-primary" />
            Plan Your AI-Powered Trip
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="from" className="text-foreground/80">From</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="from"
                  placeholder="Enter departure city"
                  value={tripData.from}
                  onChange={(e) => setTripData(prev => ({ ...prev, from: e.target.value }))}
                  className="pl-10 border-input bg-background/50"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="to" className="text-foreground/80">To</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="to"
                  placeholder="Enter destination city"
                  value={tripData.to}
                  onChange={(e) => setTripData(prev => ({ ...prev, to: e.target.value }))}
                  className="pl-10 border-input bg-background/50"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="startDate" className="text-foreground/80">Start Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="startDate"
                  type="date"
                  value={tripData.startDate}
                  onChange={(e) => setTripData(prev => ({ ...prev, startDate: e.target.value }))}
                  className="pl-10 border-input bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="endDate" className="text-foreground/80">End Date</Label>
              <div className="relative">
                <Calendar className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="endDate"
                  type="date"
                  value={tripData.endDate}
                  onChange={(e) => setTripData(prev => ({ ...prev, endDate: e.target.value }))}
                  className="pl-10 border-input bg-background/50"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="travelers" className="text-foreground/80">Travelers</Label>
              <Input
                id="travelers"
                type="number"
                min="1"
                max="20"
                value={tripData.travelers}
                onChange={(e) => setTripData(prev => ({ ...prev, travelers: parseInt(e.target.value) || 1 }))}
                className="border-input bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-foreground/80">Budget (USD)</Label>
            <div className="relative">
              <DollarSign className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                type="number"
                placeholder="Enter your total budget"
                value={tripData.budget || ''}
                onChange={(e) => setTripData(prev => ({ ...prev, budget: parseFloat(e.target.value) || 0 }))}
                className="pl-10 border-input bg-background/50"
              />
            </div>
          </div>

          <div className="space-y-3">
            <Label className="text-foreground/80">Interests & Preferences</Label>
            <div className="flex flex-wrap gap-2">
              {interestOptions.map((interest) => (
                <Badge
                  key={interest}
                  variant={tripData.interests.includes(interest) ? "default" : "outline"}
                  className={`cursor-pointer transition-all hover:scale-105 ${
                    tripData.interests.includes(interest)
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'hover:bg-primary/10'
                  }`}
                  onClick={() => handleInterestToggle(interest)}
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          <Button
            onClick={handlePlanTrip}
            disabled={isPlanning}
            className="w-full h-12 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            {isPlanning ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                AI is Planning Your Trip...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Car className="h-5 w-5" />
                Generate AI Itinerary
              </div>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Budget Breakdown */}
      {tripData.budget > 0 && (
        <Card className="bg-gradient-to-br from-card to-accent/5 border-border/50 shadow-lg animate-slide-in">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <DollarSign className="h-5 w-5 text-accent" />
              AI Budget Breakdown
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-background to-muted/30 rounded-lg border">
                <Hotel className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">${estimatedCosts.accommodation}</div>
                <div className="text-sm text-muted-foreground">Accommodation</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-background to-muted/30 rounded-lg border">
                <Utensils className="h-8 w-8 mx-auto mb-2 text-accent" />
                <div className="text-2xl font-bold text-foreground">${estimatedCosts.food}</div>
                <div className="text-sm text-muted-foreground">Food & Dining</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-background to-muted/30 rounded-lg border">
                <Car className="h-8 w-8 mx-auto mb-2 text-secondary" />
                <div className="text-2xl font-bold text-foreground">${estimatedCosts.transport}</div>
                <div className="text-sm text-muted-foreground">Transport</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-background to-muted/30 rounded-lg border">
                <Clock className="h-8 w-8 mx-auto mb-2 text-primary" />
                <div className="text-2xl font-bold text-foreground">${estimatedCosts.activities}</div>
                <div className="text-sm text-muted-foreground">Activities</div>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Results placeholder for when trip is planned */}
      {showResults && (
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-xl animate-slide-in">
          <CardHeader>
            <CardTitle className="text-primary">🎯 Your AI-Generated Itinerary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center py-8">
              <div className="text-lg text-muted-foreground mb-4">
                ✨ Amazing! Your personalized trip from <strong>{tripData.from}</strong> to <strong>{tripData.to}</strong> is ready!
              </div>
              <div className="text-sm text-muted-foreground">
                This is where the detailed itinerary, maps integration, and real-time suggestions would appear.
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TripPlanner;