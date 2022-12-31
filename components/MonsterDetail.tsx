import Paper from '@mui/material/Paper';

const MonsterDetail = ({ monster }) => {
  return (
    <Paper elevation={3} sx={{ margin: '2rem auto', padding: '2rem', width: 'fit-content' }}>
        <div>Monster Details!</div>
        <span>Its { monster.attributes.name }! </span>
    </Paper>
  )
}

export default MonsterDetail;