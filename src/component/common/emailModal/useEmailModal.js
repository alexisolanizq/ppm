import { useForm } from "react-hook-form";
import { API_MAILS } from "@Const/constUrls";
import { usePOST } from "@Utils/api";
import { getStorage } from "@Utils/storage";
import { STORAGE_TOKEN } from "@Const/storage";

const useEmailModal = ({ 
  onClose = () => {}
 }) => {
  const {
    reset,
    register,
    control,
    handleSubmit,
  } = useForm({
    defaultValues: {
      autoarchivar: false
    }
  });

  const mutation = usePOST({url: API_MAILS, onSuccess: () => {
    reset()
    onClose()
  }})

  const onSubmit = ({ destinatarios, subject, message, cc }) => {
    const toEmail = destinatarios.replace(/\s+/g, '').split(',')
    const toCC = cc.replace(/\s+/g, '').split(',')

    const formData = new FormData()
    formData.append('subject', subject)
    formData.append('message', message)
    formData.append('toEmail', toEmail)
    formData.append('toCC', toCC)
    formData.append('tokenAccess', getStorage(STORAGE_TOKEN))
    
    mutation.mutate(formData)
  }

  return {
    register,
    handleSubmit,
    onSubmit,
    control
  }
}

export default useEmailModal