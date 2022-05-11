import Favorites from "./favorites.service";

const apiFav = () => ({
  Favorites: () => ({ ...Favorites}),
});

export default apiFav;