import MonsterDetail from '../../components/MonsterDetail';
import fetcher from '../../lib/api';


const Monster = ({ monster, monsterDetails }) => {
  return (
        <MonsterDetail monster={ monster } monsterDetails={ monsterDetails } />
  )
};

export async function getServerSideProps({ params }) {
    const { monster } = params;
    const monstersStrapiResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/monsters/${monster}`);

    const pokemonApiResponse = await fetcher(`https://pokeapi.co/api/v2/pokemon/${monster}`);

    return {
        props: {
            monster: monstersStrapiResponse.data,
            monsterDetails: pokemonApiResponse
        }
    }
};

export default Monster;
