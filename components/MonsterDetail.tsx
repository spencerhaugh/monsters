/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router'
import { Avatar, Button, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Image from 'next/image';
import { useFetchUser } from '../lib/authContext';
import { useState } from 'react';
import EditMonster from './EditMonster';
import { photoCloudRepo } from '../utils/utils';

const MonsterDetail = ({ monster, monsterDetails }) => {

    const router = useRouter();
    const { user } = useFetchUser();
    const [ showEditForm, setShowEditForm ] = useState(false);
    
    const handleEditButtonClick = () => {
        setShowEditForm(!showEditForm);
    }

    return (
        <Paper elevation={3} sx={{ margin: '2rem auto', padding: '2rem', width: 'fit-content', maxWidth: '100vw', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className='monster-detail-art-container'>
                { monster.attributes.imageUrl ? 
                    <Paper elevation={5} className='monster-detail-memory-container'>
                        <Typography variant='h6' sx={{ margin: '1rem' }}>
                            From memory
                        </Typography>
                            <Image 
                                src={ `${ photoCloudRepo }${ monster.attributes.imageId }.png` }
                                alt={ monster.attributes.name }
                                width={300} 
                                height={300} 
                            />
                    </Paper> : ''
                }
                <Paper elevation={5} className='monster-detail-original-container'>
                    <Typography variant='h6' sx={{ margin: '1rem' }}>
                        Official Artwork
                    </Typography>
                    <Image 
                        src={ monsterDetails.sprites.other.dream_world.front_default } 
                        alt={ monster.attributes.name } 
                        width={300} 
                        height={300}
                        priority
                        >
                    </Image>
                </Paper>
            </div>
            <section className='monster-detail-info'>
                <div className='monster-detail-title' 
                    style={{ 'display': 'flex', 'flexDirection': 'row', 'justifyContent': 'center', 'alignItems': 'center' }}
                    >
                    <Avatar src={ monsterDetails.sprites.front_default } sx={{ width: 70, height: 70 }} />
                    <h3 style={{ margin: '1rem' }}>It's { monster.attributes.name }! </h3>
                </div>
                <ul className='monster-detail-stats'>
                    <li>
                        Height: { monsterDetails.height / 10 } meter(s)
                    </li>
                    <li>
                        Weight: { monsterDetails.weight / 10 } kg
                    </li>
                </ul>
            </section>
            <div className='edit-options-container'>
                <Button variant='outlined' onClick={() => router.back()}>Back</Button>
                {
                    user &&
                    <Button 
                        variant='outlined' 
                        color={ showEditForm ? 'error' : 'warning' } 
                        onClick={ handleEditButtonClick }
                    >
                        { showEditForm ? 'Cancel' : 'Add Art' }
                    </Button> 
                }
            </div>
            {
                showEditForm &&
                    <EditMonster monsterId={ monster.id } />
            }
        </Paper>
    )
}

export default MonsterDetail;