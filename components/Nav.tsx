import { Box, AppBar, Toolbar, Button } from '@mui/material';
import Link from 'next/link';
import Image from 'next/image';
import { useFetchUser } from '../lib/authContext';
import { unsetToken } from '../lib/auth';

const Nav = () => {
    const { user, loading } = useFetchUser()

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <div style={{ flexGrow: 2, padding: '1rem' }}>
                        <Link href={'/'}>
                            <Image src={'/../public/amm_logo_250x.png'} alt="AMM Logo" width={250} height={53} priority={true} />
                        </Link>
                    </div>
                    <Link href={'/monsters'}>
                        <Button className='nav-btn' variant='contained' color='info'>
                            Monsters
                        </Button>
                    </Link>
                    <Link href={'/about'}>
                        <Button className='nav-btn' variant='contained' color='info'>
                            About Alex!
                        </Button>
                    </Link>
                    {
                        !user ?
                        <Link href={'/admin'}>
                            <Button className='nav-btn' color="inherit" variant='outlined'>
                                Admin
                            </Button>
                        </Link>
                        : 
                        <Button className='nav-btn' color="inherit" variant='outlined' onClick={() => unsetToken()}>
                            Logout
                        </Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav;