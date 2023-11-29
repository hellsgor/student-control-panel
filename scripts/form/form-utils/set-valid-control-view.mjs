export function setValidControlView(control) {
  control.classList.remove('is-invalid');
  control.classList.add('is-valid');
  return true;
}
