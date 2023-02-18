import React, { useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import {
  DocumentEditorContainerComponent,
  Toolbar,
  WordExport,
  SfdtExport
} from '@syncfusion/ej2-react-documenteditor';

import { Container } from 'react-bootstrap';
import FormLabel from '@mui/material/FormLabel';

import useMachoteDesign from '@Hooks/catalogs/useMachoteDesign';

import { FIELDS_REQUIRED } from '@Const/const';
import MachoteDesignForm from './MachoteDesignForm';

import '@Assets/styles/machoteDesignCreate.css';

const MachoteDesignCreate = () => {
  const navigate = useNavigate();

  DocumentEditorContainerComponent.Inject(Toolbar, WordExport, SfdtExport);

  const {
    ppmDocument,
    //! Document Editor
    serviceUrl,
    setContainer,
    onOpen,
    onSave,
    //! Create
    createInitialstate,
    legalFigures,
    languages,
    templateTypes,
    clients,
    holders,
    onSubmit,
    //! Variables
    listValiables,
    selectedVariables,
    handleChangeArea,
    //! useForm
    register,
    handleSubmit,
    errors
  } = useMachoteDesign();

  useEffect(() => {
    if (!ppmDocument) {
      navigate(-1);
    }

    createInitialstate();
  }, []);

  return (
    <>
      <Container className="col-md-8 mx-auto pt-3">
        <div className="mb-3">
          <h4 className="text-center green-title fw-bold fs-8 mb-4">
            Dar de alta diseño de machote
          </h4>
          <FormLabel className="text-danger mb-4">
            {FIELDS_REQUIRED}
          </FormLabel>
        </div>

        <MachoteDesignForm
          legalFigures={legalFigures}
          languages={languages}
          templateTypes={templateTypes}
          clients={clients}
          holders={holders}
          listValiables={listValiables}
          selectedVariables={selectedVariables}
          handleChangeArea={handleChangeArea}
          onSubmit={onSubmit}
          register={register}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      </Container>

      <button type="button" onClick={onOpen}>
        Open from server
      </button>
      <button type="button" onClick={onSave}>
        Save on server
      </button>

      <DocumentEditorContainerComponent
        id="container"
        height="590px"
        enableToolbar
        enableEditor
        enableSfdtExport
        enableWordExport
        serviceUrl={serviceUrl}
        ref={(scope) => {
          setContainer(scope);
        }}
      />
    </>
  );
};

export default MachoteDesignCreate;
