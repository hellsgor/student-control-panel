export function showErrorText(control, controlParent, errorFunction, secondControlParent = undefined) {
  const inputName = controlParent.querySelector('.input-group-text').textContent;
  const errorString = document.createElement('p');
  secondControlParent
    ? errorString.innerText = errorFunction(inputName, secondControlParent)
    : errorString.innerText = errorFunction(inputName);
  controlParent.querySelector('.invalid-feedback').append(errorString);
  control.classList.add('is-invalid');
}
