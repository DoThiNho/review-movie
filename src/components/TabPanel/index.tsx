import React from 'react'
import { Box, Typography } from '@mui/material'

interface TabPanelProps {
    children: React.ReactNode
    value: number
    index: number
}

const TabPanel = ({ children, value, index }: TabPanelProps) => {
  return (
    <div role="tabpanel" hidden={value !== index}>
        {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
        )}
    </div>
  )
}

export default TabPanel