import express from 'express';
import { getQuestions, submitQuiz, getQuizHistory } from '../controllers/quizController.js';

const router = express.Router();

// Get quiz questions
router.get('/questions', getQuestions);

// Submit quiz answers and get results
router.post('/results', submitQuiz);


// Get user quiz history
router.get('/history/:userId', getQuizHistory);

export default router;