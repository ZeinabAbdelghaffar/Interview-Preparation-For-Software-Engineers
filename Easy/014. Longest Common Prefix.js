/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";    
    const pre = strs[0];
    for (let i = 0; i < pre.length; i++) {
        const char = pre[i];
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== char) {
                return pre.substring(0, i);
            }
        }
    }
    return pre; 
};

//The time complexity of the solution is 𝑂(𝑛*𝑛).
//The space complexity of the solution is 𝑂(1).