import React from 'react';
import Button from '@Component/common/button/Button';
import FlexButtons from '@Component/common/flex/FlexButtons';

import useFilterComponent from '@Hooks/component/useFilterComponent';
import Form from '../form/Form';
import IconFilter from '../icon/IconFilter';
import SelectStatus from '../select/SelectStatus';

const FilterComponent = ({
  component,
  onFilter = () => {},
  onClear = () => {}
}) => {
  const {
    onToggleShow,
    isShow,
    control,
    ComponentForm,
    handleOnClear,
    onSubmit
  } = useFilterComponent({ component, onFilter, onClear });

  return (
    <div className="filter">
      <IconFilter onClick={onToggleShow} />
      {isShow && (
        <div className={`filter__container ${isShow ? 'active' : ''}`}>
          <Form isHideTextRequired>
            <SelectStatus control={control} />
            <ComponentForm />
            <FlexButtons noMarginTop>
              <Button isCancel onClick={handleOnClear}>
                Limpiar
              </Button>
              <Button onClick={onSubmit}>Filtrar</Button>
            </FlexButtons>
          </Form>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
