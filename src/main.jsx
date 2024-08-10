import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import Key from './auth/Key.jsx';
import global_en from './translation/en/global.json';
import global_kor from './translation/kor/global.json';
import global_rus from './translation/rus/global.json';
import global_uzb from './translation/uzb/global.json';
import i18next from 'i18next';
import { I18nextProvider } from 'react-i18next';

const useStore = Key;

const initializeI18next = (language) => {
  i18next.init({
    interpolation: { escapeValue: false }, 
    lng: language,
    resources: {
      en: {
        global: global_en
      },
      ko: {
        global: global_kor
      },
      ru: {
        global: global_rus
      },
      uz: {
        global: global_uzb
      }
    }
  });
};

const { language } = useStore.getState();
initializeI18next(language);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);

useStore.subscribe(
  (state) => state.language,
  (newLanguage) => {
    i18next.changeLanguage(newLanguage);
  }
);
