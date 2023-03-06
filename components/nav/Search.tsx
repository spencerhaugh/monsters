import { Stack, Autocomplete, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';

const Search = ({ monsters, handleSelectBySearch }) => {

    const [searchValue, setSearchValue] = useState<any>('');
    const [searchInputValue, setSearchInputValue] = useState<any>('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedMonster = monsters.data.filter((m) => m.attributes.name === searchValue)
        if (!selectedMonster[0]?.id) return;

        handleSelectBySearch(selectedMonster[0].id);
    }

    return (
        <form className='search-container' onSubmit={ handleSubmit }>
            <Stack spacing={2} sx={{ width: 400 }}>
                <Autocomplete
                    id="nav-search"
                    className='search-field'
                    disableClearable
                    options={ monsters.data.map((monster) => monster.attributes.name) }
                    inputValue={ searchInputValue }
                    onChange={ (event, newValue) => {setSearchValue(newValue)} }
                    onInputChange={ (event, newInputValue) => {setSearchInputValue(newInputValue)} }
                    renderInput={(params) => (
                        <TextField
                            {...params}
                            label="Search pokemon"
                            InputProps={{
                                ...params.InputProps,
                                type: 'search',
                            }}
                        />
                    )}
                />
            </Stack>
                <Button className='search-button' variant='contained' type='submit'>
                    { searchValue ? `Go to ${searchValue}` : 'Find a pokemon' }
                    <SearchIcon sx={{ ml: 1 }} />
                </Button>
        </form>
        )
}

export default Search;