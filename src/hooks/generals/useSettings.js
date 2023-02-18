import { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchMails,
  fetchMailsSend,
  fetchMailsDraft,
  fetchMail,
  fetchAttachment,
  addMail,
  addMailDraft,
  findListMail
} from '@Redux/generals/mailSlice';

import { 
  HTTP_STATUS_OK,
  VALUE_SEND,
  MAIL_ATENTICATION,
  VALUE_DRAFT,
  TYPE_SUCCESS_MESSAGE,
  TYPE_ERROR_MESSAGE,
  MESSAGE_MAIL_SEND_SUCCESS,
  TYPE_WARNING_MESSAGE,
  MESSAGE_CHECK_CORRECT_DATA
} from '@Const/const';
import { STORAGE_ACCESS_TOKEN } from '@Const/storage';

const useSettings = () => {
  const accessToken = localStorage.getItem(STORAGE_ACCESS_TOKEN);
  const dispatch = useDispatch();
  const [themeStretch, setThemeStretch] = useState(false);
  const [service, setService] = useState('inbox');
  const [emailsReply, setEmailsReply] = useState([]);
  const [emails, setEmails] = useState([]);
  const [emailsCC, setEmailsCC] = useState([]);
  const [replyMessage, setReplyMessage] = useState('');
  const [emailsCCO, setEmailsCCO] = useState([]);
  const mailData = useSelector(({ mails }) => mails.mail);
  const mailList = useSelector(({ mails }) => mails.mailList);
  const mailsListSend = useSelector(({ mails }) => mails.mailsListSend);
  const mailsListDraft = useSelector(({ mails }) => mails.mailsListDraft);
  const mailFindList = useSelector(({ mails }) => mails.mailFindList);
  const isLoading = useSelector(({ mails }) => mails.isLoading);
  const [alertMessage, setAlertMessage] = useState({});
  const [fileMail, setMailFile] = useState(null);
  const [showCCO, setShowCCO] = useState(false);
  const [showCc, setShowCc] = useState(false);
  const [modalShow, setmodalShow] = useState(false);
  const [openCompose, setOpenCompose] = useState(false);
  const [textFind, setFindtext] = useState(false);
  const [dataMail, setDataMail] = useState({
    subject: '',
    message: '',
    toEmail: '',
    toCC: '',
    toBCC: ''
  });
  const onDropAccepted = useCallback(async (acceptedFiles) => {
    setMailFile(acceptedFiles[0]);
  }, []);
  const onDropRejected = () => {
    setAlertMessage('e');
  };
  const [mailView, setMailView] = useState(false);
  const handleMail = async (prop, row) => {
    setmodalShow(prop);
    if (prop) {
      setMailView(row);
      const response = await dispatch(fetchMail(row.messageId));
      if (response.parts.length > 0) {
        response.parts.map((item) => {
          if (item.filename !== '') {
            dispatch(
              fetchAttachment({
                emailAddress: MAIL_ATENTICATION,
                messageId: response.messageId,
                attachmentId: item.body.attachmentId,
                filename: item.filename,
                mimeType: item.mimeType
              })
            );
          }
          return 1;
        });
      }
    }
  };
  const handleFindList = (e) => {
    setFindtext(e);
  };
  const findList = async () => {
    dispatch(findListMail(textFind));
    setService('filter');
  };
  const handleMailCompose = async (prop, row) => {
    try {
      if (prop) {
        setMailView(row);
        await dispatch(fetchMail(row.messageId));
        setDataMail({
          subject: row.subject ? row.subject : '',
          message: row.emailBody ? row.emailBody : '',
          toEmail: row.deliveryTo ? row.deliveryTo : '',
          toCC: '',
          toBCC: ''
        });
        setOpenCompose(prop);
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const onHandleService = async (prop) => {
    setService(prop);
    if (prop === VALUE_SEND) {
      dispatch(fetchMailsSend());
    }
    if (prop === VALUE_DRAFT) {
      dispatch(fetchMailsDraft());
    }
  };
  const getMails = async () => {
    await dispatch(fetchMails());
  };

  const handleInstruction = async (prop, e) => {
    setDataMail({ ...dataMail, [prop]: e });
  };

  const createMail = async () => {
    try {
      if (
        dataMail.subject !== '' ||
        dataMail.message !== '' ||
        emails.length > 0
      ) {
        const formData = new FormData();
        formData.append('subject', dataMail.subject);
        formData.append('message', dataMail.message);
        formData.append('toEmail', JSON.stringify(emails));
        if (emailsCC.length > 0) formData.append('toCC', JSON.stringify(emailsCC));
        if (emailsCCO.length > 0) formData.append('toBCC', JSON.stringify(emailsCCO));
        formData.append('userEmail', MAIL_ATENTICATION);
        formData.append('tokenAccess', accessToken);
        formData.append('file', fileMail);
        const response = dispatch(addMail(formData));
        if (response.status === HTTP_STATUS_OK) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_MAIL_SEND_SUCCESS,
            type: TYPE_SUCCESS_MESSAGE
          });
        } else {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_MAIL_SEND_ERROR,
            type: TYPE_ERROR_MESSAGE
          });
        }
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_CHECK_CORRECT_DATA,
          type: TYPE_WARNING_MESSAGE
        });
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  const replyMail = async () => {
    try {
      if (
        dataMail.subject !== '' ||
        dataMail.message !== '' ||
        replyMessage !== '' ||
        emails.length > 0
      ) {
        const formData = new FormData();
        formData.append('subject', mailView.subject);
        formData.append('message', replyMessage);
        const dataSplit = mailView.to.split(/,| /);
        const dataFilter = dataSplit.filter((item) =>
          item.match(/[\w\d\.-]+@[\w\d\.-]+\.[\w\d\.-]+/g)
        );
        dataFilter.map((item) =>
          formData.append('toEmail', item.replace('<', '').replace('>', ''))
        );
        if (emailsCC.length > 0) formData.append('toCC', JSON.stringify(emailsCC));
        if (emailsCCO.length > 0) formData.append('toBCC', JSON.stringify(emailsCCO));
        formData.append('userEmail', MAIL_ATENTICATION);
        formData.append('tokenAccess', accessToken);
        formData.append('tokenAccess', accessToken);
        formData.append('file', fileMail);
        dispatch(addMail(formData));
      } else {
        setAlertMessage({
          isOpen: true,
          message: MESSAGE_CHECK_CORRECT_DATA,
          type: TYPE_WARNING_MESSAGE
        });
      }
      return true;
    } catch (error) {
      return error;
    }
  };

  const createDraftMail = async () => {
    try {
      if (
        dataMail.subject !== '' ||
        dataMail.message !== '' ||
        emails.length > 0
      ) {
        const formData = new FormData();
        formData.append('subject', dataMail.subject);
        formData.append('message', dataMail.message);
        emails.forEach((item) => formData.append('toEmail', item));
        if (emailsCC.length > 0) formData.append('toCC', JSON.stringify(emailsCC));
        if (emailsCCO.length > 0) formData.append('toBCC', JSON.stringify(emailsCCO));
        formData.append('userEmail', MAIL_ATENTICATION);
        formData.append('tokenAccess', accessToken);
        formData.append('file', null);
        const response = dispatch(addMailDraft(formData));
        if (response.status === HTTP_STATUS_OK) {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_MAIL_SEND_SUCCESS,
            type: TYPE_SUCCESS_MESSAGE
          });
        } else {
          setAlertMessage({
            isOpen: true,
            message: MESSAGE_MAIL_SEND_ERROR,
            type: TYPE_ERROR_MESSAGE
          });
        }
      } else {
        return false;
      }
      return true;
    } catch (error) {
      return error;
    }
  };
  return {
    replyMail,
    emailsReply,
    emails,
    emailsCC,
    emailsCCO,
    themeStretch,
    mailList,
    service,
    mailsListSend,
    modalShow,
    mailsListDraft,
    mailView,
    dataMail,
    mailData,
    openCompose,
    mailFindList,
    showCCO,
    showCc,
    isLoading,
    replyMessage,
    alertMessage,
    setAlertMessage,
    setReplyMessage,
    setEmails,
    setEmailsReply,
    setEmailsCC,
    setEmailsCCO,
    setShowCCO,
    setShowCc,
    findList,
    setOpenCompose,
    getMails,
    setService,
    onHandleService,
    setmodalShow,
    handleMail,
    handleMailCompose,
    handleInstruction,
    createMail,
    createDraftMail,
    onDropAccepted,
    onDropRejected,
    handleFindList,
    setThemeStretch
  };
};

export default useSettings;
