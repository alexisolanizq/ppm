import { ADD_CONTACT, CONTACTS_TITLE, EDIT_CONTACT } from '@Const/generals'
import useContactComponent from '@Hooks/component/useContactComponent'
import { AccountCircle, Visibility } from '@mui/icons-material'
import ContactForm from '@Pages/generals/contact/forms/ContactForm'
import React from 'react'
import Button from '../button/Button'
import Flex from '../flex/Flex'
import Icon from '../icon/Icon'
import Modal from '../modal/Modal'
import TableGeneral from '../table/TableGenerals'

const ContactsComponent = ({value, onChange, nameMain}) => {

  const {
    isOpen,
    openModal,
    onSubmit,
    row,
    isUpdate,
    onClose,

    isOpenTable,
    closeModalTable,
    openModalTable,

    Headers,
    Columns
  } = useContactComponent({value, onChange, nameMain})

  return (
    <>
      <Flex gap={8}>
        <Button 
          onClick={openModal}
          isBorderPrimary
          icon={AccountCircle}
        >
          {ADD_CONTACT}
        </Button>
        {
          value && value.length > 0 && (
            <Icon
              icon={Visibility}
              onClick={()=> openModalTable()}
            />
          )
        }
      </Flex>
      <Modal
        isShow={isOpenTable}
        title={CONTACTS_TITLE}
        onClose={() => closeModalTable()}
      >
        <TableGeneral
          list={value}
          headers={Headers}
          columns={Columns}
        />
      </Modal>
      <Modal
        title={isUpdate ? EDIT_CONTACT : ADD_CONTACT}
        isShow={isOpen}
        onClose={onClose}
      >
        <ContactForm
          row={row?.contact}
          isUpdate={isUpdate}
          onSubmit={onSubmit}
          onCancel={onClose}
        />
      </Modal>
    </>
  )
}

export default ContactsComponent