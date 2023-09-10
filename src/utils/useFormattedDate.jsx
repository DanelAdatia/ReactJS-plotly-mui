import { useState } from 'react';

const useFormattedDate = () => {
  const [formattedDate, setFormattedDate] = useState("");

  const monthNames = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'
  ];

  const formatDate = (dateStr) => {
    const dateObj = new Date(dateStr);
    const day = String(dateObj.getDate()).padStart(2, '0');
    const month = monthNames[dateObj.getMonth()];
    const year = dateObj.getFullYear().toString().substr(-2);
    setFormattedDate(`${month} ${day}, '${year}`);
  };

  return [formattedDate, formatDate];
};

export default useFormattedDate;
