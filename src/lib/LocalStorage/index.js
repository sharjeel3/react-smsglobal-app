export const LocalStorage = (() => {
  const localStorage = window.localStorage;

  const save = (key, value) => {
    // returns true on successful set
    localStorage.setItem(key, value);
    return get(key) === value;
  };

  const get = key => {
    return localStorage.getItem(key);
  };

  const remove = key => {
    localStorage.removeItem(key);
  };

  return { save, get, remove };
})();
