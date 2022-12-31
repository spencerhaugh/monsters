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
                        <Link 
                            href={`monsters/${monster.id}`} 
                            key={ monster.id } 
                        >
                            <MonsterCard monster={ monster } />
                        </Link>
                    )
                })
            }
        </>
    )
}

export default Monsters;