export function getAllFormControls(form) {
  return Array.from(form.querySelectorAll('input'))
    .concat(Array.from(form.querySelectorAll('select')));
}
