import { useEffect, useState } from "react";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [uid, setUid] = useState<null | string>();
  useEffect(() => {
    const token = localStorage.getItem("credential");
    setUid(token);
    setIsAuthenticated(token ? true : false);
  }, []);

  return { isAuthenticated, uid };
};
