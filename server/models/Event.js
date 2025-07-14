import mongoose from 'mongoose';

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  type: {
    type: String,
    enum: ['debate', 'town-hall', 'rally', 'info-session'],
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
    trim: true,
  },
  region: {
    type: String,
    required: true,
    trim: true,
  },
  organizer: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  attendees: {
    type: Number,
    default: 0,
  },
  maxAttendees: {
    type: Number,
  },
  registrationUrl: {
    type: String,
  },
  isOnline: {
    type: Boolean,
    default: false,
  },
  participants: [{
    name: String,
    party: String,
    role: String,
  }],
  tags: [{
    type: String,
    trim: true,
  }],
  isActive: {
    type: Boolean,
    default: true,
  },
  registrations: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    registeredAt: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      enum: ['registered', 'attended', 'cancelled'],
      default: 'registered',
    },
  }],
}, {
  timestamps: true,
});

// Index for efficient searching
eventSchema.index({ date: 1, region: 1, type: 1 });
eventSchema.index({ title: 'text', description: 'text' });

// Virtual for checking if event is upcoming
eventSchema.virtual('isUpcoming').get(function() {
  return this.date >= new Date();
});

export default mongoose.model('Event', eventSchema);