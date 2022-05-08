import fetch from 'node-fetch';
import apiEmail from '../framework/services/email.index';
import key from '../framework/config/email.param.index';
import invalidKey from '../framework/config/email.invalid.param.index';
import nullKey from '../framework/config/email.null.param.index';

describe('email tests', () => {

    test('valid email test', async () => {
        const params = new URLSearchParams();
        params.append('access_key', key);
        params.append('email', 'vika@gmail.com');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.format_valid).toEqual(true);
    });

    test('invalid email test', async () => {
        const params = new URLSearchParams();
        params.append('access_key', key);
        params.append('email', 'vikagmail.com');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.success).toEqual(false);
    });

    test('null email test', async () => {
        const params = new URLSearchParams();
        params.append('access_key', key);
        params.append('email', '');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.error.type).toEqual('no_email_address_spplied');
    });

    test('invalid access key', async () => {
        const params = new URLSearchParams();
        params.append('access_key', invalidKey);
        params.append('email', 'vika@gmail.com');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.error.type).toEqual('invalid_access_key');
    });
    test('returning of email', async () => {
        const params = new URLSearchParams();
        params.append('access_key', key);
        params.append('email', 'vika@gmail.com');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.email).toEqual('vika@gmail.com');
    });

    test('null access key', async () => {
        const params = new URLSearchParams();
        params.append('access_key', nullKey);
        params.append('email', 'vika@gmail.com');
        const response = await apiEmail().Emails().get(params);
        const data = await response.json();
        expect(data.error.type).toEqual('missing_access_key');
    });
});