export function getMaxID(array) {
  return array.map((item) => item.id).sort((a, b) => b - a)[0];
}
