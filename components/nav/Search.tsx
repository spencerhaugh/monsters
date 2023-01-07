import { Stack, Autocomplete, TextField, Button } from '@mui/material'
import { useState } from 'react'

const Search = ({ monsters, handleSelectBySearch }) => {

    const [searchValue, setSearchValue] = useState<any>('');
    const [searchInputValue, setSearchInputValue] = useState<any>('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const selectedMonster = monsters.data.filter((m) => m.attributes.name === searchValue)
        if (!selectedMonster) return;

        console.log('MONSTER??', selectedMonster[0].id);
        handleSelectBySearch(selectedMonster[0].id);
    }

    return (
        <form className='search-field' onSubmit={ handleSubmit }>
            <Stack spacing={2} sx={{ width: 300 }}>
                <Autocomplete
                    id="nav-search"
                    disableClearable
                    options={ monsters.data.map((monster) => monster.attributes.name) }
                    inputValue={ searchInputValue }
                    onChange={ (event, newValue) => {setSearchValue(newValue); console.log(newValue) } }
                    onInputChange={ (event, newInputValue) => {setSearchInputValue(newInputValue); console.log(newInputValue) } }
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
            <Button variant='contained' type='submit' >GO!</Button>
        </form>
        )
}

export default Search