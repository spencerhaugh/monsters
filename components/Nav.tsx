import { Box, AppBar, Toolbar, IconButton, Typography, Button, Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import Image from 'next/image';

const Nav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
            <div style={{ flexGrow: 2, padding: '1rem' }}>
                <Link href={'/'}>
                    <Image src={'/../public/amm_logo_250x.png'} alt="AMM Logo" width={250} height={53} />
                </Link>
            </div>
            <Link href={'/about'}>
                About Alex!
            </Link>
            <Button color="inherit" variant='outlined' sx={{ ml: 2 }}>Login</Button>
            </Toolbar>
        </AppBar>
        </Box>
    )
}

export default Nav;