import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { MapPin, Navigation, AlertCircle, Settings } from 'lucide-react';
import { toast } from 'sonner';

const MapIntegration = () => {
  const [apiKey, setApiKey] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const handleConnectMaps = () => {
    if (!apiKey.trim()) {
      toast.error('Please enter your Google Maps API key');
      return;
    }
    
    // Simulate API connection
    setIsConnected(true);
    toast.success('Google Maps API connected successfully! 🗺️');
  };

  return (
    <div className="space-y-6">
      {/* Google Maps Setup */}
      <Card className="bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MapPin className="h-6 w-6 text-primary" />
            Google Maps Integration
            {isConnected ? (
              <Badge className="bg-green-500/10 text-green-600 border-green-200">Connected</Badge>
            ) : (
              <Badge variant="outline" className="text-muted-foreground">Not Connected</Badge>
            )}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {!isConnected ? (
            <>
              <div className="flex items-start gap-3 p-4 bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <AlertCircle className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-medium text-blue-900 dark:text-blue-100 mb-1">
                    Connect Google Maps API
                  </p>
                  <p className="text-blue-700 dark:text-blue-300">
                    To enable real-time route planning, traffic updates, and location services, please enter your Google Maps API key.
                  </p>
                  <p className="text-blue-600 dark:text-blue-400 mt-2">
                    Get your API key from the{' '}
                    <a
                      href="https://developers.google.com/maps/documentation/javascript/get-api-key"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline font-medium hover:text-blue-500"
                    >
                      Google Cloud Console
                    </a>
                  </p>
                </div>
              </div>

              <div className="space-y-3">
                <Input
                  type="password"
                  placeholder="Enter your Google Maps API Key"
                  value={apiKey}
                  onChange={(e) => setApiKey(e.target.value)}
                  className="font-mono text-sm"
                />
                <Button
                  onClick={handleConnectMaps}
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  <Settings className="h-4 w-4 mr-2" />
                  Connect Google Maps
                </Button>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <div className="p-4 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="font-medium">Google Maps API Active</span>
                </div>
                <p className="text-sm text-green-600 dark:text-green-300 mt-1">
                  Real-time routing, traffic data, and location services are now available.
                </p>
              </div>

              {/* Interactive Map Placeholder */}
              <div className="relative h-80 bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg border-2 border-dashed border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-2">
                  <Navigation className="h-12 w-12 mx-auto text-primary animate-pulse" />
                  <h3 className="text-lg font-semibold text-foreground">Interactive Map</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Dynamic Google Maps with route planning, traffic updates, and smart suggestions will appear here
                  </p>
                </div>
              </div>

              {/* Map Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-gradient-to-br from-background to-muted/20 rounded-lg border text-center">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <MapPin className="h-4 w-4 text-primary" />
                  </div>
                  <h4 className="font-medium text-foreground">Real-time Routing</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Optimal routes with live traffic
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-background to-muted/20 rounded-lg border text-center">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <Navigation className="h-4 w-4 text-secondary" />
                  </div>
                  <h4 className="font-medium text-foreground">Smart Suggestions</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    AI-powered stop recommendations
                  </p>
                </div>
                
                <div className="p-4 bg-gradient-to-br from-background to-muted/20 rounded-lg border text-center">
                  <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-2">
                    <AlertCircle className="h-4 w-4 text-accent" />
                  </div>
                  <h4 className="font-medium text-foreground">Live Updates</h4>
                  <p className="text-xs text-muted-foreground mt-1">
                    Weather & traffic alerts
                  </p>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default MapIntegration;