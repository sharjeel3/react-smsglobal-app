import { sendMessageApi, getMessageApi } from './Message';

export const Api = (() => {
  const sendMessage = sendMessageApi;
  const getMessage = getMessageApi;

  return { sendMessage, getMessage };
})();
