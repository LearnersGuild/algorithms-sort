function bubbleSort(items) {

  // iterate over array indexes
    // compare pairs of items and swap if necessary

  // i: how many times we've passed through the array
  for (let i=0; i < items.length; i++) {
    let didSwap = false
    // j: lower index of pair we're potentially swapping
    for(let j=0; j < items.length - i - 1; j++) {
      let item1 = items[j]
      let item2 = items[j + 1]
      if (item1 > item2) {
        didSwap = true
        items[j] = item2
        items[j + 1] = item1
      }
    }
    if (!didSwap) break // or return
  }
}

const nums = [1, -3, 6, 12, 5999, -12321.235]
bubbleSort(nums)
console.log(nums)