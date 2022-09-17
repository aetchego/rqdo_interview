import { error, fetching, success } from "../reducers/requestReducer";
import reducer, { initialState } from "../reducers/requestReducer";
import { useCallback, useReducer } from "react";

import axios from "axios";

const useFetch = (endpoint, { method = "get", queryParams = {} } = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetch = useCallback(async () => {
    dispatch(fetching());
    try {
      let params = { params: queryParams };
      const response = await axios[method](endpoint, params);
      dispatch(success(response));
    } catch (e) {
      dispatch(error(e));
    }
  }, [endpoint, method, queryParams]);

  return [state, fetch];
};

export default useFetch;
