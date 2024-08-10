// CalendarComponent.js
import './Calendarpicker.css';
import { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { enUS, ru, uz, ko } from 'date-fns/locale';
import useKey from '../../auth/Key'; 
import { useTranslation } from "react-i18next";

const locales = {
  en: enUS,
  ru: ru,
  uz: uz,
  ko: ko,
};
const CalendarComponent = () => {
     const { t } = useTranslation("global");
  const myLanguage = useKey((state) => state.language); // Get language from Zustand state
  const [selectedDate, setSelectedDate] = useState(new Date());
  useEffect(() => {
    locales[myLanguage];
  }, [myLanguage]);

  return (
    <div>
     <h3 className='calendar-title'>{t("dashboard.middle.calendar")}</h3>
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        locale={myLanguage}
      />
    </div>
  );
};

export default CalendarComponent;

CalendarComponent.js
