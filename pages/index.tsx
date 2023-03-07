import { Link, Paper, Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
        <Paper 
          elevation={24}
          sx={{ 
            padding: '2rem',
            margin: 'auto',
            width: 'min-content',
            background: 'rgba(25, 118, 210, .5)'
          }}
        >
          <Typography 
            className='hero-text'
            variant='h2' 
            sx={{ textAlign: 'center' }}
          >
            Poorly Drawn Pokemon From Memory
          </Typography>
          <Link href='/monsters'>
            <img
              src={'/poorly_drawn_pokemon_sheet.jpg'}
              alt={'A collection of poorly drawn Pokemon'}
              className='hero-image'
            ></img>
          </Link>
        </Paper>
  )
}
