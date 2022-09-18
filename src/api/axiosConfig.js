import qs from "qs";

const BASE_URL = "https://world.openfoodfacts.org";

export const axiosConfig = {
  baseURL: BASE_URL,
  timeout: 10000,
  paramsSerializer: function (params) {
    return qs.stringify(params, { arrayFormat: "comma" });
  },
};
