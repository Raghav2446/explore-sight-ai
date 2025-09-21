import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  AlertTriangle,
  Cloud,
  Navigation,
  Clock,
  MapPin,
  Thermometer,
  Wind,
  Eye,
  Bell,
  CheckCircle,
  XCircle
} from 'lucide-react';

interface Alert {
  id: string;
  type: 'weather' | 'traffic' | 'booking' | 'suggestion';
  severity: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  location?: string;
  timestamp: string;
  actionRequired?: boolean;
}

interface WeatherData {
  location: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  visibility: number;
}

const sampleAlerts: Alert[] = [
  {
    id: '1',
    type: 'traffic',
    severity: 'warning',
    title: 'Traffic Delay Detected',
    message: 'Heavy traffic on NH-1. Consider alternate route via NH-44 (+20 mins)',
    location: 'Delhi-Gurgaon Expressway',
    timestamp: '2 minutes ago',
    actionRequired: true
  },
  {
    id: '2',
    type: 'weather',
    severity: 'info',
    title: 'Weather Update',
    message: 'Light rain expected in Shimla. Pack umbrella for outdoor activities.',
    location: 'Shimla, HP',
    timestamp: '15 minutes ago',
    actionRequired: false
  },
  {
    id: '3',
    type: 'suggestion',
    severity: 'info',
    title: 'AI Recommendation',
    message: 'Great cafe discovered nearby! "Mountain View Cafe" - 4.8★ rating, perfect for lunch stop.',
    location: 'Kalka, HR',
    timestamp: '32 minutes ago',
    actionRequired: false
  }
];

const currentWeather: WeatherData = {
  location: 'Delhi, India',
  temperature: 28,
  condition: 'Partly Cloudy',
  humidity: 65,
  windSpeed: 12,
  visibility: 8
};

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case 'critical':
      return 'bg-red-500/10 text-red-600 border-red-200';
    case 'warning':
      return 'bg-yellow-500/10 text-yellow-600 border-yellow-200';
    case 'info':
      return 'bg-blue-500/10 text-blue-600 border-blue-200';
    default:
      return 'bg-muted/10 text-muted-foreground border-muted/20';
  }
};

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'weather':
      return <Cloud className="h-4 w-4" />;
    case 'traffic':
      return <Navigation className="h-4 w-4" />;
    case 'booking':
      return <Clock className="h-4 w-4" />;
    case 'suggestion':
      return <MapPin className="h-4 w-4" />;
    default:
      return <Bell className="h-4 w-4" />;
  }
};

const RealTimeUpdates = () => {
  const [alerts, setAlerts] = useState(sampleAlerts);
  const [isLiveUpdates, setIsLiveUpdates] = useState(true);

  // Simulate real-time updates
  useEffect(() => {
    if (!isLiveUpdates) return;

    const interval = setInterval(() => {
      // Simulate new alert occasionally
      if (Math.random() > 0.7) {
        const newAlert: Alert = {
          id: Date.now().toString(),
          type: 'suggestion',
          severity: 'info',
          title: 'New Recommendation',
          message: 'AI found a scenic route with beautiful views. Would you like to explore?',
          timestamp: 'Just now',
          actionRequired: true
        };
        setAlerts(prev => [newAlert, ...prev.slice(0, 4)]);
      }
    }, 30000);

    return () => clearInterval(interval);
  }, [isLiveUpdates]);

  const handleDismissAlert = (alertId: string) => {
    setAlerts(prev => prev.filter(alert => alert.id !== alertId));
  };

  return (
    <div className="space-y-6">
      {/* Live Status Header */}
      <Card className="bg-gradient-to-br from-card to-primary/5 border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Bell className="h-6 w-6 text-primary" />
              Real-Time Updates
              <div className={`flex items-center gap-2 ${isLiveUpdates ? 'text-green-600' : 'text-muted-foreground'}`}>
                <div className={`w-2 h-2 rounded-full ${isLiveUpdates ? 'bg-green-500 animate-pulse' : 'bg-gray-400'}`}></div>
                <span className="text-sm font-normal">{isLiveUpdates ? 'Live' : 'Paused'}</span>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setIsLiveUpdates(!isLiveUpdates)}
              className="text-xs"
            >
              {isLiveUpdates ? 'Pause' : 'Resume'} Updates
            </Button>
          </CardTitle>
        </CardHeader>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Current Weather */}
        <Card className="bg-gradient-to-br from-card to-secondary/5 border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Cloud className="h-5 w-5 text-secondary" />
              Current Weather
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-3xl font-bold text-foreground">{currentWeather.temperature}°C</div>
                <div className="text-sm text-muted-foreground">{currentWeather.condition}</div>
                <div className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="h-3 w-3" />
                  {currentWeather.location}
                </div>
              </div>
              <div className="text-right space-y-2">
                <div className="flex items-center gap-2 text-sm">
                  <Thermometer className="h-4 w-4 text-muted-foreground" />
                  <span>{currentWeather.humidity}% humidity</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Wind className="h-4 w-4 text-muted-foreground" />
                  <span>{currentWeather.windSpeed} km/h</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Eye className="h-4 w-4 text-muted-foreground" />
                  <span>{currentWeather.visibility} km</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Status */}
        <Card className="bg-gradient-to-br from-card to-accent/5 border-border/50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Navigation className="h-5 w-5 text-accent" />
              Traffic Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 rounded-lg">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium">Current Route</span>
              </div>
              <span className="text-sm text-green-600">Clear</span>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium">Alternative Route</span>
              </div>
              <span className="text-sm text-yellow-600">Moderate</span>
            </div>
            
            <div className="text-xs text-muted-foreground">
              Estimated arrival: <span className="font-medium">2:30 PM</span> (+5 mins delay)
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Active Alerts */}
      <Card className="bg-gradient-to-br from-card to-muted/20 border-border/50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-6 w-6 text-accent" />
            Active Alerts & Suggestions
            <Badge variant="secondary" className="text-xs">
              {alerts.length}
            </Badge>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {alerts.length === 0 ? (
            <div className="text-center py-8 text-muted-foreground">
              <CheckCircle className="h-12 w-12 mx-auto mb-4 text-green-500" />
              <p>No active alerts. Your trip is on track!</p>
            </div>
          ) : (
            alerts.map((alert) => (
              <div
                key={alert.id}
                className="flex items-start gap-4 p-4 bg-gradient-to-r from-background to-muted/10 border border-border rounded-lg hover:shadow-sm transition-all duration-200"
              >
                <div className={`p-2 rounded-full ${getSeverityColor(alert.severity)}`}>
                  {getTypeIcon(alert.type)}
                </div>
                
                <div className="flex-1 space-y-2">
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-foreground">{alert.title}</h4>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDismissAlert(alert.id)}
                        className="h-6 w-6 p-0 hover:bg-red-100 hover:text-red-600"
                      >
                        <XCircle className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">{alert.message}</p>
                  
                  {alert.location && (
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {alert.location}
                    </div>
                  )}
                  
                  {alert.actionRequired && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="text-xs h-7">
                        Accept
                      </Button>
                      <Button size="sm" variant="ghost" className="text-xs h-7">
                        Dismiss
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default RealTimeUpdates;