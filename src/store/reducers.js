const defaultState = {
  navOpen: false,
  isChinese: false,
};

const Reducers = (state = defaultState, action = {}) => {
  switch (action.type) {
    case "SET_NAV_OPEN":
      return setNavOpen(state, action);
    case "SET_CHINESE":
      return setChinese(state, action);
    default:
      return { ...state };
  }
};

const setNavOpen = (state, action) => {
  return {
    ...state,
    navOpen: action.payload,
  };
};

const setChinese = (state, action) => {
  return {
    ...state,
    isChinese: action.payload,
  };
};

export default Reducers;