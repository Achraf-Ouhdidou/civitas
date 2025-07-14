import Candidate from '../models/Candidate.js';

// Get all candidates with filtering
export const getCandidates = async (req, res) => {
  try {
    const { region, party, search, page = 1, limit = 20 } = req.query;
    
    let query = { isActive: true, verificationStatus: 'verified' };
    
    // Apply filters
    if (region) query.region = region;
    if (party) query.party = { $regex: party, $options: 'i' };
    if (search) {
      query.$or = [
        { name: { $regex: search, $options: 'i' } },
        { bio: { $regex: search, $options: 'i' } }
      ];
    }
    
    const candidates = await Candidate.find(query)
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .sort({ name: 1 });
    
    const total = await Candidate.countDocuments(query);
    
    res.json({
      candidates,
      total,
      page: parseInt(page),
      pages: Math.ceil(total / limit)
    });
  } catch (error) {
    console.error('Get candidates error:', error);
    res.status(500).json({ error: 'Failed to fetch candidates' });
  }
};

// Get single candidate
export const getCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findById(req.params.id);
    
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found' });
    }
    
    res.json({ candidate });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch candidate' });
  }
};

// Create new candidate (admin only)
export const createCandidate = async (req, res) => {
  try {
    const candidate = new Candidate(req.body);
    await candidate.save();
    
    res.status(201).json({ candidate });
  } catch (error) {
    console.error('Create candidate error:', error);
    res.status(400).json({ error: 'Failed to create candidate' });
  }
};

// Update candidate (admin only)
export const updateCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found' });
    }
    
    res.json({ candidate });
  } catch (error) {
    res.status(400).json({ error: 'Failed to update candidate' });
  }
};

// Delete candidate (admin only)
export const deleteCandidate = async (req, res) => {
  try {
    const candidate = await Candidate.findByIdAndUpdate(
      req.params.id,
      { isActive: false },
      { new: true }
    );
    
    if (!candidate) {
      return res.status(404).json({ error: 'Candidate not found' });
    }
    
    res.json({ message: 'Candidate deactivated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete candidate' });
  }
};

// Get candidates by region
export const getCandidatesByRegion = async (req, res) => {
  try {
    const { region } = req.params;
    
    const candidates = await Candidate.find({
      region,
      isActive: true,
      verificationStatus: 'verified'
    }).sort({ name: 1 });
    
    res.json({ candidates, region });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch candidates by region' });
  }
};