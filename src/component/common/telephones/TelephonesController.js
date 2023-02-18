import {
  fieldPhones,
  fieldRequired,
  InputPropsMaxLength
} from '@Const/validations';
import React from 'react';
import DivWidth from '../div/DivWidth';
import Flex from '../flex/Flex';
import IconAdd from '../icon/IconAdd';
import TextFieldController from '../textField/TextFieldController';

const TelephonesController = ({
  telephones,
  control,
  name = '',
  nameCode = '',
  nameNumber = '',
  isForeign = false,
  onAdd = () => {}
}) => (
  <Flex isWrap gap={16}>
    {telephones.map((_item, index) => (
      <Flex gap={5} key={`phone-lada-${index}`}>
        <DivWidth px={100}>
          <TextFieldController
            label="Lada"
            control={control}
            name={`${name}.${index}.${nameCode}`}
            rules={!isForeign && fieldRequired}
            inputProps={!isForeign && InputPropsMaxLength(3)}
          />
        </DivWidth>

        <DivWidth px="auto">
          <TextFieldController
            label="Teléfono"
            control={control}
            name={`${name}.${index}.${nameNumber}`}
            inputProps={!isForeign && InputPropsMaxLength(10)}
            rules={!isForeign && fieldPhones}
          />
        </DivWidth>
      </Flex>
    ))}
    <IconAdd
      className="mb-3"
      onClick={() => onAdd({ [nameNumber]: '' })}
    />
  </Flex>
);

export default TelephonesController;
