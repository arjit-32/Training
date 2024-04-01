/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function delay(ms) {
    return new Promise((resolve) => {
        const startTime = Date.now();
        while (Date.now() - startTime < ms) {
            // Busy wait
        }
        resolve();
    });
}

// Example usage
delay(2000).then(() => {
    console.log('Delayed for 2 seconds');
});

module.exports = delay;
