export default function appendToEachArrayValue(array, appendString) {
  let value=0;
  for (const idx of array) {
    array[value]= appendString + idx;
    value++;
  }

  return array;
}
