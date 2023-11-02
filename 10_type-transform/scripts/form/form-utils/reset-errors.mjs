import {getAllFormControls} from "./get-all-form-controls.mjs";

export function resetErrors(form) {
  getAllFormControls(form)
    .forEach((control) => {
      control
        .closest('.input-group')
        .querySelector('.invalid-feedback')
        .innerHTML = '';
    })
  form.classList.remove('was-validated');
}
