import { Box, Button, Input, Paper } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import Signin from '../components/nav/Signin';
import fetcher from '../lib/api';
import { setToken } from '../lib/auth';
import { useFetchUser } from '../lib/authContext';

function Admin() {
    
    const { user, loading } = useFetchUser();
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
            {
                !user ?
                    <Signin handleChange={ handleChange } handleSubmit={ handleSubmit } />
                :
                <Paper elevation={5} sx={{ padding: '3rem', width: '80%', maxWidth: '500px' }}>
                    <h3 className='success-heading'>
                        Success!
                    </h3>
                    <p className='success-message'>
                        You can now upload images to each individual monster page.
                    </p>
                    <p className='success-message'>
                        Have fun!
                    </p>

                    <Link href={'/monsters'}>
                        <Button variant='outlined'>
                            Go To Monsters
                        </Button>
                    </Link>
                </Paper>
            }
        </Box>
    )
}

export default Admin;