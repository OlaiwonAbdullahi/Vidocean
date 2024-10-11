import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/fetchFormAPI";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");

  useEffect(() => {
    fetchAllData(value);
  }, [value]);

  const fetchAllData = (query) => {
    setLoading(true);

    fetchData(`search/?q=${query}`)
      .then(({ contents }) => {
        setData(contents);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false); // Ensure loading is stopped in case of an error
      });
  };

  return (
    <AuthContext.Provider value={{ loading, data, setValue, value }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
