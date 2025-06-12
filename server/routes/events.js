import express from 'express';

const router = express.Router();

// Get political events
router.get('/', (req, res) => {
  const { type, region, date } = req.query;
  
  let events = getMockEvents();
  
  if (type) {
    events = events.filter(e => e.type === type);
  }
  
  if (region) {
    events = events.filter(e => e.region === region);
  }
  
  if (date) {
    events = events.filter(e => new Date(e.date) >= new Date(date));
  }
  
  res.json({ events, total: events.length });
});

function getMockEvents() {
  return [
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
    // Add more mock events...
  ];
}

export { router as eventsRoutes };