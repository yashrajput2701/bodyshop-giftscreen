import ActionNames from "../../utils/actionNames";

export function openFormAction(isOpen: boolean) {
  return (dispatch: Function) => {
    dispatch({ type: ActionNames.SWITCH_TO_FORM, payload: isOpen });
  };
}
