import * as consts from '@Const/const';

export function validationButton(e) {
  if (e === 'true') {
    return consts.COLOR_UNSUCCESS_BUTTON;
  }
  if (e === 'false') {
    return consts.COLOR_SUCCESS_BUTTON;
  }
  return '';
}