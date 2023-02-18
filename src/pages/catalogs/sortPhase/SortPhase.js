import { DragHandle } from '@mui/icons-material';
import { MenuItem, TextField } from '@mui/material';
import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { Controller } from 'react-hook-form';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import useSortPhase from '@Hooks/catalogs/useSortPhase';
import CustomBootstrapDialog from '@Component/common/bootstrapDialog/CustomBootstrapDialog';
import AlertMessage from '@Component/common/stripedDataGrid/AlertMessage';
import CatalogsBreadcrumbs from '@Component/common/breadcrumb/CatalogsBreadcrumbs';
import { FIELDS_REQUIRED } from '@Const/const';
import { PAGE_TITLE_SORT_PHASES } from '@Const/catalogs';

const SortPhase = () => {
  const {
    watch,
    areas,
    reorder,
    control,
    countries,
    sortedPhases,
    getAreasList,
    alertMessage,
    handleSubmit,
    setAlertMessage,
    procedurePhases,
    getCountriesList,
    insertSortedPhase,
    setProcedurePhases,
    getAreaSortedPhase,
    getStatusDisplayName,
  } = useSortPhase();

  const { SubmitButton } = CustomBootstrapDialog();

  const watchCountry = watch('counId');
  const watchArea = watch('joaId');
  useEffect(() => {
    if (watchCountry !== null && watchCountry !== undefined) {
      getAreaSortedPhase(watchArea, watchCountry);
    }
  }, [watchCountry, watchArea]);

  useEffect(() => {
    getAreasList();
    getCountriesList();
  }, []);

  return (
    <Container>
      <Container
        fluid
        className="my-2 d-flex justify-content-start align-items-center p-3"
      >
        <CatalogsBreadcrumbs
            links={[
              { name: PAGE_TITLE_SORT_PHASES }
            ]}
          /> 
      </Container>
      <Container fluid className="p-3 bg-white border shadow-sm rounded">
        <h4 className="green-color fw-bold text-center my-4">{PAGE_TITLE_SORT_PHASES}</h4>
        <form
          className="container"
          onSubmit={handleSubmit(insertSortedPhase)}
        >
          <div className="w-50 mx-auto">
            <div className="w-75 mx-auto">
              <div className="my-3">
                <p className="text-danger">{FIELDS_REQUIRED}</p>
              </div>

              <div className="d-none">
                <Controller
                  name="id"
                  control={control}
                  defaultValue={sortedPhases ? sortedPhases.id : ''}
                  render={({ field: { onChange, value } }) => (
                    <TextField
                      size="small"
                      value={value ?? ''}
                      onChange={onChange}
                    />
                  )}
                />
              </div>

              <div className="mb-4">
                <Controller
                  name="joaId"
                  control={control}
                  defaultValue={null}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      sx={{ width: '100%' }}
                      color="success"
                      size="small"
                      select
                      label="* Área"
                      value={value ?? ''}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    >
                      {areas.length ? (
                        areas.map((option) => (
                          <MenuItem key={option.id} value={option.id}>
                            {option.name}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>Sin opciones para mostrar</MenuItem>
                      )}
                    </TextField>
                  )}
                />
              </div>

              <div className="mb-4">
                <Controller
                  name="counId"
                  control={control}
                  defaultValue={null}
                  render={({
                    field: { onChange, value },
                    fieldState: { error }
                  }) => (
                    <TextField
                      sx={{ width: '100%' }}
                      color="success"
                      size="small"
                      select
                      label="* Páis"
                      value={value ?? ''}
                      onChange={onChange}
                      error={!!error}
                      helperText={error ? error.message : null}
                    >
                      {countries.length ? (
                        countries.map((option) => (
                          <MenuItem key={option.counId} value={option.counId}>
                            {option.counNameSpa}
                          </MenuItem>
                        ))
                      ) : (
                        <MenuItem disabled>Sin opciones para mostrar</MenuItem>
                      )}
                    </TextField>
                  )}
                />
              </div>
            </div>

            <div className="mb-4 w-75 text-center mx-auto">
              <p className="fw-bold green-color fs-6">
                Seleccione el orden de las fases
              </p>
              <p className="text-muted mb-4">
                Coloque el mouse sobre la fase y arrastre para ordenar
              </p>
              <DragDropContext
                onDragEnd={(result) => {
                  const { source, destination } = result;
                  if (!destination) {
                    return;
                  }
                  if (
                    source.index === destination.index &&
                    source.droppableId === destination.droppableId
                  ) {
                    return;
                  }

                  setProcedurePhases((prevSortPhase) =>
                    reorder(prevSortPhase, source.index, destination.index)
                  );
                }}
              >
                <Droppable droppableId="phases">
                  {(droppableProvided) => (
                    <div
                      {...droppableProvided.droppableProps}
                      ref={droppableProvided.innerRef}
                    >
                      {procedurePhases.length ? (
                        procedurePhases.map((sortPhase, index) => (
                          <Draggable
                            key={sortPhase.sophId || sortPhase.jappId}
                            draggableId={
                              sortPhase.sophId?.toString() ??
                              sortPhase.jappId?.toString()
                            }
                            index={index}
                          >
                            {(draggableProvided) => (
                              <div
                                {...draggableProvided.draggableProps}
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                                className="border mb-4 px-3 py-2 rounded d-flex justify-content-between align-items-center bg-white shadow-sm"
                              >
                                <p className="text-muted m-0">
                                  {sortPhase.jobAreaProcedurePhase
                                    ?.procedurePhase?.prphName ||
                                    sortPhase.prphName}
                                </p>
                                <DragHandle />
                              </div>
                            )}
                          </Draggable>
                        ))
                      ) : (
                        <h3 className="text-center fw-bold green-color">
                          {getStatusDisplayName()}
                        </h3>
                      )}
                      {droppableProvided.placeholder}
                    </div>
                  )}
                </Droppable>
              </DragDropContext>
            </div>
            <div className="d-flex justify-content-center">
              <SubmitButton type="submit">Guardar</SubmitButton>
            </div>
          </div>
        </form>
      </Container>

      {alertMessage ? (
        <AlertMessage
          alertMessage={alertMessage}
          setAlertMessage={setAlertMessage}
        />
      ) : null}
    </Container>
  );
};

export default SortPhase;
