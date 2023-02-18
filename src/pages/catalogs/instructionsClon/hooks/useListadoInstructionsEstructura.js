import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_INSTRUCTIONS_TYPES } from '@Const/constUrls';
import { setInstructions } from '../../../../../redux/slices/countrySliceClone';
import { useGET } from '@Utils/api';
import ColumnsInstructionsEstructura from '../components/ColumnsInstructionsEstructura';

const useListadoInstructionsEstructura = () => {
  const dispatch = useDispatch();
  const instructionsRedux = useSelector((state) => state.countryClone.instructions);

  // state
  const [row, setRow] = useState({});
  const [modalShow, setModalShow] = useState(false);

  // prevLinks
  const prevLinks = [{ link: '/catalogos', nombre: 'Catálogos' }];

  // call apis
  const {
    isLoading,
    isFetching,
    data: instructions
  } = useGET({
    url: API_INSTRUCTIONS_TYPES,
    enable: instructionsRedux.length === 0,
    onSuccess: (response) => dispatch(setInstructions(response))
  });

  // functions
  const openModal = useCallback(() => setModalShow(true), []);
  const closeModal = useCallback(() => {
    setRow({});
    setModalShow(false);
  }, []);
  const updateModalShow = useCallback((_row) => {
    setRow(_row);
    setModalShow(true);
  });

  // columns
  const columns = useMemo(
    () => ColumnsInstructionsEstructura({ updateModalShow }),
    []
  );

  return {
    // values
    data: instructionsRedux || instructions,
    isLoading: isLoading || isFetching,
    columns,
    prevLinks,
    modalShow,
    row,

    // functions
    openModal,
    closeModal
  };
};

export default useListadoInstructionsEstructura;
