import React, { useEffect } from 'react';
import { Button } from '@mui/material';
import { Visibility } from '@mui/icons-material';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import useNotifications from '@Hooks/generals/useNotifications';
import CustomToolBar from '@Component/common/customToolBar';
import { MORE } from '@Const/catalogs';
import NotificationModal from './NotificationModal';
import NotificationModalForm from './NotificationModalForm';

const Notifications = () => {
  const {
    notifications,
    setNotifications,
    setAlertMessage,
    alertMessage,
    getNotifications,
    modalShow,
    handleModalShow,
    notificationData,
    handleFormShow,
    showModalForm,
    control
  } = useNotifications();

  useEffect(() => {
    getNotifications();
  }, []);

  return (
    <div className="container-fluid p-0 m-0 bg-white">
      <div className="container pt-3 mb-4">
        <div className="bg-white shadow-sm w-75 mx-auto border">
          <CustomToolBar
            title="Notificaciones"
            onShow={() => handleFormShow(true)}
            allData={notifications}
            setRowsDataList={setNotifications}
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
          {notifications.map((notification) => (
            <div
              key={notification.acnoId}
              className="w-100 bg-white border-bottom"
            >
              <div className="row align-items-center">
                <div className="col-md-3 p-0 text-center">
                  <Brightness1Icon
                    sx={{
                      fontSize: '12px',
                      color:
                        (notification.procedureManagementAction.priority
                          .opcgId === 1 &&
                          'red') ||
                        (notification.procedureManagementAction.priority
                          .opcgId === 2 &&
                          'orange') ||
                        (notification.procedureManagementAction.priority
                          .opcgId === 3 &&
                          'green')
                    }}
                  />
                </div>
                <div className="col-md-6 p-0">
                  <div className="py-3">
                    <p className="text-secondary fw-bold text-capitalize">
                      {notification.acnoName}
                    </p>
                    <p className="green-color">
                      {notification.procedureManagementAction?.name}
                    </p>
                  </div>
                </div>
                <div className="col-md-3 p-0">
                  <Button
                    sx={{
                      display: 'flex',
                      color: '#005953',
                      textTransform: 'capitalize',
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }}
                    onClick={() => handleModalShow(true, notification)}
                  >
                    <Visibility fontSize="small" />
                    <p className="ms-2">{MORE}</p>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <NotificationModal
        modalShow={modalShow}
        handleModalShow={handleModalShow}
        notificationData={notificationData}
      />
      <NotificationModalForm
        control={control}
        showModalForm={showModalForm}
        handleFormShow={handleFormShow}
      />
    </div>
  );
};

export default Notifications;
