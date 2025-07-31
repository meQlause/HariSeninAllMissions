import { useEffect } from "react";
import { DataMockup } from "../../utils/dataMockup";
import { fetchData } from "../../slices/getDataSlice";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store";

export const getData = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { contents, loading, error } = useSelector((state: RootState) => state.data);
  useEffect(() => {
    if (!contents) {
      dispatch(fetchData());
    }
  }, []);
  const wrappedData = contents ? new DataMockup(contents) : null;

  return { contents: wrappedData, loading, error, fetchData };
};
