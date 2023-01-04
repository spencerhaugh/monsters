import { useState } from 'react';
import Layout from '../components/Layout';
import fetcher from '../lib/api';
import useSwr from 'swr';
import Monsters from '../components/Monsters';
import { Paper, Typography } from '@mui/material';
import Pagination from '../components/Pagination';
import { useFetchUser } from '../lib/authContext';


const MonstersList = ({ monsters }) => {
    const { user } = useFetchUser();
    
    const [pageIndex, setPageIndex] = useState(1);

    const { data } = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?sort=id&pagination[page]=${pageIndex}&pagination[pageSize]=50`, fetcher, { fallbackData: monsters });
    const pageTotal = data && data.meta.pagination.pageCount;

    return (
        <Layout user={ user }>
            <Paper>
                <Typography variant='h2' sx={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                    Pocket Monsters From Memory
                </Typography>
                <div className="monster-nav-list">
                    <Monsters monsters={ data } />
                    <Pagination pageIndex={ pageIndex } setPageIndex={ setPageIndex } pageTotal={ pageTotal } />
                </div>
            </Paper>
        </Layout>
    )
}

export default MonstersList;

export async function getStaticProps() {
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?sort=id&pagination[page]=1&pagination[pageSize]=50`);
    return {
        props: {
            monsters: monstersResponse,
        }
    }
}