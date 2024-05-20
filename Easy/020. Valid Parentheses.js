/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const brack = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    for (const char of s) {
        if (!(char in brack)) {
            stack.push(char);
        } else if (stack.pop() !== brack[char]) {
            return false;
        }
    }  
    return stack.length === 0;
};

//The time complexity of the solution is 𝑂(𝑛).
//The space complexity of the solution is 𝑂(𝑛).