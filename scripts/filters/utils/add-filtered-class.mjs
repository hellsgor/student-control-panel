export function addFilteredClass(control, flag) {
  if (flag) {
    control.classList.add('filtered');
  } else {
    control.classList.remove('filtered');
  }
}
