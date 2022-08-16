export const setNavOpen = (isOpen) => {
  return {
    type: "SET_NAV_OPEN",
    payload: isOpen,
  };
};

export const setChinese = (isChinese) => {
  return {
    type: "SET_CHINESE",
    payload: isChinese,
  };
};
