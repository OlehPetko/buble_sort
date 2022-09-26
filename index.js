const  arr = [7, 3, 2, 1, 9, -11, 33, -12, 100]
const arrLength = arr.length
console.log(arrLength)

console.log('--------------------------------')


function bubbleSort(arr) {
    for (let i = 0; i < arrLength - 1; i++) {
        for (let j = 0; j < arrLength - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                const saveItem = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = saveItem
            }
        }

    }
    return arr
}
console.log(bubbleSort([7, 3, 2, 1, 9, -11, 33, -12, 100]))



// console.log(bubbleSort([4, 3, 2, 1, 9, -11, 33, 2, 4]))