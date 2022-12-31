import Layout from '../components/Layout';
import { Link, Paper, Typography } from '@mui/material';

export default function Home() {
  return (
    <Layout>
        <Paper 
          elevation={24}
          sx={{ 
            padding: '3rem', 
            margin: 'auto', 
            marginTop: '2rem',
            width: 'min-content',
            background: 'rgba(25, 118, 210, .5)'
          }}
          >
          <Link href='/monsters'>
            <Typography variant='h2'>Drawing Pokemon From Memory Without Reference</Typography>
          </Link>
        </Paper>
    </Layout>
  )
}
