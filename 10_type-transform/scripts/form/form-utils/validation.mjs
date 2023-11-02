import {showErrorText} from "./show-error-text.mjs";

export function formValidation(form) {

  const controls = Array.from(form.querySelectorAll('input'))
    .concat(Array.from(form.querySelectorAll('select')));

  let validationFlag = true;

  form.classList.add('was-validated');
  controls.forEach((input) => {

    if (!input.value.trim()) {
      const inputParent = input.closest('.input-group');
      showErrorText(input, inputParent);

      validationFlag = false;
    }

  })

  return validationFlag;
}
