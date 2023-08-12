import { TextField } from '@mui/material'
import React from 'react'

interface InputProps {
    id?: string,
    placeholder?: string,
    type?: string,
    name?: string
    value: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const Input = ({
    id,
    placeholder,
    type,
    name,
    value,
    onChange
}: InputProps) => {

  const inputStyles = {
    '& .MuiInputBase-root': {
      backgroundColor: '#fff', // Example background color
    },
    '& .MuiInput-input': {
      fontSize: '16px', // Example font size
    },
    '& .MuiOutlinedInput-root': {
      '&.Mui-focused fieldset': {
        borderColor: '#FF8036',
      },
    },
  };

  return (
    <TextField 
        id={id}
        placeholder={placeholder}
        type={type}
        variant="outlined" 
        sx={inputStyles}
        fullWidth
        onChange={onChange}
        name={name}
        value={value}
    />

  )
}

export default Input