import Airports from './airports.service';

const apiAir = () => ({
  Airports: () => ({ ...Airports}),
});

export default apiAir;