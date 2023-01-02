import fetcher from '../../lib/api';

module.exports = async (req, res) => {
    const { data } = await fetcher('https://pokeapi.co/api/v2/pokemon?limit=1&offset=3');
  
    console.log('SEED: ', data);
    res.send(200)
    // await strapi.query('test').create({
    //   url: data.url, 
    //   name: data.name,
    // });
  };