import { Box, AppBar, Toolbar, Button } from '@mui/material';
import { useDarkMode } from 'next-dark-mode';
import DarkModeToggle from 'react-dark-mode-toggle';

import Link from 'next/link';
import Image from 'next/image';
import { useFetchUser } from '../../lib/authContext';
import { unsetToken } from '../../lib/auth';
import { useState } from 'react';
import MobileLinks from './MobileLinks';
import BrowserLinks from './BrowserLinks';

const Nav = () => {
    const { user, loading } = useFetchUser();
    const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

    const pages = [{ title: 'Pokemon List', href: '/monsters'}, { title: 'About Alex!', href: '/about' }];

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
                                src={'/amm_logo_250x.png'} 
                                alt="AMM Logo" 
                                width={200} 
                                height={45} 
                                priority
                            />
                        </Link>
                    </Box>
                    <Box 
                        className='logo-desktop-layout' 
                        sx={{ flexGrow: 2, padding: '1rem', display: { xs: 'none', md: 'flex' } }}
                    >
                        <Link href={'/'}>
                            <Image 
                                src={'/amm_logo_250x.png'} 
                                alt="AMM Logo" 
                                width={250} 
                                height={53} 
                                priority 
                            />
                        </Link>
                    </Box>
                    <Box sx={{ padding: '1rem' }}>
                        <BrowserLinks pages={ pages } />
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        {
                            !user ?
                            <Link className='nav-admin-button' href={'/admin'}>
                                <Button 
                                    color="inherit" 
                                    variant='outlined' 
                                    sx={{ marginLeft: '1rem' }}
                                >
                                    Admin
                                </Button>
                            </Link>
                            : 
                            <Button 
                                color="inherit" 
                                variant='outlined' 
                                sx={{ marginLeft: '1rem' }} 
                                onClick={() => unsetToken()}
                            >
                                Logout
                            </Button>
                        }
                        <DarkModeToggle
                            className='dark-mode-toggle'
                            size={50}
                            speed={2}
                            checked={ darkModeActive }
                            onChange={(isDarkMode) =>
                                isDarkMode ? switchToDarkMode() : switchToLightMode()
                            }
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Nav;