export function catchError(entity, errorCode) {
  console.error(errorCode);
  console.error(entity);
  return 'не найдено';
}
