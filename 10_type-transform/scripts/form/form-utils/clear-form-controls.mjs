import {getAllFormControls} from "./get-all-form-controls.mjs";

export function clearFormControls(form) {
  const controls = getAllFormControls(form);

  controls.forEach((control) => {
    control.value = '';
    control.classList.remove('is-valid', 'is-invalid');
  })
}
