import {errors} from "../../constants/errors.mjs";

export function showErrorText(input, inputParent) {
  const inputName = inputParent.querySelector('.input-group-text').textContent;
  const errorString = document.createElement('p');
  errorString.innerText = errors.formsErrors.f001(inputName);
  inputParent.querySelector('.invalid-feedback').append(errorString);
}
