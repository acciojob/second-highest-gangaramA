function secondHighest(arr) {
    // Edge case: Empty array or only one element in the array
    if (arr.length < 2) {
        return -Infinity;
    }

    // Convert array to a set to remove duplicate
    let uniqueElements = new Set(arr);

    // If there's less than 2 unique elements, return -Infinity
    if (uniqueElements.size < 2) {
        return -Infinity;
    }

    // Convert set to an array and sort in descending order
    let sortedArray = Array.from(uniqueElements).sort((a, b) => b - a);

    // Return the second element in the sorted array
    return sortedArray[1];
}