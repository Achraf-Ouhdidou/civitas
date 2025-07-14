# Moroccan Voting Awareness Platform - صوتك يهم

A comprehensive, multilingual web platform designed to increase voter awareness and participation in Moroccan elections through technology, transparency, and civic engagement.

## 🌟 Features

### Core Modules

1. **Political Compass Quiz** - Interactive assessment to help users discover their political alignment
2. **Candidate Directory** - Comprehensive profiles of political candidates by region
3. **Policy Tracker** - Monitor political promises and track delivery
4. **Events Calendar** - Stay updated on political events and civic engagement opportunities

### Key Capabilities

- **Multilingual Support**: English, Arabic (العربية), French (Français), and Tifinagh (ⵜⴰⵎⴰⵣⵉⵖⵜ)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Cultural Authenticity**: Moroccan-inspired design with traditional colors and patterns
- **Academic Rigor**: Research-backed political analysis and alignment algorithms
- **Real-time Updates**: Live tracking of political developments and events

## 🚀 Technology Stack

### Frontend
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Router** for navigation
- **Lucide React** for icons

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **Helmet** for security
- **CORS** for cross-origin requests

### Development Tools
- **Vite** for build tooling
- **ESLint** for code linting
- **TypeScript** for type safety

## 📁 Project Structure

```
moroccan-voting-platform/
├── src/                          # Frontend source code
│   ├── components/              # Reusable UI components
│   ├── contexts/               # React contexts (Language, etc.)
│   ├── pages/                  # Page components
│   └── main.tsx               # Application entry point
├── server/                     # Backend source code
│   ├── config/                # Database and app configuration
│   ├── controllers/           # Route controllers
│   ├── models/               # MongoDB models
│   ├── routes/               # API routes
│   ├── services/             # Business logic services
│   └── index.js              # Server entry point
├── public/                    # Static assets
└── docs/                     # Documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-org/moroccan-voting-platform.git
   cd moroccan-voting-platform
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Configuration**
   Create a `.env` file in the root directory:
   ```env
   # Database
   MONGODB_URI=mongodb://localhost:27017/moroccan-voting-platform
   
   # JWT
   JWT_SECRET=your-super-secret-jwt-key
   JWT_EXPIRE=7d
   
   # Server
   PORT=3001
   NODE_ENV=development
   
   # Email (optional)
   EMAIL_HOST=smtp.gmail.com
   EMAIL_PORT=587
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Start MongoDB**
   ```bash
   # If using local MongoDB
   mongod
   
   # Or use MongoDB Atlas cloud service
   ```

5. **Run the application**
   ```bash
   # Start backend server
   npm run server
   
   # Start frontend development server (in another terminal)
   npm run dev
   ```

6. **Access the application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:3001
   - Health Check: http://localhost:3001/api/health

## 🌐 API Endpoints

### Quiz Module
- `GET /api/quiz/questions` - Get quiz questions
- `POST /api/quiz/results` - Submit quiz and get results
- `GET /api/quiz/history/:userId` - Get user quiz history

### Candidates Module
- `GET /api/candidates` - Get all candidates (with filtering)
- `GET /api/candidates/:id` - Get single candidate
- `GET /api/candidates/region/:region` - Get candidates by region
- `POST /api/candidates` - Create new candidate (admin)
- `PUT /api/candidates/:id` - Update candidate (admin)
- `DELETE /api/candidates/:id` - Delete candidate (admin)

### Policies Module
- `GET /api/policies` - Get all policies (with filtering)
- `GET /api/policies/:id` - Get single policy
- `POST /api/policies` - Create new policy (admin)
- `PUT /api/policies/:id` - Update policy (admin)

### Events Module
- `GET /api/events` - Get all events (with filtering)
- `GET /api/events/:id` - Get single event
- `POST /api/events` - Create new event (admin)
- `PUT /api/events/:id` - Update event (admin)

## 🎨 Design System

### Colors
- **Moroccan Red**: #C41E3A (Primary brand color)
- **Moroccan Gold**: #DAA520 (Accent color)
- **Moroccan Blue**: #1E3A8A (Secondary color)
- **Moroccan Green**: #006233 (Success states)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Inter (sans-serif)
- **Arabic**: Noto Sans Arabic
- **Tifinagh**: Noto Sans Tifinagh

### Components
- Moroccan-inspired patterns and geometric designs
- Responsive card-based layouts
- Smooth animations and micro-interactions
- Accessible color contrasts and typography

## 🌍 Internationalization

The platform supports four languages with complete translations:

- **English** (en) - Default language
- **Arabic** (ar) - Right-to-left support
- **French** (fr) - Secondary official language
- **Tifinagh** (ber) - Amazigh script (left-to-right)

### Adding New Translations

1. Update `src/contexts/LanguageContext.tsx`
2. Add new language object to the `translations` constant
3. Include all required translation keys
4. Test RTL support if applicable

## 🔒 Security Features

- **Helmet.js** for HTTP security headers
- **Rate limiting** to prevent abuse
- **Input validation** and sanitization
- **JWT authentication** for user sessions
- **Password hashing** with bcrypt
- **CORS configuration** for API access

## 📱 Responsive Design

The platform is fully responsive with breakpoints for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Production Build

```bash
# Build frontend
npm run build

# Start production server
npm start
```

### Environment Variables (Production)

```env
NODE_ENV=production
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database
JWT_SECRET=your-production-jwt-secret
PORT=3001
```

### Deployment Platforms

The application can be deployed on:
- **Netlify** (Frontend)
- **Heroku** (Full-stack)
- **Vercel** (Full-stack)
- **DigitalOcean** (VPS)
- **AWS** (EC2/Elastic Beanstalk)

## 🤝 Contributing

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run tests: `npm test`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

### Code Standards

- Use TypeScript for type safety
- Follow ESLint configuration
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed

## 📊 Analytics & Monitoring

- **Performance monitoring** with built-in metrics
- **Error tracking** and logging
- **User engagement** analytics
- **API usage** statistics

## 🔮 Future Enhancements

- **AI-powered recommendations** for political alignment
- **Real-time voting day support** with polling station info
- **Social media integration** for sharing results
- **Mobile app** development (React Native)
- **Advanced analytics** dashboard
- **Multi-factor authentication**
- **Offline support** with PWA features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Moroccan Political Science Experts** for research validation
- **University Partners** for academic collaboration
- **Open Source Community** for tools and libraries
- **Moroccan Citizens** for feedback and testing

## 📞 Support

For support, email contact@votematters.ma or join our community discussions.

---

**Made with ❤️ for Morocco's Democratic Future**

صُنع بـ ❤️ لمستقبل المغرب الديمقراطي