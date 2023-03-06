import fetcher from '../lib/api';
import useSwr from 'swr';
import Monsters from '../components/Monsters';
import { Paper, Typography } from '@mui/material';
import Pagination from '../components/Pagination';
import usePageIndexState from '../hooks/pageIndex';
import Search from '../components/nav/Search';
import Router from 'next/router';


const MonstersList = ({ monsters }) => {    
    const [pageIndex, handlePageIncrement, handlePageDecrement] = usePageIndexState();

    const monsterList = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?sort=id&pagination[page]=${pageIndex}&pagination[pageSize]=100`, fetcher, { fallbackData: monsters });
    const pageTotal = monsterList.data && monsterList.data.meta.pagination.pageCount;

    const searchListData = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters`, fetcher, { fallbackData: monsters })

    const handleSelectBySearch = (monsterId) => {
        if (!monsterId) return;
        Router.push(`/monsters/${monsterId}`);
    }

    return (
        <Paper>
            <Typography variant='h3' sx={{ 
                display: 'flex', 
                justifyContent: 'center', 
                fontWeight: 'bold', 
                textTransform: 'uppercase',
                textAlign: 'center',
                padding: '1rem'
            }}>
                Quickly Pokemon Drawn From Memory
            </Typography>
            <Search monsters={ searchListData.data } handleSelectBySearch={ handleSelectBySearch } />
            <div className="monster-nav-list">
                <Monsters monsters={ monsterList.data } />
                <Pagination 
                    pageIndex={ pageIndex } 
                    handlePageIncrement={ handlePageIncrement } 
                    handlePageDecrement={ handlePageDecrement } 
                    pageTotal={ pageTotal } 
                />
            </div>
        </Paper>
    )
}

export default MonstersList;

export async function getStaticProps() {
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?sort=id&pagination[page]=1&pagination[pageSize]=100`);
    return {
        props: {
            monsters: monstersResponse,
        }
    }
}