/* eslint-disable no-underscore-dangle */
import React from 'react';
import { LINK_SEARCH_HOLDER } from '@Const/links';
import GeneralLayout from '@Component/layout/GeneralLayout';
import HolderForm from '@Pages/generals/holders/HolderForm';
import {
  ADDRESS,
  BILLING_ENTITY,
  CREATE_HOLDER,
  PAGE_TITLE_SEARCH_HOLDER,
  UPDATE_HOLDER
} from '@Const/generals';
import LinkIconText from '@Component/common/link/LinkIconText';
import { AccountCircle, Home } from '@mui/icons-material';
import { DIRECTORY } from '@Const/const';
import useHolders from '@Hooks/generals/useHolders';
import IconText from '@Component/common/icon/IconText';
import useHolderForm from '@Hooks/generals/useHolderForm';
import { WIDTH } from '@Const/styles';
import AddressModal from './modals/AddressModal';

const HolderFormPage = ({ onEnd = () => {} }) => {
  const {  handleAddress, addressModalShow, countries, getCountries } = useHolders();

  const { control, handleSubmit } =
    useHolderForm({ onEnd });

  return (
    <GeneralLayout
      title={control?._formValues?.holId ? UPDATE_HOLDER : CREATE_HOLDER}
      prevLinks={[
        { nombre: PAGE_TITLE_SEARCH_HOLDER, link: LINK_SEARCH_HOLDER }
      ]}
      maxWidth={WIDTH.form}
      actions={[
        <IconText icon={Home} text={ADDRESS} onClick={handleAddress} />,
        <LinkIconText icon={AccountCircle} text={DIRECTORY} />,
        <LinkIconText icon={AccountCircle} text={BILLING_ENTITY} />
      ]}
    >
      <HolderForm />

      <AddressModal
        control={control}
        countries={countries}
        getCountries={getCountries}
        addressModalShow={addressModalShow}
        handleAddress={handleAddress}
        handleSubmit={handleSubmit}
      />
    </GeneralLayout>
  );
};

export default HolderFormPage;
