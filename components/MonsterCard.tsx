import { Card, CardActionArea, CardMedia, CardContent, Typography, Skeleton } from '@mui/material'
import fetcher from '@lib/api';
import useSwr from 'swr';


export const MonsterCard = ({ monster }) => {

    const { data, error } = useSwr(`https://pokeapi.co/api/v2/pokemon/${monster.attributes.name}`, fetcher);

    const showSkeleton = () => {
        return <Skeleton variant="rectangular" width={140} height={160} sx={{ margin: '.5rem' }} />
    }

    if (error) return <div>Failed to load</div>
    if (!data) return showSkeleton();

    const currentMonster = data;
    
    return (
        <Card sx={{ width: 120, height: 160, margin: '.5rem'}}  elevation={5}>
            <CardActionArea sx={{ padding: '.5rem', height: '100%' }}>
                <CardMedia
                    className={ monster.attributes.imageUrl ?? 'hidden-image' }
                    component="img"
                    image={ monster.attributes.imageUrl || currentMonster.sprites.other.dream_world.front_default }
                    height={100}
                    alt={monster.attributes.name}
                    sx={{ margin: '0 auto', objectFit: 'contain' }}
                />
                <CardContent sx={{ padding: '.5rem' }}>
                    <Typography variant="body1" component="div" sx={{ textTransform: 'capitalize', textAlign: 'center' }}>
                        { monster.attributes.name }
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}