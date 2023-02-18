import { STORAGE_AUTH } from '@Const/storage'
import { getStorage } from './storage'
import { isValid } from './values'

export const getAccessToken = () => {
  const storage = getStorage(STORAGE_AUTH)
  return storage?.access_token ?? null
}

export const isValidAuth = () => {
  const accessToken = getAccessToken()
  return isValid(accessToken)
}


