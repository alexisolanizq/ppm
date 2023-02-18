import CardEmployee from '@Component/common/card/CardEmployee'
import GridLayout from '@Component/common/grid/GridLayout'
import GeneralLayout from '@Component/layout/GeneralLayout'
import { PAGE_TITLE_EMPLOYEE } from '@Const/catalogs'
import { PREVLINK_CATALOG } from '@Const/links'
import useEmployees from '@Hooks/catalogs/useEmployees'
import React from 'react'

const Employees = () => {
  const { actions, isLoading, employeesFilters } = useEmployees()
  return (
    <GeneralLayout
    isTitleFlex
    title={PAGE_TITLE_EMPLOYEE}
    prevLinks={PREVLINK_CATALOG}
    actions={actions}
    >
      <GridLayout
        isLoading={isLoading}
        isEmpty={employeesFilters.length === 0}
      >
        {employeesFilters.map((employee) => (
          <CardEmployee key={`card-employee-${employee.empId}`} employee={employee}/>
        ))}
      </GridLayout>
    </GeneralLayout>
  )
}

export default Employees