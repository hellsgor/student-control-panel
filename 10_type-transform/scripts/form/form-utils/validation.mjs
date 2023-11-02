import {showErrorText} from "./show-error-text.mjs";
import {getAllFormControls} from "./get-all-form-controls.mjs";

export function formValidation(form) {

  const controls = getAllFormControls(form);

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
