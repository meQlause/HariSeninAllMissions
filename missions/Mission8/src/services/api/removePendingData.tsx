import { useState } from "react";

export const useRemovePendingTx = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const removePendingTx = async (userId: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_ENDPOINT}/removePendingTx`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ userId }),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setData(result);
      return result;
    } catch (err: any) {
      setError(err.message || "Failed to remove transaction");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { removePendingTx, isLoading, error, data };
};
