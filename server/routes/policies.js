import express from 'express';

const router = express.Router();

// Get policy promises
router.get('/', (req, res) => {
  const { status, category, party } = req.query;
  
  let policies = getMockPolicies();
  
  if (status) {
    policies = policies.filter(p => p.status === status);
  }
  
  if (category) {
    policies = policies.filter(p => p.category === category);
  }
  
  if (party) {
    policies = policies.filter(p => p.party.includes(party));
  }
  
  res.json({ policies, total: policies.length });
});

function getMockPolicies() {
  return [
    {
      id: 1,
      party: "Justice and Development Party (PJD)",
      title: "Increase Minimum Wage to 3000 MAD",
      description: "Commitment to raise the national minimum wage to 3000 dirhams per month to improve living standards.",
      status: "in-progress",
      category: "Economy",
      datePromised: "2021-09-01",
      progress: 65,
      sources: ["Official Party Manifesto 2021", "Economic Reform Committee Report"],
      partyColor: "border-green-500",
    },
    // Add more mock policies...
  ];
}

export { router as policiesRoutes };