import { useEffect, useState } from "react";

const useLocalStorage = (key, defaultValue) => {
  const localValue = JSON.parse(localStorage.getItem(key));
  const [localData, setLocalData] = useState(localValue || defaultValue);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(localData));
  }, [localData]);

  return [localData, setLocalData];
};

export { useLocalStorage };
