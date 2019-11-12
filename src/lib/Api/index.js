import { sendMessageApi } from './Message';

export const Api = (() => {
  const sendMessage = sendMessageApi;

  return { sendMessage };
})();
