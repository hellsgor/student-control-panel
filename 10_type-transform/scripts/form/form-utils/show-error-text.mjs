export function showErrorText(control, controlParent, errorFunction) {
  const inputName = controlParent.querySelector('.input-group-text').textContent;
  const errorString = document.createElement('p');
  errorString.innerText = errorFunction(inputName);
  controlParent.querySelector('.invalid-feedback').append(errorString);
  control.classList.add('is-invalid');
}
