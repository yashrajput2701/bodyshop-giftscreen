import ActionNames from "../../utils/actionNames";
import { OpenFormModel } from "../../model";

export const formOpenReducer = (
  state: OpenFormModel = new OpenFormModel(),
  action: any
) => {
  switch (action.type) {
    case ActionNames.SWITCH_TO_FORM:
      return { ...state, formOpen: action.payload };
    default:
      return state;
  }
};
