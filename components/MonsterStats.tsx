/* eslint-disable react/no-unescaped-entities */
import Avatar from '@mui/material/Avatar'
import { capitalized } from '@utils/utils';

function MonsterStats({ monsterDetails, monster }) {

    const monsterName: string = monster.attributes.name;

    return (
        <section className='monster-detail-info'>
            <div className='monster-detail-title' 
                style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center' }}
                >
                <Avatar src={ monsterDetails.sprites.front_default } sx={{ width: 70, height: 70 }} />
                <h3 style={{ margin: '1rem' }}>It's { capitalized(monsterName) }! </h3>
            </div>
            <ul className='monster-detail-stats'>
                <strong>
                    Vitals:
                </strong>
                <li>
                    Height: { monsterDetails.height / 10 } meter(s)
                </li>
                <li>
                    Weight: { monsterDetails.weight / 10 } kg
                </li>
            </ul>
            <ul className='monster-detail-types'>
                <strong>
                    Type:
                </strong>
                {
                    monsterDetails.types.map((t, index) => {
                        return (
                        <li key={index}>
                            { capitalized(t.type.name) }
                        </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}

export default MonsterStats