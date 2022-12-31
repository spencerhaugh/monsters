import Layout from '../../components/Layout';
import MonsterDetail from '../../components/MonsterDetail';
import fetcher from '../../lib/api';


const Monster = ({ monster }) => {
  return (
    <Layout>
        <MonsterDetail monster={ monster }/>
    </Layout>
  )
};

export async function getServerSideProps({ params }) {
    const { monster } = params;
    const monstersResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters/${monster}`);
    console.log(monstersResponse.data.attributes)
    return {
        props: {
            monster: monstersResponse.data
        }
    }
};

export default Monster;
