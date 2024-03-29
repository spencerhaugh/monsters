import Head from 'next/head';
import Nav from './nav/Nav';
import { UserProvider } from '@lib/authContext';

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
                <main className='app-main'>
                    { children }
                </main>
            </UserProvider>
        </div>
    )
}

export default Layout;