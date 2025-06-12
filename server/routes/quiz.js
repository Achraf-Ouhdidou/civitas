import express from 'express';
import { calculatePoliticalAlignment } from '../services/quizService.js';

const router = express.Router();

// Get quiz questions
router.get('/questions', (req, res) => {
  const { type = 'short', lang = 'en' } = req.query;
  
  const questions = getQuestions(type, lang);
  res.json({ questions, totalQuestions: questions.length });
});

// Submit quiz answers and get results
router.post('/results', (req, res) => {
  const { answers, quizType = 'short' } = req.body;
  
  if (!answers || !Array.isArray(answers)) {
    return res.status(400).json({ error: 'Invalid answers format' });
  }
  
  try {
    const results = calculatePoliticalAlignment(answers, quizType);
    res.json({ results, timestamp: new Date().toISOString() });
  } catch (error) {
    res.status(500).json({ error: 'Failed to calculate results' });
  }
});

function getQuestions(type, lang) {
  const questionsData = {
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
      { id: 11, text: "Traditional values should guide Morocco's social policies", category: "Social Issues" },
      { id: 12, text: "The government should invest more in rural development", category: "Regional Development" },
      { id: 13, text: "Morocco should diversify its economy beyond tourism and agriculture", category: "Economic Policy" },
      { id: 14, text: "Public transportation should be prioritized over private vehicle infrastructure", category: "Urban Planning" },
      { id: 15, text: "Morocco should strengthen its position in international trade agreements", category: "Trade Policy" },
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
      { id: 11, text: "يجب أن توجه القيم التقليدية السياسات الاجتماعية في المغرب", category: "القضايا الاجتماعية" },
      { id: 12, text: "يجب على الحكومة الاستثمار أكثر في التنمية الريفية", category: "التنمية الإقليمية" },
      { id: 13, text: "يجب على المغرب تنويع اقتصاده خارج السياحة والزراعة", category: "السياسة الاقتصادية" },
      { id: 14, text: "يجب إعطاء الأولوية للنقل العام على البنية التحتية للمركبات الخاصة", category: "التخطيط الحضري" },
      { id: 15, text: "يجب على المغرب تعزيز موقعه في اتفاقيات التجارة الدولية", category: "سياسة التجارة" },
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
      { id: 11, text: "Les valeurs traditionnelles devraient guider les politiques sociales du Maroc", category: "Questions Sociales" },
      { id: 12, text: "Le gouvernement devrait investir davantage dans le développement rural", category: "Développement Régional" },
      { id: 13, text: "Le Maroc devrait diversifier son économie au-delà du tourisme et de l'agriculture", category: "Politique Économique" },
      { id: 14, text: "Les transports publics devraient être priorisés sur l'infrastructure des véhicules privés", category: "Planification Urbaine" },
      { id: 15, text: "Le Maroc devrait renforcer sa position dans les accords commerciaux internationaux", category: "Politique Commerciale" },
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
      { id: 11, text: "ⵉⵍⵍⴰ ⴰⴷ ⵙⵙⵏⵜⵉⵏⵜ ⵜⵖⴰⵔⴰⵙⵉⵏ ⵜⵉⵎⵣⵡⵓⵔⴰ ⵜⵉⵙⵔⵜⵉⵏ ⵏ ⵓⵎⵓⵏ ⴳ ⵍⵎⵖⵔⵉⴱ", category: "ⵉⵎⵙⴰⵍⵏ ⵏ ⵓⵎⵓⵏ" },
      { id: 12, text: "ⵉⵍⵍⴰ ⴰⴷ ⵜⵙⵙⵖⵓⵔ ⵜⵏⴱⴰⴹⵜ ⴰⵔⵔⴰⵢ ⴳ ⵓⵙⴱⵓⵖⵍⵓ ⵏ ⵉⴷⵓⵡⴰⵔ", category: "ⴰⵙⴱⵓⵖⵍⵓ ⴰⵏⴰⵡⴰⵢ" },
      { id: 13, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵙⵎⵢⴰⵏⴰⵡ ⵍⵎⵖⵔⵉⴱ ⴰⴷⵎⴰⵡⴰⵏ ⵏⵏⵙ ⴱⵕⵕⴰ ⵏ ⵓⵏⵎⴰⵍⴰ ⴷ ⵜⴽⵔⵣⴰ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵓⴷⵎⴰⵡⴰⵏ" },
      { id: 14, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵜⵜⵓⵙⵙⵏⵜⵉ ⵓⵙⵎⵓⵜⵜⵉ ⴰⵖⵔⴼⴰⵏ ⵅⴼ ⵜⵏⵖⵎⵉⵙⵉⵏ ⵏ ⵜⵎⵓⵜⵓⵔⵉⵏ ⵜⵓⵎⵥⵉⵏ", category: "ⴰⵙⵖⵓⴷⵓ ⴰⵖⵔⵎⴰⵏ" },
      { id: 15, text: "ⵉⵍⵍⴰ ⴰⴷ ⵉⵙⵙⵏⵖⵓⵔ ⵍⵎⵖⵔⵉⴱ ⴰⴷⵖⴰⵔ ⵏⵏⵙ ⴳ ⵉⵎⵙⴰⵙⴰⵏ ⵏ ⵜⵙⴱⴱⴰⴱⵜ ⵜⴰⵎⴰⴹⵍⴰⵏⵜ", category: "ⵜⴰⵙⵔⵜⵉⵜ ⵏ ⵜⵙⴱⴱⴰⴱⵜ" },
    ]
  };

  const totalQuestions = type === 'short' ? 10 : 15;
  return questionsData[lang]?.slice(0, totalQuestions) || questionsData.en.slice(0, totalQuestions);
}

export { router as quizRoutes };