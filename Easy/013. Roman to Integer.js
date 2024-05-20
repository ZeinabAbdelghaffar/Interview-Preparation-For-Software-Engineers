/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const obj = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }
    let result = 0;
    for (let i = 0; i < s.length; i++) {
        let current = obj[s[i]];
        let next = obj[s[i+1]]
        if (next > current) {
            result += next - current;
            i++;
        } else {
            result += current;
        }
    }
    return result;
};

//The time complexity of the solution is 𝑂(𝑛).
//The space complexity of the solution is 𝑂(1).