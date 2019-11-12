export const getFieldState = field => store => {
  const { message = '', value = '' } = store.form[field] || {};
  return { message, value };
};
export const getFieldValue = field => store => (store.form[field] || {}).value;

export const getSentMessagesList = store => store.message.sentMessages.messages || [];

export const getIsLoading = content => store => store.loading[content] || false;
