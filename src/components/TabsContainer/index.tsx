import React, { useState } from "react";
import { Box, Tabs, Typography, Tab } from '@mui/material'
import TabPanel from "@/src/components/TabPanel";


interface Category {
  label: string;
  component: React.ReactNode;
}

const TabsContainer: React.FC<{ title: string, categories: Category[] }> = ({ title, categories }) => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<{}>, newTab: number) => {
    setCurrentTab(newTab);
  };

  return (
     <Box>
        <Box className="w-full bg-home flex items-center justify-between px-12 py-4">
            <Typography variant="h5" className='text-primary'>{title}</Typography>
            <Tabs 
                value={currentTab}
                onChange={handleChange}
                variant="scrollable" 
                scrollButtons
                allowScrollButtonsMobile
                TabIndicatorProps={{sx : {backgroundColor: "#FF8036"}}}
                sx={{
                    '& .MuiTabs-indicator': { backgroundColor: "#FF8036" },
                    '& .MuiTab-root': {
                      color: "#FF8036",
                      '&.inactive': {
                        color: "#ffffff",
                      },
                    },
                    '& .Mui-selected': { color: "#FF8036" },
                    '& button.Mui-selected': { color: "#FF8036" },
                  }}     
            >
            {categories.map((category, index) => (
                <Tab
                label={category.label}
                key={index}
                className={index === currentTab ? '' : 'inactive'}
                />
            ))}
            </Tabs>
        </Box>
        {categories.map((category, index) => (
        <TabPanel key={category.label} value={currentTab} index={index}>
            {category.component}
        </TabPanel>
        ))}
     </Box>
  );
};

export default TabsContainer;
