import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { quizRoutes } from './routes/quiz.js';
import { candidatesRoutes } from './routes/candidates.js';
import { policiesRoutes } from './routes/policies.js';
import { eventsRoutes } from './routes/events.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/quiz', quizRoutes);
app.use('/api/candidates', candidatesRoutes);
app.use('/api/policies', policiesRoutes);
app.use('/api/events', eventsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});