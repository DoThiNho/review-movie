import React from 'react'
import CardReview from '../CardReview'
import { Box } from '@mui/material'

const ListReview = () => {
  return (
    <Box className="px-12">
        <CardReview/>
        <CardReview/>
        <CardReview/>
        <CardReview/>
        <CardReview/>
    </Box>
  )
}

export default ListReview