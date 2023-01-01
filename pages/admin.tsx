import { useState } from 'react';
import Layout from '../components/Layout';
import fetcher from '../lib/api';
import { setToken } from '../lib/auth';
import { useUser } from '../lib/authContext';

function Admin() {

    const [data, setData] = useState({
        identifier: '',
        password: '',
    });

    const { user, loading } = useUser();

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

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
        console.log(responseData)
        setToken(responseData);
    };

  return (
    <Layout user={ user }>
        <form onSubmit={ handleSubmit } className="form-inline">
            <input
            type="text"
            name="identifier"
            onChange={ handleChange }
            placeholder="Username"
            required
            />
            <input
                type="password"
                name="password"
                onChange={ handleChange }
                placeholder="Password"
                required
            />
            <button
                type="submit"
            >
                Login
            </button>
        </form>
    </Layout>

  )
}

export default Admin;