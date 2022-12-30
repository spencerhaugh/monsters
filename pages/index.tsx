import Layout from '../components/Layout';
import Image from 'next/image';
import { Box, Typography } from '@mui/material';

export default function Home() {
  return (
    <Layout>
      <Box sx={{ 
        padding: '1rem', 
        margin: 'auto', 
        marginTop: '2rem',
        width: 'min-content',
        background: 'steelblue'
      }}>
        <Typography variant='h1'>HOME PAGE</Typography>
      </Box>
    </Layout>
  )
}
