import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, RotateCcw, Share2, Download, Check } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface Question {
  id: number;
  text: string;
  category: string;
}

interface QuizResult {
  party: string;
  percentage: number;
  color: string;
  description: string;
}

export const PoliticalQuiz: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(-1); // Start at -1 for quiz type selection
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [quizType, setQuizType] = useState<'short' | 'full'>('short');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [results, setResults] = useState<QuizResult[]>([]);
  const [loading, setLoading] = useState(false);
  
  const { t, language, isRTL } = useLanguage();

  const totalQuestions = quizType === 'short' ? 10 : 15;
  const progress = currentQuestion >= 0 ? ((currentQuestion + 1) / totalQuestions) * 100 : 0;

  // Fetch questions when quiz type or language changes
  useEffect(() => {
    if (currentQuestion >= 0) {
      fetchQuestions();
    }
  }, [quizType, language, currentQuestion]);

  const fetchQuestions = async () => {
    try {
      const response = await fetch(`/api/quiz/questions?type=${quizType}&lang=${language}`);
      const data = await response.json();
      setQuestions(data.questions);
    } catch (error) {
      console.error('Failed to fetch questions:', error);
      // Fallback to mock data
      setQuestions(getMockQuestions());
    }
  };

  const getMockQuestions = (): Question[] => {
    const mockData = {
      en: [
        { id: 1, text: "The government should prioritize economic growth over environmental protection", category: "Economic Policy" },
        { id: 2, text: "Morocco should strengthen ties with African nations", category: "Foreign Policy" },
        { id: 3, text: "Private healthcare should be expanded alongside public healthcare", category: "Healthcare" },
        { id: 4, text: "Education should be primarily conducted in Arabic", category: "Education & Culture" },
        { id: 5, text: "The government should increase minimum wage significantly", category: "Social Policy" },
        { id: 6, text: "Morocco should accelerate renewable energy development", category: "Environment" },
        { id: 7, text: "Women should have equal representation in government", category: "Social Issues" },
        { id: 8, text: "Small businesses should receive more government support", category: "Economic Policy" },
        { id: 9, text: "Morocco should maintain strong relationships with European nations", category: "Foreign Policy" },
        { id: 10, text: "Internet access should be considered a basic human right", category: "Technology & Rights" },
      ],
      ar: [
        { id: 1, text: "يجب على الحكومة إعطاء الأولوية للنمو الاقتصادي على حماية البيئة", category: "السياسة الاقتصادية" },
        { id: 2, text: "يجب على المغرب تعزيز العلاقات مع الدول الأفريقية", category: "السياسة الخارجية" },
        { id: 3, text: "يجب توسيع الرعاية الصحية الخاصة إلى جانب الرعاية الصحية العامة", category: "الصحة" },
        { id: 4, text: "يجب أن يكون التعليم باللغة العربية بشكل أساسي", category: "التعليم والثقافة" },
        { id: 5, text: "يجب على الحكومة زيادة الحد الأدنى للأجور بشكل كبير", category: "السياسة الاجتماعية" },
        { id: 6, text: "يجب على المغرب تسريع تطوير الطاقة المتجددة", category: "البيئة" },
        { id: 7, text: "يجب أن تحصل النساء على تمثيل متساوٍ في الحكومة", category: "القضايا الاجتماعية" },
        { id: 8, text: "يجب أن تحصل الشركات الصغيرة على مزيد من الدعم الحكومي", category: "السياسة الاقتصادية" },
        { id: 9, text: "يجب على المغرب الحفاظ على علاقات قوية مع الدول الأوروبية", category: "السياسة الخارجية" },
        { id: 10, text: "يجب اعتبار الوصول إلى الإنترنت حقاً أساسياً من حقوق الإنسان", category: "التكنولوجيا والحقوق" },
      ],
      fr: [
        { id: 1, text: "Le gouvernement devrait prioriser la croissance économique sur la protection environnementale", category: "Politique Économique" },
        { id: 2, text: "Le Maroc devrait renforcer ses liens avec les nations africaines", category: "Politique Étrangère" },
        { id: 3, text: "Les soins de santé privés devraient être étendus aux côtés des soins publics", category: "Santé" },
        { id: 4, text: "L'éducation devrait être principalement dispensée en arabe", category: "Éducation et Culture" },
        { id: 5, text: "Le gouvernement devrait augmenter significativement le salaire minimum", category: "Politique Sociale" },
        { id: 6, text: "Le Maroc devrait accélérer le développement des énergies renouvelables", category: "Environnement" },
        { id: 7, text: "Les femmes devraient avoir une représentation égale au gouvernement", category: "Questions Sociales" },
        { id: 8, text: "Les petites entreprises devraient recevoir plus de soutien gouvernemental", category: "Politique Économique" },
        { id: 9, text: "Le Maroc devrait maintenir de fortes relations avec les nations européennes", category: "Politique Étrangère" },
        { id: 10, text: "L'accès à Internet devrait être considéré comme un droit humain fondamental", category: "Technologie et Droits" },
      ],
      ber: [
        { id: 1, text: "ⵉⵍⵍⴰ ⴰⴷ ⵜⵙⵙⵏⵜⵉ ⵜⵏⴱⴰⴹⵜ ⴰⵙⵎⵓⵜⵜⵉ ⵏ ⵓⴷⵎⴰⵡⴰⵏ ⵅⴼ ⵓⵃⵟⵟⵓ ⵏ ⵜⵡⵏⵏⴰⴹⵜ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵓⴷⵎⴰⵡⴰⵏ" },
        { id: 2, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵙⵙⵏⵖⵓⵔ ⵍⵎⵖⵔⵉⴱ ⵜⵉⵣⴷⴰⵢⵉⵏ ⴰⴽⴷ ⵜⵎⵓⵔⴰ ⵏ ⵉⴼⵔⵉⵇⵢⴰ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⴱⵕⵕⴰ" },
        { id: 3, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵜⵜⵓⵙⵖⵓⵔ ⵓⵙⵏⴰⵏ ⵏ ⵜⴷⵓⵙⵉ ⵏ ⵓⵎⵢⴰⵡⴰⵙ ⴰⴽⴷ ⵡⵉⵏ ⵏ ⵓⵖⵔⴼ", category: "ⵜⴰⴷⵓⵙⵉ" },
        { id: 4, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵍⵉ ⵓⵙⵙⵍⵎⴷ ⵙ ⵜⵄⵔⴰⴱⵜ ⵙ ⵓⵎⴰⵜⴰ", category: "ⴰⵙⵙⵍⵎⴷ ⴷ ⵜⴷⵍⵙⴰ" },
        { id: 5, text: "ⵉⵍⵍⴰ ⴰⴷ ⵜⵙⵙⵓⵍⵢ ⵜⵏⴱⴰⴹⵜ ⴰⵙⵙⴰⵖ ⴰⴷⵔⵓⵙ ⵏ ⵜⵅⴰⵜⵔⵜ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵓⵎⵓⵏ" },
        { id: 6, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⴰⵔⵣ ⵍⵎⵖⵔⵉⴱ ⴰⵙⴱⵓⵖⵍⵓ ⵏ ⵜⵣⵎⵔⵜ ⵏ ⵜⵙⵙⵓⵜⵍⵜ", category: "ⵜⴰⵡⵏⵏⴰⴹⵜ" },
        { id: 7, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵍⵉⵏⵜ ⵜⵎⵖⴰⵔⵉⵏ ⴰⵎⵢⴰⵡⴰⵙ ⴳ ⵜⵏⴱⴰⴹⵜ", category: "ⵉⵎⵙⴰⵍⵏ ⵏ ⵓⵎⵓⵏ" },
        { id: 8, text: "ⵉⵍⵍⴰ ⴰⴷ ⵜⴰⵡⵙ ⵜⵎⵙⵙⵓⴷⵓⵜⵉⵏ ⵜⵉⵎⵥⵥⴰⵢⵉⵏ ⴰⵔⵔⴰⵢ ⵏ ⵜⵏⴱⴰⴹⵜ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵓⴷⵎⴰⵡⴰⵏ" },
        { id: 9, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵃⴹⵓ ⵍⵎⵖⵔⵉⴱ ⵜⵉⵣⴷⴰⵢⵉⵏ ⵉⵎⵖⵓⴷⴰⵏ ⴰⴽⴷ ⵜⵎⵓⵔⴰ ⵏ ⵓⵔⵓⴱⴱⴰ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⴱⵕⵕⴰ" },
        { id: 10, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵜⵜⵓⵙⵙⴰⵏ ⵓⴽⵛⵛⵓⵎ ⵏ ⵉⵏⵜⵉⵔⵏⵉⵜ ⴷ ⴰⵣⵔⴼ ⴰⴷⵙⵍⴰⵏ", category: "ⵜⵉⵜⵉⴽⵏⵓⵍⵓⵊⵉⵜ ⴷ ⵉⵣⵔⴼⴰⵏ" },
      ]
    };
    
    return (mockData[language] || mockData.en).slice(0, totalQuestions);
  };

  const handleAnswer = async (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = value;
    setAnswers(newAnswers);

    if (currentQuestion < totalQuestions - 1) {
      setTimeout(() => setCurrentQuestion(currentQuestion + 1), 300);
    } else {
      // Submit quiz and get results
      setLoading(true);
      try {
        const response = await fetch('/api/quiz/results', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ answers: newAnswers, quizType })
        });
        const data = await response.json();
        setResults(data.results);
      } catch (error) {
        console.error('Failed to get results:', error);
        // Fallback to mock results
        setResults(getMockResults());
      }
      setLoading(false);
      setTimeout(() => setShowResults(true), 500);
    }
  };

  const getMockResults = (): QuizResult[] => {
    return [
      { party: "Justice and Development Party (PJD)", percentage: 72, color: "bg-green-500", description: "Conservative Islamic democracy" },
      { party: "National Rally of Independents (RNI)", percentage: 58, color: "bg-blue-500", description: "Liberal center-right" },
      { party: "Authenticity and Modernity Party (PAM)", percentage: 45, color: "bg-orange-500", description: "Modern centrist approach" },
      { party: "Istiqlal Party", percentage: 38, color: "bg-red-500", description: "Traditional nationalist" },
      { party: "Socialist Union of Popular Forces (USFP)", percentage: 31, color: "bg-pink-500", description: "Social democratic" },
    ];
  };

  const resetQuiz = () => {
    setCurrentQuestion(-1);
    setAnswers([]);
    setShowResults(false);
    setResults([]);
  };

  const goToPrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const startQuiz = (type: 'short' | 'full') => {
    setQuizType(type);
    setCurrentQuestion(0);
  };

  if (showResults) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl"
          >
            <div className="text-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-br from-moroccan-gold to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-10 h-10 text-white" />
              </div>
              <h1 className="text-3xl font-bold text-moroccan-dark mb-2">{t('quiz.results')}</h1>
              <p className="text-gray-600">Based on your responses, here's how you align with Moroccan political parties</p>
            </div>

            <div className="space-y-4 mb-8">
              {results.map((result, index) => (
                <motion.div
                  key={result.party}
                  initial={{ opacity: 0, x: isRTL ? 30 : -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="font-bold text-moroccan-dark">{result.party}</h3>
                    <span className="text-2xl font-bold text-moroccan-red">{result.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${result.percentage}%` }}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      className={`h-3 rounded-full ${result.color}`}
                    />
                  </div>
                  <p className="text-sm text-gray-600">{result.description}</p>
                </motion.div>
              ))}
            </div>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center ${isRTL ? 'sm:flex-row-reverse' : ''}`}>
              <button
                onClick={resetQuiz}
                className="flex items-center justify-center px-6 py-3 bg-moroccan-red text-white rounded-xl hover:bg-red-700 transition-colors"
              >
                <RotateCcw className="w-5 h-5 mr-2" />
                {t('quiz.retake')}
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-moroccan-blue text-moroccan-blue rounded-xl hover:bg-moroccan-blue hover:text-white transition-colors">
                <Share2 className="w-5 h-5 mr-2" />
                {t('quiz.share')}
              </button>
              <button className="flex items-center justify-center px-6 py-3 border-2 border-moroccan-gold text-moroccan-gold rounded-xl hover:bg-moroccan-gold hover:text-white transition-colors">
                <Download className="w-5 h-5 mr-2" />
                {t('quiz.download')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-moroccan-red via-red-600 to-moroccan-gold py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Quiz Type Selection */}
        {currentQuestion === -1 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-2xl p-8 shadow-xl mb-8"
          >
            <h1 className="text-3xl font-bold text-center text-moroccan-dark mb-6">{t('quiz.title')}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <button
                onClick={() => startQuiz('short')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  quizType === 'short' 
                    ? 'border-moroccan-red bg-moroccan-red text-white' 
                    : 'border-gray-200 hover:border-moroccan-red hover:bg-red-50'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{t('quiz.shortQuiz')}</h3>
                <p className="text-sm opacity-90">10 {t('quiz.questions')} • 3 {t('quiz.minutes')}</p>
                <p className="text-sm mt-2">Perfect for a quick political alignment check</p>
              </button>
              <button
                onClick={() => startQuiz('full')}
                className={`p-6 rounded-xl border-2 transition-all ${
                  quizType === 'full' 
                    ? 'border-moroccan-red bg-moroccan-red text-white' 
                    : 'border-gray-200 hover:border-moroccan-red hover:bg-red-50'
                }`}
              >
                <h3 className="text-xl font-bold mb-2">{t('quiz.fullQuiz')}</h3>
                <p className="text-sm opacity-90">15 {t('quiz.questions')} • 5 {t('quiz.minutes')}</p>
                <p className="text-sm mt-2">Comprehensive analysis of your political views</p>
              </button>
            </div>
          </motion.div>
        )}

        {/* Quiz Questions */}
        {currentQuestion >= 0 && !loading && (
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <div className="mb-8">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-600">
                  Question {currentQuestion + 1} of {totalQuestions}
                </span>
                <span className="text-sm font-medium text-gray-600">
                  {Math.round(progress)}% Complete
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-2 bg-gradient-to-r from-moroccan-red to-moroccan-gold rounded-full"
                />
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuestion}
                initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
                transition={{ duration: 0.3 }}
              >
                {questions[currentQuestion] && (
                  <>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 bg-moroccan-gold text-white text-sm font-medium rounded-full mb-4">
                        {questions[currentQuestion].category}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-bold text-moroccan-dark mb-8 leading-relaxed">
                      {questions[currentQuestion].text}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                      {[
                        { value: 1, label: t('answer.disagree'), color: 'bg-red-500 hover:bg-red-600' },
                        { value: 2, label: t('answer.neutral'), color: 'bg-gray-400 hover:bg-gray-500' },
                        { value: 3, label: t('answer.agree'), color: 'bg-green-500 hover:bg-green-600' },
                      ].map((option) => (
                        <motion.button
                          key={option.value}
                          onClick={() => handleAnswer(option.value)}
                          className={`p-6 rounded-xl text-white font-medium text-center transition-all ${option.color} hover:scale-105 active:scale-95`}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="text-lg font-bold mb-2">{option.value}</div>
                          <div className="text-sm opacity-90">{option.label}</div>
                        </motion.button>
                      ))}
                    </div>

                    <div className="flex justify-between">
                      <button
                        onClick={goToPrevious}
                        disabled={currentQuestion === 0}
                        className="flex items-center px-6 py-3 bg-gray-200 text-gray-600 rounded-xl hover:bg-gray-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        {t('quiz.previous')}
                      </button>
                      <div className="text-sm text-gray-500 flex items-center">
                        Click an option to continue automatically
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        )}

        {/* Loading State */}
        {loading && (
          <div className="bg-white rounded-2xl p-8 shadow-xl text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-moroccan-red mx-auto mb-4"></div>
            <p className="text-gray-600">Calculating your political alignment...</p>
          </div>
        )}
      </div>
    </div>
  );
};