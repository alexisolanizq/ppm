import FilterComponent from "@Component/common/filter/FilterComponent"
import FilterSearch from "@Component/common/filter/FilterSearch"
import IconAdd from "@Component/common/icon/IconAdd"
import IconExport from "@Component/common/icon/IconExport"
import { LINK_CATALOG_EMPLOYEES_ADD } from "@Const/links"
import { useEmployeesListService } from "@Services/employees/useEmployeesServices"
import { filterByValue } from "@Utils/array"
import { isUndefined } from "@Utils/values"
import React, { useEffect, useState } from 'react'

const useEmployees = () => {
  const [employeesFilters, setEmployeesFilters] = useState([])
  const { data: employees, isLoading } = useEmployeesListService()

 

  const onSearch = (value) => {
    if (value === '') {
      setEmployeesFilters(employees);
    } else {
      const filteredRows = filterByValue(employees, value);
      setEmployeesFilters(filteredRows);
    }
  }
  const onFilter = ({ status }) => {
    let newData = [...employees]

    if (!isUndefined(status)) {
      newData = newData.filter(f => f.empStatus === status)
    }

    setEmployeesFilters(newData)
  }
  
  const onClear = () => onFilter({ status: true })

  const onExport = () => {}

  useEffect(() => {
    if (employees) {
      onClear()
    }
  }, [employees]);

  const actions = [
    <FilterSearch isChange onSearch={onSearch} />,
    <FilterComponent onFilter={onFilter} onClear={onClear} />,
    <IconExport onClick={onExport}/>,
    <IconAdd to={LINK_CATALOG_EMPLOYEES_ADD}/>
  ]

  return {
    employeesFilters,
    isLoading,
    actions
  }
}

export default useEmployees