import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  useEffect(() => {
    const token = localStorage.getItem("isAuth");
    setIsAuthenticated(token === "true"); 
  }, []);

  return { isAuthenticated };
};
