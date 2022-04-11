const doSomethingAsync = async () => {
    return new Promise((resolve, reject) => {
        (true) 
        ? setTimeout(() => resolve('do Something Async'), 3000)
        : reject(new Error('Test Error'));
    });
};

// doSomethingAsync()
const doSomething = async () => {
    const something = await doSomethingAsync(); // await espera a que se termine la promesa
    console.log(something);
}

console.log('Before');  
doSomething();
console.log('After');

//errores

const anotherFunction = async () => {
    try {
        const something = await doSomethingAsync();
        console.log(something);
    } catch (error) {
        console.error(error);
    }
}

console.log('Before 1');
anotherFunction();
console.log('After 1');