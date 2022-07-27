const swap = (arr, i, j) => {
  const tmp = arr[i];
  // eslint-disable-next-line no-param-reassign
  arr[i] = arr[j];
  // eslint-disable-next-line no-param-reassign
  arr[j] = tmp;
};

const sortByDate = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++)
      if (new Date(array[i].date_debut) < new Date(array[j].date_debut)) {
        swap(array, i, j);
      }
  }
  return array;
};

console.error(sortByDate([3, 54, 2, 25, 30, 12]));
