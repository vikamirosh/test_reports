import fetch from 'node-fetch';
import urls from '../config/email.urls';

const Emails = {
  get: async (params) => {  
    const response = await fetch(`${urls.email}/api/check?${params}`, { method: 'GET'});
    return response;
  },
};

export default Emails;