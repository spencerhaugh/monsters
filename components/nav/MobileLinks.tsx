import { Box, IconButton, Menu, MenuItem, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';

const MobileLinks = ({ anchorElNav, handleOpenNavMenu, handleCloseNavMenu, pages }) => {
    return (
        <>
            <Box
                className='nav-links-mobile'
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                    size="large"
                    aria-label="menu icon"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={ handleOpenNavMenu }
                    color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                            <Link href={`${page.href}`} key={ page.title }>
                                <Typography textAlign="center">{page.title}</Typography>
                            </Link>
                        </MenuItem>
                    ))}
                </Menu>
            </Box>
        </>
    )
}

export default MobileLinks