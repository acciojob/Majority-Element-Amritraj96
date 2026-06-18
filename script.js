/**
 * Finds the majority element in an array.
 * A majority element is one that appears more than floor(n/2) times.
 * * @param {number[]} arr - The input array.
 * @returns {number} The majority element.
 */
function majorElement(arr) {
    let count = 0;
    let candidate = null;

    for (let i = 0; i < arr.length; i++) {
        if (count === 0) {
            candidate = arr[i];
            count = 1;
        } else if (arr[i] === candidate) {
            count++;
        } else {
            count--;
        }
    }

    return candidate;
}

// Ensure the function is globally accessible to test suites
window.majorElement = majorElement;