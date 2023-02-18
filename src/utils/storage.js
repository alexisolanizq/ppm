import { STORAGE_AUTH } from "@Const/storage"

export const setStorage = (key, value) => localStorage.setItem(key,  JSON.stringify(value))

export const getStorage = (key) => JSON.parse(localStorage.getItem(key))

export const removeStorage = (key) => localStorage.removeItem(key)

export const closeSession = () => {
  removeStorage(STORAGE_AUTH)
  window.location.href  = '/'
}