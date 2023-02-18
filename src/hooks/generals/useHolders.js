import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Icon from '@Component/common/icon/Icon';
import { fetchHolders } from '@Redux/generals/holderSlice';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { LINK_HOLDER_ADD } from '@Const/links';
import IconAdd from '@Component/common/icon/IconAdd';
import { COLORS } from '@Const/styles';

const useHolders = () => {

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [addressModalShow, setAddressModalShow] = useState(false);
  const [mailHeaderModalShow, setMailHeaderModalShow] = useState(false);
  const [recipientListModalShow, setRecipientListModalShow] = useState(false);
  const [associatedAgentsModalShow, setAssociatedAgentsModalShow] =
    useState(false);
  const [isHolderUpdate, setIsHolderUpdate] = useState(false);
  const [holders, setHolders] = useState([]);
  const [holder, setHolder] = useState({});
  const [searchByName, setSearchByName] = useState('');

  const [openTooltip, setOpenTooltip] = useState(null);
  const toggleTooltipClick = (index) => {
    setOpenTooltip(openTooltip === index ? null : index);
  };

  const handleAddress = () => setAddressModalShow(!addressModalShow);
  const handleMailHeader = () => setMailHeaderModalShow(!mailHeaderModalShow);
  const handleRecipientList = () =>
    setRecipientListModalShow(!recipientListModalShow);
  const handleAssociatedAgents = () =>
    setAssociatedAgentsModalShow(!associatedAgentsModalShow);

  const updateModalShow = (modalBool, updateBool, row) => {
    setModalShow(modalBool);
    setIsHolderUpdate(updateBool);
    if (updateBool) {
      setHolder(row);
    }
  };

  const onClickUpload = () => {}

  const actionsHolderToolbar = [
    <Icon icon={FileUploadIcon} onClick={onClickUpload} color={COLORS.GRAY}/>,
    <IconAdd  to={LINK_HOLDER_ADD}/>,
  ]

  const getHolders = async ({ name }) => {
    try {
      const response = await dispatch(fetchHolders());
      const holdersByName = response.filter((items) =>
        items.procedureHolder.holder.name.includes(name)
      );
      setHolders(holdersByName);
    } catch (error) {
      setHolders([]);
    }
  };

  return {
    modalShow,
    isHolderUpdate,
    holders,
    holder,
    getHolders,
    updateModalShow,
    searchByName,
    setSearchByName,
    openTooltip,
    setOpenTooltip,
    toggleTooltipClick,
    handleAddress,
    handleAssociatedAgents,
    addressModalShow,
    associatedAgentsModalShow,
    handleRecipientList,
    recipientListModalShow,
    handleMailHeader,
    mailHeaderModalShow,
    actionsHolderToolbar
  };
};

export default useHolders;
