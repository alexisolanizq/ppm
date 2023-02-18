import { Checkbox, FormControlLabel, TextField } from '@mui/material'
import React from 'react'
import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import { Controller } from 'react-hook-form'
import ReactQuill from 'react-quill'
import { Label } from 'reactstrap'
import Button from '../button/Button'
import useEmailModal from './useEmailModal'

function EmailModal({ isShow, onClose = () => {} }) {
  const {handleSubmit, onSubmit, register, control} = useEmailModal({ onClose }) 

  return (
    <Modal size="xl" show={isShow} onHide={onClose}>
      <Modal.Header closeButton onClick={onClose} />
      <Modal.Body>
        <Container className='col-md-10 mx-auto'>
          <div className="my-3">
            <h4 className="text-center green-title fw-bold fs-8 mb-4">Enviar correo</h4>
          </div>
          <Form noValidate onSubmit={handleSubmit(onSubmit)}>
            <Row className='mb-4'>
              <Col>
                <TextField
                  id="send-email-destinatarios"
                  label="Destinatarios"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  multiline
                  rows={4}
                  placeholder="Email separados por coma"
                  {...register('destinatarios', {required: true} )}
                />
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <TextField
                  id="send-email-cc"
                  label="CC"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  placeholder="Email separados por coma"
                  {...register('cc', {required: true} )}
                />
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <TextField
                  id="send-email-asunto"
                  label="Asunto"
                  InputLabelProps={{ shrink: true }}
                  fullWidth
                  placeholder="Escriba el asunto del correo"
                  {...register('subject', {required: true} )}
                />
              </Col>
            </Row>
            <Row className='mb-4'>
              <Col>
                <Label className='primary-green'>Mensaje</Label>
                <Controller
                  name="message"
                  control={control}
                  rules={{ required: true }}
                  render={({ field: { onChange, value } }) => (
                    <ReactQuill
                      theme="snow"
                      className='w-100'
                      value={value}
                      onChange={onChange}
                    />
                  )}
                />
                
              </Col>
            </Row>
            <Row className='mb-4 justify-content-center'>
              <Col md="auto" >
                <Controller
                  name="autoarchivar"
                  control={control}
                  render={({ field: { onChange, value } }) => (
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={value}
                          value={1}
                          onChange={() => onChange(!value)}
                        />
                      }
                      label="Autoarchivar correo"
                    />
                  )}
                />
              </Col>
            </Row>
            <Row className='mb-4 justify-content-center'>
              <Col md="auto" >
                <Button>Enviar</Button>
              </Col>
            </Row>
          </Form>
        </Container>
      </Modal.Body>
    </Modal>
  )
}

export default EmailModal