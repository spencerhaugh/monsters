import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import fetcher from '../lib/api';
import useSwr from 'swr';


export const MonsterCard = ({ monster }) => {

    const { data, error } = useSwr(`https://pokeapi.co/api/v2/pokemon/${monster.attributes.name}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const currentMonster = data;
    
    return (
        <Card sx={{ width: 300, height: 300, padding: '1rem', margin: '1rem'}}  elevation={5}>
            <CardActionArea>
                <CardMedia
                    className='hidden-image'
                    component="img"
                    image={ currentMonster.sprites.other.dream_world.front_default }
                    // image={ currentMonster.sprites.front_default }
                    height={200}
                    alt={monster.attributes.name}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div" sx={{ textTransform: 'capitalize' }}>
                    { monster.attributes.name }
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}