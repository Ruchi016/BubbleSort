function bubbleSort(arr) {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap arr[j] and arr[j+1]
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }

    return arr;
}

// Example usage:
const arrayToSort = [64, 34, 25, 12, 22, 11, 90];
const sortedArray = bubbleSort(arrayToSort);
console.log("Sorted array:", sortedArray);
