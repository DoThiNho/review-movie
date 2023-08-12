import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { Typography } from '@mui/material';
import CardMovie from '../CardMovie';
import ListMovie from '../ListMovie';

const movies = [
    {
        id: 1,
        img: '/assets/images/the_batman.jpg',
        title: 'The Batman',
        genre: 'Action, Adventure,...',
        rating: 8
    },
    {
        id: 2,
        img:'/assets/images/uncharted.jpg',
        title: 'Uncharted',
        genre: 'Adventure, Action,...',
        rating: 8
    },
    {
        id: 3,
        img: '/assets/images/The_Exorcism_of_God.jpg',
        title: 'The Exorcism of God',
        genre: 'Horror, Comedy',
        rating: 8
    },
    {
        id: 4,
        img: '/assets/images/Turning_Red.jpg',
        title: 'Turning Red',
        genre: 'Comedy, Cartoon',
        rating: 8
    }
]

export default function CenteredTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabStyle = {
    '& .MuiTab-textColorPrimary': {
      color: "#FF8036"
    },
  };

  return (
    <Box>
        <Box className="w-full bg-home flex items-center justify-between px-20 py-4">
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
                <Tab label="All" />
                <Tab label="Latest" />
                <Tab label="Up coming" />
                <Tab label="Top rated" />
            </Tabs>
        </Box>
        <Box className="text-primary">
            {value === 0 && (
                <Box>
                    <ListMovie movies={movies} />
                </Box>
            )}
            {value === 1 && (
                <Box>
                    <CardMovie
                        linkImg='/assets/images/uncharted.jpg'
                        title='Uncharted'
                        genre='Adventure, Action,...'
                        rating={8}
                    />
                </Box>
            )}
            {value === 2 && (
                <Box>
                    <CardMovie
                        linkImg='/assets/images/The_Exorcism_of_God.jpg'
                        title='The Exorcism of God'
                        genre='Horror, Comedy'
                        rating={8}
                    />
                </Box>
            )}
            {value === 3 && (
                <Box>
                    <CardMovie
                        linkImg='/assets/images/Turning_Red.jpg'
                        title='Turning Red'
                        genre='Comedy, Cartoon'
                        rating={8}
                    />
                </Box>
            )}
      </Box>
    </Box>
    
  );
}