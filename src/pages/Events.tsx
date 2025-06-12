import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock, Users, Filter, Download, ExternalLink } from 'lucide-react';

interface PoliticalEvent {
  id: number;
  title: string;
  type: 'debate' | 'town-hall' | 'rally' | 'info-session';
  date: string;
  time: string;
  location: string;
  region: string;
  organizer: string;
  description: string;
  attendees: number;
  maxAttendees?: number;
  registrationUrl?: string;
  isOnline: boolean;
}

const mockEvents: PoliticalEvent[] = [
  {
    id: 1,
    title: "Youth and Democracy: Shaping Morocco's Future",
    type: "town-hall",
    date: "2025-02-15",
    time: "19:00",
    location: "Mohammed V University Auditorium",
    region: "Rabat-Salé-Kénitra",
    organizer: "Civic Engagement Coalition",
    description: "Interactive discussion on how young people can actively participate in Morocco's democratic processes.",
    attendees: 245,
    maxAttendees: 500,
    registrationUrl: "#",
    isOnline: false,
  },
  {
    id: 2,
    title: "Economic Policies Debate: RNI vs PAM",
    type: "debate",
    date: "2025-02-18",
    time: "20:30",
    location: "Casa Cultural Center",
    region: "Casablanca-Settat",
    organizer: "Morocco Democracy Forum",
    description: "Head-to-head debate between RNI and PAM representatives on economic development strategies.",
    attendees: 156,
    maxAttendees: 300,
    registrationUrl: "#",
    isOnline: true,
  },
  {
    id: 3,
    title: "Women in Politics: Breaking Barriers",
    type: "info-session",
    date: "2025-02-20",
    time: "16:00",
    location: "Online Webinar",
    region: "National",
    organizer: "Moroccan Women's Political Network",
    description: "Informational session about opportunities and challenges for women in Moroccan politics.",
    attendees: 89,
    isOnline: true,
  },
  {
    id: 4,
    title: "PJD Regional Campaign Rally",
    type: "rally",
    date: "2025-02-22",
    time: "18:00",
    location: "Marrakech Convention Center",
    region: "Marrakech-Safi",
    organizer: "Justice and Development Party",
    description: "Campaign rally presenting PJD's vision for regional development and social justice.",
    attendees: 1200,
    maxAttendees: 2000,
    registrationUrl: "#",
    isOnline: false,
  },
  {
    id: 5,
    title: "Climate Policy Forum",
    type: "info-session",
    date: "2025-02-25",
    time: "14:30",
    location: "Fès Cultural Center",
    region: "Fès-Meknès",
    organizer: "Morocco Environmental Alliance",
    description: "Expert panel discussion on environmental policies and sustainable development initiatives.",
    attendees: 67,
    maxAttendees: 150,
    registrationUrl: "#",
    isOnline: false,
  },
  {
    id: 6,
    title: "Digital Governance Townhall",
    type: "town-hall",
    date: "2025-02-28",
    time: "19:30",
    location: "Online Platform",
    region: "National",
    organizer: "Digital Morocco Initiative",
    description: "Discussion on digital transformation in government services and citizen engagement.",
    attendees: 334,
    isOnline: true,
  },
];

const eventTypes = {
  debate: { color: 'bg-red-100 text-red-700', icon: '🎯' },
  'town-hall': { color: 'bg-blue-100 text-blue-700', icon: '🏛️' },
  rally: { color: 'bg-green-100 text-green-700', icon: '📢' },
  'info-session': { color: 'bg-purple-100 text-purple-700', icon: '📚' },
};

export const Events: React.FC = () => {
  const [selectedType, setSelectedType] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const regions = [...new Set(mockEvents.map(e => e.region))];
  const types = Object.keys(eventTypes);

  const filteredEvents = mockEvents.filter(event => {
    const eventDate = new Date(event.date);
    const filterDate = selectedDate ? new Date(selectedDate) : null;
    
    return (
      (selectedType === '' || event.type === selectedType) &&
      (selectedRegion === '' || event.region === selectedRegion) &&
      (!filterDate || eventDate >= filterDate)
    );
  });

  const getTypeLabel = (type: string) => {
    return type.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };

  const isUpcoming = (date: string) => {
    return new Date(date) >= new Date();
  };

  const exportToCalendar = (event: PoliticalEvent) => {
    const startDate = new Date(`${event.date}T${event.time}`);
    const endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); // 2 hours later
    
    const calendarData = {
      title: event.title,
      start: startDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      end: endDate.toISOString().replace(/[-:]/g, '').split('.')[0] + 'Z',
      description: event.description,
      location: event.location,
    };

    const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(calendarData.title)}&dates=${calendarData.start}/${calendarData.end}&details=${encodeURIComponent(calendarData.description)}&location=${encodeURIComponent(calendarData.location)}`;
    
    window.open(googleCalendarUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-moroccan-dark mb-4">Political Events</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed about upcoming political events, debates, and civic engagement opportunities in your region.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-2xl p-6 shadow-lg mb-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Event Type</label>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Types</option>
                {types.map(type => (
                  <option key={type} value={type}>{getTypeLabel(type)}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Region</label>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent appearance-none bg-white"
              >
                <option value="">All Regions</option>
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">From Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-moroccan-red focus:border-transparent"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setSelectedType('');
                  setSelectedRegion('');
                  setSelectedDate('');
                }}
                className="w-full px-4 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredEvents.length} events
          </p>
        </div>

        {/* Events List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${eventTypes[event.type].color}`}>
                      {eventTypes[event.type].icon} {getTypeLabel(event.type)}
                    </span>
                    {!isUpcoming(event.date) && (
                      <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                        Past Event
                      </span>
                    )}
                  </div>
                  {event.isOnline && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                      Online
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-moroccan-dark mb-3">{event.title}</h3>
                <p className="text-gray-700 mb-4 leading-relaxed">{event.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-2" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-2" />
                    <span className="text-sm">
                      {event.attendees} attendees
                      {event.maxAttendees && ` / ${event.maxAttendees} max`}
                    </span>
                  </div>
                </div>

                <div className="text-sm text-gray-600 mb-4">
                  <strong>Organized by:</strong> {event.organizer}
                </div>

                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => exportToCalendar(event)}
                    className="flex items-center px-4 py-2 bg-moroccan-blue text-white rounded-lg hover:bg-blue-700 transition-colors text-sm"
                  >
                    <Download className="w-4 h-4 mr-1" />
                    Add to Calendar
                  </button>
                  
                  {event.registrationUrl && isUpcoming(event.date) && (
                    <button className="flex items-center px-4 py-2 bg-moroccan-red text-white rounded-lg hover:bg-red-700 transition-colors text-sm">
                      <ExternalLink className="w-4 h-4 mr-1" />
                      Register
                    </button>
                  )}
                  
                  <button className="flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm">
                    <Users className="w-4 h-4 mr-1" />
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredEvents.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <Calendar className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No events found</h3>
            <p className="text-gray-500">Try adjusting your search criteria or check back later for new events</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};