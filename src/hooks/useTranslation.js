import { useLanguage } from '../context/LanguageContext.jsx';
import { translations } from '../utils/translations.js';

export const useTranslation = () => {
  const { language, changeLanguage } = useLanguage();
  const t = translations[language] || translations.en;
  
  return { t, language, changeLanguage };
};
