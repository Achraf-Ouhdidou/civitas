import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'fr' | 'ber';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.quiz': 'Political Quiz',
    'nav.candidates': 'Candidates',
    'nav.policies': 'Policy Tracker',
    'nav.events': 'Events',
    
    // Home page
    'home.title': 'Your Vote Matters',
    'home.subtitle': 'صوتك يهم',
    'home.description': 'Empower your democratic participation with Morocco\'s most comprehensive voting awareness platform',
    'home.takeQuiz': 'Take Political Quiz',
    'home.exploreCandidates': 'Explore Candidates',
    
    // Quiz
    'quiz.title': 'Political Compass Quiz',
    'quiz.shortQuiz': 'Quick Quiz',
    'quiz.fullQuiz': 'Complete Quiz',
    'quiz.questions': 'questions',
    'quiz.minutes': 'minutes',
    'quiz.agree': 'Agree',
    'quiz.neutral': 'Neutral',
    'quiz.disagree': 'Disagree',
    'quiz.previous': 'Previous',
    'quiz.results': 'Your Political Alignment',
    'quiz.retake': 'Retake Quiz',
    'quiz.share': 'Share Results',
    'quiz.download': 'Download Report',
    
    // Answer options
    'answer.disagree': 'Disagree',
    'answer.neutral': 'Neutral',
    'answer.agree': 'Agree',
  },
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.quiz': 'الاختبار السياسي',
    'nav.candidates': 'المرشحون',
    'nav.policies': 'متتبع السياسات',
    'nav.events': 'الأحداث',
    
    // Home page
    'home.title': 'صوتك يهم',
    'home.subtitle': 'Your Vote Matters',
    'home.description': 'قم بتمكين مشاركتك الديمقراطية مع أشمل منصة للتوعية بالتصويت في المغرب',
    'home.takeQuiz': 'خذ الاختبار السياسي',
    'home.exploreCandidates': 'استكشف المرشحين',
    
    // Quiz
    'quiz.title': 'اختبار البوصلة السياسية',
    'quiz.shortQuiz': 'اختبار سريع',
    'quiz.fullQuiz': 'اختبار كامل',
    'quiz.questions': 'أسئلة',
    'quiz.minutes': 'دقائق',
    'quiz.agree': 'موافق',
    'quiz.neutral': 'محايد',
    'quiz.disagree': 'غير موافق',
    'quiz.previous': 'السابق',
    'quiz.results': 'توجهك السياسي',
    'quiz.retake': 'إعادة الاختبار',
    'quiz.share': 'شارك النتائج',
    'quiz.download': 'تحميل التقرير',
    
    // Answer options
    'answer.disagree': 'غير موافق',
    'answer.neutral': 'محايد',
    'answer.agree': 'موافق',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.quiz': 'Quiz Politique',
    'nav.candidates': 'Candidats',
    'nav.policies': 'Suivi des Politiques',
    'nav.events': 'Événements',
    
    // Home page
    'home.title': 'Votre Vote Compte',
    'home.subtitle': 'صوتك يهم',
    'home.description': 'Renforcez votre participation démocratique avec la plateforme de sensibilisation au vote la plus complète du Maroc',
    'home.takeQuiz': 'Passer le Quiz Politique',
    'home.exploreCandidates': 'Explorer les Candidats',
    
    // Quiz
    'quiz.title': 'Quiz de Boussole Politique',
    'quiz.shortQuiz': 'Quiz Rapide',
    'quiz.fullQuiz': 'Quiz Complet',
    'quiz.questions': 'questions',
    'quiz.minutes': 'minutes',
    'quiz.agree': 'D\'accord',
    'quiz.neutral': 'Neutre',
    'quiz.disagree': 'Pas d\'accord',
    'quiz.previous': 'Précédent',
    'quiz.results': 'Votre Alignement Politique',
    'quiz.retake': 'Refaire le Quiz',
    'quiz.share': 'Partager les Résultats',
    'quiz.download': 'Télécharger le Rapport',
    
    // Answer options
    'answer.disagree': 'Pas d\'accord',
    'answer.neutral': 'Neutre',
    'answer.agree': 'D\'accord',
  },
  ber: {
    // Navigation
    'nav.home': 'ⴰⵙⵏⵓⴱⴳ',
    'nav.quiz': 'ⴰⵙⵙⴰⵖ ⴰⵙⵔⵜⴰⵏ',
    'nav.candidates': 'ⵉⵎⵙⵙⴰⵔⴰⵏ',
    'nav.policies': 'ⴰⵎⴹⴼⴰⵕ ⵏ ⵜⵙⵔⵜⵉⵏ',
    'nav.events': 'ⵜⵉⵎⵙⴰⵔⵉⵏ',
    
    // Home page
    'home.title': 'ⴰⵙⵙⴰⵖ ⵏⵏⴽ ⵉⵙⵙⴰⵡⴰⵍ',
    'home.subtitle': 'صوتك يهم',
    'home.description': 'ⵙⵙⵏⵖⵓⵔ ⴰⴷⵔⴰⵡ ⵏⵏⴽ ⴰⴷⵉⵎⵓⵇⵔⴰⵟⵉⵢ ⵙ ⵜⵏⴰⴱⴰⴹⵜ ⵏ ⵓⵙⵙⵏ ⵏ ⵓⵙⵙⴰⵖ ⵜⴰⵎⵇⵔⴰⵏⵜ ⴳ ⵍⵎⵖⵔⵉⴱ',
    'home.takeQuiz': 'ⵙⴽⵔ ⴰⵙⵙⴰⵖ ⴰⵙⵔⵜⴰⵏ',
    'home.exploreCandidates': 'ⵙⵙⵉⵔⵉⵎ ⵉⵎⵙⵙⴰⵔⴰⵏ',
    
    // Quiz
    'quiz.title': 'ⴰⵙⵙⴰⵖ ⵏ ⵜⴱⵓⵚⵍⵜ ⵜⴰⵙⵔⵜⴰⵏⵜ',
    'quiz.shortQuiz': 'ⴰⵙⵙⴰⵖ ⴰⵣⵔⴱⴰⵏ',
    'quiz.fullQuiz': 'ⴰⵙⵙⴰⵖ ⴰⵎⵓⵔⵙ',
    'quiz.questions': 'ⵉⵙⵇⵙⵉⵜⵏ',
    'quiz.minutes': 'ⵜⵙⴷⴰⵜⵉⵏ',
    'quiz.agree': 'ⵎⵙⴰⵙⴰ',
    'quiz.neutral': 'ⴰⵏⴰⵎⵎⴰⵙ',
    'quiz.disagree': 'ⵓⵔ ⵎⵙⴰⵙⴰⵖ',
    'quiz.previous': 'ⴰⵣⵡⴰⵔⵓ',
    'quiz.results': 'ⴰⵙⵙⴰⵔⵓ ⵏⵏⴽ ⴰⵙⵔⵜⴰⵏ',
    'quiz.retake': 'ⴰⵍⵙ ⴰⵙⵙⴰⵖ',
    'quiz.share': 'ⴱⴹⵓ ⵉⵢⴰⴼⴰⴷⵏ',
    'quiz.download': 'ⴰⴳⵎ ⴰⵏⴰⵇⵇⵉⵙ',
    
    // Answer options
    'answer.disagree': 'ⵓⵔ ⵎⵙⴰⵙⴰⵖ',
    'answer.neutral': 'ⴰⵏⴰⵎⵎⴰⵙ',
    'answer.agree': 'ⵎⵙⴰⵙⴰ',
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || translations.en[key] || key;
  };

  const isRTL = language === 'ar' || language === 'ber';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};