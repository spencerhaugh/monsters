import { Box, AppBar, Toolbar, Button } from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';
import { useFetchUser } from '../../lib/authContext';
import { unsetToken } from '../../lib/auth';
import { useState } from 'react';
import MobileLinks from './MobileLinks';
import BrowserLinks from './BrowserLinks';

const Nav = () => {
    const { user, loading } = useFetchUser();

    const pages = [{ title: 'Monsters', href: '/monsters'}, { title: 'About Alex!', href: '/about' }];

    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <MobileLinks 
                        handleOpenNavMenu={ handleOpenNavMenu }
                        handleCloseNavMenu={ handleCloseNavMenu }
                        anchorElNav={ anchorElNav }
                        pages={ pages }
                    />
                    <Box 
                        className='logo-mobile-layout' 
                        sx={{ flexGrow: 1, padding: '1rem', display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link href={'/'}>
                            <Image 
                                src={'/../public/amm_logo_250x.png'} 
                                alt="AMM Logo" 
                                width={250} 
                                height={53} 
                                priority={true} 
                            />
                        </Link>
                    </Box>
                    <Box 
                        className='logo-desktop-layout' 
                        sx={{ flexGrow: 2, padding: '1rem', display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link href={'/'}>
                            <Image 
                                src={'/../public/amm_logo_250x.png'} 
                                alt="AMM Logo" 
                                width={250} 
                                height={53} 
                                priority={true} 
                            />
                        </Link>
                    </Box>
                    <BrowserLinks pages={ pages } />
                    {
                        !user ?
                        <Link className='nav-admin-button' href={'/admin'}>
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