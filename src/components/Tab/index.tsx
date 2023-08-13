import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import CardMovie from '../CardMovie';
import ListMovie from '../ListMovie';

interface TabProps {
    titleTabs: string[],
    value: number,
    handleChange: (event: React.SyntheticEvent, value: number) => void;
    movies?: object[]
}

export default function CenteredTabs({
    titleTabs,
    value,
    handleChange,
    movies
}: TabProps) {

  return (
    <Box>
        <Box className="w-full bg-home flex items-center justify-between px-12 py-4">
            <Typography variant="h5" className='text-primary'>Currently premiering</Typography>
            <Tabs 
                value={value} 
                onChange={handleChange} 
                centered 
                TabIndicatorProps={{sx : {backgroundColor: "#FF8036"}}}
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: "#FF8036" },
                    '& .MuiTab-root': { color: "#FF8036" },
                    '& .Mui-selected': { color: "#FF8036" },
                    '& button.Mui-selected' : {color: "#FF8036"}
                }}      
            >
                {
                    titleTabs.map((item, index) => (
                        <Tab label={item} key={index} />
                    ))
                }
            </Tabs>
        </Box>
        <Box className="text-primary">
            <Box>
                <ListMovie movies={movies} />
            </Box>
      </Box>
    </Box>
    
  );
}