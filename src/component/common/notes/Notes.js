import React from 'react'
import Card from '../card/Card'

const Notes = ({children, cardTitle}) => (
    <Card>
        <Card.Header className='text-center'>
            {cardTitle}
        </Card.Header>
        <Card.Body className='p-0 overflow-auto note-height'>
            {children}
        </Card.Body>
    </Card>
  )

export default Notes