import { CardActionArea, CardMedia, CardContent, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import Link from 'next/link'
import { MonsterCard } from './MonsterCard'

const Monsters = ({ monsters }) => {
    return (
        <>
        { monsters && 
                monsters.data.map((monster) => {
                    return (
                        <MonsterCard monster={ monster } key={ monster.id } />
                    )
                })
            }
        </>
    )
}

export default Monsters;