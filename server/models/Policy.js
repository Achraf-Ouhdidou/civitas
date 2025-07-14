import mongoose from 'mongoose';

const policySchema = new mongoose.Schema({
  party: {
    type: String,
    required: true,
    trim: true,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['completed', 'in-progress', 'not-started', 'broken'],
    default: 'not-started',
  },
  category: {
    type: String,
    required: true,
    trim: true,
  },
  datePromised: {
    type: Date,
    required: true,
  },
  progress: {
    type: Number,
    min: 0,
    max: 100,
    default: 0,
  },
  sources: [{
    title: String,
    url: String,
    date: Date,
  }],
  partyColor: {
    type: String,
    default: 'border-gray-500',
  },
  updates: [{
    date: {
      type: Date,
      default: Date.now,
    },
    status: String,
    progress: Number,
    description: String,
    source: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
}, {
  timestamps: true,
});

// Index for efficient searching
policySchema.index({ party: 1, status: 1, category: 1 });
policySchema.index({ title: 'text', description: 'text' });

export default mongoose.model('Policy', policySchema);