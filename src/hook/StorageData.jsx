import { useEffect, useState } from "react";

function useStorageData(key) {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(
      localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : []
    );
  }, []);
  const putData = (value) => {
    localStorage.setItem(key, JSON.stringify([value, ...data]));
    setData([value, ...data]);
  };
  return [data, putData];
}

export default useStorageData;
