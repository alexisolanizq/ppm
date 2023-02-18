import { PAGE_TITLE_EMPLOYEE } from '@Const/catalogs'
import { LINK_CATALOG_EMPLOYEES } from '@Const/links'
import useModal from '@Hooks/common/useModal'
import { useEmployeesDetailService } from '@Services/employees/useEmployeesServices'
import { getFullNameEmployee } from '@Utils/employee'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router'

const useUserAdd = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const modalPhases = useModal()
  const { empId } = useParams()
  const { data: employee, isLoading} = useEmployeesDetailService(empId)

  const prevLinks = [
    {link: LINK_CATALOG_EMPLOYEES, nombre: PAGE_TITLE_EMPLOYEE},
    {link: `${LINK_CATALOG_EMPLOYEES}/${empId}`, nombre: getFullNameEmployee(employee)},
  ]

  const row = {
    empId,
    usrStatus: true,
    usrName: getFullNameEmployee(employee)
  }

  const onEnd = (response) => {
    setUser(response)
    modalPhases.openModal()
  }

  const onEndPhases = () => {
    navigate(`${LINK_CATALOG_EMPLOYEES}/${empId}`)
  }

  return {
    prevLinks,
    isLoading,
    row,
    user,
    onEnd,
    modalPhases,
    onEndPhases
  }
}

export default useUserAdd