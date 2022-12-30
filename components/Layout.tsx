import Paper from '@mui/material/Paper';
import Head from 'next/head';
import Nav from './Nav';

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Alex Draws Pokemon</title>
                <meta name="description" content="Quickly drawn Pokemon from memory without reference" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Nav />
            <main className='px-4'>
                <Paper sx={{
                    width: '100vw',
                    height: '100vh',
                    margin: 'auto',
                }}>
                    { children }
                </Paper>
            </main>
        </>
    )
}

export default Layout;