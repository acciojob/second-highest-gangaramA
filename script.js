//your JS code here. If required.
function secondHighest(arr) {
    if (arr.length < 2) {
        return -Infinity;
    }
    
    let uniqueElements = new Set(arr);
    
    if (uniqueElements.size < 2) {
        return -Infinity;
    }
    
    let maxElement = Math.max(...uniqueElements);
    uniqueElements.delete(maxElement);
    
    let secondMaxElement = Math.max(...uniqueElements);
    
    return secondMaxElement;
}
