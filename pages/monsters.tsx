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

    const { data } = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?pagination[page]=${pageIndex}&pagination[pageSize]=12`, fetcher, { fallbackData: monsters });
    const pageTotal = data && data.meta.pagination.pageCount;

    return (
        <Layout user={ user }>
            <Typography variant='h2'>
                Pocket Monsters From Memory
            </Typography>
            <Paper sx={{ padding: '1rem' }}>
                <Monsters monsters={ data } />
            </Paper>
            <Pagination pageIndex={ pageIndex } setPageIndex={ setPageIndex } pageTotal={ pageTotal } />
        </Layout>
    )
}

export default MonstersList;

export async function getStaticProps() {
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?pagination[page]=1&pagination[pageSize]=12`);
    return {
        props: {
            monsters: monstersResponse,
        }
    }
}