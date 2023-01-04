import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import fetcher from '../lib/api';
import useSwr from 'swr';


export const MonsterCard = ({ monster }) => {

    const { data, error } = useSwr(`https://pokeapi.co/api/v2/pokemon/${monster.attributes.name}`, fetcher);

    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const currentMonster = data;
    
    return (
        <Card sx={{ width: 120, height: 150, margin: '.5rem'}}  elevation={5}>
            <CardActionArea sx={{ marginTop: '1rem' }}>
                <CardMedia
                    className={ monster.attributes.imageUrl ?? 'hidden-image' }
                    component="img"
                    image={ monster.attributes.imageUrl || currentMonster.sprites.other.dream_world.front_default }
                    height={80}
                    alt={monster.attributes.name}
                    sx={{ width: 'min-content', margin: '0 auto' }}
                />
                <CardContent>
                    <Typography variant="body1" component="div" sx={{ textTransform: 'capitalize', textAlign: 'center' }}>
                        { monster.attributes.name }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}