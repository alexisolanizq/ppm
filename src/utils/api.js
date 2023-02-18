import axiosInstance from '@Services/api/axiosInstance';
import { useMutation, useQuery } from '@tanstack/react-query';

const headersImage = { 'content-type': 'multipart/form-data' };

export const axiosGET = async ({ url, params, headers = {}, responseType = 'json' }) => {
  const response = await axiosInstance.get(url, { params, headers, responseType });
  return response.data;
};

export const axiosPOST = async ({ url, data, params, headers = {} }) => {
  const response = await axiosInstance.post(url, data, { params, headers });
  return response.data;
};

export const axiosPATCH = async ({ url, data, params, headers = {} }) => {
  const response = await axiosInstance.patch(url, data, { params, headers });
  return response.data;
};

export const axiosPUT = async ({ url, data, params, headers = {} }) => {
  const response = await axiosInstance.put(url, data, { params, headers });
  return response.data;
};

export const axiosDELETE = async ({ url }) => {
  const response = await axiosInstance.delete(url);
  return response.data;
};

export function useGET({
  filters,
  url,
  nameQuery = null,
  params = {},
  onSuccess = () => {},
  onError = () => {},
  headers = {},
  enable = true,
  responseType = 'json'
}) {
  return useQuery([nameQuery || url, filters], () => axiosGET({ url, params, headers, responseType }), {
    retry: false,
    enabled: enable,
    onSuccess,
    onError
  });
}

export function useGETMutation({ url, onSuccess = () => {}, headers = {}, responseType = 'json' }) {
  return useMutation((params) => axiosGET({ url, params, headers, responseType }), {
    onSuccess
  });
}

export function usePATCH({ url, image = false, onSuccess = () => {} }) {
  let headers = {};
  if (image) headers = headersImage;
  return useMutation((data) => axiosPATCH({ url, data, headers }), {
    onSuccess
  });
}

export function usePUT({ url, image = false, onSuccess = () => {} }) {
  let headers = {};
  if (image) headers = headersImage;
  return useMutation((data) => axiosPUT({ url, data, headers }), {
    onSuccess
  });
}

export const usePUTMutation = ({ onSuccess = () => {} }) =>
  useMutation((data) => axiosPUT({ ...data, headers: {} }), {
    onSuccess
  });

export function usePOST({
  url,
  onSuccess = () => {},
  onError = () => {},
  image = false
}) {
  let headers = {};
  if (image) headers = headersImage;
  return useMutation((data) => axiosPOST({ url, data, headers }), {
    onSuccess,
    onError
  });
}

export function useDelete({ url, onSuccess = () => {} }) {
  return useMutation((data) => axiosDELETE({ url, data }), {
    onSuccess
  });
}
