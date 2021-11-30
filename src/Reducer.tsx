import { sendModel } from "./model";
import Utils from "./utils";

export const sendgiftcarddata = (
  state: sendModel = new sendModel(),
  action: any
) => {
  switch (action.type) {
    case Utils.ActionName.SENDGIFTCARDDATA:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
