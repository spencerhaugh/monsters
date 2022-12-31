import { useState } from 'react';
import Layout from '../components/Layout';
import fetcher from '../lib/api';
import useSwr from 'swr';
import Monsters from '../components/Monsters';
import { Button, Typography } from '@mui/material';


const MonstersList = ({ monsters }) => {
    const [pageIndex, setPageIndex] = useState(1);

    const { data } = useSwr(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?pagination[page]=${pageIndex}&pagination[pageSize]=1`, fetcher, { fallbackData: monsters });
    const pageTotal = data && data.meta.pagination.pageCount;

    return (
        <Layout>
            <Typography variant='h2'>
                Pocket Monsters From Memory
            </Typography>
            
            <Monsters monsters={ data } />
            <div className='button-container'>
                <Button 
                    variant='outlined' 
                    color='info'
                    sx={{ mr: 2 }}
                    disabled={pageIndex === 1}
                    onClick={() => setPageIndex(pageIndex - 1)}
                >
                    Previous
                </Button>
                    <span>
                        {`${pageIndex} of ${pageTotal}`}
                    </span>
                <Button 
                    variant='outlined' 
                    color='info'
                    sx={{ ml: 2 }}
                    disabled={pageIndex === pageTotal}
                    onClick={() => setPageIndex(pageIndex + 1)}
                >
                    Next
                </Button>
            </div>
        </Layout>
    )
}

export default MonstersList;

export async function getStaticProps() {
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters?pagination[page]=1&pagination[pageSize]=1`);
    console.log(monstersResponse)
    return {
        props: {
            monsters: monstersResponse
        }
    }
}