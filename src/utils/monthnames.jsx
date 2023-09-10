import { useState, useCallback } from 'react';

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const useFormattedDateMonth = () => {
  const [formattedDate, setFormattedDate] = useState('');

  const formatDate = useCallback((dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = monthNames[date.getMonth()];
    const year = date.getFullYear();
    
    setFormattedDate(`${month} ${day}, ${year}`);
  }, []);

  return [formattedDate, formatDate];
};

export default useFormattedDateMonth;
