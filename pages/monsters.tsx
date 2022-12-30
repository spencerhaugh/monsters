import { useState } from 'react';
import Layout from '../components/Layout';
import fetcher from '../lib/api';
import useSwr from 'swr';
import Monsters from '../components/Monsters';
import { MonsterCard } from '../components/MonsterCard';
import { Typography } from '@mui/material';


const MonstersList = ({ monsters }) => {

    const [pageIndex, setPageIndex] = useState(1)
    const { data } = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters`, fetcher, { fallbackData: monsters });
    return (
        <Layout>
            <Typography variant='h2'>Pocket Monsters From Memory</Typography>
            <Monsters monsters={ data } />
        </Layout>
    )
}

export default MonstersList;

export async function getStaticProps() {
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters`);
    console.log(monstersResponse)
    return {
        props: {
            monsters: monstersResponse
        }
    }
}