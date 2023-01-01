import Layout from '../components/Layout';
import Image from 'next/image';
import { Paper } from '@mui/material';
import { useFetchUser } from '../lib/authContext';


export default function About() {
    const { user } = useFetchUser();
    return (
        <Layout user={ user }>
            <Paper elevation={5} sx={{ margin: '1rem auto', padding: '1rem', width: 'fit-content' }}>
                <h1>About Alex</h1>
            </Paper>
            <Paper elevation={5} sx={{ margin: '1rem auto', width: 'min-content' }}>
                <Image src={'/../public/aleximg.jpg'} alt={'Self portrait'} width={300} height={300} />
            </Paper>
        </Layout>
    )
}
