const stateToBackground = {
  0: "black",
  1: "url(https://img.icons8.com/?size=2x&id=9Dv8Wi1vh0yp&format=png)",
  2: "url(https://img.icons8.com/?size=2x&id=ovjvLoLpBykl&format=png)",
};
const stateToIsDisabled = {
  0: true,
  1: false,
  2: true,
};
export const getBackgroundFromState = (stateId) =>
  stateToBackground[stateId || 0];
export const getIsDisbled = (stateId) => stateToIsDisabled[stateId || 0];
