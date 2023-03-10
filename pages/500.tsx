import { Typography } from '@mui/material';

export default function FiveHundred() {
  return (
    <main className='error-message'>
      <Typography variant='h3'>
        Oh no!
      </Typography>
      <Typography variant='h3' sx={{ padding: '2rem 0' }}>
        A 500 - Internal server error!
      </Typography>

      <img src="/missingImage.jpg" alt="Not found error" />
    </main>
  );
}