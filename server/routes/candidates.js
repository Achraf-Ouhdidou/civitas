import express from 'express';
import { 
  getCandidates, 
  getCandidate, 
  createCandidate, 
  updateCandidate, 
  deleteCandidate,
  getCandidatesByRegion 
} from '../controllers/candidateController.js';

const router = express.Router();

// Get all candidates with filtering
router.get('/', getCandidates);

// Get single candidate
router.get('/:id', getCandidate);

// Get candidates by region
router.get('/region/:region', getCandidatesByRegion);

// Create new candidate (admin only)
router.post('/', createCandidate);

// Update candidate (admin only)
router.put('/:id', updateCandidate);

// Delete candidate (admin only)
router.delete('/:id', deleteCandidate);

export default router;