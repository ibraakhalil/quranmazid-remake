import { useState, useEffect, useRef } from 'react';

export function useDebounce(value, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timeoutRef = useRef(null); // Add a ref to store the timeout ID

  useEffect(() => {
    // Clear any existing timeout when value or delay changes
    clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Clear timeout on unmount
    return () => clearTimeout(timeoutRef.current);
  }, [value, delay]);

  return debouncedValue;
}
