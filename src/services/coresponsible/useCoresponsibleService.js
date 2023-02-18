import { API_CORESPONSIBLE } from "@Const/constUrls";
import { axiosPOST, axiosPUT } from "@Utils/api";
import { useState } from "react";

export const coresponsibleAdd = (data) => axiosPOST({
  url: API_CORESPONSIBLE,
  data
})

export const coresponsibleUpdate = (id, data) => axiosPUT({
  url: `${API_CORESPONSIBLE}/${id}`,
  data
})

export const useSaveCoresponsibleByUser = () => {
  const [isLoading, setIsLoading] = useState(false)

  const mutate = (coresponsibles, usrId) => {
    setIsLoading(true)
    coresponsibles.forEach(async (coresponsible, coresponsibleIndex) => {
      if (coresponsible.coreId) {
        const body = {
          coreId: coresponsible.coreId,
          usrId,
          corePriority: coresponsibleIndex + 1,
          coresponsible: {
            usrId: coresponsible.coresponsible.usrId
          } 
        }
        await coresponsibleUpdate(coresponsible.coreId, body)
      } else {
        const body = {
          corePriority: coresponsibleIndex + 1,
          coresponsible: {
            usrId: coresponsible.coresponsible.usrId
          },
          usrId
        }
        await coresponsibleAdd(body)
      }
    })
    setIsLoading(false)
  }

  return {
    mutate,
    isLoading
  }
}