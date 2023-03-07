import Paper from '@mui/material/Paper';
import Head from 'next/head';
import Nav from './nav/Nav';
import { UserProvider } from '../lib/authContext';

const Layout = ({ user, darkModeActive, loading = false, children }) => {
    return (
        <div className={`${darkModeActive && 'dark'} app`}>
            <UserProvider value={{ user, loading }}>
                <Head>
                    <title>Alex Draws Pokemon</title>
                    <meta name="description" content="Poorly drawn Pokemon from memory without reference" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <link rel="icon" href="/favicon.ico" />
                </Head>

                <Nav />
                <main className='px-4'>
                    <Paper sx={{
                        width: '100vw',
                        height: 'min-content',
                        margin: 'auto',
                        padding: '2rem'
                    }}>
                        { children }
                    </Paper>
                </main>
            </UserProvider>
        </div>
    )
}

export default Layout;