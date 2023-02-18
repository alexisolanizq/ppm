import { useCallback, useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { API_COUNTRIES } from '@Const/constUrls';
import { useGET } from '@Utils/api';
import { setCountries } from '@Redux/catalogs/countriesSlice';
import ColumnsCountriesEstructura from '../components/ColumnsCountriesEstructura';

const useListadoCountriesEstructura = () => {
  const dispatch = useDispatch();
  const countriesRedux = useSelector((state) => state.countryClone.countries);

  // state
  const [row, setRow] = useState({});
  const [modalShow, setModalShow] = useState(false);

  // prevLinks
  const prevLinks = [{ link: '/catalogos', nombre: 'Catálogos' }];

  // call apis
  const {
    isLoading,
    isFetching,
    data: countries
  } = useGET({
    url: API_COUNTRIES,
    enable: countriesRedux.length === 0,
    onSuccess: (response) => dispatch(setCountries(response))
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
    () => ColumnsCountriesEstructura({ updateModalShow }),
    []
  );

  return {
    // values
    data: countriesRedux || countries,
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

export default useListadoCountriesEstructura;
