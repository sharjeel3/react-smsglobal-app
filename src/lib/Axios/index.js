import axios from 'axios';
import { getApiData } from '../../redux/actions/app';
import Crypto from 'crypto-js';

export const Axios = (() => {
  const host = 'api.smsglobal.com';

  const getAuthorizationHeader = uri => {
    const { apiKey, apiSecret } = getApiData();

    const ts = new Date().getTime();
    const nonce = Math.floor(Math.random() * 10000000);

    const macString = `${ts}\n
     ${nonce}\n
     POST\n
     ${uri}\n
     api.smsglobal.com\n
     80\n
     \n `;

    const macHash = Crypto.HmacSHA256(macString, apiSecret);

    const authorizationHeader = `MAC id="${apiKey}", ts="${ts}", nonce="${nonce}", mac="${macHash.toString(
      Crypto.enc.Base64
    )}"`;

    return authorizationHeader;
  };

  const fetchApi = props => {
    const { method = 'get', uri, data = {}, headers = {} } = props;

    const authorizationHeader = getAuthorizationHeader(uri);

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
