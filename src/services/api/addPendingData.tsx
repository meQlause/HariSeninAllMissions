import { useState } from "react";

export const useAddPendingTx = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const addPendingTx = async (userId: string, productId: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/addPendingTx`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, productId }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to add transaction");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { addPendingTx, isLoading, error, data };
};
