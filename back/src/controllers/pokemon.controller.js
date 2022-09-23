const axios = require("axios");
const utils = require("./../utils/index");
const api = axios.create({
  baseURL: "https://pokeapi.co/api/v2",
});

class pokemonController {
  constructor() {}

  static async index(req, res, next) {
    try {
      let { page = 1, per_page = 3 } = req.query;
      console.log(req.query, page, per_page);
      const { data } = await api.get(
        "/pokemon?limit=" + per_page + "&offset=" + (+page - 1) * +per_page
      );
      const sorted = data.results.sort((a, b) => utils.sortByText(a, b));

      console.log({
        url:
          "/pokemon?limit=" + per_page + "&offset=" + (+page - 1) * +per_page,
      });

      const result = await Promise.all(
        sorted.map(async (item) => {
          const { data } = await axios.get(item.url);
          return {
            ...item,
            img: data.sprites.front_default,
          };
        })
      );
      const nextUrl =
        "/pokemons" + "?limit=" + per_page + "offset=" + page
          ? +page * per_page
          : +per_page;
      return res.json({
        total_pages: Math.ceil(data.count / per_page),
        result: result,
        next: nextUrl,
        page: page || 1,
        per_page: per_page || 3,
      });
    } catch (error) {
      console.log({ error });
    }
  }
}

module.exports = pokemonController;
