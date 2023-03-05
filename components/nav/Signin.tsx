import { Box, Input, Button } from '@mui/material';
import React from 'react'
import { useFetchUser } from '../../lib/authContext';

const Signin = ({ handleChange, handleSubmit }) => {
    const { user, loading } = useFetchUser();
    
    return (
        <Box sx={{ width: '300px', height: '300px', margin: '2rem auto' }}>
            <form onSubmit={ handleSubmit } className="form-inline">
                <Input
                    type="text"
                    name="identifier"
                    onChange={ handleChange }
                    placeholder="Username"
                    sx={{ width: '100%' }}
                    required
                />
                <Input
                    type="password"
                    name="password"
                    onChange={ handleChange }
                    placeholder="Password"
                    sx={{ width: '100%', marginTop: '.5rem' }}
                    required
                />
                <Button
                    variant='outlined'
                    type="submit"
                    sx={{ margin: '1rem auto' }}

                >
                    Login
                </Button>
            </form>
        </Box>
    )
}

export default Signin;
