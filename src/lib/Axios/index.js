import axios from 'axios';
import { getApiData } from '../../redux/actions/app';
import Crypto from 'crypto-js';

export const Axios = (() => {
  const host = 'api.smsglobal.com';

  const getAuthorizationHeader = (uri, method) => {
    const { apiKey, apiSecret } = getApiData();

    const ts = Math.floor(new Date().getTime() / 1000);
    const nonce = Math.floor(Math.random() * 1e16);

    const signature = [ts, nonce, method, uri, host, 80];
    const macString = `${signature.join(`\n`)}\n\n`;
    const macHash = Crypto.HmacSHA256(macString, apiSecret);
    const macBase64 = Crypto.enc.Base64.stringify(macHash);

    return `MAC id="${apiKey}", ts="${ts}", nonce="${nonce}", mac="${macBase64}"`;
  };

  const fetchApi = props => {
    const { method = 'GET', uri, data = {}, headers = {} } = props;

    const authorizationHeader = getAuthorizationHeader(uri, method);

    return axios({
      url: `http://${host}${uri}`,
      method,
      data,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: authorizationHeader,
        ...headers
      }
    })
      .then(response => [null, response])
      .catch(error => [error, null]);
  };

  return { fetch: fetchApi };
})();
