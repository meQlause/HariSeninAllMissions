import { useEffect } from "react";
import { useDataStore } from "../../stores/useDataStores";
import { DataMockup } from "../../utils/dataMockup";

// Since the data is static and used across multiple pages,
// we're using Zustand to store it as a global variable.
// This avoids fetching the same data repeatedly on each page,
export const getData = () => {
  const { contents, loading, error, fetchData } = useDataStore();
  useEffect(() => {
    if (!contents) {
      fetchData();
    }
  }, []);
  const wrappedData = contents ? new DataMockup(contents) : null;

  return { contents: wrappedData, loading, error, fetchData };
};
