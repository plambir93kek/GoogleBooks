import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

interface CategoriesSelectProps{
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<string>>;
}

export const CategoriesSelect:React.FC<CategoriesSelectProps> = ({category, setCategory}) => {

  const selectCategory = (e:SelectChangeEvent<string>) => {
    setCategory(e.target.value)
  };

    return (
        <FormControl fullWidth sx={{width: '200px', justifyContent:'center'}}>
        <Select
        SelectDisplayProps={{ style: { padding: '5px', alignItems:'center', fontSize: '1rem'} }}
        value={category} onChange={selectCategory}
        >
          <MenuItem value={'all'}>all</MenuItem>
          <MenuItem value={'art'}>art</MenuItem>
          <MenuItem value={'biography'}>biography</MenuItem>
          <MenuItem value={'computers'}>computers</MenuItem>
          <MenuItem value={'history'}>history</MenuItem>
          <MenuItem value={'medical'}>medical</MenuItem>
          <MenuItem value={'poetry'}>poetry</MenuItem>
        </Select>
      </FormControl>
    )
}