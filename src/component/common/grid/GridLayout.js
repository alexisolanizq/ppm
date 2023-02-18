import { SIZES } from '@Const/styles'
import React from 'react'
import EmptyGrid from '../empty/EmptyGrid'
import Loading from '../loader/Loading'
import Grid from './Grid'

const GridLayout = ({ isLoading = false, isEmpty = false, children }) => {
  if (isLoading) return <Loading />

  if (isEmpty) return <EmptyGrid />

  return <Grid gap={SIZES.TWENTYFOUR} className="py-4">{children}</Grid>
}

export default GridLayout