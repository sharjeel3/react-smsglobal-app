export const getFieldState = field => store => store.form[field];
export const getFieldValue = field => store => (store.form[field] || {}).value;
