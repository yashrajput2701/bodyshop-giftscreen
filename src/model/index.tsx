class OpenFormModel {
  formOpen: Boolean = false;
}
// class ReducerModel {
//   formOpenReducer: OpenFormModel = new OpenFormModel();
// }
class sendModel{
  apidata:any={}
}
class ReducersModel{
  sendgiftReducer:sendModel=new sendModel()
}
export { OpenFormModel, ReducersModel, sendModel };
