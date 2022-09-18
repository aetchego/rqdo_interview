import axios from "axios";
import { axiosConfig } from "./axiosConfig";

export const getProducts = async (endpoint, params) => {
  const instance = axios.create(axiosConfig);

  instance.interceptors.response.use(function (response) {
    return {
      response,
      products: response.data.products,
      size: response.data.count,
    };
  });
  try {
    const response = await instance.get(endpoint, params);
    return response;
  } catch (err) {
    throw err;
  }
};

export const getProduct = async (endpoint, params) => {
  const instance = axios.create(axiosConfig);
  instance.interceptors.response.use(function (response) {
    return {
      response,
      product: response.data?.product || {},
      status: response.data.status,
    };
  });
  try {
    const response = await instance.get(endpoint, params);
    return response;
  } catch (error) {
    throw error;
  }
};
