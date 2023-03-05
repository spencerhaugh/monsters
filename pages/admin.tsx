import { Box, Button, Input } from '@mui/material';
import { useState } from 'react';
import fetcher from '../lib/api';
import { setToken } from '../lib/auth';

function Admin() {

    const [data, setData] = useState({
        identifier: '',
        password: '',
    });

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const responseData = await fetcher(
                `${process.env.NEXT_PUBLIC_STRAPI_URL}/auth/local`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        identifier: data.identifier,
                        password: data.password,
                    }),
                }
            );
            setToken(responseData);
        } catch (error) {
            console.error(error);
        }
    };

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

export default Admin;