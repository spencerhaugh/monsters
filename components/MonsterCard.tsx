import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'


export const MonsterCard = ({ monster }) => {
    return (
        <Card>
            <CardActionArea>
                {/* <CardMedia
                    component="img"
                    height="140"
                    image={monster.attributes.image || 'defaultImg' }
                    alt={monster.attributes.name}
                /> */}
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    { monster.attributes.name }
                </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
