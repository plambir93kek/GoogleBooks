import React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


interface SortSelectProps {
   sorting: string;
   setSorting: React.Dispatch<React.SetStateAction<string>>;
}

export const SortSelect:React.FC<SortSelectProps> = ({sorting, setSorting}) => {
   
    const selectSorting = (e:SelectChangeEvent<string>) => {
      setSorting(e.target.value)
    }
    return (
        <FormControl fullWidth sx={{width: '200px', justifyContent:'center'}}>
        <Select value={sorting} onChange={selectSorting}
        SelectDisplayProps={{ style: { padding: '5px', alignItems:'center', fontSize: '1rem'} }}
        
        >
          <MenuItem value={'relevance'}>relevance</MenuItem>
          <MenuItem value={'newest'}>newest</MenuItem>
        </Select>
      </FormControl>
    )
}