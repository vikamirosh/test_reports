import fetch from 'node-fetch';

const URL = 'https://airportgap.dev-tester.com/';

describe('Airports tests', () => {
    test('GET all airports api/airports 200', async () => {
      const path = 'api/airports';
      const response = await fetch(URL + path, { method: 'GET' });
      const data = await response.json();
      expect(response.status).toEqual(200);
    });
    test('Add airport to favorites api/favorites 201', async () => {
        const path = 'api/favorites';
        let header = {
            'Authorization': 'Token ysqVLK3vFzpHLbPMbNeQEnBx'
          };
        const params = new URLSearchParams();
        params.append('airport_id', 'HZK');
        const response = await fetch(URL + path, { method: 'POST', headers: header, body: params });
        const data = await response.json();
        expect(response.status).toEqual(201);
    });
    test('GET all favorites api/favorites 200', async () => {
        const path = 'api/favorites';
        let header = {
            'Authorization': 'Token ysqVLK3vFzpHLbPMbNeQEnBx'
          };
        const response = await fetch(URL + path, { method: 'GET', headers: header });
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('GET favorite by id api/favorites/id 200', async () => {
        const path = 'api/favorites/4238';
        let header = {
            'Authorization': 'Token ysqVLK3vFzpHLbPMbNeQEnBx'
          };
        const response = await fetch(URL + path, { method: 'GET', headers: header });
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
    test('Calculate distance api/airports/distance 200', async () => {
        const path = 'api/airports/distance';
        let header = {
            'Authorization': 'Token ysqVLK3vFzpHLbPMbNeQEnBx'
          };
        const params = new URLSearchParams();
        params.append('from', 'SIJ');
        params.append('to', 'GKA');
        const response = await fetch(URL + path, { method: 'POST', headers: header, body: params });
        const data = await response.json();
        expect(response.status).toEqual(200);
    });
});