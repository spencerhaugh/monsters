import { Link, Paper, Typography } from '@mui/material';
import Image from 'next/image';

export default function Home() {
  return (
        <Paper 
          elevation={24}
          sx={{ 
            padding: '3rem', 
            margin: 'auto',
            width: 'min-content',
            background: 'rgba(25, 118, 210, .5)'
          }}
          >
          <Typography variant='h2' sx={{ textAlign: 'center' }}>Poorly Drawn Pokemon From Memory</Typography>
          <Link href='/monsters'>
            <Image
              src={'/poorly_drawn_pokemon_sheet.jpg'}
              alt={'A collection of poorly drawn Pokemon'}
              width={650}
              height={970}
              unoptimized
              priority
            ></Image>
          </Link>
        </Paper>
  )
}
