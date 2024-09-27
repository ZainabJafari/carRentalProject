import { useState, useEffect } from 'react';

export function useLocalStorage<T>(key: string, initialValue: T | (() => T)) {
  // Initialize state with initialValue (localStorage will be checked later in useEffect)
  const [value, setValue] = useState<T>(() => {
    return typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue;
  });

  // UseEffect to sync localStorage with the state, but only on the client
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure we're in a browser

    // Retrieve stored value from localStorage (if any)
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) {
      setValue(JSON.parse(jsonValue));
    }
  }, [key]);

  // Update localStorage whenever value changes
  useEffect(() => {
    if (typeof window === 'undefined') return; // Ensure we're in a browser

    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as [typeof value, typeof setValue];
}
