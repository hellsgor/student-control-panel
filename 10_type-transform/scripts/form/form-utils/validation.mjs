import {showErrorText} from "./show-error-text.mjs";

export function formValidation(form) {
  const inputs = form.querySelectorAll('input');

  let validationFlag = true;

  form.classList.add('was-validated');
  inputs.forEach((input) => {

    if (!input.value.trim()) {
      const inputParent = input.closest('.input-group');
      showErrorText(input, inputParent);

      validationFlag = false;
    }
  })

  return validationFlag;
}
