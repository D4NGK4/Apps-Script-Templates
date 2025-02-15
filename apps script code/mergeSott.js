function mergeSort2D(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort2D(arr.slice(0, mid));
  const right = mergeSort2D(arr.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  let result = [];
  let i = 0,
    j = 0;

  while (i < left.length && j < right.length) {
    if (left[i][1] > right[j][1]) {
      // Sorting by second element in descending order
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return result.concat(left.slice(i)).concat(right.slice(j));
}

function testMergeSort2D() {
  let data = [
    ["A", 10],
    ["B", 50],
    ["C", 30],
    ["D", 40],
    ["E", 20],
  ];

  let sortedData = mergeSort2D(data);
  console.log(sortedData);
}
