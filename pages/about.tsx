import Layout from '../components/Layout';
import Image from 'next/image';
import { Paper } from '@mui/material';
import { useFetchUser } from '../lib/authContext';


export default function About() {
    const { user } = useFetchUser();
    return (
        <Layout user={ user }>
            <Paper elevation={5} sx={{ margin: '3rem auto', padding: '3rem', width: '80%', maxWidth: '900px' }}>
                <h1>About Alex</h1>
                <Paper elevation={5} sx={{ margin: '1rem auto', width: 'min-content' }}>
                    <Image src={'/../public/aleximg.jpg'} alt={'Self portrait'} width={300} height={300} />
                </Paper>
                <main className='bio-main'>
                    <h3 className='bio-headline'>Sometimes Alex asks her social media followers to give her Pokemon names as prompts...</h3> 
                    <section className='bio-body'>
                        <p>Then, as a drawing exercise, she attempts to recreate them as best she can from memory, without looking up any reference image. Usually adhering a time limit of 20 minutes or so.</p>
                        <p>Sometimes it turns out alright, sometimes not. This is a digital archive of these attempts.</p>
                    </section>
                </main>
            </Paper>
        </Layout>
    )
}
