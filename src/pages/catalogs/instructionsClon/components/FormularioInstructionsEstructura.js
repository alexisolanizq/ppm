import React from 'react';
import { FIELDS_REQUIRED, FIELD_REQUIRED } from '@Const/const';
import Button from '@Component/common/button/Button';
import TextFieldController from '@Component/common/textField/TextFieldController';
import SelectController from '@Component/common/select/SelectController';

const FormularioCountriesEstructura = ({
  onComplete = () => {},
  onClose,
  row
}) => {
  const { handleSubmit, onSubmit, control, areas, phases, isLoadingButton } =
    useModalInstructionEstructura({ onClose, row, onComplete });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
        <p className="text-danger">{FIELDS_REQUIRED}</p>
      </div>
      <SelectController
        name="areaType"
        label="* Área"
        control={control}
        rules={{ required: FIELD_REQUIRED }}
        options={areas}
        optionId="joaId"
        optionName="joaName"
      />
      <SelectController
        name="phaseType"
        label="* Fase"
        control={control}
        rules={{ required: FIELD_REQUIRED }}
        options={phases}
        optionId="prphId"
        optionName="prphName"
      />
      <TextFieldController
        name="counNameEng"
        label="* Nombre del País en inglés"
        control={control}
        rules={{ required: FIELD_REQUIRED }}
      />
      <div className="w-50">
        <TextFieldController
          name="counLargeAbbreviation"
          label="* Abreviatura larga del País"
          control={control}
          rules={{
            required: FIELD_REQUIRED
          }}
        />
      </div>
      <div className="w-50">
        <TextFieldController
          name="counShortAbbreviation"
          label="* Abreviatura corta del País"
          control={control}
          rules={{
            required: FIELD_REQUIRED,
            minLength: { value: 2, message: 'Mínimo 3 caracteres' }
          }}
        />
      </div>

      <div className="d-flex justify-content-between">
        <Button isCancel onClick={onClose}>
          Cancelar
        </Button>
        <Button isLoading={isLoadingButton} isSubmit type="submit">
          Guardar
        </Button>
      </div>
    </form>
  );
};

export default FormularioCountriesEstructura;
