import {getAllFormControls} from "./get-all-form-controls.mjs";

export function resetFormErrors(form, control = undefined) {
  if (form && !control) {
    getAllFormControls(form)
      .forEach((control) => {
        resetControlErrors(control);
      })
  }
  if (!form && control) {
    resetControlErrors(control);
  }
}

function resetControlErrors(control) {
  if (!control.value) {
    control
      .closest('.input-group')
      .querySelector('.invalid-feedback')
      .innerHTML = '';
    control.classList.remove('is-invalid');
  }

}
