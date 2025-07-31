import { useState } from "react";

export const useGetTransactionHistory = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const getTxHistory = async (userId: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/txHistory?userId=${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result.transactions._fieldsProto.data.arrayValue.values);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to update transaction");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { getTxHistory, isLoading, error, data };
};
