import { useState } from "react";

export const useAddOwnedProduct = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const putPendingTx = async (userId: string, productId: string) => {
    setIsLoading(true);
    setError(null);
    setData(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_ENDPOINT}/addOwnedProduct`, {
        method: "PUT",
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
      setError(err.message || "Failed to update transaction");
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { putPendingTx, isLoading, error, data };
};
