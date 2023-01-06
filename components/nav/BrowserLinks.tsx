import { Box, Button } from '@mui/material'
import Link from 'next/link'
import pages from '../../pages'

const BrowserLinks = ({ pages }) => {
    return (
        <Box 
            className='nav-links-desktop' 
            sx={{ display: { xs: 'none', md: 'flex' } }}
        >
            {
                pages.map((page) => (
                    <Link href={`${page.href}`} key={ page.title }>
                        <Button className='nav-btn' variant='contained' color='info'>
                            { page.title }
                        </Button>
                    </Link>
                ))
            }
        </Box>
    )
}

export default BrowserLinks