import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNotifications } from '@Redux/generals/notifications/notificationSlice';

const useNotifications = () => {
  const dispatch = useDispatch();

  // ** Variables de estado
  const [notifications, setNotifications] = useState([]);
  const [notificationData, setNotificationData] = useState({});
  const [alertMessage, setAlertMessage] = useState({});
  const [modalShow, setModalShow] = useState(false);
  const [showModalForm, setShowModalForm] = useState(false);

  // ** Selectores
  const notificationsRowsDataList = useSelector(
    (state) => state.notifications.notificationList
  );

  const { reset, control } = useForm()

  const handleModalShow = (bool, row) => {
    if (!bool) {
      setNotificationData({})
    }
    setModalShow(bool);
    if (row != null || undefined) {
      setNotificationData(row)
    }
  }

  const handleFormShow = (bool, row = null) => {
    setShowModalForm(bool)
    
    if (row != null || undefined) {
      setNotificationData(row)
    }
    if (!bool) {
      setNotificationData({})
      reset()
    }
  }

  const getNotifications = async () => {
    try {
      const response = await dispatch(fetchNotifications())
      setNotifications(response);
    } catch (error) {
      setNotifications([]);
    }
  };

  return {
    dispatch,
    notifications,
    setNotifications,
    notificationData,
    setNotificationData,
    getNotifications,
    modalShow,
    setModalShow,
    notificationsRowsDataList,
    handleModalShow,
    alertMessage,
    setAlertMessage,
    showModalForm,
    handleFormShow,
    control
  };
};

export default useNotifications;
