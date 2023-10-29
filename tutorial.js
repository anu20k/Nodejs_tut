

const sum = (num1,num2) =>num1+num2;
const pi = 3.14;
const somemath =()=>{
    console.log("hello");
}
// module.exports.sum = sum;
// module.exports.pi = pi;
// module.exports.somemath = somemath;

module.exports= {sum : sum , pi:pi, somemath:somemath}