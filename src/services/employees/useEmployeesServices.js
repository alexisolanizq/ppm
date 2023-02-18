import { API_EMPLOYEES } from "@Const/constUrls";
import { STORE_EMPLOYEES } from "@Const/store";
import { addEmployee, setEmployee, setEmployees, setIdEmployee, updateEmployee } from "@Redux/catalogs/employeeSlice";
import { useAddService, useListadoService, useRowService, useUpdateService } from "@Services/useService";
import { useGET } from "@Utils/api";

export const useEmployeesListService = () => useListadoService({
  store: STORE_EMPLOYEES,
  url: API_EMPLOYEES,
  onSaveList: setEmployees,
})

export const useEmployeesDetailService = (id) => useRowService({
  onSaveId: setIdEmployee,
  onSaveRow: setEmployee,
  store: STORE_EMPLOYEES,
  url: `${API_EMPLOYEES}/${id}`,
  id,
  rowName: 'employee'
})

export const useEmployeesDetailGetService = (id) => useGET({
  url: `${API_EMPLOYEES}/${id}`,
  nameQuery: `rowEmployee${id}`
})

export const useEmployeeAddService = () => useAddService({
  url: API_EMPLOYEES,
  onSaveRow: addEmployee
})

export const useEmployeeUpdateService = (id) => useUpdateService({
  url: `${API_EMPLOYEES}/${id}`,
  onSaveRow: updateEmployee,
  onSaveRowOne: setEmployee
})

