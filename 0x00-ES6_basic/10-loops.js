export default function appendToEachArrayValue(array, appendString) {
  const value=0;
  for (const idx of array) {
    array[value]= appendString + idx ;
  }

  return array;
}
