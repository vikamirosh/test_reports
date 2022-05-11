import fetch from 'node-fetch';
import urls from '../config/urls';
import header from '../config/header';

const Airports = {
  get: async () => {
    const response = await fetch(urls.air + 'api/airports', { method: 'GET' });
    return response;
  },
  calc: async (params) => {
    const response = await fetch(`${urls.air}api/airports/distance?${params}`, { method: 'POST', headers: header });
    return response;
  },

};

export default Airports;