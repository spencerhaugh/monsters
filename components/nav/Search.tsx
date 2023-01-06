import { Stack, Autocomplete, TextField } from '@mui/material'
import { useState } from 'react'

const Search = ({ monsters, handleSelectBySearch }) => {

    const [inputValue, setInputValue] = useState('');

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Autocomplete
                id="nav-search"
                disableClearable
                options={monsters.data.map((monster) => monster.attributes.name)}
                inputValue={inputValue}
                onInputChange={(event, newInputValue) => {
                    setInputValue(newInputValue);
                }}
                onChange={ () => console.log('SELECTED: ', inputValue)}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Search monsters"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                        }}
                            
                        />
                        )}
                
            />
        </Stack>
        )
}

export default Search