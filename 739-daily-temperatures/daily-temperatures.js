/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const stack = [];
    const result = [];

    for (let i = 0; i < temperatures.length; i++) {
        if (i === temperatures.length - 1) {
            while (stack.at(-1)) {
                const lastItem = stack.pop();

                if (lastItem.temperature < temperatures[i + 1]) {
                    result[lastItem.index] = i + 1 - lastItem.index;
                } else {
                    result[lastItem.index] = 0;
                }
            }
            
            result.push(0);
        }

        if (temperatures[i] < temperatures[i + 1]) {
            result[i] = 1;

            while (stack.at(-1) !== undefined && stack.at(-1).temperature < temperatures[i + 1]) {
                const lastItem = stack.pop();
                result[lastItem.index] = i + 1 - lastItem.index;
            }
        } else {
            stack.push({ temperature: temperatures[i], index: i });
        }
    }

    return result;
};