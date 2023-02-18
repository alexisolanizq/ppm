import React from 'react'
import Loading from '../loader/Loading'

const FilterLayout = ({ isLoading = false, children }) => {
  if (isLoading) return <Loading />

  return children
}

export default FilterLayout