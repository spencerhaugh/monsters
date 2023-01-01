import { useRouter } from 'next/router'
import { Avatar, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';

const MonsterDetail = ({ monster, monsterDetails }) => {

    const router = useRouter();

    return (
        <Paper elevation={3} sx={{ margin: '2rem auto', padding: '2rem', width: 'fit-content', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{margin: '1rem'}}>Monster Details!</div>
            <Image 
                src={ monsterDetails.sprites.other.dream_world.front_default } 
                alt={ monster.attributes.name } 
                width={300} 
                height={300} 
                >
            </Image>
            <div style={{ 'display': 'flex', 'flexDirection': 'row' }}>
                <Avatar src={ monsterDetails.sprites.front_default } />
                <span style={{margin: '1rem'}}>Its { monster.attributes.name }! </span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: '100%' }}>
                <Button variant='outlined' onClick={() => router.back()}>Back</Button>
                <Button variant='outlined' color='warning'>Edit</Button>
            </div>
        </Paper>
    )
}

export default MonsterDetail;