import { useEffect, useState } from "react";

export default function useDebounce(initalValue = "", delay = 1000) {
  const [debounceValue, setDebounceValue] = useState(initalValue);
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(initalValue);
    }, delay);
    return () => {
      clearTimeout(timer);
    };
  }, [delay, initalValue]);
  return debounceValue;
}
