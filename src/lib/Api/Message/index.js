import { Axios } from '../../Axios';

export const getMessageApi = async payload => {
  const [error, response] = await Axios.fetch({
    uri: '/v2/sms/',
    data: payload
  });

  return [error, response];
};

export const sendMessageApi = async payload => {
  const [error, response] = await Axios.fetch({
    uri: '/v2/sms/',
    method: 'POST',
    data: payload
  });

  return [error, response];
};
