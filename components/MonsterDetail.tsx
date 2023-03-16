/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { useFetchUser } from '@lib/authContext';
import Paper from '@mui/material/Paper';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Button, Typography } from '@mui/material';
import EditMonster from './EditMonster';
import MonsterStats from './MonsterStats';
import { photoCloudRepo } from '@utils/utils';

const MonsterDetail = ({ monster, monsterDetails }) => {

    const { user } = useFetchUser();
    const [ showEditForm, setShowEditForm ] = useState(false);

    const startOfMonsterList: boolean = monster.id === 1;
    const endOfMonsterList: boolean = monster.id === 904;
    
    const handleEditButtonClick = () => {
        setShowEditForm(!showEditForm);
    }

    const decrementPage = () => {
        let pageNum: string;
        if (startOfMonsterList) {
            return '1';
        }
        pageNum = (monster.id - 1).toString();
        return pageNum;
    }

    const incrementPage = () => {
        let pageNum: string;
        if (endOfMonsterList) {
            return '904';
        }
        pageNum = (monster.id + 1).toString();
        return pageNum;
    }

    return (
        <Paper elevation={3} className='monster-detail-main'>
            <div className='monster-detail-art-container'>
                { monster.attributes.imageUrl && 
                    <Paper elevation={5} className='monster-detail-memory-container'>
                        <Typography variant='h6' sx={{ margin: '1rem' }}>
                            Poorly drawn from memory
                        </Typography>
                        <img 
                            className='memory-artwork'
                            src={ `${ photoCloudRepo }${ monster.attributes.imageId }.png` }
                            alt={ monster.attributes.name } 
                        />
                    </Paper>
                }
                <Paper elevation={5} className='monster-detail-original-container'>
                    <Typography variant='h6' sx={{ margin: '1rem' }}>
                        Official Artwork
                    </Typography>
                    <Image 
                        src={ 
                                monsterDetails.sprites.other.dream_world.front_default || 
                                monsterDetails.sprites.other.home.front_default ||
                                monsterDetails.sprites.front_default ||
                                '/missingImage.jpg'
                            } 
                        alt={ monster.attributes.name } 
                        width={300} 
                        height={300}
                        priority
                        >
                    </Image>
                </Paper>
            </div>

            <MonsterStats monster={ monster } monsterDetails={ monsterDetails } />

            <div className='edit-options-container'>
                { 
                    !startOfMonsterList && 
                    <Link href={decrementPage()}>
                        <Button 
                            variant='outlined' 
                            className='prevNextBtn'
                            startIcon={ <ChevronLeftIcon/> } 
                            disabled={ startOfMonsterList }
                            onClick={ () => setShowEditForm(false) }
                        >
                            Prev
                        </Button>
                    </Link>
                }
                <Link href={'/'}>
                    <Button variant='contained'>Full List</Button>
                </Link>
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
                { 
                    !endOfMonsterList && 
                    <Link href={incrementPage()}>
                        <Button 
                            variant='outlined' 
                            className='prevNextBtn'
                            endIcon={ <ChevronRightIcon/> } 
                            disabled={ endOfMonsterList }
                            onClick={ () => setShowEditForm(false) }
                        >
                            Next
                        </Button>
                    </Link>
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