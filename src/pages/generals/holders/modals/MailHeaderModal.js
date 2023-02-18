import React from 'react'
import { MAIL_HEADER } from '@Const/generals'
import Modal from '@Component/common/modal/Modal'
import MailHeaderForm from '@Pages/generals/holders/forms/MailHeaderForm'

const MailHeaderModal = ({
    control, 
    handleSubmit, 
    handleMailHeader, 
    mailHeaderModalShow,
    handleMailHeaderSubmit
}) => (
    <Modal
        title={MAIL_HEADER}
        isShow={mailHeaderModalShow}
        onClose={handleMailHeader}
        maxWidth="md"
    >
        <MailHeaderForm
            control={control}
            handleSubmit={handleSubmit}
            handleMailHeader={handleMailHeader}
            handleMailHeaderSubmit={handleMailHeaderSubmit}
        />
    </Modal>
  )

export default MailHeaderModal