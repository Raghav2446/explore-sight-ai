import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  MapPin, 
  Navigation, 
  Calendar, 
  DollarSign, 
  Bell, 
  Sparkles,
  Car,
  Plane,
  Menu
} from 'lucide-react';
import TripPlanner from '@/components/TripPlanner';
import MapIntegration from '@/components/MapIntegration';
import ItineraryDisplay from '@/components/ItineraryDisplay';
import RealTimeUpdates from '@/components/RealTimeUpdates';
import heroImage from '@/assets/hero-travel.jpg';

const Index = () => {
  const [activeTab, setActiveTab] = useState('planner');

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <div className="max-w-4xl mx-auto px-6 space-y-6">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Sparkles className="h-8 w-8 text-white animate-pulse" />
              <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
                AI-Powered Trip Planner
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              Plan Your Perfect
              <span className="block bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
                AI Journey
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Experience personalized itineraries with real-time updates, smart suggestions, and seamless booking integration
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-white/80 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Google Maps Integration
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                Real-time Planning
              </div>
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Budget Optimization
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-4 w-4" />
                Smart Notifications
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 -mt-20 relative z-20">
        <Card className="bg-background/95 backdrop-blur-sm border-border/50 shadow-2xl">
          <CardHeader className="pb-4">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Navigation className="h-6 w-6 text-primary" />
                <span className="text-2xl">Trip Planning Dashboard</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="text-xs">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-1" />
                  AI Active
                </Badge>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8 bg-muted/50">
                <TabsTrigger value="planner" className="flex items-center gap-2">
                  <Car className="h-4 w-4" />
                  <span className="hidden sm:inline">Trip Planner</span>
                </TabsTrigger>
                <TabsTrigger value="maps" className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span className="hidden sm:inline">Maps</span>
                </TabsTrigger>
                <TabsTrigger value="itinerary" className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span className="hidden sm:inline">Itinerary</span>
                </TabsTrigger>
                <TabsTrigger value="updates" className="flex items-center gap-2">
                  <Bell className="h-4 w-4" />
                  <span className="hidden sm:inline">Updates</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="planner" className="space-y-6">
                <TripPlanner />
              </TabsContent>

              <TabsContent value="maps" className="space-y-6">
                <MapIntegration />
              </TabsContent>

              <TabsContent value="itinerary" className="space-y-6">
                <ItineraryDisplay />
              </TabsContent>

              <TabsContent value="updates" className="space-y-6">
                <RealTimeUpdates />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Features Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
          <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 hover:shadow-lg transition-all duration-300 animate-float">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">AI-Powered Planning</h3>
              <p className="text-sm text-muted-foreground">
                Smart itineraries based on your preferences, budget, and real-time conditions
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10 border-secondary/20 hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Real-time Updates</h3>
              <p className="text-sm text-muted-foreground">
                Live traffic, weather alerts, and dynamic route optimization throughout your journey
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-accent/5 to-accent/10 border-accent/20 hover:shadow-lg transition-all duration-300 animate-float" style={{ animationDelay: '0.4s' }}>
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Budget Optimization</h3>
              <p className="text-sm text-muted-foreground">
                Intelligent expense tracking and cost estimation before your trip starts
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
