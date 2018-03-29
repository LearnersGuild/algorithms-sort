function mergeSort(items) {

  // base case: length of 0 or 1
  // an array of length 0 or 1 is always sorted
  if (items.length <= 1) {
    console.log('returning base case', items)
    return items
  }

  // recursive case: split, sort, merge

  // split array in half
  const middleIndex = Math.floor(items.length / 2)
  const arr1 = items.slice(0, middleIndex)
  const arr2 = items.slice(middleIndex)

  // run merge sort on each half
  const sort1 = mergeSort(arr1)
  const sort2 = mergeSort(arr2)

  // merge sorted arrays
  console.log(`merging [${sort1}] and [${sort2}]`)
  let result = []

  // while either array still has items
  while(sort1.length > 0 || sort2.length > 0) {

    // if one array is empty, just glom the 
    // other array onto the end of result
    if (sort1.length === 0) {
      result = result.concat(sort2)
      break
    } 
    if (sort2.length === 0) {
      result = result.concat(sort1)
      break      
    }

    // look at first item in each array
    // add lower one to new array
    if (sort1[0] < sort2[0]) {
      result.push(sort1.shift())
    } else {
      result.push(sort2.shift())
    }
  }

  console.log('returning', result)
  return result
}

const nums = [1, -3, 6, 12, 5999, -12321.235]
console.log(mergeSort(nums))
