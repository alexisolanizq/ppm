import React, { useEffect } from 'react';
import { Container, Card, Box, Divider } from '@mui/material';
import useSettings from '@Hooks/generals/useSettings';
import HeaderBreadcrumbs from '@Component/common/breadcrumb/HeaderBreadcrumbs';
import AlertMessage from '@Component/common/stripedDataGrid/AlertMessage';
import MailLists from './MailList';
import FilterMails from './FilterMails';
import MailListsSent from './MailListSent';
import MailListsDraft from './MailListsDraft';
import MailListsFilter from './MailListsFilter';
import MailSidebar from './MailSidebar';
import MailModal from './MailModalAttachment';
import MailCompose from './MailCompose';

const index = () => {
  const {
    emailsReply,
    emails,
    emailsCC,
    emailsCCO,
    replyMessage,
    mailList,
    mailsListSend,
    service,
    mailData,
    dataMail,
    openCompose,
    mailsListDraft,
    modalShow,
    mailFindList,
    showCCO,
    showCc,
    isLoading,
    alertMessage,
    setAlertMessage,
    replyMail,
    setReplyMessage,
    setEmails,
    setEmailsCC,
    setEmailsReply,
    setEmailsCCO,
    setShowCCO,
    setShowCc,
    getMails,
    onHandleService,
    setmodalShow,
    handleMail,
    createMail,
    createDraftMail,
    handleInstruction,
    onDropAccepted,
    onDropRejected,
    setOpenCompose,
    handleMailCompose,
    handleFindList,
    findList
  } = useSettings();

  useEffect(() => {
    getMails();
  }, []);

  return (
    <Box>
      <Container sx={{ height: 'none!important' }}>
        <HeaderBreadcrumbs
          heading="Mail"
          links={[
            {
              name: 'Dashboard',
              href: '/'
            },
            { name: 'Mail' }
          ]}
        />
        <Card
          sx={{ height: { md: '72vh' }, mt: '1rem', display: { md: 'flex' } }}
        >
          <MailSidebar
            onHandleService={onHandleService}
            service={service}
            setOpenCompose={setOpenCompose}
          />
          <Divider
            sx={{
              height: '100%!important',
              width: '1px!important',
              marginLeft: '0.25rem'
            }}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
            <Box
              sx={{
                display: 'flex',
                position: 'relative',
                padding: '9px',
                justifyContent: 'center',
                height: '81px'
              }}
            >
              <h3>Correo</h3>
              <FilterMails
                handleFindList={handleFindList}
                findList={findList}
              />
            </Box>
            <Divider className='w-100 h-01' />
            {service === 'inbox' && (
              <MailLists
                handleMail={handleMail}
                mailList={mailList}
                isLoading={isLoading}
              />
            )}
            {service === 'send' && (
              <MailListsSent
                handleMail={handleMail}
                mailListSend={mailsListSend}
                isLoading={isLoading}
              />
            )}
            {service === 'draft' && (
              <MailListsDraft
                isLoading={isLoading}
                handleMailCompose={handleMailCompose}
                mailsListDraft={mailsListDraft}
              />
            )}
            {service === 'filter' && (
              <MailListsFilter
                isLoading={isLoading}
                handleMail={handleMail}
                mailFindList={mailFindList}
              />
            )}
          </Box>
          <MailModal
            modalShow={modalShow}
            setmodalShow={setmodalShow}
            mailData={mailData}
            replyMail={replyMail}
            emailsReply={emailsReply}
            setEmailsReply={setEmailsReply}
            setReplyMessage={setReplyMessage}
            replyMessage={replyMessage}
          />
          <MailCompose
            emails={emails}
            emailsCC={emailsCC}
            emailsCCO={emailsCCO}
            setEmails={setEmails}
            setEmailsCC={setEmailsCC}
            setEmailsCCO={setEmailsCCO}
            isOpenCompose={openCompose}
            showCc={showCc}
            showCCO={showCCO}
            setShowCCO={setShowCCO}
            setShowCc={setShowCc}
            onCloseCompose={() => setOpenCompose(false)}
            createMail={createMail}
            dataMail={dataMail}
            createDraftMail={createDraftMail}
            handleInstruction={handleInstruction}
            onDropAccepted={onDropAccepted}
            onDropRejected={onDropRejected}
          />
        </Card>
        {alertMessage ? (
          <AlertMessage
            alertMessage={alertMessage}
            setAlertMessage={setAlertMessage}
          />
        ) : null}
      </Container>
    </Box>
  );
};
export default index;
