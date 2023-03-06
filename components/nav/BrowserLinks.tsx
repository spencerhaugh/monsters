import { Box, Button } from '@mui/material'
import Link from 'next/link'

const BrowserLinks = ({ pages }) => {
    return (
        <Box 
            className='nav-links-desktop' 
            sx={{ display: { xs: 'none', md: 'flex' } }}
        >
            {
                pages.map((page) => (
                    <Link href={`${page.href}`} key={ page.title }>
                        <Button variant='contained' color='info' sx={{ marginLeft: '1rem' }}>
                            { page.title }
                        </Button>
                    </Link>
                ))
            }
        </Box>
    )
}

export default BrowserLinks