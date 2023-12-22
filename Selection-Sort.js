#include <iostream>
#include <vector>

void selectionSort(std::vector<int>& arr) {
    int n = arr.size();

    for (int i = 0; i < n - 1; i++) {
        int minIndex = i;
        for (int j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap arr[i] and arr[minIndex]
        std::swap(arr[i], arr[minIndex]);
    }
}

int main() {
    std::vector<int> arrayToSort = {64, 25, 12, 22, 11};
    
    selectionSort(arrayToSort);

    std::cout << "Sorted array: ";
    for (int i : arrayToSort) {
        std::cout << i << " ";
    }
    
    return 0;
}
