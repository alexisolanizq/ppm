import { createSlice } from '@reduxjs/toolkit';
import OfficeService from '@Services/office/officeService';
import BankService from '@Services/banks/bankService';
import { HTTP_STATUS_OK } from '@Const/const';

// funtion expample post request
const initialState = {
  office: null,
  offices: null,
  officesAgent: [],
  officeID: null,
  languages: [],
  currencyList: [],
  nationalities: [],
  personTypes: [],
  expirationUnit: [],
  isLoading: false,
  update: false,
  agentId: null,
  id: null
};

const service = OfficeService.getInstance();
const serviceBank = BankService.getInstance();

const officeSlice = createSlice({
  name: 'App/offices',
  initialState,
  reducers: {
    setOfficeId: (state, action) => {
      state.id = action.payload
    },
    setAgentId: (state, action) => {
      state.agentId = action.payload
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setOffice: (state, action) => {
      state.office = action.payload;
    },
    setOfficesAgent: (state, action) => {
      state.officesAgent = action.payload;
    },
    setOffices: (state, action) => {
      state.offices = action.payload;
    },
    setCountries: (state, action) => {
      state.countries = action.payload;
    },
    setCurrencyList: (state, action) => {
      state.currencyList = action.payload;
    },
    setNationalities: (state, action) => {
      state.nationalities = action.payload;
    },
    setPersonTypes: (state, action) => {
      state.personTypes = action.payload;
    },
    setExpirationUnit: (state, action) => {
      state.expirationUnit = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLanguages: (state, action) => {
      state.languages = action.payload;
    },
    setUpdateProp: (state, action) => {
      state.update = action.payload;
    },
    setOfficeIDprop: (state, action) => {
      state.officeID = action.payload;
    },
    addOffice: (state, action) => {
      state.offices = [action.payload, ...state.offices]
    }
  },
  extraReducers: {}
});

export const {
  setOfficeId,
  setAgentId,
  setLoading,
  setOffice,
  setOffices,
  setUpdateLanguageEdit,
  setError,
  setCountries,
  setNationalities,
  setExpirationUnit,
  setPersonTypes,
  setCurrencyList,
  setBanks,
  setUpdateProp,
  setOfficeIDprop,
  setOfficesAgent,
  addOffice
} = officeSlice.actions;

export const setUpdate = (prop) => async (dispatch) => {
  dispatch(setUpdateProp(prop));
};

export const setOfficeID = (prop) => async (dispatch) => {
  dispatch(setOfficeIDprop(prop));
};

export const fetchOfficesData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getOffices();
    dispatch(setOffices(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const fetchOfficesAgent = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getOfficesAgent(id);
    dispatch(setOfficesAgent(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return 'error';
  }
};

export const fetchOfficeData = (id) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getOffice(id);
    dispatch(setOffice(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const getNationalityData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getNationality();
    dispatch(setNationalities(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getExpirationUnitData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getExpirationUnit();
    dispatch(setExpirationUnit(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};
export const getPersonTypeData = () => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    const response = await service.getPersonTypes();
    dispatch(setPersonTypes(response));
    dispatch(setLoading(false));
    return response;
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const addOfficeData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.createOffice(data);
  } catch (error) {
    dispatch(setLoading(false));
    return error;
  }
};

export const updateOfficeData = (data) => async (dispatch) => {
  try {
    dispatch(setLoading(true));
    return await service.updateOffice(data);
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setError(error));
    return false;
  }
};

export const fetchBanks = () => async () => {
  try {
    const response = await serviceBank.getBanks();

    if (response.status === HTTP_STATUS_OK) {
      return response.data.map((item) => ({
        id: item.ppbaId,
        name: item.ppbaName,
        abbreviation: item.ppbaAbbreviation
      }));
    }

    return [];
  } catch (error) {
    return [];
  }
};

export default officeSlice.reducer;
