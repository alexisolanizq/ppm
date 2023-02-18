import { API_JOB_AREAS_USER } from '@Const/constUrls';
import { axiosPOST, axiosPUT, usePOST } from '@Utils/api';
import { useState } from 'react';

export const useAddAreaUserService = () =>
  usePOST({
    url: API_JOB_AREAS_USER
  });

export const useAddAreaUserByAxiosService = (data) =>
  axiosPOST({
    url: API_JOB_AREAS_USER,
    data
  });

export const useUpdateAreaServiceByAxios = (id, data) =>
  axiosPUT({
    url: `${API_JOB_AREAS_USER}/${id}`,
    data
  });

  export const useSaveAreaSecondaryByUser = () => {
    const [isLoading, setIsLoading] = useState(false)
  
    const mutate = (areas, usrId) => {
      setIsLoading(true)
      areas.forEach(async ({ joauId, jobArea }) => {
        if (joauId) {
          const body = {
            jobArea,
            user:{
              usrId
            },
            joauId,
            joauMainArea: false
          }
          await useUpdateAreaServiceByAxios(joauId, body)
        } else {
          const body = {
            jobArea,
            user:{
              usrId
            },
            joauMainArea: false
          }
          await useAddAreaUserByAxiosService(body)
        }
      })
      setIsLoading(false)
    }
  
    return {
      isLoading,
      mutate
    }
  }