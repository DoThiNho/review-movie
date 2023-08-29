'use client'

import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';

interface TabProps {
    name: string
    titleTabs: string[],
    value: number,
    handleChange: (event: React.SyntheticEvent, value: number) => void;
}

export default function CenteredTabs({
    name,
    titleTabs,
    value,
    handleChange
}: TabProps) {
  return (
    <Box>
        <Box className="w-full bg-home flex items-center justify-between px-12 py-4">
            <Typography variant="h5" className='text-primary'>{name}</Typography>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                variant="scrollable"
                centered 
                scrollButtons
                allowScrollButtonsMobile
                TabIndicatorProps={{sx : {backgroundColor: "#FF8036"}}}
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: "#FF8036" },
                    '& .MuiTab-root': { color: "#FF8036" },
                    '& .Mui-selected': { color: "#FF8036" },
                    '& button.Mui-selected' : {color: "#FF8036"},
                    '& .MuiTabScrollButton-root' : {color: "#FF8036"}
                }}      
            >
                {
                    titleTabs?.map((item, index) => (
                        <Tab label={item} key={index} />
                    ))
                }
            </Tabs>
        </Box>
    </Box>
    
  );
}