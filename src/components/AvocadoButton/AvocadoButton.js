import { btnStyle } from "./styles";
import { getBackgroundFromState, getIsDisbled } from "./helper";

export const AvocadoButton = ({ state, onClickCallback, id }) => (
  <button
    onClick={() => onClickCallback(id)}
    disabled={getIsDisbled(state)}
    style={{
      ...btnStyle,
      background: getBackgroundFromState(state),
    }}
  />
);
