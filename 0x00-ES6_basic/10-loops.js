function appendToEachArrayValue(array, appendString) {
  let value=0;
  for (let idx of array) {
      array[value]=(appendString + idx);
      value++
  }

  return array;
}
