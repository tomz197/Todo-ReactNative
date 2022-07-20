const setFilter = (newFilter) => {
  return {
    type: 'SETFILTER',
    payload: newFilter
  };
};

export { setFilter };