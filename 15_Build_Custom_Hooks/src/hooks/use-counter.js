import { useState, useEffect } from 'react';

// Custom Hook 들은 use로 시작해야 한다. 반드시 지켜라...
const useCounter = (operator) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (operator === '+') {
        setCounter((prev) => prev + 1);
      } else if (operator === '-') {
        setCounter((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [operator]);

  return counter;
};

export default useCounter;
