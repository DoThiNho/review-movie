'use client'

import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { Theme, useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Image from 'next/image';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Input } from '@mui/material';
import { useRouter } from 'next/navigation';

import logo from '../../../public/assets/images/Logo.svg';
import langIcon from '../../../public/assets/images/Language.svg';

import InputSearch from '../InputSearch';

const a11yProps = (index: number) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const langs = [
  "English",
  "Vietnamese",
  "Chinese",
  "Korean"
];

const getStyles = (lang: string, langList: string[], theme: Theme) => {
  return {
    fontWeight:
    langList.indexOf(lang) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

const Header = () => {
  const theme = useTheme();
  const [lang, setLang] = React.useState<string[]>([]);
  const [value, setValue] = React.useState(0);
  const router = useRouter()

  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const handleChangeSelect = (event: SelectChangeEvent<typeof lang>) => {
    const {
      target: { value },
    } = event;
    setLang(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };
  const handleLogin = () => {
    router.push('/SignInModal')
  }

  return (
    <Box sx={{ flexGrow: 1, width: "100%", background: "#1F293D" }}>
      <AppBar position="static" sx={{ display: "flex", background: "#253554", height: "80px"}}>
        <Toolbar sx={{
          '&.MuiToolbar-root': {
            height: "100%", display: "flex", justifyContent: "space-between", padding: "0 50px"
            }
          }}
        >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {}}
          >
            <Image
              src={logo}
              height={60}
              width={60}
              alt="logo"
            />
            {!isSmallScreen && <InputSearch />}
          </IconButton>
          {!isSmallScreen && <Box sx={{height: "100%"}}>
            <Tabs 
              value={value} 
              TabIndicatorProps={{sx : {backgroundColor: "#FF8036"}}}
              sx={{
                '& .MuiTab-root': { minHeight: "80px", color: "#FFF", fontSize: "18px" },
                '& .Mui-selected': { color: "#FFF" },
                '& button.Mui-selected' : { color: "#FFF" },
                '& button': { marginRight: 6 }
                
              }}  
              onChange={handleChangeTab} 
              aria-label="basic tabs example"
            >
              <Tab label="Home" {...a11yProps(0)} />
              <Tab label="Movies" {...a11yProps(1)} />
              <Tab label="Rating" {...a11yProps(2)} />
              <Tab label="Contact" {...a11yProps(3)} />
            </Tabs>
          </Box>}
          <Box sx={{height: "100%", display: "flex", alignItems: "center"}}>
            <FormControl sx={{ m: 1, width: 170, mt: 2 }}>
              <Select
                displayEmpty
                value={lang}
                IconComponent={() => null}
                onChange={handleChangeSelect}
                renderValue={(selected) => {
                  if (selected.length === 0) { 
                    return (
                      <MenuItem sx={{
                        '&.MuiButtonBase-root': {
                          '&.MuiMenuItem-root': {
                            gap: "15px", 
                            color: "#FFF",
                            fontSize: "18px"
                          }
                        }
                      }}>
                        <Image src={langIcon} 
                          height={25}
                          width={25}
                          alt="language" 
                        />
                        English
                      </MenuItem>
                    )
                  }

                  return (
                    <MenuItem sx={{
                      '&.MuiButtonBase-root': {
                        '&.MuiMenuItem-root': {
                          gap: "15px", 
                          color: "#FFF",
                          fontSize: "18px"
                        }
                      }
                    }}>
                      <Image src={langIcon} 
                        height={25}
                        width={25}
                        alt="language" 
                      />
                      {selected}
                    </MenuItem>
                  );
                }}
                input={<Input disableUnderline />}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label'  }}
              >
                {langs.map((lang) => (
                  <MenuItem
                    key={lang}
                    value={lang}
                    style={getStyles(lang, langs, theme)}
                    sx={{
                      '&.MuiButtonBase-root': {
                        '&.MuiMenuItem-root': {
                          gap: "15px", 
                          color: "#000",
                          fontSize: "18px"
                        }
                      }
                    }}
                  >
                    <Image src={langIcon} 
                      height={25}
                      width={25}
                      alt="language" 
                    />
                    {lang}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button variant="contained" sx={{
              '&.MuiButtonBase-root': {
                backgroundColor: '#FF8036',
                fontSize: "18px"
              },
              '&:hover': {
                backgroundColor: '#FF8036',
                borderColor: '#0062cc',
                boxShadow: 'none',
              }
            }}
            onClick={handleLogin}
            >Login</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header