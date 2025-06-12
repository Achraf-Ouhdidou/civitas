// Political alignment calculation service
export function calculatePoliticalAlignment(answers, quizType) {
  // Party scoring weights based on Moroccan political landscape
  const partyWeights = {
    'PJD': {
      name: 'Justice and Development Party (PJD)',
      weights: [0.3, 0.7, 0.4, 0.8, 0.6, 0.5, 0.7, 0.6, 0.5, 0.4, 0.9, 0.7, 0.5, 0.6, 0.6],
      color: 'bg-green-500',
      description: 'Conservative Islamic democracy with focus on social justice and traditional values'
    },
    'RNI': {
      name: 'National Rally of Independents (RNI)',
      weights: [0.8, 0.6, 0.7, 0.4, 0.5, 0.7, 0.6, 0.8, 0.8, 0.8, 0.4, 0.6, 0.9, 0.7, 0.9],
      color: 'bg-blue-500',
      description: 'Liberal center-right with emphasis on economic development and modernization'
    },
    'PAM': {
      name: 'Authenticity and Modernity Party (PAM)',
      weights: [0.7, 0.5, 0.8, 0.3, 0.4, 0.8, 0.8, 0.7, 0.7, 0.9, 0.3, 0.5, 0.8, 0.8, 0.8],
      color: 'bg-orange-500',
      description: 'Modern centrist approach with focus on innovation and social progress'
    },
    'Istiqlal': {
      name: 'Istiqlal Party',
      weights: [0.6, 0.8, 0.5, 0.9, 0.6, 0.6, 0.5, 0.6, 0.6, 0.5, 0.8, 0.8, 0.7, 0.5, 0.7],
      color: 'bg-red-500',
      description: 'Traditional nationalist party with emphasis on sovereignty and cultural identity'
    },
    'USFP': {
      name: 'Socialist Union of Popular Forces (USFP)',
      weights: [0.4, 0.7, 0.6, 0.6, 0.9, 0.7, 0.9, 0.7, 0.6, 0.7, 0.5, 0.9, 0.6, 0.8, 0.6],
      color: 'bg-pink-500',
      description: 'Social democratic party focused on workers\' rights and social equality'
    }
  };

  const results = [];
  
  Object.entries(partyWeights).forEach(([partyKey, party]) => {
    let score = 0;
    const totalQuestions = answers.length;
    
    for (let i = 0; i < totalQuestions; i++) {
      if (answers[i] !== undefined) {
        // Convert 1-3 scale to alignment score
        const userAnswer = (answers[i] - 1) / 2; // Normalize to 0-1
        const partyPosition = party.weights[i];
        
        // Calculate alignment (closer = higher score)
        const alignment = 1 - Math.abs(userAnswer - partyPosition);
        score += alignment;
      }
    }
    
    const percentage = Math.round((score / totalQuestions) * 100);
    
    results.push({
      party: party.name,
      percentage,
      color: party.color,
      description: party.description
    });
  });
  
  // Sort by percentage descending
  return results.sort((a, b) => b.percentage - a.percentage);
}