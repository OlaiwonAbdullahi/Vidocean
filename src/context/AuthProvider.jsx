import { createContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchFormAPI";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = async (query) => {
    setLoading(true);
    try {
      const res = await fetchData(`search/?q=${query}`);
      setData(res);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ loading, data, setValue, value }}>
      {children}
    </AuthContext.Provider>
  );
}
