import React from 'react'
import { Controller } from 'react-hook-form'
import ContactsComponent from './ContactsComponent'

const ContactsController = ({
    control,
    name= '',
    rules = {},
    nameMain = ''
}) => (
    <Controller
        name={name}
        control={control}
        rules={rules}
        render={({field: {value, onChange}}) => (
            <ContactsComponent 
                value={value}
                onChange={onChange}
                nameMain={nameMain}
            />
        )}
    />
)

export default ContactsController