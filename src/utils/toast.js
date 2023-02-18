import { toast } from "react-toastify";

const CONFIG_TOAST = {
  position: toast.POSITION.TOP_RIGHT
}

export const showToastError = (message) => {
  toast.error(message, CONFIG_TOAST)
}

export const showToastSuccess = (message) => {
  toast.success(message, CONFIG_TOAST)
}