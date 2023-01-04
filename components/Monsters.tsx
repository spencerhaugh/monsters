import Link from 'next/link'
import { MonsterCard } from './MonsterCard';

const Monsters = ({ monsters }) => {
    return (
        <>
            <div className="monster-list-container">
                { monsters.data.map((monster) => {
                    return (
                        <Link 
                            href={`monsters/${monster.id}`} 
                            key={ monster.id } 
                            >
                                <MonsterCard monster={ monster } />
                            </Link>
                        );
                    })
                }
            </div>
        </>
    )
}

export default Monsters;