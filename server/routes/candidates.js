import express from 'express';

const router = express.Router();

// Get candidates by region
router.get('/', (req, res) => {
  const { region, party, search } = req.query;
  
  // Mock data - in production, this would come from a database
  let candidates = getMockCandidates();
  
  if (region) {
    candidates = candidates.filter(c => c.region === region);
  }
  
  if (party) {
    candidates = candidates.filter(c => c.party.includes(party));
  }
  
  if (search) {
    candidates = candidates.filter(c => 
      c.name.toLowerCase().includes(search.toLowerCase())
    );
  }
  
  res.json({ candidates, total: candidates.length });
});

function getMockCandidates() {
  return [
    {
      id: 1,
      name: "Fatima Al-Zahra",
      party: "Justice and Development Party (PJD)",
      region: "Casablanca-Settat",
      age: 45,
      gender: "Female",
      bio: "Former economics professor with 15 years of experience in public policy and women's rights advocacy.",
      experience: ["Economics Professor", "Women's Rights Advocate", "Municipal Councilor"],
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400",
      partyColor: "text-green-600",
    },
    // Add more mock candidates...
  ];
}

export { router as candidatesRoutes };