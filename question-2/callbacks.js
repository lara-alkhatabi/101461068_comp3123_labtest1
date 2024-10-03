function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ message: 'delayed success!' });
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject(new Error('delayed exception!'));
        }, 500);
    });
}

resolvedPromise().then(res => console.log(res));  // Output: { message: 'delayed success!' }
rejectedPromise().catch(err => console.error(err));  // Output: Error: delayed exception!