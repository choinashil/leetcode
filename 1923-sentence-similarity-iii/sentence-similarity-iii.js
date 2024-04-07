/**
 * @param {string} sentence1
 * @param {string} sentence2
 * @return {boolean}
 */
var areSentencesSimilar = function(sentence1, sentence2) {
    if (sentence1 === sentence2) {
        return true;
    }

    const [array1, array2] = [sentence1.split(' '), sentence2.split(' ')].sort((a, b) => b.length - a.length);


    let array1Head = 0;
    let array1Tail = array1.length - 1;

    let array2Head = 0;
    let array2Tail = array2.length - 1;

    let result = true;

    while (array1Head <= array1Tail && array2Head <= array2Tail) {
        if (array1[array1Head] === array2[array2Head]) {
            array1Head++;
            array2Head++;
        } else if (array1[array1Tail] === array2[array2Tail]) {
            array1Tail--;
            array2Tail--;
        } else {
            result = false;
            break;
        }
    }

    return result;
};