function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        const filteredArray = arr.filter(item => typeof item === 'string')
                                 .map(str => str.toLowerCase());
        resolve(filteredArray);
    });
}

const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray).then(result => {
    console.log(result);  // Output: ['pizza', 'wings']
});
