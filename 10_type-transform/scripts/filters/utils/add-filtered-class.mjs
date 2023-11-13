export function addFilteredClass(control, controlValueLength) {
  if (control.value.trim().length >= controlValueLength) {
    control.classList.add('filtered');
    return true;
  } else {
    control.classList.remove('filtered');
    return false;
  }
}
