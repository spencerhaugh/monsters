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
    let pokemonApiResponse;
    
    try {
        pokemonApiResponse = await fetcher(`https://pokeapi.co/api/v2/pokemon/${monster}`)
    } catch {
        return {
            notFound: true,
        }
    }

    if (!monstersStrapiResponse || !pokemonApiResponse) {
        return {
            notFound: true,
        }
    }

    return {
        props: {
            monster: monstersStrapiResponse.data,
            monsterDetails: pokemonApiResponse
        }
    }
};

export default Monster;
