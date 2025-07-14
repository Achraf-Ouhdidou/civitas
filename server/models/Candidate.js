import mongoose from 'mongoose';

const candidateSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  party: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
    min: 18,
  },
  gender: {
    type: String,
    enum: ['Male', 'Female'],
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  experience: [{
    type: String,
    trim: true,
  }],
  education: [{
    degree: String,
    institution: String,
    year: Number,
  }],
  image: {
    type: String,
    default: '',
  },
  partyColor: {
    type: String,
    default: 'text-gray-600',
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
    website: String,
  },
  policies: [{
    title: String,
    description: String,
    category: String,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  verificationStatus: {
    type: String,
    enum: ['pending', 'verified', 'rejected'],
    default: 'pending',
  },
}, {
  timestamps: true,
});

// Index for efficient searching
candidateSchema.index({ region: 1, party: 1 });
candidateSchema.index({ name: 'text', bio: 'text' });

export default mongoose.model('Candidate', candidateSchema);