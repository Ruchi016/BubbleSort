def bubble_sort(arr):
    n = len(arr)

    for i in range(n):
        # Last i elements are already in place, no need to check them
        for j in range(0, n-i-1):
            if arr[j] > arr[j+1]:
                # Swap the elements if they are in the wrong order
                arr[j], arr[j+1] = arr[j+1], arr[j]

# Example usage
if __name__ == "__main__":
    # Sample unsorted list
    unsorted_list = [64, 34, 25, 12, 22, 11, 90]

    print("Unsorted List:", unsorted_list)

    # Sorting the list using bubble sort
    bubble_sort(unsorted_list)

    print("Sorted List:", unsorted_list)
